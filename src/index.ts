import express from 'express';
import { SelectionSort } from "./sortings/SelectionSort";
import { HeapSort } from "./sortings/HeapSort";
import { InsertionSort } from "./sortings/InsertionSort";
import { ShellSort } from "./sortings/ShellSort";

const app = express();
const port = 4002;

app.get('/', (req, res) => {
  new ShellSort();

  res.send('YAY! It actually works!');
});

app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`Server is listening on ${port}`);
});
