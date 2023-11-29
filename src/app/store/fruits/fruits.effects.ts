// import { get } from 'lodash';
// import { of } from 'rxjs';
// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import {
//   catchError,
//   concatMap,
//   map,
//   switchMap,
//   mergeMap,
// } from 'rxjs/operators';

// import * as fruitsActions from './fruits.actions';
// import { FruitsManagementAPIService as DataService } from '../../../api';
// import { FruitsAdapter } from 'src/app/core/adapter';
// import { CommonService } from 'src/app/shared/services/common.service';
// import { DialogService } from 'src/app/shared/common/dialog/dialog.service';
// import { COMMON_ERRORS } from 'src/app/shared/services/error-handler.service';

// @Injectable()
export class FruitsStoreEffects {
  // constructor(
  //   private dataService: DataService,
  //   private actions$: Actions,
  //   private commonService: CommonService,
  //   private fruitsAdapter: FruitsAdapter,
  //   private dialogService: DialogService
  // ) {}
  // loadRequestEffect$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(fruitsActions.load),
  //     concatMap(() =>
  //       this.dataService.searchFruitss().pipe(
  //         map((items) =>
  //           fruitsActions.loadSuccess({
  //             fruitss: items.data.items.map((item) =>
  //               this.fruitsAdapter.adapt(item)
  //             ),
  //           })
  //         ),
  //         catchError((error) => of(fruitsActions.actionFailure({ error })))
  //       )
  //     )
  //   )
  // );
  // searchFruitssEffect$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(fruitsActions.searchFruitss),
  //     switchMap((action: any) => {
  //       delete action.type;
  //       return this.dataService.searchFruitss(action).pipe(
  //         mergeMap((items) => {
  //           return [
  //             fruitsActions.loadSuccess({
  //               fruitss: items
  //                 ? items.data.items.map((item) =>
  //                     this.fruitsAdapter.adapt(item)
  //                   )
  //                 : [],
  //             }),
  //             fruitsActions.updateTotal({
  //               total: items ? items.data.pagination.total : 0,
  //             }),
  //           ];
  //         }),
  //         catchError((error) => of(fruitsActions.actionFailure({ error })))
  //       );
  //     })
  //   );
  // });
  // createRequestEffect$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(fruitsActions.createFruits),
  //     concatMap((action: any) =>
  //       this.dataService.createFruits(action.fruits).pipe(
  //         map((response) => {
  //           action.ref.close();
  //           this.commonService.formatDataResponse(response, true);
  //           return fruitsActions.actionSuccess({ msg: 'success' });
  //         }),
  //         catchError((error) => of(fruitsActions.actionFailure({ error })))
  //       )
  //     )
  //   )
  // );
  // updateRequestEffect$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(fruitsActions.updateFruits),
  //     concatMap((action: any) =>
  //       this.dataService.updateFruits(action.fruits).pipe(
  //         map((response) => {
  //           action.ref.close();
  //           this.commonService.formatDataResponse(response, true);
  //           return fruitsActions.actionSuccess({ msg: 'success' });
  //         }),
  //         catchError((error) => {
  //           return of(fruitsActions.actionFailure({ error }));
  //         })
  //       )
  //     )
  //   )
  // );
  // actionFailureEffect$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(fruitsActions.actionFailure),
  //       map((action: any) => {
  //         const errCode = get(action, 'error.status');
  //         if (COMMON_ERRORS.indexOf(errCode) === -1) {
  //           return this.dialogService.openWarningDialog(
  //             get(action, 'error.error.meta.message', 'Error Occurs!')
  //           );
  //         }
  //       })
  //     ),
  //   { dispatch: false }
  // );
  // refreshEffect$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(fruitsActions.refresh),
  //     map((_) => fruitsActions.load())
  //   )
  // );
}
