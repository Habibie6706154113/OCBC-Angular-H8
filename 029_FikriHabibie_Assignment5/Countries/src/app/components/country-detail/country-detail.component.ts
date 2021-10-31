import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Country } from 'src/app/models/Country';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
  @Input() data: Country = {
    name: "string",
    capital: "string",
    area: 0,
    population: 0,
    gdp: 0,
    currency: "string"
  }

  @Input() isFromHome: boolean = false

  @Output() goBackEventHandler = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
  }

  goBack() {
    this.goBackEventHandler.emit(this.isFromHome)
  }
}
