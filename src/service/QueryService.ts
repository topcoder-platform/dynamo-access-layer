import { Query, QueryResponse, Response } from "../models/parti_ql";

import dynamoHelper from "../helpers/DynamoHelper";
import queryHelper from "../helpers/QueryHelper";

class QueryService {
  public async query(query: Query): Promise<QueryResponse> {
    let sql: string | null = null;
    const queryKind = query.kind;
    switch (queryKind?.$case) {
      case "select":
        sql = queryHelper.getSelectQuery(queryKind.select);
        break;
      case "insert":
        sql = queryHelper.getInsertQuery(queryKind.insert);
        break;
      case "update":
        sql = queryHelper.getUpdateQuery(queryKind.update);
        break;
      case "delete":
        sql = queryHelper.getDeleteQuery(queryKind.delete);
    }

    if (!sql) {
      throw new Error("Invalid query");
    }

    try {
      const response: Response = await dynamoHelper.executeQuery(sql);
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
