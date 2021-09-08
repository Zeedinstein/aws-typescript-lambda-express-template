
import { Handler } from 'aws-lambda';
import serverless from 'serverless-http';
import express from 'express';

const app = express()

app.get('/', (_, res) => {
  res.json({"success": "hello"})
})

app.get('/hello', (_, res) => {
  res.json({"success": "hello world"})
})

export const handler: Handler = serverless(app)

