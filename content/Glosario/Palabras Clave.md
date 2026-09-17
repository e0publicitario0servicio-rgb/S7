#### **Activación**

- **Acción (-):** Requiere uno o más tipos de acción específica para utilizarse, si no se especifica el tipo de acción, siempre será Si no se indica un tipo, se considera Acción(Activa):
    - **Activa:** Requiere una acción activa para ejecutarse.
    - **Pasiva:** Requiere una acción pasiva, puede hacerse mientras se hacen otras acciones activas.
    - **Reacción:** Solo puede utilizarse cuando ocurre el desencadenante indicado por la propia capacidad o por las circunstancias.
    - **Libre:** No cuesta ningún tipo de acción y se puede activar libremente dentro de su turno.

- **Intrusiva:** Puede activarse fuera del turno del usuario antes de que otro personaje declare su siguiente acción.

- **Movimiento(#):** Consume la cantidad indicada del movimiento disponible del usuario.

- **Mantenida(#):** El efecto puede sostenerse en el tiempo usando acciones pasivas cada turno. El número indica cuántas acciones se requieren.

- **Canalizada(#):** El efecto continúa activo mientras se pague su coste por turno (como maná o energía), usualmente el mismo coste que al activarlo.

- **Exceso:** Al pagar adicionalmente el coste indicado entre paréntesis, se aplican los beneficios señalados entre corchetes en la descripción.

- **Cada(#):** Limita la frecuencia de uso. Entre paréntesis se indica la cantidad y el periodo correspondiente (Cada(1/Escena), Cada(3/Día), Cada(1), etc.).

- **Origen(-):** Indica desde dónde aparece el efecto, en caso de no contar con el origen, no se podrá utilizar.

- **Concentración (#):** Si el usuario sufre daño o distracciones, debe realizar una tirada (Dificultad #) o el efecto se interrumpe.


#### **Resolución**

- **Determinada (#):** No requiere realizar una tirada para resolver su efecto. Si posee un valor entre paréntesis, se considera dicho valor.

- **Precisión(#):** Reduce penalizadores aplicados por condiciones perceptivas (oscuridad, niebla, invisibilidad, camuflaje u otros efectos similares).

- **Sencillo:** Reduce el rango de pifia en 1 punto (mínimo 0).

- **Complejo:** Incrementa en 1 el rango de pifia. Si ocurre una pifia, su grado también aumenta en 1.

- **Modificador (±#):** Suma o resta el valor indicado a la tirada.

- **Reducción(#):** Disminuye la dificultad de una tirada en el valor indicado.

- **Incremento(#):** Aumenta la dificultad de una tirada en el valor indicado.

- **Re-roll(#):** Permite repetir una o más tiradas dependiendo el número. Puede ser:
	- Positivo: Se debe realizar la tirada adicional, elige el mejor resultado, se representa con un "+".
	- Negativo: Se debe realizar la tirada adicional, elige el peor resultado, se representa con un "-".
	- Neutro: El nuevo resultado reemplaza al anterior, volver a tirar es opcional.


#### **Alcance y objetivos**

- **Área (#):** El efecto afecta a todo objetivo dentro del radio o tamaño indicado. La forma del área es circular.

- **Cono(#/#):** Afecta un cono con la longitud indicada, el primer valor siendo la distancia que le toma ancharse 1 y el segundo valor el largo máximo.

- **Línea(#):** Afecta una línea con la longitud indicada.

- **Muro(#):** Crea una barrera lineal de la longitud indicada, delante del personaje viendo el muro a lo ancho.

- **Anillo(#):** Afecta únicamente una circunferencia alrededor del punto elegido.

- **Arco(#):** Salta una distancia para llegar al punto elegido.

- **Aura(#):** El área se mueve junto al usuario. La forma del área es circular.

- **Alcance(#):** Distancia máxima desde la que puede utilizarse la capacidad. Si no está especificado el valor es el alcance del personaje.

- **Objetivo(#):** Número máximo de objetivos que puede afectar simultáneamente.

- **Atravesamiento (#):** El efecto continúa atravesando un # de objetivos sin detenerse.

- **Guiado (#):** El efecto posee # metros de movimiento por turno y el usuario puede modificar su trayectoria mientras permanezca activo.

- **Selectivo:** El usuario puede excluir objetivos dentro del área.

- **Criterio (-):** Limita que tipo de objetivos puede ser, como Criaturas, Piedras, Humanos, etc.

- **Anclado (#):** El efecto permanece ligado al objetivo o punto elegido. Si supera la distancia indicada, finaliza inmediatamente.

- **Condición(-):** La capacidad solo puede activarse si el usuario cumple la condición indicada entre paréntesis.


#### **Persistencia**

- **Duración(#):** El efecto permanece activo durante una cantidad fija de turnos o lapsos.

- **Remoto:** Una vez creado, el efecto continúa funcionando, aunque el usuario salga de su alcance, salvo que la descripción indique lo contrario.

- **Creciente (#):** Cada repetición aumenta en # el valor indicado por la propia capacidad utilizando la misma tirada inicial.

- **Decreciente (#):** Cada repetición reduce en # el valor indicado utilizando la misma tirada inicial.

- **Independiente:** No requiere que el usuario lo mantenga; permanece activo por sí solo una vez que ha sido activado manual o pasivamente.

- **Detonable:** El usuario decide cuándo activar el efecto después de crearlo.

- **Única:** Solo puede haber una instancia activa a la vez. Activar otra desactiva la anterior.

- **Acumulable(#):** Los efectos se suman con usos repetidos, hasta el valor máximo indicado.

- **Expansivo(#):** El área aumenta en la cantidad indicada cada turno.

- **Contractivo(#):** El área disminuye cada turno.


#### Propiedades Especiales

- **Infatigable:** No consume recursos (maná, energía, estrés) si se usa fuera de combate.

- **Drenador (-):** Convierte parte del valor perdido por el objetivo en un beneficio equivalente para el usuario. Entre paréntesis puede especificarse el medidor afectado (Vida, Maná, Energía, Estrés...).

- **Invisible:** No puede ser visto y aplica los penalizadores correspondientes establecidos por las reglas de Ceguera.

- **Protección:** Funciona como puntos de salud temporales que se pierden primero y desaparecen al final de la escena. Esa salud temporal no puede curarse ni recuperarse salvo que se indique lo contrario.

- **Mejora:** Potencia un ataque sin poder combinarse con otras mejoras en el mismo ataque.

- **Combo(#):** Si se usa tras la acción indicada, obtiene un beneficio adicional.

- **Defensa (-):** Es compatible con uno o más tipos de defensa. Pero puede especificarse con Bloqueo, Desvío, Esquiva, Sobrenatural.

- **Hereda:** El objetivo del poder también recibe beneficios de pasivas o efectos de la misma ley u otros compatibles.

- **Ignora (-):** Ignora la Protección o Armadura según indique la capacidad.

- **Desplazamiento(#):** Empuja, atrae o mueve automáticamente, si atrae el símbolo es "-" si empuja es "+", si es libre no lleva símbolo. No consume Movimiento.