import { AbstractSort } from "./AbstractSort";

export class HeapSort extends AbstractSort {
  public sort() {
    this.buildHeap();
  }

  protected buildHeap() {
    const n = this.elements.length;
    for (let i = (Math.floor(n / 2)); i >= 0; i-- ) {
      this.heapify(n, i);
    }

    for (let i = n - 1; i >= 0; i--) {

      let tmp = this.elements[0];
      this.elements[0] = this.elements[i];
      this.elements[i] = tmp;

      this.heapify(i,0);
    }
  }

  protected heapify(n: number, i: number) {
    let leftIndex = this.getLeftIndex(i);
    let rightIndex = this.getRightIndex(i);
    let largestIndex = i;
    if ((leftIndex < n) && (this.elements[leftIndex] > this.elements[largestIndex])) {
      largestIndex = leftIndex
    }

    if ((rightIndex < n) && (this.elements[rightIndex] > this.elements[largestIndex])) {
      largestIndex = rightIndex;
    }

    if (largestIndex !== i) {
      let tmp = this.elements[i];
      this.elements[i] = this.elements[largestIndex];
      this.elements[largestIndex] = tmp;

      this.heapify(n, largestIndex);
    }
  }

  protected getLeftIndex(i: number): number {
    return (i * 2) + 1;
  }

  protected getRightIndex(i: number): number {
    return (i * 2) + 2;
  }
}
