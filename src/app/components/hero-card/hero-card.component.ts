import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';


@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent implements OnInit {
  
  @Input() props:Hero={
    id: 0,
    name: '',
    slug: '',
    powerstats: {
      intelligence: 0,
      strength: 0,
      speed: 0,
      durability: 0,
      power: 0,
      combat: 0
    },
    appearance: {
      gender: '',
      race: '',
      height: [],
      weight: [],
      eyeColor: '',
      hairColor: ''
    },
    biography: {},
    work: {
      occupation:''
    },
    connections: {},
    images: {
     
      xs:'',
      sm:'',
      md:'',
      lg:''

    }
  }
  stats :any[] | undefined 
  constructor() { }

  ngOnInit(): void {
    this.stats = Object.keys(this.props.powerstats)
    console.log(this.stats);
    
  }

}
