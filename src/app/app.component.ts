import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Hero } from './models';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  heroes$: Observable<Hero[]>;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.heroes$ = this.api.get$().pipe(
      tap((data) => console.log('before:', data)),
      // map((heroes) => heroes.map((hero) => ({ ...hero, isHero: false }))), // Getter-i se brišu
      map((heroes) =>
        heroes.map((hero) => Object.assign(hero, { isHero: false }))
      ),
      tap((data) => console.log('after:', data))
    );
  }

  trackById = (_: number, hero: any): number => hero.id;
}
