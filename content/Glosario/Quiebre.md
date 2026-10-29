El **Quiebre** indica cuánta Dureza pierde un objeto cuando un ataque o efecto consigue deteriorarlo.

## Dureza y umbral

La Dureza de un objeto se escribe como **Dureza actual(Umbral)**. Por ejemplo, **14(10)** representa:

| Valor | Función |
|---|---|
| **Dureza actual: 14** | Cuánto puede soportar el objeto antes de quedar inutilizable. |
| **Umbral: 10** | El valor que debe superarse para afectar al objeto mediante Quiebre. |

El valor de **Quiebre(#)** indica la cantidad que se resta de la Dureza actual cuando se aplica el Quiebre. Esta pérdida **no reduce el umbral**.

La **Dureza original** conserva el valor que tenía el objeto antes de deteriorarse y sirve como referencia para las reparaciones.

## Cuándo comprobar el Quiebre

Comprueba si se aplica Quiebre cuando una regla lo indique. Por ejemplo, cada [[Bloqueo]] realizado con un arma requiere comprobar si esa arma sufre Quiebre por el ataque recibido.

## Resolver el Quiebre

1. Consulta el **umbral del objeto** y el **valor de Quiebre** del ataque o efecto.
2. El Quiebre se aplica automáticamente si se cumple alguna de estas condiciones:
   - **Quiebre + Capacidad de Fuerza invertida** supera el umbral.
   - La **Fuerza total del impacto** supera el umbral.
   - Una habilidad o poder indica que aplica el Quiebre.
3. Si no se cumple ninguna de esas condiciones, el **GM decide si se aplica Quiebre**, teniendo en cuenta si **la tirada del ataque es alta** o **el arma es poderosa**.
4. Cuando se aplique Quiebre, **resta su valor de la Dureza actual** del objeto y conserva su umbral.

## Ejemplo

Un escudo tiene **Dureza 14(10)** y recibe un efecto de **Quiebre(4)**. Si se aplica el Quiebre, pierde **4 puntos de Dureza actual** y queda en **10(10)**. Su Dureza original sigue siendo **14**.
