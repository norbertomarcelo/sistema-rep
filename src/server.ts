import 'reflect-metadata';
import express from 'express';
import { router } from './routes';
import './database';
import './database/container';

const app = express();

app.use(express.json());

app.use(router);

app.listen(3333, () => {
  console.log('Server listen on port 3333!');
});
