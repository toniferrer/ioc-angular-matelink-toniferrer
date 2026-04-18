import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { ElementService } from '../../services/element.service';
import { codiDisponibleValidador } from '../../validadors/codi-disponible.validador';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-formulari-cerca',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulari-cerca.component.html',
  styleUrl: './formulari-cerca.component.scss'
})
export class FormulariCercaComponent implements OnInit, OnDestroy {
  formulariCerca!: FormGroup;
  estaValidant = false;
  private subscriptions = new Subscription();

  constructor(
    private fb: FormBuilder,
    private elementService: ElementService
  ) {}
  
  ngOnInit(): void {
    this.formulariCerca = this.fb.group({
      terme: ['', 
        [Validators.minLength(2), 
        Validators.maxLength(50)
      ],
      [codiDisponibleValidador(this.elementService)]
      ]
    });

    this.subscriptions.add(
      this.elementService.validant$.subscribe(validant => {
        this.estaValidant = validant;
      })
    );

    this.formulariCerca.get('terme')?.valueChanges
    .pipe(
      debounceTime(400),
      distinctUntilChanged()
    )
    .subscribe(terme => {
      const control = terme?.trim();
      if (control && this.formulariCerca.get('terme')?.valid) {
        this.cercar();
      }
    });
  }

  cercar(): void {
    const terme = this.formulariCerca.get('terme')?.value;
    this.elementService.cercar(terme);
  }

  netejar(): void {
    this.formulariCerca.reset();
  }

   get estaCarregant(): boolean {
    return this.elementService.carregant();
  }

  get termeInvalid(): boolean {
    const control = this.formulariCerca.get('terme');
    return !!(control?.invalid && (control?.dirty || control?.touched));
  }

  get missatgeError(): string {
    const control = this.formulariCerca.get('terme');
    if (control?.hasError('minlength')) {
      return 'Mínim 2 caràcters';
    } else if (control?.hasError('sensResultats')) {
      return 'No hi ha resultats';
    }
    return '';
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
