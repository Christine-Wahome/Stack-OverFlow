import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newest',
  standalone: true
})
export class NewestPipe implements PipeTransform {

  transform(value: any[], orderBy: 'newest' | 'oldest'): any[] {
    if (!value) {
      return [];
    }
    const sorted = value.sort((a, b) => {
      const createdAtTimeA = new Date(a.createdAtTime);
      const createdAtTimeB = new Date(b.createdAtTime);
      if (orderBy === 'newest') {
        return createdAtTimeB.getTime() - createdAtTimeA.getTime();
      } else {
        return createdAtTimeA.getTime() - createdAtTimeB.getTime();
      }
    });
    return sorted;
  }

}
