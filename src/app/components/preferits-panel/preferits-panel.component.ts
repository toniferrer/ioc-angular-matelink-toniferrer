import { Component, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PreferitsService } from '../../services/preferits.service';
import { ElementCataleg } from '../../models/element.model';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preferits-panel',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './preferits-panel.component.html',
  styleUrl: './preferits-panel.component.scss'
})
export class PreferitsPanelComponent implements OnInit {
  preferitsService = inject(PreferitsService);
  fb = inject(FormBuilder);
  formulari: FormGroup;

  constructor() {
    this.formulari = this.fb.group({});
  }

  ngOnInit(): void {
    this.iniciarFormulari();
  }

  iniciarFormulari(): void {
    this.preferitsService.preferits().forEach(preferit => {
      this.formulari.addControl(
        preferit.id.toString(),
        this.fb.array((preferit.notes || []).map(nota => this.fb.control(nota, Validators.minLength(3))))
      );
    });
  }

  getNotesFormArray(elementId: number): FormArray {
    return this.formulari.get(elementId.toString()) as FormArray;
  }

  afegirNota(elementId: number): void {
    const notesFormArray = this.getNotesFormArray(elementId);
    notesFormArray.push(this.fb.control('', Validators.minLength(3)));
  }

  eliminarNota(elementId: number, index: number): void {
    const notesFormArray = this.getNotesFormArray(elementId);
    notesFormArray.removeAt(index);
    
    this.preferitsService.eliminarNota(elementId, index);
  }

  guardarNota(elementId: number, index: number): void {
    const notesFormArray = this.getNotesFormArray(elementId);
    const notaControl = notesFormArray.at(index);

    if (notaControl.valid) {
      this.preferitsService.afegirNota(elementId, notaControl.value);
    }
  }

  getErrorMessage(elementId: number, index: number): string {
    const noteControl = this.getNotesFormArray(elementId).at(index);

    if (noteControl.hasError('minlength')) {
      return 'Mínim tens que escriure 3 caràcters';
    }

    return '';
  }

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
