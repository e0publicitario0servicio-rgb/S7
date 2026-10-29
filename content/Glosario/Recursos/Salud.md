---
summary: Medidor del daño que puede soportar el personaje y de su recuperación.
---
La **Salud** es el medidor que representa cuánto daño puede soportar el personaje.

## Pérdida de Salud

Cuando el personaje recibe [[Daño]], resta de su Salud actual la cantidad que corresponda después de resolver las defensas, protecciones y reducciones aplicables.

Cuando una regla produzca una cantidad de daño fraccionaria, **redondea hacia arriba** al siguiente entero. Por ejemplo, un cuarto de 7 puntos de daño se convierte en **2**.

Distingue entre perder Salud y reducir su máximo: recibir daño normalmente disminuye la cantidad actual; un efecto que reduzca la Salud máxima debe indicarlo expresamente.

## Salud en 0

Cuando la Salud llega a **0**, el personaje queda [[Estados alterados#Inconsciente|Inconsciente]], independientemente del tipo de daño que lo haya provocado.

Si el daño de un golpe supera la Salud restante, esta queda en **0** y se descarta el exceso de ese golpe.

Si un **ataque físico** reduce su Salud a 0, también obtiene [[Estados alterados#Sangrado|Sangrado]](1). Otros tipos de ataque o daño no causan necesariamente Sangrado; dependerá del efecto que lo haya provocado.

La [[Capacidad]] de Constitución restante actúa como una reserva de supervivencia. Los daños posteriores que reciba mientras permanezca con 0 de Salud se descuentan de esa reserva, incluido el causado por Sangrado.

_Por ejemplo, un personaje con 3 de Salud y 6 de Capacidad de Constitución recibe un golpe de 8 puntos de daño final. Queda con 0 de Salud y conserva sus 6 puntos de Capacidad de Constitución. Los daños que reciba después se descuentan de esa Capacidad._

Si tanto la Salud como la Capacidad de Constitución llegan a **0**, el personaje muere.

## Recuperación

La Salud puede recuperarse mediante curación, [[Regeneración]] u otros efectos que lo indiquen. Cada método establece cuánto recupera y qué condiciones requiere.

Recuperar Salud no permite superar su máximo, salvo que una regla indique lo contrario.
