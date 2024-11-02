import { Component } from '@angular/core';
import { IRequestData} from './form-request-interface';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { NgIf } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CharacterCardComponent } from "../character-card/character-card.component";
import { TableModule } from 'primeng/table';
import { SharedService } from '../../shared.service';

interface IFormSelect {
  name: string;
}

@Component({
  selector: 'app-rick-and-morty',
  standalone: true,
  imports: [FormsModule, DropdownModule, MultiSelectModule, NgIf, ButtonModule, CharacterCardComponent, TableModule],
  templateUrl: './rick-and-morty.component.html',
  styleUrl: './rick-and-morty.component.scss',
})
export class RickAndMortyComponent {
  requestData: IRequestData = {};

  formOptions!: IFormSelect[];

  selectedFormOption!: IFormSelect;

  statuses!: IFormSelect[];

  selectedStatus!: IFormSelect;

  genders!: IFormSelect[];

  constructor(private shared: SharedService) {}

  ngOnInit() {
    this.formOptions = [{ name: 'Characters' }, { name: 'Locations' }];
    this.selectedFormOption = this.formOptions[0];

    this.statuses = [{ name: 'alive' }, { name: 'dead' }, { name: 'unknown' }];

    this.genders = [
      { name: 'female' },
      { name: 'male' },
      { name: 'genderless' },
      { name: 'unknown' },
    ];
  }

  onChange(event: any) {
    this.requestData = {};
  }

  getApiData() {
    if (this.selectedFormOption.name == this.formOptions[0].name) {
      this.shared.apiGetCharacterData(this.requestData);
    } else if (this.selectedFormOption.name == this.formOptions[1].name) {
      this.shared.apiGetLocationData(this.requestData);
    }
  }
}
