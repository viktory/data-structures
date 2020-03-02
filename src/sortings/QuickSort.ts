import { AbstractSort } from "./AbstractSort";

export class QuickSort extends AbstractSort {
  public sort() {
    this.elements = this._sort(this.elements);
  }

  private _sort(array: number[]): number[] {
    if (array.length < 2) {
      return array;
    }
    const pivotIndex = Math.round(array.length / 2);

    let lessElements: number[] = [];
    let greaterElements: number[] = [];
    for (let i = 0; i < array.length; i++) {
      if (i === pivotIndex) {
        continue;
      }
      if (array[i] < array[pivotIndex]) {
        lessElements.push(array[i]);
      } else {
        greaterElements.push(array[i]);
      }
    }
    array = this._sort(lessElements).concat([array[pivotIndex]], this._sort(greaterElements));

    return array;
  }
}
