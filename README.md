# Dynamo Access Layer

This is a simple gRPC service that implements the [NoSQL](https://github.com/topcoder-platform/plat-interface-definition/blob/main/data-access-layer/nosql/parti_ql.proto) interface to provide access to DynamoDB. It uses the [PartiQL query language](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ql-reference.html) to access the data.

# Local Setup

## Dependencies

1. NodeJS 18+
2. Yarn 1.22+
3. Typescript 5+
4. dynamo-access-layer
5. anticorruption-layer

## Required Environment Variables

The following environment variables are required. Placing a .env file in the root of the project will automatically load these variables.

```env
GRPC_SERVER_HOST="localhost"
GRPC_SERVER_PORT=50052

ENV=local
```

## Local Development

1. Install dependencies. `dynamo-access-layer` uses topcoder-framework which is published in AWS CodeArtifact. To ensure all dependencies are correctly downloaded log into aws codeartifact first

```bash
aws codeartifact login --tool npm --repository topcoder-framework --domain topcoder --domain-owner 409275337247 --region us-east-1 --namespace @topcoder-framework
yarn i
```

_Note: A valid AWS session is required for the above command to work. Ensure that you have the correct aws environment variables set_


2. Start the gRPC server

```bash
yarn start
```

## Deployment instructions

The primary branch of this repo is the `main` branch. Opening a pull request to the main branch will kick off building a docker image. Check [CircleCI](https://app.circleci.com/pipelines/github/topcoder-platform/domain-challenge/717/workflows/76185a2f-9a99-4006-9fb4-71568a30fe57/jobs/744), specifically the Publish docker iamge to get the image tag. Use the tag for deploying to dev environment - see the branch deploy/dev of [domain-challenge](https://github.com/topcoder-platform/domain-challenge), buildimage.sh.

After the PR is merged, follow the same steps.  For production deploys use `deploy/prod` branch
