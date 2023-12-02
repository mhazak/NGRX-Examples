import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FruitsMainComponent } from './components/fruits-main/fruits-main.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FruitsMainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
