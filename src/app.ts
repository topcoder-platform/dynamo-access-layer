import * as dotenv from "dotenv";

dotenv.config();

import * as path from "path";

import { Server, ServerCredentials } from "@grpc/grpc-js";
import { PartiQLQueryService } from "./models/parti_ql";
import { QueryServer } from "./server/QueryServer";
import { addReflection } from "grpc-server-reflection";

const { GRPC_SERVER_HOST = "", GRPC_SERVER_PORT = 9091 } = process.env;

const server = new Server({
  "grpc.max_send_message_length": -1,
  "grpc.max_receive_message_length": -1,
});

if (process.env.ENV === "local") {
  addReflection(server, path.join(__dirname, "../reflections/reflection.bin"));
}

server.addService(PartiQLQueryService, new QueryServer());

server.bindAsync(
  `${GRPC_SERVER_HOST}:${GRPC_SERVER_PORT}`,
  ServerCredentials.createInsecure(),
  (err: Error | null, bindPort: number) => {
    if (err) {
      throw err;
    }

    console.info(
      `gRPC:Server running at: ${GRPC_SERVER_HOST}:${bindPort}`,
      new Date().toLocaleString()
    );
    server.start();
  }
);
