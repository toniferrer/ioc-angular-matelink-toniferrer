import { Routes } from '@angular/router';
import { CatalegPage } from './pages/cataleg-page/cataleg-page.component';
import { FormulariCercaComponent } from './components/formulari-cerca/formulari-cerca.component';
import { PreferitsPanelComponent } from './components/preferits-panel/preferits-panel.component';
import { DetallComponent } from './components/detall/detall.component';

export const routes: Routes = [
    {path: '', redirectTo: 'cataleg', pathMatch: 'full'},
    {path: 'cataleg', component: CatalegPage, title: 'Catàleg'},
    {path: 'cerca', component: FormulariCercaComponent , title: 'Cerca'},
    {path: 'detall/:id', component: DetallComponent, title: 'Detall'},
    {path: 'preferits', component: PreferitsPanelComponent, title: 'Preferits'},
    {path: 'login', component: CatalegPage, title: 'Login'},
    { path: '**', redirectTo: 'cataleg' }
];
