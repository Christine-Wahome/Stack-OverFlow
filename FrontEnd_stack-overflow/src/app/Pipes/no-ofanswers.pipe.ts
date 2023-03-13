import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noOfanswers',
  standalone: true
})
export class NoOfanswersPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
