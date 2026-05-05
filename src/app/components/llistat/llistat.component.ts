import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementCardComponent } from '../element-card/element-card.component';
import { FormulariCercaComponent } from '../formulari-cerca/formulari-cerca.component';
import { ElementService } from '../../services/element.service';
import { PreferitsService } from '../../services/preferits.service';
import { CdkVirtualScrollViewport, CdkVirtualForOf, CdkFixedSizeVirtualScroll } from '@angular/cdk/scrolling';
import { CdkScrollableModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-llistat',
  standalone: true,
  imports: [CommonModule, ElementCardComponent, FormulariCercaComponent, CdkVirtualScrollViewport, CdkVirtualForOf, CdkScrollableModule, CdkFixedSizeVirtualScroll],
  templateUrl: './llistat.component.html',
  styleUrl: './llistat.component.scss'
})
export class LlistatComponent {
  alcadaElement = 210;
  terme = '';
  constructor(
    public elementService: ElementService,
    private preferitsService: PreferitsService
  ) {}

  carregaPopulars() {
    this.elementService.obtenirPopulars();
  }

  reintentar() {
    if (this.terme.trim()) {
      this.elementService.cercar(this.terme);
    } else {
      this.elementService.obtenirPopulars();
    }
  }

  esPreferit(id: number): boolean {
    return this.preferitsService.esPreferit(id);
  }

  togglePreferit(element: any) {
    this.preferitsService.afegirPreferit(element);
  }
}
