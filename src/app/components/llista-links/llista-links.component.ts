import { Component, Input } from '@angular/core';
import { Links } from '../../models/links.model';
import { CommonModule } from '@angular/common';
import { TarjetaLinksComponent } from '../tarjeta-links/tarjeta-links.component';


@Component({
  selector: 'app-llista-links',
  standalone: true,
  imports: [CommonModule, TarjetaLinksComponent],
  templateUrl: './llista-links.component.html',
  styleUrl: './llista-links.component.scss'
})

export class LlistaLinksComponent {
  @Input({ required: true }) links: Links[] = [];

  trackById(index: number, link: Links): number {
    return link.id;
  }
}
