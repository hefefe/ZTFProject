import { Component } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarModule, ButtonModule, MenuModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  sidebarVisible: boolean = false;
  projectName: string = "PROJEKT ZDF";
  items: MenuItem[] | undefined;

  constructor(private router: Router) {}

    ngOnInit() {
        this.items = [
            { label: 'API Form', icon: 'pi pi-align-justify', command: () => {this.router.navigate(['/rickandmorty']);}},
            { label: 'Character Data', icon: 'pi pi-users', command: () => {this.router.navigate(['/chardata']);}},
            { label: 'Location Data', icon: 'pi pi-globe', command: () => {this.router.navigate(['/locationdata']);}}
        ];
    }


}
