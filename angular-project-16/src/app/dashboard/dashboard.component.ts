import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(private router: Router) {

  }

  logout() {
    localStorage.removeItem('loginDetail');
    localStorage.removeItem('userList');
    this.router.navigate(['login']);
  }
}
