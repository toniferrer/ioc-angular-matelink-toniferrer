import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ElementService } from '../../services/element.service';
import { ElementCataleg } from '../../models/element.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detall',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detall.component.html',
  styleUrl: './detall.component.scss'
})
export class DetallComponent implements OnInit {
  element?: ElementCataleg;

  constructor(
    private route: ActivatedRoute,
    private elementService: ElementService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.elementService.obtenirElementPerId(+id).subscribe({
        next: (data) => {
          this.element = data;
        },
        error: (err) => {
          console.error('Error al carregar l\'element:', err);
          this.element = undefined; // Asegura que se muestre el mensaje de "no trobat"
        }
      });
    }
  }

}
