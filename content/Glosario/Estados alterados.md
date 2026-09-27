## Tipos de estado

- **Temporal:** Termina desapareciendo por sí solo, sin intervención, según sus reglas o la evolución lógica de la situación.
- **Permanente:** No desaparece por sí solo. Requiere una intervención que elimine el estado o la causa que lo mantiene.

## Dificultad para resistir

Si la regla establece una dificultad fija, utiliza ese valor. Cuando no la indique, calcula la dificultad a partir del **valor del estado alterado** y de su peligrosidad:

|Gravedad|Peligrosidad|Dificultad|
|---|---|---|
|**Hard**|Efectos especialmente peligrosos, como la muerte instantánea.|**Valor del estado +5**|
|**Easy**|Efectos menos mortales.|**Valor del estado +10**|

Los efectos Hard tienen una dificultad menor para facilitar que el personaje resista consecuencias especialmente graves.

La tirada utiliza la [[Resistencias|resistencia]] indicada por el estado o por la regla que lo provoca.

- **Alergia — Permanente:** Aplica un penalizador de **−4 a toda acción por exposición directa** al alérgeno y de **−2 por exposición indirecta**. El contacto que constituye cada exposición depende del alérgeno. Los penalizadores terminan cuando cesa la exposición, pero la alergia permanece. **Gravedad:** Hard con exposición directa; Easy con exposición indirecta. ^alergia

- **Aplastado — Permanente:** Causa daño igual al valor del estado y hace progresar la [[Asfixia]] cada turno. Se elimina cuando el personaje deja de estar sometido al aplastamiento. ^aplastado

- **Asfixia — Permanente:** Mientras el personaje no pueda respirar con normalidad, realiza una tirada de Aguante o Nadar cada turno, con dificultad inicial 0 y un aumento de +4 por tirada.  Consulta [[Asfixia]] para resolver sus consecuencias. ^asfixia

- **Atrapado — Permanente:** Impide moverse, girar y utilizar [[Dash]], lo que impide la [[Esquiva]]. Se elimina cuando el personaje se libera de aquello que lo mantiene atrapado. ^atrapado

- **Aturdimiento — Temporal:** En cada turno del afectado, reduce sus acciones activas disponibles en una cantidad igual al valor del estado, hasta un mínimo de 0. Su valor disminuye en **1 al finalizar ese turno** y el estado se elimina al llegar a 0. ^aturdimiento

