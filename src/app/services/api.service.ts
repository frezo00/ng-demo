import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Hero, THero } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get$(): Observable<Hero[]> {
    return this.http
      .get<THero[]>('/assets/data.json')
      .pipe(
        map((heroes) =>
          heroes.map(
            ({ id, firstName, lastName }) => new Hero(id, firstName, lastName)
          )
        )
      );
  }
}
