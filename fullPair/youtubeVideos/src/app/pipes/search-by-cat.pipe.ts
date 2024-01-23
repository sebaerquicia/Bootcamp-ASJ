import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByCat',
})
export class SearchByCatPipe implements PipeTransform {
  transform(value: any[], args?: any): any {
    if (args === '' || args === undefined) {
      return value;
    }

    return value.filter((item) =>
      item.category.toLowerCase().includes(args.toLowerCase())
    );
  }
}
