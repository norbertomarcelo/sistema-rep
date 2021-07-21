import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import { router } from './routes';
import './database';
import './database/container';
import { exceptionHandling } from './middlewares/exceptionHandling';

const app = express();

app.use(express.json());

app.use(router);

app.use(exceptionHandling);

app.listen(3333, () => {
  console.log('Server listen on port 3333!');
});
