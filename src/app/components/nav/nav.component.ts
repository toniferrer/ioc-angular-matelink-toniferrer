import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, Usuari } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  usuari$: Observable<Usuari | null>;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.usuari$ = this.authService.obtenirUsuari();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
