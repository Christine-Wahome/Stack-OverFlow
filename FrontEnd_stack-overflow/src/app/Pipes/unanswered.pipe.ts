import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unanswered',
  standalone: true
})
export class UnansweredPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
