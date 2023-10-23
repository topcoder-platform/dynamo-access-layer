const path = require("path");
const rimraf = require("rimraf");

const { execSync } = require("child_process");

const PROTO_DIR = path.join(
  __dirname,
  "../node_modules/topcoder-proto-registry/data-access-layer/nosql"
);

const PROTO_REFLECTIONS = path.join(__dirname, "../reflections/reflection.bin");

const MODEL_DIR = path.join(__dirname, "../src/models");

const PROTOC_PATH = "protoc";
const PLUGIN_PATH = path.join(
  __dirname,
  "../node_modules/.bin/protoc-gen-ts_proto"
);

rimraf.sync(`${MODEL_DIR}/*`, {
  glob: { ignore: `${MODEL_DIR}/tsconfig.json` },
});

const protoConfig = [
  `--plugin=${PLUGIN_PATH}`,

  // https://github.com/stephenh/ts-proto/blob/main/README.markdown
  "--ts_proto_opt=outputServices=grpc-js,env=node,useOptionals=messages,exportCommonSymbols=false,esModuleInterop=true",
  `--ts_proto_opt=useDate=string`,
  `--ts_proto_opt=oneof=unions`,
  `--ts_proto_opt=addGrpcMetadata=true`,
  `--ts_proto_opt=outputClientImpl=false`,
  `--descriptor_set_out ${PROTO_REFLECTIONS}`,
  `--include_imports`,
  `--ts_proto_opt=Mgoogle/protobuf/struct.proto=@topcoder-framework/lib-common`,
  `--proto_path ${PROTO_DIR} ${PROTO_DIR}/*.proto`,
  `--ts_proto_out=${MODEL_DIR}`,
];

// https://github.com/stephenh/ts-prdeoto#usage
execSync(`${PROTOC_PATH} ${protoConfig.join(" ")}`);

console.log(`> Proto models created: ${MODEL_DIR}`);
