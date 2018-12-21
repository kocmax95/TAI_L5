import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, textSize: number): string {
    return value.substr(0, textSize) + '..';
  }

}
