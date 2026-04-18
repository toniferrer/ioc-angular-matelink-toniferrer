import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementService } from '../../services/element.service';
import { ElementCataleg } from '../../models/element.model';
import { PreferitsService } from '../../services/preferits.service';
import { FormulariCercaComponent } from '../../components/formulari-cerca/formulari-cerca.component';
import { PreferitsPanelComponent } from '../../components/preferits-panel/preferits-panel.component';

@Component({
  selector: 'app-cataleg-page',
  standalone: true,
  imports: [CommonModule, FormulariCercaComponent, PreferitsPanelComponent],
  templateUrl: './cataleg-page.component.html',
  styleUrl: './cataleg-page.component.scss'
})

export class CatalegPage {
  terme = '';
  elementService = inject(ElementService);
  preferitsService = inject(PreferitsService);

  @Input() element!: ElementCataleg;
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

  esPreferit(elementId: number): boolean {
    return this.preferitsService.esPreferit(elementId);
  }

  togglePreferit(element: any): void {
    if (this.preferitsService.esPreferit(element.id)) {
      this.preferitsService.eliminarPreferit(element.id);
    } else {
      this.preferitsService.afegirPreferit(element);
    }
  }
}
