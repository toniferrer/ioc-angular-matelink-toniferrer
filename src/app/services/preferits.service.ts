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

  const elementAmbNotes: ElementCataleg = {
    ...element,
    notes: element.notes ? [...element.notes] : []
  };

  this.preferitsSignal.update(preferits => [...preferits, elementAmbNotes]);
  this.guardarPreferits();
}

eliminarPreferit(id: number): void {
  this.preferitsSignal.update(preferits =>
    preferits.filter(p => p.id !== id)
  );
  
  this.guardarPreferits();
}

afegirNota(elementId: number, nota: string): void {
  this.preferitsSignal.update(preferits =>
    preferits.map(p =>
      p.id === elementId ? { ...p, notes: [...(p.notes || []), nota] } : p
    )
  );

  this.guardarPreferits();
}

  eliminarNota(elementId: number, index: number): void {
  this.preferitsSignal.update(preferits =>
    preferits.map(p =>
      p.id === elementId ? { ...p, notes: p.notes?.filter((_, i) => i !== index) } : p
    )
  );

  this.guardarPreferits();
}

}