import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FruitState } from './fruits.state';
import { Fruit } from 'src/app/models/fruit.type';

export const selectFruitsState = createFeatureSelector<FruitState>('fruits');

export const getFruits = createSelector(
  selectFruitsState,
  ({ fruits }) => fruits
);
