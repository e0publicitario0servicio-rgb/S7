El **Quiebre** indica cuánta Dureza pierde un objeto cuando se supera una **prueba de Quiebre** contra él.

## Dureza y umbral

La Dureza de un objeto se escribe como **Dureza total(Umbral)**. Por ejemplo, **14(10)** representa:

| Valor | Función |
|---|---|
| **Dureza total: 14** | Cuánto puede soportar el objeto antes de quedar inutilizable. |
| **Umbral: 10** | El valor que debe superarse para afectar al objeto mediante Quiebre. |

El valor de **Quiebre(#)** indica la cantidad que se resta de la Dureza total cuando la prueba tiene éxito. Esta pérdida **no reduce el umbral**.

## Cuándo realizar la prueba

Realiza una prueba de Quiebre cuando una regla lo indique. Por ejemplo, cada [[Bloqueo]] realizado con un arma exige una prueba de Quiebre contra esa arma.

## Resolver el Quiebre

1. Consulta el **umbral del objeto** y el **valor de Quiebre** del ataque o efecto.
2. Comprueba si se cumple alguna de estas condiciones de éxito automático:
   - **Quiebre + Capacidad de Fuerza invertida** supera el umbral.
   - La **Fuerza total del impacto** supera el umbral.
   - Una habilidad o poder indica que supera la prueba.
3. Si la prueba tiene éxito, **resta el valor de Quiebre de la Dureza total** del objeto y conserva su umbral.

En las comparaciones anteriores, **superar** significa obtener un valor mayor que el umbral; igualarlo no cumple esa condición de éxito automático.

> [!warning] Prueba sin éxito automático
> Está pendiente definir cómo se resuelve la prueba cuando no se cumple ninguna de las condiciones anteriores: qué dado se tira, qué valores se suman y con qué dificultad se compara. La ausencia de éxito automático no establece por sí sola que la prueba falle.

## Ejemplo

Un escudo tiene **Dureza 14(10)** y recibe un efecto de **Quiebre(4)**. Si la prueba de Quiebre tiene éxito, pierde **4 puntos de Dureza total** y queda en **10(10)**.

El **10 exterior** es su nueva Dureza total. El **10 entre paréntesis** sigue siendo su umbral.
