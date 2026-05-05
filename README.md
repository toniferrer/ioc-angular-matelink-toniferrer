# IocAngularMatelinkToniferrer

## Descripció
Breu descripció de l'aplicació (ex: "Aplicació de gestió de catàleg d'elements amb autenticació i llistat virtualitzat").

---

## Mapa de Rutes
   Path | Component | Accés |
 |------|-----------|-------|
 | `/` | Redirecció | Públic |
 | `/cataleg` | CatalegPage | Públic |
 | `/cerca` | Cerca | Públic |
 | `/detall/:id` | Detall | Públic |
 | `/preferits` | Preferits | Privat (requereix autenticació) |
 | `/login` | Login | Públic |
 | `**` | — | Redirigeix a `/cataleg` |

---

## Instruccions d'Execució en Local

1. Clonar el repositori:
   git clone [url-repositori]

2. Navegar al directori del projecte:
    cd nom-projecte

3. Intal.lar les dependències:
    npm install

4. Iniciar el servidor de desenvolupament:
    ng serve

5. Obrir el navegador a:
    http://localhost:4200

## Build de Producció

Per generar el build de producció:
    ng build --configuration production


Mida aproximada del bundle: [Ex: 234.56 kB (Initial Chunk) + 45.67 kB (Lazy Chunk)].
Els fitxers generats es troben a la carpeta dist/nom-app/browser/.

Credencials de Prova
Per accedir a la secció protegida (/preferits):

Email: admin@test.com
Contrasenya: 1234