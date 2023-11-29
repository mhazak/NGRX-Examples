import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducer } from './fruits.reducer';
import { FruitsStoreEffects } from './fruits.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('fruits', reducer),
    EffectsModule.forFeature([FruitsStoreEffects]),
  ],
})
export class FruitsStoreModule {}
