import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fruitActions from './fruits.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { FruitsService } from 'src/app/service/fruits.service';

@Injectable()
export class FuritsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly fruitsService: FruitsService
  ) {}

  fruitLoad$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fruitActions.initialFruitLoad),
      switchMap(() =>
        this.fruitsService.getFruits().pipe(
          map((fruits) => fruitActions.fruitsLoadSuccess({ fruits })),
          catchError((error) => of(fruitActions.fruitsLoadError({ error })))
        )
      )
    );
  });
}
