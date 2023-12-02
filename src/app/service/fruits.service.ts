import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fruit } from '../models/fruit.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FruitsService {
  constructor(private readonly httpClient: HttpClient) {}

  getFruits() {
    console.log('som tu?');
    return this.httpClient
      .get<Fruit[]>('/assets/data/fruits.json')
      .pipe(tap(console.log));
  }
}
