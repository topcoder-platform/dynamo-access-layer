# Dynamo Access Layer

This is a simple gRPC service that implements the [NoSQL](https://github.com/topcoder-platform/plat-interface-definition/blob/main/data-access-layer/nosql/parti_ql.proto) interface to provide access to DynamoDB. It uses the [PartiQL query language](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ql-reference.html) to access the data.

# Roadmap

- Add support for transactions
- Add support for batch operations
- Add authentication
- Add a cache layer

# Note

This is in the early stages of development and while it is functional and the interfaces are fully defined, it is not yet ready for production use.

# TODO

Add deployment information and documentation 