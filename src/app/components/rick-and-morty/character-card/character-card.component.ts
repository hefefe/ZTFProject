import { Component, Input } from '@angular/core';
import { IExtendedCharData } from '../form-request-interface';
import { DataViewModule } from 'primeng/dataview';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [DataViewModule, NgFor],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss'
})
export class CharacterCardComponent {

  @Input() characterData!: IExtendedCharData[];

}
