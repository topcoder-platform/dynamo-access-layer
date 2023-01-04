import {
  SelectQuery,
  InsertQuery,
  UpdateQuery,
  DeleteQuery,
  Value,
  Filter,
  Operator,
  ReturnValue,
  UpdateOperation,
  UpdateAction,
  UpdateType,
} from "../models/parti_ql";

class QueryHelper {
  public getSelectQuery(query: SelectQuery): string {
    const { table, index, attributes, filters } = query;

    return `SELECT ${attributes.map((attr) => attr.name).join(",")} FROM ${
      index == null || index.trim().length == 0
        ? table
        : `"${table}"."${index}"`
    } ${
      filters != null && filters.length > 0
        ? `WHERE ${filters
            .map((filter) => this.toFilterExpression(filter))
            .join(" AND ")}`
        : ""
    }`;
  }

  public getInsertQuery(query: InsertQuery): string {
    const { table, attributes } = query;

    return `INSERT INTO ${table} value ${JSON.stringify(attributes).replaceAll(
      '"',
      "'"
    )}`;
  }

  public getUpdateQuery(query: UpdateQuery): string {
    const { table, updates, filters, returnValue } = query;

    if (!filters || filters.length === 0) {
      throw new Error("Filter is required.");
    }
    return `UPDATE ${table} ${updates
      .map((update) => this.toUpdateExpression(update))
      .join(" ")} WHERE ${filters
      .map((filter) => this.toFilterExpression(filter))
      .join(" AND ")}${this.toReturnExpression(returnValue)}`;
  }

  public getDeleteQuery(query: DeleteQuery): string {
    const { table, filters, returnValues } = query;
    return `DELETE FROM ${table} WHERE ${filters
      .map((filter) => this.toFilterExpression(filter))
      .join(" AND ")}${this.toReturnExpression(returnValues)}`;
  }

  private wrapQuotes(value: string): string {
    return `'${value}'`;
  }

  private toValue(value: Value): string {
    const valueKind = value.kind;

    switch (valueKind?.$case) {
      case "numberValue":
        return valueKind.numberValue.toString();
      case "numberSetValue":
        return valueKind.numberSetValue.values.join(",");
      case "stringValue":
        return this.wrapQuotes(valueKind.stringValue);
      case "stringSetValue":
        return valueKind.stringSetValue.values.map(this.wrapQuotes).join(",");
      case "boolean":
        return valueKind.boolean ? "true" : "false";
      case "listValue":
        return (
          "[" +
          valueKind.listValue
            .map((v) => (typeof v === "string" ? `'${v}'` : v))
            .join(",") +
          "]"
        );
      default:
        throw new Error("Invalid value");
    }
  }

  private toUpdateExpression(update: UpdateOperation): string {
    let expression = "";
    const { action, attribute, type, value } = update;

    if (action == UpdateAction.UPDATE_ACTION_UNSPECIFIED) {
      throw new Error("Invalid action");
    }

    if (action === UpdateAction.UPDATE_ACTION_SET) {
      expression += "SET ";

      if (type === UpdateType.UPDATE_TYPE_LIST_APPEND) {
        expression += `${attribute} = list_append(${attribute}, ${this.toValue(
          value
        )})`;
      }
      if (type === UpdateType.UPDATE_TYPE_SET_ADD) {
        expression += `${attribute} = set_add(${attribute}, ${this.toValue(
          value
        )})`;
      }
      if (type === UpdateType.UPDATE_TYPE_SET_DELETE) {
        expression += `${attribute} = set_delete(${attribute}, ${this.toValue(
          value
        )})`;
      }
      if (type === UpdateType.UPDATE_TYPE_VALUE) {
        expression += `${attribute} = ${this.toValue(value!)}`;
      }
    }

    if (action === UpdateAction.UPDATE_ACTION_REMOVE) {
      expression += "REMOVE ";
      expression = `${expression}${attribute}`;
    }

    return expression;
  }

  private toFilterExpression(filter: Filter): string {
    const { name, operator, value } = filter;

    switch (operator) {
      case Operator.OPERATOR_EQUAL:
        return `${name} = ${this.toValue(value!)}`;
      case Operator.OPERATOR_NOT_EQUAL:
        return `${name} <> ${this.toValue(value!)}`;
      case Operator.OPERATOR_GREATER_THAN:
        return `${name} > ${this.toValue(value!)}`;
      case Operator.OPERATOR_GREATER_THAN_OR_EQUAL:
        return `${name} >= ${this.toValue(value!)}`;
      case Operator.OPERATOR_LESS_THAN:
        return `${name} < ${this.toValue(value!)}`;
      case Operator.OPERATOR_LESS_THAN_OR_EQUAL:
        return `${name} <= ${this.toValue(value!)}`;
      case Operator.OPERATOR_IN:
        const valueType = value!.kind?.$case;
        if (
          valueType != "stringSetValue" &&
          valueType != "numberSetValue" &&
          valueType != "listValue"
        ) {
          throw new Error("Invalid value for IN operator");
        }
        return `${name} IN (${this.toValue(value!)})`;
      case Operator.OPERATOR_BETWEEN:
        throw new Error("Not implemented");
    }

    return "";
  }

  private toReturnExpression(returnValue?: ReturnValue): string {
    if (returnValue == null) return "";
    if (returnValue == ReturnValue.RETURN_VALUE_UNSPECIFIED)
      throw new Error("Invalid return value");

    return (
      " RETURNING " +
      ReturnValue[returnValue].replace("RETURN_VALUE_", "").replace("_", " ") +
      " *"
    );
  }
}

export default new QueryHelper();
