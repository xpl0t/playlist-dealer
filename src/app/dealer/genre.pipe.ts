import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genre'
})
export class GenrePipe implements PipeTransform {

  public transform(value: string[], ...args: any[]): string {
    return value.join(', ');
  }

}
