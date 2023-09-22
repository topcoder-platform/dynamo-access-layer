import {
  AttributeValue,
  ExecuteStatementInput,
} from "@aws-sdk/client-dynamodb";
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
  public getSelectQuery(query: SelectQuery): ExecuteStatementInput {
    const { table, index, attributes, filters } = query;

    const statement = `SELECT "${attributes.join('","')}" FROM ${
      index == null || index.trim().length == 0
        ? table
        : `"${table}"."${index}"`
    } ${
      filters != null && filters.length > 0
        ? `WHERE ${filters
            .map((filter) => this.toFilterClause(filter))
            .join(" AND ")}`
        : ""
    }`;

    const parameters = filters.map((filter) =>
      this.toDynamoDBAttribute(filter.value!)
    );

    return {
      Statement: statement,
      Parameters: parameters,
    };
  }

  public getInsertQuery(query: InsertQuery): ExecuteStatementInput {
    const { table, attributes } = query;

    const attributeNames: string[] = [];

    const parameters = attributes.map(({ attribute, value }) => {
      if (attribute != null && value != null) {
        attributeNames.push(attribute.name);
        return this.toDynamoDBAttribute(value);
      }
      throw new Error("Invalid attribute or value");
    });

    return {
      Statement: `INSERT INTO ${table} VALUE {${attributeNames
        .map((name) => `'${name}': ?`)
        .join(", ")}}`,
      Parameters: parameters,
    };
  }

  public getUpdateQuery(query: UpdateQuery): ExecuteStatementInput {
    const { table, updates, filters, returnValue } = query;

    if (!filters || filters.length === 0) {
      throw new Error("Filter is required.");
    }

    const statement = `UPDATE ${table} ${updates
      .map((update) => this.toUpdateExpression(update))
      .join(" ")} WHERE ${filters
      .map((filter) => this.toFilterClause(filter))
      .join(" AND ")}${this.toReturnExpression(returnValue)}`;

    return {
      Statement: statement,
      Parameters: [
        ...updates
          .filter((update) => update.type !== UpdateType.UPDATE_TYPE_SET_DELETE)
          .map((update) => this.toDynamoDBAttribute(update.value!)),
        ...filters.map((filter) => this.toDynamoDBAttribute(filter.value!)),
      ],
    };
  }

  public getDeleteQuery(query: DeleteQuery): ExecuteStatementInput {
    const { table, filters, index, returnValues } = query;

    const statement = `DELETE FROM ${
      index == null || index.trim().length == 0
        ? table
        : `"${table}"."${index}"`
    } ${
      filters != null && filters.length > 0
        ? `WHERE ${filters
            .map((filter) => this.toFilterClause(filter))
            .join(" AND ")}${this.toReturnExpression(returnValues)}`
        : ""
    }`;

    const parameters = filters.map((filter) =>
      this.toDynamoDBAttribute(filter.value!)
    );

    return {
      Statement: statement,
      Parameters: parameters,
    };
  }

  private toDynamoDBAttribute(value: Value): AttributeValue {
    if (value == null) {
      throw new Error("Invalid value");
    }
    const valueKind = value.kind;

    switch (valueKind?.$case) {
      case "numberValue":
        return { N: valueKind.numberValue.toString() };
      case "numberSetValue":
        return { NS: valueKind.numberSetValue.values.map((v) => v.toString()) };
      case "stringValue":
        return { S: valueKind.stringValue };
      case "stringSetValue":
        return { SS: valueKind.stringSetValue.values };
      case "mapValue":
        return {
          M: Object.fromEntries(
            Object.entries(valueKind.mapValue.values).map(([k, v]) => [
              k,
              this.toDynamoDBAttribute(v),
            ])
          ),
        };
      case "boolean":
        return { BOOL: valueKind.boolean };
      case "listValue":
        return {
          L: valueKind.listValue.values.map((v) => this.toDynamoDBAttribute(v)),
        };
      default:
        throw new Error("Invalid value");
    }
  }

  private toUpdateExpression(update: UpdateOperation): string {
    let expression = "";

    const { action, attribute, type, value } = update;

    if (attribute == null) {
      throw new Error("Invalid attribute");
    }

    if (action == UpdateAction.UPDATE_ACTION_UNSPECIFIED) {
      throw new Error("Invalid action");
    }

    const attributeName = attribute.name;

    if (action === UpdateAction.UPDATE_ACTION_SET) {
      expression += "SET ";

      if (type === UpdateType.UPDATE_TYPE_LIST_APPEND) {
        expression += `${attributeName} = list_append(${attributeName}, ?)`;
      }
      if (type === UpdateType.UPDATE_TYPE_SET_ADD) {
        expression += `${attributeName} = set_add(${attributeName}, ?)`;
      }
      if (type === UpdateType.UPDATE_TYPE_SET_DELETE) {
        expression += `${attributeName} = set_delete(${attributeName}, ?)`;
      }
      if (type === UpdateType.UPDATE_TYPE_VALUE) {
        expression += `${attributeName} = ?`;
      }
    }

    if (action === UpdateAction.UPDATE_ACTION_REMOVE) {
      expression += "REMOVE ";
      expression = `${expression}${attributeName}`;
    }

    return expression;
  }

  private toFilterClause(filter: Filter): string {
    const { name, operator, value } = filter;

    switch (operator) {
      case Operator.OPERATOR_EQUAL:
        return `${name}=?`;
      case Operator.OPERATOR_NOT_EQUAL:
        return `${name}<>?`;
      case Operator.OPERATOR_GREATER_THAN:
        return `${name}>?`;
      case Operator.OPERATOR_GREATER_THAN_OR_EQUAL:
        return `${name}>=?`;
      case Operator.OPERATOR_LESS_THAN:
        return `${name}<?`;
      case Operator.OPERATOR_LESS_THAN_OR_EQUAL:
        return `${name}<=?`;
      case Operator.OPERATOR_IN:
        const valueType = value!.kind?.$case;
        if (
          valueType != "stringSetValue" &&
          valueType != "numberSetValue" &&
          valueType != "listValue"
        ) {
          throw new Error("Invalid value for IN operator");
        }
        return `${name} IN (?)`;
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
