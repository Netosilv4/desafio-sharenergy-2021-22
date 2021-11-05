import express from 'express';
import routes from './routes';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(routes);

app.listen(8080, () => {
  console.log('Example app listening on port 3000!');
});
