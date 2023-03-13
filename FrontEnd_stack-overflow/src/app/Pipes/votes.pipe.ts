import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'votes',
  standalone: true
})
export class VotesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
