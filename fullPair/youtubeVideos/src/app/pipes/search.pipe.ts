import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(value: any[], args?: any): any {
    if (args === '' || args === undefined) {
      return value;
    }

    return value.filter((item) =>
      item.title.toLowerCase().includes(args.toLowerCase())
    );
  }
}
