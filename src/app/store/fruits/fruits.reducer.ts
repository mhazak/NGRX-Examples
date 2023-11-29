import { Action, createReducer, on } from '@ngrx/store';
import * as fruitsActions from './fruits.actions';
import { FruitState, initialState } from './fruits.state';

const featureReducer = createReducer(
  initialState,
  on(fruitsActions.load, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  }))
  // on(fruitsActions.searchFruitss, (state) => ({
  //   ...state,
  //   isLoading: true,
  //   error: null,
  // })),
  // on(fruitsActions.updateTotal, (state, { total }) => {
  //   return { ...state, total };
  // }),
  // on(fruitsActions.loadSuccess, (state, { fruitss }) => {
  //   return fruitsAdapter.addAll(fruitss, {
  //     ...state,
  //     isLoading: false,
  //     error: null,
  //   });
  // }),
  // on(fruitsActions.actionFailure, (state, { error }) => ({
  //   ...state,
  //   isLoading: false,
  //   error,
  // })),
  // on(fruitsActions.select, (state, { selectedFruitsId }) => {
  //   return {
  //     ...state,
  //     selectedFruitsId,
  //   };
  // })
);

export function reducer(state: FruitState | undefined, action: Action) {
  return featureReducer(state, action);
}
