import { Component } from '@angular/core';
import { LINKS_MOCK } from './mocks/dades-mock';
import { Links } from './models/links.model';
import { LlistaLinksComponent } from './components/llista-links/llista-links.component';
import { CommonModule } from '@angular/common';
import { BarraCercaComponent } from './components/barra-cerca/barra-cerca.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LlistaLinksComponent, BarraCercaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  links: Links[] = LINKS_MOCK;
  linksFiltrados: Links[] = this.links;
  textoActual = '';

  filtrarLinks(texto: string): void {
    this.textoActual = texto;

    if (!texto) {
      this.linksFiltrados = this.links;
      return;
    }

    this.linksFiltrados = this.links.filter(link =>
      link.titulo.toLowerCase().includes(texto.toLowerCase()) ||
      link.id.toString().includes(texto)
    );

  }
}
