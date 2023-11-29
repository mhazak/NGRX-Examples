import { createAction, props } from '@ngrx/store';
import { Fruit } from 'src/app/models/fruit.type';

// import { CustomQuery } from 'src/app/api/api-models/pagination';

export enum FruitsActionType {
  Load = '[Fruits Component] Load',
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

export const load = createAction(FruitsActionType.Load);
// export const searchFruits = createAction(
//   FruitsActionType.SearchFruits,
//   // props<{ query: CustomQuery }>()
// );

// export const createFruits = createAction(
//   FruitsActionType.CreateFruits,
//   props<{ fruits: Fruits, ref: any }>()
// );

// export const actionFailure = createAction(
//   FruitsActionType.ActionFailure,
//   props<{ error: string }>()
// );

// export const actionSuccess = createAction(
//   FruitsActionType.ActionSuccess,
//   props<{ msg: string }>()
// );

// export const updateTotal = createAction(
//   FruitsActionType.UpdateTotal,
//   props<{ total: number }>()
// );

// export const loadSuccess = createAction(
//   FruitsActionType.LoadSuccess,
//   props<{ fruits: Fruit[] }>()
// );

// export const submitSuccess = createAction(
//   FruitsActionType.SubmitSuccess,
//   props<{ msg: string }>()
// );

// export const refresh = createAction(FruitsActionType.Refresh);

// export const select = createAction(
//   FruitsActionType.Selected,
//   props<{ selectedFruitsId: string | number }>()
// );

// export const updateFruits = createAction(
//   FruitsActionType.UpdateFruits,
//   props<{ fruits: Fruit, ref: any }>()
// );
