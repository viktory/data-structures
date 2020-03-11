import { getRandomInt } from "../utils";

export abstract class AbstractSort {
  public elements: number[] = [];

  constructor() {
    for (let i = 0; i < getRandomInt(); i++) {
      this.elements.push(getRandomInt());
    }

    let originElementsString = JSON.stringify([ ...this.elements].sort((a, b) => a-b));
    this.sort();

    if (originElementsString !== JSON.stringify(this.elements)) {
      console.error('NOT SORTED');
    } else {
      console.log('correct');
    }
  }

  abstract sort(): void;
}
