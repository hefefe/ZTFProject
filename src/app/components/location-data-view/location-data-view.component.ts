import { Component } from '@angular/core';
import { ILocationResponse } from '../rick-and-morty/form-request-interface';
import { SharedService } from '../../shared.service';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-location-data-view',
  standalone: true,
  imports: [TableModule, ButtonModule, NgIf, CommonModule],
  templateUrl: './location-data-view.component.html',
  styleUrl: './location-data-view.component.scss'
})
export class LocationDataViewComponent {
  locationData!: ILocationResponse;

  constructor(private shared: SharedService) {}

  ngOnInit() {
    this.shared.currentLocation.subscribe(location => this.locationData = location);
  }

  getLocationPage(url: string){
    this.shared.getLocationPage(url);
  }
}
