import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '@shared/services/auth.service';
import { environment } from '@env/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  appTitle = environment.appTitle;
  currentUser!: any;

  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.currentUser = this.authService.user;
  }

  logout() {
    this.authService.logout();
  }
}
