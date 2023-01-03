import {
  sendUnaryData,
  ServerUnaryCall,
  UntypedHandleCall,
} from "@grpc/grpc-js";

import {
  PartiQLQueryService,
  PartiQLQueryServer,
  QueryRequest,
  QueryResponse,
} from "../models/parti_ql";

import queryService from "../service/QueryService";

class QueryServer implements PartiQLQueryServer {
  [name: string]: UntypedHandleCall;

  public async query(
    call: ServerUnaryCall<QueryRequest, QueryResponse>,
    callback: sendUnaryData<QueryResponse>
  ): Promise<void> {
    console.log("Incoming metadata: ", call.metadata.getMap());
    console.log("Incoming request: ", JSON.stringify(call.request));

    switch (call.request.kind?.$case) {
      case "query":
        const response = await queryService.query(call.request.kind.query);
        callback(null, response);
        break;
      case "queries":
        throw new Error("Not implemented");
    }
  }
}

export { QueryServer, PartiQLQueryService };
