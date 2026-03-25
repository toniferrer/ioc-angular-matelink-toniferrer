import { Component } from '@angular/core';
import { LINKS_MOCK } from './mocks/dades-mock';
import { Links } from './models/links.model';
import { LlistaLinksComponent } from './components/llista-links/llista-links.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LlistaLinksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  links: Links[] = LINKS_MOCK;
}
