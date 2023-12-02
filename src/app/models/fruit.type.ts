import { Nutritions } from './nutritions.interface';

export type Fruit = {
  name: string;
  taste: string;
  calories: number;
  nutritions: Nutritions;
  image_url: string;
};
