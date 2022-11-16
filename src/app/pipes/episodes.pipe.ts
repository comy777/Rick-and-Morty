import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'episodes'
})
export class EpisodesPipe implements PipeTransform {

  transform(value: string): string {
    const valueSplit = value.split('/')
    const episode = valueSplit[valueSplit.length - 1]
    return `Episode ${episode}`;
  }

}
