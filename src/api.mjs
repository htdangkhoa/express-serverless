import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import serverless from 'serverless-http';

import health from './routes/health';
import user from './routes/user';

const app = express();

app.use([
  cors(),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
]);

/* For netlify functions */
app.use('/.netlify/functions/api', [
  health,
  user,
]);

/* For local */
app.use('/', [
  health,
  user,
]);

export const handler = serverless(app);

export default app;