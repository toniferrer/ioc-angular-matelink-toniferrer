import { Component, Input } from '@angular/core';
import { Links } from '../../models/links.model';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-tarjeta-links',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './tarjeta-links.component.html',
  styleUrl: './tarjeta-links.component.scss'
})

export class TarjetaLinksComponent {
  @Input() links!: Links;
}
