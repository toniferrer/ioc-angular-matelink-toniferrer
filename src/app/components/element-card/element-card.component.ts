import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-element-card',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './element-card.component.html',
  styleUrl: './element-card.component.scss'
})
export class ElementCardComponent {
  @Input() element!: { id: number; titol: string; descripcio: string };
  @Input() esPreferit: boolean = false;
  @Output() togglePreferit = new EventEmitter<any>();
}
