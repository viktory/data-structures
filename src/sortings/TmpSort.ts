import { AbstractSort } from "./AbstractSort";

export class TmpSort extends AbstractSort {
  public sort() {
    const getGap = (gap: number) => Math.floor(gap/2);
    for (let gap = getGap(this.elements.length); gap > 0; gap = getGap(gap)) {

      for (let i = gap; i < this.elements.length; i += gap) {
        let j;
        let element = this.elements[i];
        for (j = i-gap; j >= 0 && this.elements[j] > element; j -= gap) {
          this.elements[j+gap] = this.elements[j];
        }

        this.elements[j+gap] = element;
      }

    }

  }
}
