import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FruitsService {
  constructor(private readonly httpClient: HttpClient) {}

  getFruits() {
    return this.httpClient.get('/data/fruits.json');
  }
}
