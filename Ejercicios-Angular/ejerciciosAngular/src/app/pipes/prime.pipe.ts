import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prime'
})
export class PrimePipe implements PipeTransform {

  transform(numbers: number[]): string {
    const nrosPrimos = numbers.filter(num => this.esPrimo(num))
    return nrosPrimos.join(', '); 
  }
  private esPrimo(num: number): boolean {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

}
