import { Pipe, PipeTransform } from '@angular/core';
import { Content} from './content-card/content-card-helper';
import {isString} from 'util';

@Pipe({
  name: 'defaultType'
})
export class DefaultTypePipe implements PipeTransform {

  transform(content: Content[], s: string): any {
    return content.filter(c => c.type == s)
  }

}
