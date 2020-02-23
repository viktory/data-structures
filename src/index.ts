import express from 'express';
import { LinkedList } from "./LinkedList/LinkedList";

const app = express();
const port = 4002;

app.get('/', (req, res) => {
  let list = new LinkedList(7);
  list.print();
  list.add();
  list.add();
  list.print();
  list.remove(6);
  list.print();
  list.remove(0);
  list.print();

  res.send('YAY! It actually works!');
});

app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`Server is listening on ${port}`);
});
