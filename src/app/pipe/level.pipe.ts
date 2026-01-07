import { Pipe, PipeTransform } from '@angular/core';
import { Level } from '../models/level.model';

const LEVELS: Record<Level, string> = {
  'J': 'Junior',
  'M': 'Mid-level',
  'S': 'Senior'
};

@Pipe({
  name: 'level'
})
export class LevelPipe implements PipeTransform {

  transform(level: Level): string {
    return LEVELS[level];
  }

}
