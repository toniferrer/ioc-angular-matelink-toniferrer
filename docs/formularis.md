# FormulariCercaComponent

## Funcionalitat

Formulari reactiu per cercar elements amb validació de longitud mínima, máxima i cerca automàtica amb debounce.

## Validacions

| Camp | Validació | Missatge d'error |
|------|-----------|------------------|
| terme | `minLength(2)` | "Mínim 2 caràcters" |

## Comportament

**Cerca automàtica:** Després de 400ms sense entrades, cerca automàticament.
**Debounce:** Evita cerques excessives.
**Botó netejar:** Apareix si hi ha entrada i elimina el value del input.
