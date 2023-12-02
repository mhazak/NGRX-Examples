import { Component, Input, OnInit } from '@angular/core';
import { Fruit } from 'src/app/models/fruit.type';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.scss'],
})
export class FruitComponent implements OnInit {
  @Input() fruit!: Fruit;
  constructor() {}

  ngOnInit() {}
}
