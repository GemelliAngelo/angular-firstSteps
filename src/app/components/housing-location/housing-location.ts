import { Component, input } from '@angular/core';
import { HousingLocationInfo } from '../../interfaces/housing-location-info';

@Component({
  selector: 'app-housing-location',
  imports: [],
  templateUrl: './housing-location.html',
  styleUrl: './housing-location.scss',
})
export class HousingLocation {
  housingLocation = input.required<HousingLocationInfo>();
}
