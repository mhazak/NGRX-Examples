import { createAction, props } from '@ngrx/store';
import { Fruit } from 'src/app/models/fruit.type';

export enum FruitsActionType {
  Init = '[Fruits Component] Initial Load',
  Load = '[Fruits Component] Load',
  FruitLoadSuccess = '[Fruits Component] Load Success',
  FruitLoadError = '[Fruits Component] Load Error',
  SearchFruits = '[Fruits Component] Search Fruits',
  UpdateFruits = '[Fruits Component] Update Fruits',
  CreateFruits = '[Fruits Component] Create Fruits',
  UpdateTotal = '[Fruits Component] Update Total',
  ActionFailure = '[Fruits API] Execute action failure',
  ActionSuccess = '[Fruits API] Execute action success',
  LoadSuccess = '[Fruits API] Load Success',
  Refresh = '[Fruits Page] Refresh',
  Selected = '[Fruits Page] Select',
  SubmitSuccess = '[Fruits API] Submit Success',
}
export const initialFruitLoad = createAction(FruitsActionType.Init);
export const fruitsLoadSuccess = createAction(
  FruitsActionType.FruitLoadSuccess,
  props<{ fruits: Fruit[] }>()
);
export const fruitsLoadError = createAction(
  FruitsActionType.FruitLoadError,
  props<{ error: Error }>()
);
