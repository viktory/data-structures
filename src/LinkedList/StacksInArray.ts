class StacksArray {
  public _stacksElements: number[] = [];
  public _elementsChain: (number | undefined)[] = [];

  public get lastIndex() {
    return (this._stacksElements.length - 1);
  }

  public push(element: number) {
    this._stacksElements.push(element);
  }

  public remove(index: number) {
    this._elementsChain[index] = undefined;
    delete this._stacksElements[index];
  }

  public setElementChain(head: number | undefined, newHead: number) {
    this._elementsChain[newHead] = head;
  }

  public getByIndex(index: number | undefined)
  {
    if (!index) {
      return null;
    }

    return this._stacksElements[index];
  }

  public getByPrevious(index: number | undefined)
  {
    if (!index) {
      return undefined;
    }

    return this._elementsChain[index];
  }
}

class Stack {
  protected head: number | undefined;

  protected stacksArray: StacksArray;
  public constructor(stacksArray: StacksArray) {
    this.stacksArray = stacksArray;
    this.head = undefined;
  }

  public push(element: number) {
    this.stacksArray.push(element);
    let newHead = this.stacksArray.lastIndex;
    this.stacksArray.setElementChain(this.head, newHead);
    this.head = newHead;
  }

  public pop() {
    let oldHead = this.head;
    let element = this.stacksArray.getByIndex(oldHead);
    this.head = this.stacksArray.getByPrevious(oldHead);
    if (oldHead) {
      this.stacksArray.remove(oldHead);
    }

    return element;
  }
}

export class StacksInArray {
  public constructor() {
    let sa = new StacksArray();
    let stack1 = new Stack(sa);
    let stack2 = new Stack(sa);
    let stack3 = new Stack(sa);

    stack1.push(12);
    stack1.push(3);
    // stack3.push(88);
    stack1.push(6);
    // stack3.pop();
    // stack2.push(9)
    stack1.push(123);
    stack1.push(22);
    // stack2.push(0);
    stack1.pop();
    stack1.push(3);
    stack1.pop();
    // stack2.push(55);
    // stack1.pop();
    // stack1.pop();
    // stack1.pop();
    // stack1.pop();

    console.log(sa._stacksElements, sa._elementsChain)
  }
}
