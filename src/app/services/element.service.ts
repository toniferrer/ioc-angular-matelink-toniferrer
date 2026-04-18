import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ElementApiResponse, ElementCataleg } from '../models/element.model';
import { environment } from '../../environments/environment';
import { adaptarElementsApi } from '../adaptadors/element.adaptador';
import { catchError, map} from 'rxjs/operators';
import { Observable, of, BehaviorSubject } from 'rxjs';


@Injectable ({ providedIn: 'root'})

export class ElementService {
  private http = inject(HttpClient);

  private validantSource = new BehaviorSubject<boolean>(false);
  validant$ = this.validantSource.asObservable();

  elements = signal<ElementCataleg[]>([]);
  carregant = signal<boolean>(false);
  error = signal<string | null>(null);

  obtenirPopulars(): void {
    this.carregant.set(true);
    this.error.set(null);

    this.http
      .get<ElementCataleg[]>('${enviroment.apiUrl}/elements?popular=true')
      .pipe(
        catchError((err) => {
          this.error.set('Error al carregar elements populars.');
          this.carregant.set(false);
          return of([]);
        })
      )
      .subscribe({
        next: (data) => {
          this.elements.set(data);
          this.carregant.set(false);
        },
        error: () => this.carregant.set(false),
      });
  }

  cercar (terme: string):void {
    this.carregant.set(true);
    this.error.set(null);

    this.http
      .get<ElementApiResponse[]>(`${environment.apiUrl}/elements?nom_like=${terme}`)
      .pipe(
        map(adaptarElementsApi),
        catchError((err) => {
          this.error.set('Error al cercar elements.');
          this.carregant.set(false);
          return of([]);
        })
      )
      .subscribe({
        next: (data) => {
          this.elements.set(data);
          this.carregant.set(false);
        },
        error: () => this.carregant.set(false),
      });
  }

  setValidant(isValidant: boolean) {
    this.validantSource.next(isValidant);
  }

  codiDisponible(terme: string): Observable<boolean> {
    return this.http.get<any[]>(`${environment.apiUrl}/elements?nom_like=${terme}`).pipe(
      map((resultats) => resultats.length > 0)
    );
  }
}
