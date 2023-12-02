import { Action, createReducer, on } from '@ngrx/store';
import * as fruitsActions from './fruits.actions';
import { FruitState, initialState } from './fruits.state';

const _fruitsReducer = createReducer(
  initialState,
  on(
    fruitsActions.fruitsLoadSuccess,
    (state, { fruits }): FruitState => ({
      ...state,
      fruits,
    })
  )
);

export function fruitsReducer(state: FruitState | undefined, action: Action) {
  return _fruitsReducer(state, action);
}
