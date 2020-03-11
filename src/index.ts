import express from 'express';

import { Graph } from "./Graph/Graph";
import { TmpSort } from "./sortings/TmpSort";

const app = express();
const port = 4004;

app.get('/', (req, res) => {

  new TmpSort();
  res.send('YAY! It actually works!');
});

app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`Server is listening on ${port}`);
});
