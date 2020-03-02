import { AbstractSort } from "./AbstractSort";

export class MergeSort extends AbstractSort{
  public sort() {
    this.elements = this._sort(this.elements);
  }

  private _sort(array: number[]): number[] {
    if (array.length == 1) {
      return array;
    }

    let pivotIndex = Math.round(array.length / 2);

    if (pivotIndex > 0) {
      array = this._merge(this._sort(array.slice(0, pivotIndex)), this._sort(array.slice(pivotIndex, array.length)));
    }

    return array;
  }

  private _merge(array1: number[], array2: number[]) {
    let result: number[] = [];

    while ((array1.length > 0) && (array2.length > 0)) {
      if (array1[0] < array2[0]) {
        result.push(array1[0]);
        array1 = array1.slice(1)
      } else {
        result.push(array2[0]);
        array2 = array2.slice(1);
      }
    }

    result = result.concat(array1, array2);

    return result;
  }
}
