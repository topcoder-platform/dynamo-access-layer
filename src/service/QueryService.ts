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

    // TODO: Update "Response.items" to be `repeated PartiQL Value` and not google.protobuf.Struct
    const response: Response = await dynamoHelper.executeQuery(sql);
    console.log("\n", response, "\n");
    const queryResponse: QueryResponse = {
      kind: {
        $case: "response",
        response,
      },
    };

    return queryResponse;
  }
}

export default new QueryService();
