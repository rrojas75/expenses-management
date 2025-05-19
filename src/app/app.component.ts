import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isLoggedIn = false;

  constructor() {
    this.isLoggedIn = !!localStorage.getItem('token');
  }

  onLogout() {
    localStorage.removeItem('token');
    this.isLoggedIn = false;
  }
}
