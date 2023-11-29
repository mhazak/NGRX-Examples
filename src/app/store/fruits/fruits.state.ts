import { Fruit } from 'src/app/models/fruit.type';

export interface FruitState {
  isLoading?: boolean;
  error?: any;
  total?: number;
  selectedFruitsId?: string | number | null;
}

export const initialState: FruitState = {
  isLoading: false,
  error: null,
  selectedFruitsId: null,
  total: 0,
};