- **Confusión — Temporal:** Obliga a atacar o interactuar con el objetivo más cercano. **Resistencia:** [[Resistencias|Mental]], con frecuencia [[Palabras Clave#^cada|Cada(Turno)]]. ^confusion

- **Deshidratación — Permanente:** Aplica un penalizador igual al valor del estado a la subresistencia de [[Resistencias|Calor]]. ^deshidratacion

- **Dolor — Temporal:** Aplica un penalizador a toda acción igual al valor del estado. Su duración depende de la causa que lo provoca; si esta establece un plazo, el estado termina cuando se cumple. ^dolor

- **Dormido — Temporal:** El personaje no puede actuar ni realizar defensas mientras duerme. El sueño natural termina al descansar lo necesario o cuando un estímulo suficiente lo despierta. Si el sueño es provocado por un efecto, realiza una resistencia a [[Resistencias|Inconsciente]] con frecuencia [[Palabras Clave#^cada|Cada(Turno)]]; superarla elimina el estado. Recibir daño lo despierta, salvo que el efecto indique lo contrario. ^dormido

- **Enfermo — Temporal:** Causa daño o un penalizador por día, según la enfermedad. El daño diario se distribuye entre las horas del día. **Resistencia:** [[Resistencias|Enfermedad]], con frecuencia [[Palabras Clave#^cada|Cada(Día)]]. ^enfermo

- **Ensordecido — Temporal:** Aumenta el penalizador por flanqueo en una cantidad igual al valor del estado, evita la percepción mediante el oído y aplica penalizador a Sentidos igual al valor, excepto frente al objetivo que el personaje está mirando. ^ensordecido

- **Envenenado — Temporal:** Causa daño por hora igual al valor del estado. Realiza una resistencia a [[Resistencias|Veneno]] con frecuencia [[Palabras Clave#^cada|Cada(Día)]]; superarla reduce el estado en 1 y fallarla lo aumenta en 1. Se elimina al llegar a 0. **Gravedad:** Easy entre 1 y 7; Hard a partir de 8. ^envenenado

- **Hambriento — Permanente:** Aplica un penalizador a toda acción según los días consecutivos sin alimentación suficiente: **−3** el primero, **−8** el segundo, **−14** el tercero y **−20** desde el cuarto. Cada día de alimentación suficiente reduce un grado de esta progresión: de −20 a −14, de −14 a −8, de −8 a −3 y de −3 a 0. Se elimina al llegar a 0. ^hambriento

- **Herida — Temporal:** Aplica un [[Palabras Clave#^re-roll-negativo|Re-roll negativo]] por cada nivel del estado. Su valor disminuye en **1 cada semana** y el estado se elimina al llegar a 0. ^herida

- **Inconsciente — Temporal:** El personaje no puede actuar ni realizar defensas. Cada vez que recibe daño, recibe además una cantidad de daño igual al valor del estado. Después puede realizar una resistencia a [[Resistencias|Inconsciente]] con un [[Palabras Clave#^re-roll-negativo|Re-roll negativo]]; superarla elimina el estado, siempre que no persista una condición que le impida recuperar la consciencia. ^inconsciente

- **Infección — Permanente:** Reduce cada recuperación de [[Salud]] en una cantidad igual al valor del estado, hasta un mínimo de 0. Requiere un tratamiento adecuado para comenzar a recuperarse. Mientras recibe tratamiento, realiza una resistencia a [[Resistencias|Enfermedad]] con frecuencia [[Palabras Clave#^cada|Cada(Día)]]; superarla reduce el estado en 1 y fallarla mantiene su valor. Se elimina al llegar a 0. **Gravedad:** Easy. ^infeccion

- **Intoxicado — Temporal:** Causa daño por turno igual al valor del estado. Al finalizar cada turno del afectado, aumenta en 1 si continúa expuesto a su causa o disminuye en 1 si la exposición ha terminado. Se elimina al llegar a 0. ^intoxicado

- **Ira — Temporal:** Otorga inmunidad al control mental. Si el personaje no ataca al origen de la Ira, recibe un [[Palabras Clave#^re-roll-negativo|Re-roll negativo]] a sus acciones. ^ira

- **Mareo — Temporal:** Aplica un penalizador a toda acción igual al valor del estado y [[Palabras Clave#^complejo|Complejo]] con un valor igual a la mitad del estado, redondeado hacia abajo. Si el resultado es 0, no aplica Complejo. Cuando cesa su causa, realiza una resistencia [[Resistencias|Mental]] al finalizar cada turno; superarla reduce el estado en 1. Se elimina al llegar a 0. **Gravedad:** Hard. ^mareo

- **Miedo — Permanente:** Aplica un [[Palabras Clave#^re-roll-negativo|Re-roll negativo]] a las acciones que no estén dirigidas a escapar del origen del miedo. Al finalizar cada turno en el que ya no perciba dicho origen, puede realizar una resistencia [[Resistencias|Mental]]; superarla elimina el estado. ^miedo

- **Ralentizado — Permanente:** Reduce el contador de [[Movimiento]] en una cantidad igual al valor del estado. ^ralentizado

- **Sangrado — Temporal:** Causa daño por turno igual a su valor. Se elimina mediante un tratamiento que detenga el sangrado o al recuperar la Salud perdida por la lesión que lo causó. ^sangrado

- **Suspendido — Permanente:** Impide [[Esquiva|esquivar]] y Andar. También se aplican las demás limitaciones lógicas de la situación. Se elimina cuando el personaje deja de estar suspendido. ^suspendido

- **Tambaleando — Temporal:** Aplica un penalizador igual al valor del estado a [[Esquiva]], [[Desvío]] y [[Bloqueo]]. Se elimina al finalizar el siguiente turno del afectado o al utilizar una acción pasiva para recuperar la estabilidad. ^tambaleando

- **Terror — Permanente:** Aplica a toda acción una cantidad de [[Palabras Clave#^re-roll-negativo|Re-roll negativos]] igual al valor del estado. Al finalizar cada turno en el que ya no perciba el origen del terror, puede realizar una resistencia [[Resistencias|Mental]]; superarla elimina el estado. ^terror