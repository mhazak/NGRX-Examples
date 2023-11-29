import { Mineral } from './mineral.interface';
import { Vitamin } from './vitamin.interface';

export interface Nutritions {
  carbs: number;
  fiber: number;
  vitamins: Vitamin[];
  minerals: Mineral[];
}
