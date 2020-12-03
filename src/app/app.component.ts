import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  heroes$: Observable<any[]>;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.heroes$ = this.api
      .get$()
      .pipe(tap((data) => console.log('data:', data)));
  }

  trackById = (_: number, hero: any): number => hero.id;
}
