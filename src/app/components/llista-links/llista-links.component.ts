import { Component, Input } from '@angular/core';
import { Links } from '../../models/links.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-llista-links',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './llista-links.component.html',
  styleUrl: './llista-links.component.scss'
})
export class LlistaLinksComponent {
  @Input({ required: true }) links: Links[] = [];
}
