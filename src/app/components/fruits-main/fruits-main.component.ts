import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { initialFruitLoad } from 'src/app/store/fruits/fruits.actions';
import { getFruits } from 'src/app/store/fruits/fruits.selectors';

@Component({
  selector: 'app-fruits-main',
  templateUrl: './fruits-main.component.html',
  styleUrls: ['./fruits-main.component.scss'],
})
export class FruitsMainComponent implements OnInit {
  fruits$ = this.store.select(getFruits);
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(initialFruitLoad());
  }
}
