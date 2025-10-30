import { Component, inject } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';
import { HousingLocationInfo } from '../../interfaces/housing-location-info';
import { Housing } from '../../services/housing';

@Component({
  selector: 'app-home',
  imports: [HousingLocation],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  housingLocationList: HousingLocationInfo[] = [];
  housingService: Housing = inject(Housing);
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
