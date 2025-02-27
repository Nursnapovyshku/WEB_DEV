import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating',
  standalone: true
})
export class RatingPipe implements PipeTransform {
  transform(value: number): string {
    const fullStars = '⭐'.repeat(Math.floor(value));
    const emptyStars = '☆'.repeat(5 - Math.floor(value));
    return fullStars + emptyStars;
  }
}