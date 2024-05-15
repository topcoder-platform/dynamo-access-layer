import { Query, QueryResponse, Response } from "../models/parti_ql";

import dynamoHelper from "../helpers/DynamoHelper";
import queryHelper from "../helpers/QueryHelper";
import { ExecuteStatementInput } from "@aws-sdk/client-dynamodb";

class QueryService {
  public async query(query: Query): Promise<QueryResponse> {
    console.log("Incoming query", query);
    let statementInput: ExecuteStatementInput | null = null;

    const queryKind = query.kind;
    switch (queryKind?.$case) {
      case "select":
        statementInput = queryHelper.getSelectQuery(queryKind.select);
        break;
      case "insert":
        statementInput = queryHelper.getInsertQuery(queryKind.insert);
        break;
      case "update":
        statementInput = queryHelper.getUpdateQuery(queryKind.update);
        break;
      case "delete":
        statementInput = queryHelper.getDeleteQuery(queryKind.delete);
    }

    if (statementInput == null) {
      const queryResponse: QueryResponse = {
        kind: {
          $case: "error",
          error: {
            message: "Invalid query",
          },
        },
      };

      return queryResponse;
    }

    try {
      const response: Response = await dynamoHelper.executeQuery(
        statementInput!
      );
      const queryResponse: QueryResponse = {
        kind: {
          $case: "response",
          response,
        },
      };

      return queryResponse;
    } catch (err: unknown) {
      let errorMessage = "Error executing query";
      if (err instanceof Error) {
        errorMessage = err.message;
      }
      console.error(`Error executing query: ${errorMessage}`);
      const queryResponse: QueryResponse = {
        kind: {
          $case: "error",
          error: {
            message: errorMessage,
          },
        },
      };

      return queryResponse;
    }
  }
}

export default new QueryService();
