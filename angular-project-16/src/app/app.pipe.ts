import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'myCustomTransformation',
  standalone: true,
})
export class MyCustomTransformationPipe implements PipeTransform {
  transform(value: string, format: string): string {
    let msg = `Add User Detail (using custom pipe).`
    if (format === 'uppercase') {
      return msg.toUpperCase()
    } else {
      return msg
    }
  }
}
