import { AbstractSort } from "./AbstractSort";

export class SelectionSort extends AbstractSort{
  public sort() {

    for (let j = 0; j < this.elements.length; j++) {
      let minimalIndex = j;
      for (let i = j+1; i < this.elements.length; i++) {
        if (this.elements[minimalIndex] > this.elements[i]) {
          minimalIndex = i;
        }
      }
      const tmpElement = this.elements[j];
      this.elements[j] = this.elements[minimalIndex];
      this.elements[minimalIndex] = tmpElement;
    }
  }
}
