import {
  DynamoDBClient,
  ExecuteStatementCommand,
} from "@aws-sdk/client-dynamodb";

import { unmarshall } from "@aws-sdk/util-dynamodb";
import { Response } from "../models/PartiQL";

class DynamoHelper {
  private client: DynamoDBClient;

  // constructor
  constructor() {
    this.client = new DynamoDBClient({
      region: "us-east-1",
    });
  }

  public async executeQuery(statement: string): Promise<Response> {
    console.log("Statement: ", statement);

    const command = new ExecuteStatementCommand({
      Statement: statement,
      // ConsistentRead: false, // TODO: Do consistent reads when not using Global Secondary Indexes
      ReturnConsumedCapacity: "TOTAL",
    });

    const results = await this.client.send(command);

    return {
      items: results.Items?.map((item) => unmarshall(item)) || [],
      nextToken: results.NextToken,
    };
  }
}

export default new DynamoHelper();
