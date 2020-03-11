import { getRandomInt } from "../utils";

export class Graph {
  private _elements: number[][] = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ],
  ];

  constructor() {
    this.generate();
    this.print();
  }

  public generate() {
    for (let i = 0; i <= 30; i++) {
      this.add(getRandomInt(), getRandomInt());
    }
  }

  public add(from: number, to: number) {
    this._elements[from][to] = 1;
  }

  public print () {
    this._elements.forEach((line: number[], index: number) => { console.log(index, line) });
    this.depthFirstPrint();
    this.breadthFirstPrint();
  }

  public depthFirstPrint() {
    let visitedElements: boolean[] = [];
    let output: number[] = [];
    const visitNode = (currentNode: number = 0) => {
      if (visitedElements[currentNode]) {
        return;
      }

      output.push(currentNode);

      visitedElements[currentNode] = true;

      for (let i = 0; i < this._elements.length; i++) {
        if (this._elements[currentNode][i]) {
          visitNode(i);
        }
      }
    };

    visitNode();

    console.log(output);
  }

  public breadthFirstPrint() {
    let output: number[] = [];
    let visitedElements: boolean[] = [];
    let fifo: number[] = [0];

    while (fifo.length > 0) {
      let node = fifo.shift();
      if ((node === undefined) || visitedElements[node]) {
        continue;
      }

      visitedElements[node] = true;
      output.push(node);
      for (let i = 0; i < this._elements.length; i++) {
        if (this._elements[i]) {
          fifo.push(i);
        }
      }
    }

    console.log(output);
  }
}
