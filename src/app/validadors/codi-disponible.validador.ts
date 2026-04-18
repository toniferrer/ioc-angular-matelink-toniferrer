import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { switchMap, map, delay, catchError } from 'rxjs/operators';
import { ElementService } from '../services/element.service';

export function codiDisponibleValidador(elementService: ElementService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
        if (!control.value || control.value.trim().length === 0) {
            return of(null);
        }

        elementService.setValidant(true);

        return of (control.value).pipe(
            delay(9000),
            switchMap((terme: string) => {
                return elementService.codiDisponible(terme).pipe(
                    map((disponible: boolean) => {
                        elementService.setValidant(false);
                        return disponible ? null : { sensResultats: true };
                    }),
                    catchError(() => {
                        elementService.setValidant(false);
                        return of(null);
                    })
                );
            })
        );
    };
}