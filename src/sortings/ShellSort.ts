import { AbstractSort } from "./AbstractSort";

export class ShellSort extends AbstractSort{
  public sort() {
    for (let gap = this.getGap(); gap > 0; gap = this.getGap(gap)) {
      for (let i = gap; i < this.elements.length; i += gap) {
        let tmp = this.elements[i];
        let j = i - gap;
        while (j >= 0 && this.elements[j] > tmp) {
          this.elements[j + gap] = this.elements[j];
          j -= gap;
        }

        this.elements[j + gap] = tmp;
      }
    }
  }

  private getGap(previousGap = this.elements.length) {
    return Math.floor(previousGap / 2)
  }
}
