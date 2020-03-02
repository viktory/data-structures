import { AbstractSort } from "./AbstractSort";

export class BubbleSort extends AbstractSort{
  public sort() {
    for (let j = 0; j < this.elements.length; j++) {
      for (let i = 1; i < this.elements.length - j; i++) {
        if (this.elements[i] < this.elements[i - 1]) {
          let tmp = this.elements[i];
          this.elements[i] = this.elements[i - 1];
          this.elements[i - 1] = tmp;
        }
      }
    }
  }
}
