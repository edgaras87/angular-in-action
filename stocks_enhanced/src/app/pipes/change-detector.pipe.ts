import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeDetector',
  pure: false
})
export class ChangeDetectorPipe implements PipeTransform {

  count: number = 0;

  transform(value: any, args?: any): unknown {
    this.count++;
    console.log(`Component change detection executed ${this.count}`);
    return value;
  }

}
