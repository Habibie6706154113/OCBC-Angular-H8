import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Country } from 'src/app/models/Country';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() showCountryDetailEvent = new EventEmitter<Country>()

  @Input() data: Country[] = []
  mostPopulate: Country[] = []
  largest: Country[] = []
  biggestGDP: Country[] = []

  constructor() { }

  ngOnInit(): void {
    this.mostPopulate = this.data.sort((a,b) => b.population - a.population).slice(0, 3)
    this.largest = this.data.sort((a,b) => b.area - a.area).slice(0, 3)
    this.biggestGDP =this.data.sort((a,b) => b.gdp - a.gdp).slice(0, 3)
  }

  showCountryDetails(value: Country) {
    this.showCountryDetailEvent.emit(value)
  }
}
