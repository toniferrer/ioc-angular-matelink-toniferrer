# Mapeig de Camps: API → Model Intern

|**Camp API (ElementApiResponse)**| **Camp Intern (ElementCataleg)** | **Tipus TypeScript** 
| id | id | string              
| nom | titol | string 
| descripcio | descripcio | string
| categoria | categoria | string
| preu | preu | number   
| imatge | imatgeUrl | string
| popular | esPopular | boolean
| stock | unitats | number

## Funcionalitat
Defineix com estructurem les dades dels elements, tant per rebre-les del servidor com per fer-les servir dins l'app.

## Comportament
* **Interfície API:** Defineix el format original que ve de la base de dades amb noms com `nom` o `stock`.
* **Interfície Interna:** Reanomena camps per fer-los més clars i afegeix l'opció de tenir `notes`.
* **Flexibilitat:** El model intern està preparat per portar un llistat de comentaris de tipus text si cal.