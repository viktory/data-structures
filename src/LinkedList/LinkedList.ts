import { getRandomInt } from "../utils";

type ElementType = number;
type LinkedListElementType = ILinkedListElement | undefined;

interface ILinkedListElement {
  data: ElementType;
  next: LinkedListElementType;
}

class LinkedListElement implements ILinkedListElement {
  protected _next: LinkedListElementType;
  protected _data: ElementType;

  public constructor(data: ElementType) {
    this._data = data;
  }

  public get data() {
    return this._data;
  }

  public get next() {
    return this._next;
  }

  public set next(next: LinkedListElementType) {
    if (!next) {
      console.error('NEXT must be set');
    }
    this._next = next;
  }
}

interface ILinkedList {
  first: LinkedListElementType;
  last: LinkedListElementType;
  add: (element: ElementType) => void;
  remove: (index: number) => void;
  findByIndex: (index: number) => LinkedListElementType;

  print: () => void;
}
export class LinkedList implements ILinkedList{
  private _first: LinkedListElementType;
  protected count: number = 0;

  public constructor(count: number = 0) {
    this.setFirst(undefined);
    this.count = 0;

    for (let i = 0; i <= count; i++) {
      this.add();
    }
  }

  public get last(): LinkedListElementType
  {
    return this.findByIndex(this.count - 1);
  }

  public get first(): LinkedListElementType
  {
    return this._first;
  }

  public add()
  {
    let newElement = new LinkedListElement(getRandomInt());
    let last = this.last;
    if (last != undefined) {
      last.next = newElement;
    } else {
      this.setFirst(newElement);
    }
    this.count++;
  }

  public remove(index: number) {
    if (index === 0) {
      this.setFirst(this.first?.next);
    } else {
      this.removeElement(index);
    }
  }

  public findByIndex(index: number): LinkedListElementType
  {
    this.validateIndex(index);

    if (index === 0) {
      return this.first;
    }

    let current: LinkedListElementType = this.first;
    let count = 0;
    while (current?.next !== undefined) {
      current = current.next;
      count++;

      if (count === index) {
        return current;
      }
    }
  }

  protected validateIndex(index: number) {
    if (index > this.count) {
      throw new Error('Element does not exist');
    }
  }

  protected removeElement(index: number) {
    let previous = this.findByIndex(index - 1);
    if (previous) {
      previous.next = previous.next?.next;
    }
  }



  protected setFirst(first: LinkedListElementType)
  {
    this._first = first;
  }

  public print()
  {
    let output = [];

    let current = this.first;
    while (current?.next !== undefined) {
      output.push(current.data);
      current = current.next;
    }

    console.log(output);
  }
}
