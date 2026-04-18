import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ElementService } from '../../services/element.service';
import { FormulariCercaComponent } from '../../components/formulari-cerca/formulari-cerca.component';

@Component({
  selector: 'app-cataleg-page',
  standalone: true,
  imports: [CommonModule, FormulariCercaComponent],
  templateUrl: './cataleg-page.component.html',
  styleUrl: './cataleg-page.component.scss'
})

export class CatalegPage {
  elementService = inject(ElementService);
  terme = '';

  carregaPopulars() {
    this.elementService.obtenirPopulars();
  }

  buscar() {
    if (this.terme.trim()) {
      this.elementService.cercar(this.terme);
    }
  }

  reintentar() {
    if (this.terme.trim()) {
      this.elementService.cercar(this.terme);
    } else {
      this.elementService.obtenirPopulars();
    }
  }
}
