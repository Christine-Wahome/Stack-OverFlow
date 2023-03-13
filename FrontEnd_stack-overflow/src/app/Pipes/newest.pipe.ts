import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newest',
  standalone: true
})
export class NewestPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
