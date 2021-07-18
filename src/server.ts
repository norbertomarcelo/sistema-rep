import express from 'express';

const app = express();

app.get('/', (request, response) => response.json({ message: 'Hello Word!' }));

app.listen(3333, () => {
  console.log('Server listen on port 3333!');
});