import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isNavbarOpen = false; // Estado del navbar

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen; // Alternar el estado
  }
}
