import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { HeroesService } from '../heroes.service';


@Injectable()
export class HeroesEffects {

  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType('[Hero] loading Heroes'),//action que vamos a escuchar
    mergeMap(() => this.heroesService.getHeroes() //llamamos al servicio
      .pipe(
        map(heroes => ({ type: '[Hero] loading Heroes Success', heroes })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private heroesService: HeroesService
  
  ) {}
}


