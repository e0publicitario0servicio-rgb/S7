## Activación

- **Acción(-):** Requiere uno o más tipos de acción específicos para utilizarse. Si no se indica el tipo, se considera **Acción(Activa)**. ^accion
	- **Activa:** Requiere una acción activa para ejecutarse. ^accion-activa
    - **Pasiva:** Requiere una acción pasiva y puede realizarse mientras se hacen otras acciones activas. ^accion-pasiva
    - **Reacción:** Solo puede utilizarse cuando ocurre el desencadenante indicado por la propia capacidad o por las circunstancias. ^reaccion
    - **Libre:** No cuesta ningún tipo de acción y puede activarse libremente dentro del turno del usuario. ^libre

- **Intrusiva:** Puede activarse fuera del turno del usuario, antes de que otro personaje declare su siguiente acción. ^intrusiva

- **Movimiento(#):** Consume la cantidad indicada del movimiento disponible del usuario. ^movimiento

- **Mantenida(#):** El efecto puede sostenerse en el tiempo usando acciones pasivas cada turno. El número indica cuántas acciones se requieren. ^mantenida

- **Canalizada(#):** El efecto continúa activo mientras se pague su coste por turno, como Maná o Energía; usualmente, el mismo coste que al activarlo. ^canalizada

- **Exceso:** Al pagar adicionalmente el coste indicado entre paréntesis, se aplican los beneficios señalados entre corchetes en la descripción. ^exceso

- **Cada(#):** Limita la frecuencia de uso. Cuando permite un uso por periodo, se escribe únicamente el periodo: **Cada(Turno)**, **Cada(Ronda)**, **Cada(Escena)** o **Cada(Día)**. El símbolo `/` indica alternativas y no se utiliza para separar la cantidad del periodo. ^cada

- **Origen(-):** Indica desde dónde aparece el efecto. Si no se cuenta con el origen requerido, no puede utilizarse. ^origen

- **Concentración(#):** Si el usuario sufre daño o distracciones, debe realizar una tirada contra la dificultad indicada o el efecto se interrumpe. ^concentracion

## Resolución

- **Determinada(#):** No requiere realizar una tirada para resolver su efecto. Si posee un valor entre paréntesis, se considera dicho valor. ^determinada

- **Precisión(#):** Reduce penalizadores aplicados por condiciones perceptivas, como oscuridad, niebla, invisibilidad, camuflaje u otros efectos similares. ^precision

- **Sencillo:** Reduce el rango de pifia en 1 punto, hasta un mínimo de 0. ^sencillo

- **Complejo:** Incrementa en 1 el rango de pifia. Si ocurre una pifia, su grado también aumenta en 1. ^complejo

- **Modificador(±#):** Suma o resta el valor indicado a la tirada. ^modificador

- **Reducción(#):** Disminuye la dificultad de una tirada en el valor indicado. ^reduccion

- **Incremento(#):** Aumenta la dificultad de una tirada en el valor indicado. ^incremento

- **Re-roll(#):** Permite repetir una o más tiradas según el número indicado. Existen tres tipos: ^re-roll
    - **Positivo:** Se debe realizar la tirada adicional y elegir el mejor resultado. Se representa con el signo `+`. ^re-roll-positivo
    - **Negativo:** Se debe realizar la tirada adicional y elegir el peor resultado. Se representa con el signo `-`. ^re-roll-negativo
    - **Neutro:** El nuevo resultado reemplaza al anterior. Volver a tirar es opcional. ^re-roll-neutro

## Alcance y objetivos

- **Área(#):** El efecto afecta a todo objetivo dentro del radio o tamaño indicado. La forma del área es circular. ^area

- **Cono(#/#):** Afecta un cono. El primer valor indica la distancia que le toma ensancharse 1 y el segundo, su largo máximo. ^cono

- **Línea(#):** Afecta una línea con la longitud indicada. ^linea

- **Muro(#):** Crea una barrera lineal de la longitud indicada, delante del personaje, que ve el muro a lo ancho. ^muro

- **Anillo(#):** Afecta únicamente una circunferencia alrededor del punto elegido. ^anillo

- **Arco(#):** Salta la distancia indicada para llegar al punto elegido. ^arco

- **Aura(#):** El área se mueve junto al usuario. Su forma es circular. ^aura

- **Alcance(#):** Distancia máxima desde la que puede utilizarse la capacidad. Si no se especifica un valor, se utiliza el alcance del personaje. ^alcance

- **Objetivo(#):** Número máximo de objetivos que puede afectar simultáneamente. ^objetivo

- **Atravesamiento(#):** El efecto continúa atravesando la cantidad indicada de objetivos sin detenerse. ^atravesamiento

- **Guiado(#):** El efecto posee los metros de movimiento indicados por turno y el usuario puede modificar su trayectoria mientras permanezca activo. ^guiado

- **Selectivo:** El usuario puede excluir objetivos dentro del área. ^selectivo

- **Criterio(-):** Limita el tipo de objetivos que pueden ser afectados, como criaturas, piedras o humanos. ^criterio

- **Anclado(#):** El efecto permanece ligado al objetivo o punto elegido. Si supera la distancia indicada, finaliza inmediatamente. ^anclado

- **Condición(-):** La capacidad solo puede activarse si el usuario cumple la condición indicada entre paréntesis. ^condicion

## Persistencia

- **Duración(#):** El efecto permanece activo durante una cantidad fija de turnos o lapsos. ^duracion

- **Remoto:** Una vez creado, el efecto continúa funcionando aunque el usuario salga de su alcance, salvo que la descripción indique lo contrario. ^remoto

- **Creciente(#):** Cada repetición aumenta en la cantidad indicada el valor señalado por la propia capacidad, utilizando la misma tirada inicial. ^creciente

- **Decreciente(#):** Cada repetición reduce en la cantidad indicada el valor señalado por la propia capacidad, utilizando la misma tirada inicial. ^decreciente

- **Independiente:** No requiere que el usuario lo mantenga; permanece activo por sí solo una vez que ha sido activado manual o pasivamente. ^independiente

- **Detonable:** El usuario decide cuándo activar el efecto después de crearlo. ^detonable

- **Única:** Solo puede haber una instancia activa a la vez. Activar otra desactiva la anterior. ^unica

- **Acumulable(#):** Los efectos se suman con usos repetidos, hasta el valor máximo indicado. ^acumulable

- **Expansivo(#):** El área aumenta en la cantidad indicada cada turno. ^expansivo

- **Contractivo(#):** El área disminuye en la cantidad indicada cada turno. ^contractivo


## Propiedades especiales

- **Infatigable:** No consume recursos, como Maná, Energía o Estrés, si se usa fuera de combate. ^infatigable

- **Drenador(-):** Convierte parte del valor perdido por el objetivo en un beneficio equivalente para el usuario. Entre paréntesis puede especificarse el medidor afectado, como Salud, Maná, Energía o Estrés. ^drenador

- **Invisible:** No puede ser visto y aplica los penalizadores correspondientes establecidos por las reglas de [[Ceguera]]. ^invisible

- **Protección:** Funciona como puntos de Salud temporales que se pierden primero y desaparecen al final de la escena. Esa Salud temporal no puede curarse ni recuperarse salvo que se indique lo contrario. ^proteccion

- **Mejora:** Potencia un ataque sin poder combinarse con otras mejoras en el mismo ataque. ^mejora

- **Combo(#):** Si se usa tras la acción indicada, obtiene un beneficio adicional. ^combo

- **Defensa(-):** Indica la compatibilidad con uno o más tipos de defensa. Puede especificarse mediante Bloqueo, Desvío, Esquiva o Sobrenatural. ^defensa

- **Hereda:** El objetivo del poder también recibe beneficios de pasivas o efectos de la misma ley u otros compatibles. ^hereda

- **Ignora(-):** Ignora la Protección o Armadura según indique la capacidad. ^ignora

- **Desplazamiento(#):** Empuja, atrae o mueve automáticamente. Si atrae, utiliza el signo `-`; si empuja, el signo `+`; si el desplazamiento es libre, no lleva signo. No consume Movimiento. ^desplazamiento