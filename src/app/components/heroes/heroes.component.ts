import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { HeroesService } from 'src/app/heroes.service';
import { Hero } from 'src/app/models/hero.model';
import { appState } from 'src/app/state/app.state';
import { loadHeroes, loadHeroesSuccess } from 'src/app/state/hero.actions';
import { selectHeroes, selectLoading } from 'src/app/state/selectors/heroes.selector';
import { selectMessage } from 'src/app/state/selectors/message.selector';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  loading$: Observable<boolean> = new Observable();
  heroes$: Observable<any>= new Observable();
  topHeroes: Observable<Hero[]> | undefined;
  constructor(private store: Store<appState>) {

  }


  ngOnInit() {
    this.loading$ = this.store.select(selectLoading);
    this.heroes$ = this.store.select(selectHeroes);
    this.store.dispatch(loadHeroes())
    
    this.topHeroes = this.heroes$.pipe(map(heroes => heroes.slice(0, 5)))

  }
  stopLoading() {
    this.store.dispatch(loadHeroes())
  }



}
