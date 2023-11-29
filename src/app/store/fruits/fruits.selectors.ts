import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FruitState } from './fruits.state';
import { Fruit } from 'src/app/models/fruit.type';

export const selectFruitsState = createFeatureSelector<FruitState>('fruits');

// export const selectAllFruitsItems: (state: object) => Fruit[] =
//   fruitsAdapter.getSelectors(selectFruitsState).selectAll;

// export const selectTotalFruitsItems = createSelector(
//   selectFruitsState,
//   (state: State): number => {
//     return state.total;
//   }
// );

// const selectSelectedFruitsId = createSelector(
//   selectFruitsState,
//   (state: State): string | number => state.selectedFruitsId
// );

// export const selectCurrentFruits = createSelector(
//   selectAllFruitsItems,
//   selectSelectedFruitsId,
//   (allFruitss: Fruits[], selectedFruitsId: string | number) => {
//     if (allFruitss && selectedFruitsId) {
//       return allFruitss.find((p) => p.id === selectedFruitsId);
//     } else {
//       return null;
//     }
//   }
// );

// export const selectFruitsError = createSelector(
//   selectFruitsState,
//   (state: State): any => state.error
// );

// export const selectFruitsIsLoading = createSelector(
//   selectFruitsState,
//   (state: State): boolean => state.isLoading
// );
