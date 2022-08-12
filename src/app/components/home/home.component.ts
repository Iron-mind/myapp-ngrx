import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { setEnglish, setSpanish } from 'src/app/app.reducer';
import { HeroesService } from 'src/app/heroes.service';
import { Hero } from 'src/app/models/hero.model';
import { appState } from 'src/app/state/app.state';
import { loadHeroes, loadHeroesSuccess } from 'src/app/state/hero.actions';
import { selectHeroes, selectLoading } from 'src/app/state/selectors/heroes.selector';
import { selectMessage } from 'src/app/state/selectors/message.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dato$: Observable<any>;
  
  constructor(private store: Store<appState>) {

    this.dato$ = store.select(selectMessage);

  }

  toSpanish() {
    this.store.dispatch(setSpanish())
  }
  toEnglish() {
    this.store.dispatch(setEnglish())
  }
  ngOnInit(): void {
    
  }



}
