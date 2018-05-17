import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): any {
    let result: string;
    if (value) {
      result = value.replace(/\b\w/g, r => r.toUpperCase());
    }
    return result;
  }

}
