import { Fruit } from 'src/app/models/fruit.type';

export interface FruitState {
  fruits: Fruit[];
}

export const initialState: FruitState = {
  fruits: [],
};
