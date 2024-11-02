import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { NgIf } from '@angular/common';
import { CharacterCardComponent } from '../character-card/character-card.component';
import { IExtendedCharData } from '../rick-and-morty/form-request-interface';
import { SharedService } from '../../shared.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-data-view',
  standalone: true,
  imports: [ButtonModule, NgIf, CharacterCardComponent, CommonModule],
  templateUrl: './character-data-view.component.html',
  styleUrl: './character-data-view.component.scss'
})
export class CharacterDataViewComponent {
  characterData!: IExtendedCharData[];
  CharacterPreviousURL!: string;
  CharacterNextURL!:string;

  constructor(private shared: SharedService) {}

  ngOnInit() {
    this.shared.currentCharacterData.subscribe(data => this.characterData = data);
    this.shared.currentCharacterNextURL.subscribe(data => this.CharacterNextURL = data);
    this.shared.currentCharacterPreviousURL.subscribe(data => this.CharacterPreviousURL = data);
  }

  getCharacterPage(url: string){
    this.shared.getCharacterPage(url);
  }
}
