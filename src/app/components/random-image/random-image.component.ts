import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-random-image',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './random-image.component.html',
  styleUrl: './random-image.component.scss'
})
export class RandomImageComponent {

}
