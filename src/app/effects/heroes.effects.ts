//effects for heroes
import { Injectable } from '@angular/core';
//import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { HeroesService } from '../heroes.service';



// @Injectable()
// export class HeroesEffects {
//     constructor(private actions$: Actions, private heroesService: HeroesService) {}
    
//     @Effect()
//     loadHeroes$ = createEff
// }
// Language: typescript


