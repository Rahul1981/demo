#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { DemoStack } from '../lib/demo-stack';

const app = new cdk.App();
new DemoStack(app, 'DemoStack', {
  env: {
    account: '196715057542',
    region: 'us-east-1',
  }
});

app.synth();