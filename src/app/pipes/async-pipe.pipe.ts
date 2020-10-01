import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asyncPipe'
})
export class AsyncPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
