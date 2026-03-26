import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-barra-cerca',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './barra-cerca.component.html',
  styleUrl: './barra-cerca.component.scss'
})

export class BarraCercaComponent {
  @Output() cambio = new EventEmitter<string>();

  texto = '';

  buscar(): void {
    if (this.texto.length >= 3) {
      this.cambio.emit(this.texto);
    }
  }

  borrar(): void {
    this.texto = '';
    this.cambio.emit('');
  }
}
