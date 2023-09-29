import {
  DynamoDBClient,
  ExecuteStatementCommand,
  ExecuteStatementInput,
} from "@aws-sdk/client-dynamodb";

import { unmarshall } from "@aws-sdk/util-dynamodb";
import { Response } from "../models/parti_ql";

class DynamoHelper {
  private client: DynamoDBClient;

  // constructor
  constructor() {
    this.client = new DynamoDBClient({
      region: "us-east-1",
    });
  }

  public async executeQuery(input: ExecuteStatementInput): Promise<Response> {
    console.log(input.Statement);

    if (input.Parameters?.length == 0) {
      delete input.Parameters;
    } else {
      console.log(JSON.stringify(input.Parameters));
    }

    const command = new ExecuteStatementCommand(input);
    const results = await this.client.send(command);

    return {
      items:
        results.Items?.map((item) => {
          const unmarshalledItem = unmarshall(item);
          const keys = Object.keys(unmarshalledItem);

          for (const key of keys) {
            if (unmarshalledItem[key] instanceof Set) {
              unmarshalledItem[key] = this.setToArray(unmarshalledItem[key]);
            }
          }

          return unmarshalledItem;
        }) || [],
      nextToken: results.NextToken,
    };
  }

  private setToArray<T>(set: Set<T>): T[] {
    const arr: T[] = [];

    for (const item of set) {
      try {
        if (typeof item === "string") {
          arr.push(JSON.parse(item));
        }
      } catch (err) {
        arr.push(item);
      }
    }

    return arr;
  }
}

export default new DynamoHelper();
