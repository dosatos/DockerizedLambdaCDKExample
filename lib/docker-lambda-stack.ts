import * as path from "path";

import * as cdk from "@aws-cdk/core";
import * as Lambda from "@aws-cdk/aws-lambda";

export class DockerLambdaStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Configure path to Dockerfile
    const dockerfile = path.join(__dirname, "../lambda-app");

    // Create AWS Lambda function and push image to ECR
    new Lambda.DockerImageFunction(this, "dockerisedLambdaFunction", {
      code: Lambda.DockerImageCode.fromImageAsset(dockerfile),
    });
  }
}
