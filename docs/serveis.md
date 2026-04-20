# PreferitsService

## Funcionalitat
Aquest servei s'encarrega de guardar i gestionar els elements que l'usuari marca com a preferits.

## Comportament
* **Es recorda de tot:** Guarda la llista al navegador per no perdre-la en tancar la sessió.
* **Notes personals:** Permet escriure i esborrar comentaris a cada preferit.
* **Sempre al dia:** Utilitza *signals* per saber en tot moment quants preferits hi ha i quins són.

---

# ElementService

## Funcionalitat
És el servei que connecta l'app amb el servidor per buscar i portar les dades del catàleg.

## Comportament
* **Busca elements:** Té mètodes per portar els més populars o cercar per text.
* **Control d'espera:** Avisa l'app si s'estan carregant dades o si hi ha hagut algun error de connexió.
* **Comprovacions:** També serveix per mirar ràpidament si un nom o codi ja està agafat.