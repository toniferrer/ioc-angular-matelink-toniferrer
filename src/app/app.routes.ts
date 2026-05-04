import { Routes } from '@angular/router';
import { CatalegPage } from './pages/cataleg-page/cataleg-page.component';
import { FormulariCercaComponent } from './components/formulari-cerca/formulari-cerca.component';
import { DetallComponent } from './components/detall/detall.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path: '', redirectTo: 'cataleg', pathMatch: 'full'},
    {path: 'cataleg', component: CatalegPage, title: 'Catàleg'},
    {path: 'cerca', component: FormulariCercaComponent , title: 'Cerca'},
    {path: 'detall/:id', component: DetallComponent, title: 'Detall'},
    {
    path: 'preferits',
    loadComponent: () =>
      import('./components/preferits-panel/preferits-panel.component').then(m => m.PreferitsPanelComponent),
    canActivate: [authGuard]
  },
    {path: 'login', component: LoginComponent, title: 'Login'},
    { path: '**', redirectTo: 'cataleg' }
];
