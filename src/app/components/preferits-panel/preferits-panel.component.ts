import { Component, inject } from '@angular/core';
import { PreferitsService } from '../../services/preferits.service';
import { ElementCataleg } from '../../models/element.model';

@Component({
  selector: 'app-preferits-panel',
  standalone: true,
  imports: [],
  templateUrl: './preferits-panel.component.html',
  styleUrl: './preferits-panel.component.scss'
})
export class PreferitsPanelComponent {
  preferitsService = inject(PreferitsService);

  togglePreferit(element: ElementCataleg): void {
    if (this.preferitsService.esPreferit(element.id)) {
      this.preferitsService.eliminarPreferit(element.id);
    } else {
      this.preferitsService.afegirPreferit(element);
    }
  }

  esPreferit(elementId: number): boolean {
    return this.preferitsService.esPreferit(elementId);
  }
}
