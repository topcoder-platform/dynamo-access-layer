import {
  SelectQuery,
  InsertQuery,
  UpdateQuery,
  DeleteQuery,
  Filter,
  Operator,
  ReturnValues,
  Value,
} from "../models/PartiQL";

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
    // const { table, updates, filters, returnValues } = query;

    // if (!filters || filters.length === 0) {
    //   throw new Error("Filter is required.");
    // }
    // return `UPDATE ${table} ${updates
    //   .map((update: UpdateOperation) => {
    //     return ` ${this.getUpdateClause(
    //       update.action,
    //       update.type,
    //       update.attribute,
    //       update.value
    //     )}`;
    //   })
    //   .join(" ")} ${this.getFilterClause(filters)} ${this.getReturnClause(
    //   returnValues
    // )}`;

    throw new Error("Not implemented");
  }

  public getDeleteQuery(query: DeleteQuery): string {
    const { table, filters, returnValues } = query;
    return `DELETE FROM ${table} WHERE ${filters
      .map((filter) => this.toFilterExpression(filter))
      .join(" AND ")}${
      returnValues != null
        ? " RETURNING " + ReturnValues[returnValues].replace("_", " ") + " *"
        : ""
    }`;
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
        return valueKind.listValue.map((v) => this.toValue(v)).join(",");
      default:
        throw new Error("Invalid value");
    }
  }

  private toFilterExpression(filter: Filter): string {
    const { name, operator, value } = filter;

    switch (operator) {
      case Operator.EQUAL:
        return `${name} = ${this.toValue(value!)}`;
      case Operator.NOT_EQUAL:
        return `${name} <> ${this.toValue(value!)}`;
      case Operator.GREATER_THAN:
        return `${name} > ${this.toValue(value!)}`;
      case Operator.GREATER_THAN_OR_EQUAL:
        return `${name} >= ${this.toValue(value!)}`;
      case Operator.LESS_THAN:
        return `${name} < ${this.toValue(value!)}`;
      case Operator.LESS_THAN_OR_EQUAL:
        return `${name} <= ${this.toValue(value!)}`;
      case Operator.IN:
        const valueType = value!.kind?.$case;
        if (
          valueType != "stringSetValue" &&
          valueType != "numberSetValue" &&
          valueType != "listValue"
        ) {
          throw new Error("Invalid value for IN operator");
        }
        return `${name} IN (${this.toValue(value!)})`;
      case Operator.BETWEEN:
        throw new Error("Not implemented");
    }

    return "";
  }
}

export default new QueryHelper();
