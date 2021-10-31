import { Component } from '@angular/core';
import { Country } from './models/Country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  countries: Country[] = []

  isFromHome: boolean = false

  isHome: boolean = true
  isAll: boolean = false
  isDetail: boolean = false

  detailCountry: Country = {
    name: "string",
    capital: "string",
    area: 0,
    population: 0,
    gdp: 0,
    currency: "string"
  }

  ngOnInit(): void {
    this.countries = [
      {
        name: "Russia", capital: "Moscow", area: 17098246,
        population: 146171015, gdp: 432800, currency: "Russian Ruble"
      },
      {
        name: "China", capital: "Beijing", area: 9596961,
        population: 1412860000, gdp: 14092514, currency: "Renminbi"
      },
      {
        name: "India", capital: "New Delhi", area: 3287263,
        population: 1384980000, gdp: 202070, currency: "Indian Rupee"
      },
      {
        name: "Indonesia", capital: "Jakarta", area: 1904569,
        population: 271349889, gdp: 1074966, currency: "Indonesian Rupiah"
      },
      {
        name: "Japan", capital: "Tokyo", area: 1905000,
        population: 125360000, gdp: 5167051, currency: "Japanese Yen"
      },
      {
        name: "Canada", capital: "Ottawa", area: 9984670,
        population: 38246108, gdp: 502700, currency: "Cannadian Dollar"
      },
      {
        name: "United States", capital: "Washington, D.C.", area: 9833517,
        population: 336851000, gdp: 20412870, currency: "U.S. Dollar"
      },
    ]
  }

  goToHome() {
    this.isHome = true
    this.isAll = false
    this.isDetail = false
  }

  goToAll() {
    this.isHome = false
    this.isAll = true
    this.isDetail = false
  }

  homeToDetails(country: Country) {
    let resCountry = this.countries.find(i => i.name == country.name)

    if(resCountry == undefined) {
      this.detailCountry
    } else {
      this.detailCountry = resCountry
    }
    this.isFromHome = true

    this.showDetail();
  }

  allToDetails(country: Country) {
    let resCountry = this.countries.find(i => i.name == country.name)

    if(resCountry == undefined) {
      this.detailCountry
    } else {
      this.detailCountry = resCountry
    }
    this.isFromHome = false
    this.showDetail()
  }

  goBack(isFromAll: boolean) {
    if (isFromAll){
      this.goToHome()
    } else{
      this.goToAll()
    }
  }

  showDetail() {
    this.isHome = false
    this.isAll = false
    this.isDetail = true
  }
}