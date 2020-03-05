import express from 'express';
import { SelectionSort } from "./sortings/SelectionSort";
import { HeapSort } from "./sortings/HeapSort";
import { InsertionSort } from "./sortings/InsertionSort";
import { ShellSort } from "./sortings/ShellSort";
import { HeapSort2 } from "./sortings/HeapSort2";
import { StacksInArray } from "./LinkedList/StacksInArray";
import { AVLTree } from "./AVLTree/AVLTree";

const app = express();
const port = 4003;

app.get('/', (req, res) => {

  let avl = new AVLTree();
  avl.generate()
  avl.print();
  res.send('YAY! It actually works!');
});

app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`Server is listening on ${port}`);
});
