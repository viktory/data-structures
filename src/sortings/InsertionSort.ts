import { AbstractSort } from "./AbstractSort";

export class InsertionSort extends AbstractSort{
  public sort() {
    for (let i = 1; i < this.elements.length; i++) {
      const element = this.elements[i];
      let j = i - 1;
      while (j >= 0 && this.elements[j] > element) {
        this.elements[j + 1] = this.elements[j];
        j--;
      }

      this.elements[j + 1] = element;
    }
  }
}
