import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import serverless from 'serverless-http';

const app = express();



app.use([
  cors(),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
]);

app.get('/', async (req, res) => {
  return res.send('hello world');
});

export const handler = serverless(app);

export default app;