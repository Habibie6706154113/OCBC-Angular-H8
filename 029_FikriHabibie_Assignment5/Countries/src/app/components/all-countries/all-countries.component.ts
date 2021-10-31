import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Country } from 'src/app/models/Country';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css']
})
export class AllCountriesComponent implements OnInit {
  @Output() showCountryDetailEvent = new EventEmitter<Country>()

  @Input() data: Country[] = []

  constructor() { }

  ngOnInit(): void {
  }

  showCountryDetails(value: Country) {
    this.showCountryDetailEvent.emit(value)
  }
}
