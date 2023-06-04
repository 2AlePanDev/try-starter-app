import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Beer } from 'src/app/models/beer.model';
import { BeerStyle } from '../../models/beer.model';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  @Input() beer: Beer;
  @Output() notifyMe: EventEmitter<Beer> = new EventEmitter<Beer>();

  constructor() { }

  ngOnInit(): void {
  }

  onNotifyMe() {
    this.notifyMe.emit(this.beer)
  }

}