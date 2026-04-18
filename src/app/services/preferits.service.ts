import { Injectable, signal, computed } from '@angular/core';
import { ElementCataleg } from '../models/element.model';

@Injectable({
  providedIn: 'root'
})
export class PreferitsService {
  private readonly CLAU_STORAGE = 'preferits_cataleg';
  private readonly preferitsSignal = signal<ElementCataleg[]>([]);

  readonly preferits = this.preferitsSignal.asReadonly();
  readonly totalPreferits = computed(() => this.preferits().length);

  constructor() {
    this.carregarPreferits();
  }

  private carregarPreferits(): void {
    const dades = localStorage.getItem(this.CLAU_STORAGE);
    if (dades) {
      try {
        const preferits = JSON.parse(dades) as ElementCataleg[];
        this.preferitsSignal.set(preferits);
      } catch (error) {
        console.error('Error carregant preferits:', error);
        this.preferitsSignal.set([]);
      }
    }
  }


private guardarPreferits(): void {
  localStorage.setItem(this.CLAU_STORAGE, JSON.stringify(this.preferitsSignal()));
}

esPreferit(id: number): boolean {
  return this.preferitsSignal().some(p => p.id === id);
}

afegirPreferit(element: ElementCataleg): void {
  if (this.esPreferit(element.id)) {
    return;
  }

  this.preferitsSignal.update(preferits => [...preferits, element]);
  this.guardarPreferits();
}

eliminarPreferit(id: number): void {
  this.preferitsSignal.update(preferits =>
    preferits.filter(p => p.id !== id)
  );
  this.guardarPreferits();
}

}