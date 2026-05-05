import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementService } from '../../services/element.service';
import { ElementCataleg } from '../../models/element.model';
import { PreferitsService } from '../../services/preferits.service';
import { FormulariCercaComponent } from '../../components/formulari-cerca/formulari-cerca.component';
import { PreferitsPanelComponent } from '../../components/preferits-panel/preferits-panel.component';
import { LlistatComponent } from '../../components/llistat/llistat.component';

@Component({
  selector: 'app-cataleg-page',
  standalone: true,
  imports: [CommonModule, PreferitsPanelComponent, LlistatComponent],
  templateUrl: './cataleg-page.component.html',
  styleUrl: './cataleg-page.component.scss'
})

export class CatalegPage {
  terme = '';
  elementService = inject(ElementService);
  preferitsService = inject(PreferitsService);

  buscar() {
    if (this.terme.trim()) {
      this.elementService.cercar(this.terme);
    }
  }
}
