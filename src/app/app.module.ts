import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ROOT_REDUCER } from './state/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroesComponent,
    HeroCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(ROOT_REDUCER),
    StoreDevtoolsModule.instrument({name:'my-app-ngrx'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
