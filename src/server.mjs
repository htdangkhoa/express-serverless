import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import serverless from 'serverless-http';

const app = express();

const router = express.Router();

router.get('/', async (req, res) => {
  return res.send('hello world');
});

app.use([
  cors(),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
]);

app.use('/.netlify/functions/server', router);  // path must route to lambda

export const handler = serverless(app);

export default app;