# Optimització

## ChangeDetectionStrategy.OnPush

### Components optimitzats
Components de presentació als quals s'ha aplicat `OnPush` per millorar el rendiment.
   Component | Motiu |
 | `ElementCardComponent` | Component de presentació que només rep dades via `@Input()`.
 | `PreferitsPanelComponent` | Component de presentació que només rep una llista d'elements via `@Input()`.|

---

## Virtualització

### Configuració
Virtualització de llistes grans amb Angular CDK per millorar el rendiment.
 | Paràmetre | Valor | Descripció |
 | `itemSize` | 210px | Alçada de cada element de la llista (inclou el component `app-element-card`). |
 | Alçada del viewport | 500px | Alçada del contenedor visible (`cdk-virtual-scroll-viewport`). |