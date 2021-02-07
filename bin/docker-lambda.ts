#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { DockerLambdaStack } from '../lib/docker-lambda-stack';

const app = new cdk.App();
new DockerLambdaStack(app, 'DockerLambdaStack');
