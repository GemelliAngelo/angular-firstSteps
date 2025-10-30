import { Component, input } from '@angular/core';
import { HousingLocationInfo } from '../../interfaces/housing-location-info';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  imports: [RouterLink],
  templateUrl: './housing-location.html',
  styleUrl: './housing-location.scss',
})
export class HousingLocation {
  housingLocation = input.required<HousingLocationInfo>();
}
