---
title: 'ZK-Rollups vs Optimistic Rollups: ¿Cuál es la diferencia?'
coverImage: 'images/image1.png'
category: popular
date: '2023-04-27T16:00:00.000Z'
---

Los rollups son poderosas soluciones de escalado de blockchain que se han vuelto muy populares en los últimos dos años. Hay dos tipos de resúmenes, resúmenes de conocimiento cero (resúmenes ZK) y resúmenes optimistas, que tienen el mismo propósito pero funcionan de manera diferente.

Las transacciones en resúmenes optimistas se asumen automáticamente como válidas hasta que se demuestre lo contrario, mientras que los resúmenes ZK utilizan pruebas de conocimiento cero (se explicarán a continuación) para probar la validez de las transacciones. Ambos tipos de resumen tienen sus propias ventajas y desventajas, que se explicarán en detalle a continuación.

## ¿Por qué se necesitan Rollups?

Los últimos dos años en el espacio de las cadenas de bloques han demostrado que escalar cadenas de bloques monolíticas, que tienen ejecución de transacciones, consenso y disponibilidad de dato ocurriendo todo en la misma capa, sin sacrificar la seguridad y la descentralización, es muy difícil, si no imposible.

Por esta razón, muchas cadenas de bloques de capa 1 han comenzado recientemente a utilizar diferentes soluciones rollup para aliviar la demanda de rendimiento al migrar la ejecución de transacciones a las capas 2. De esta manera, la mayor parte de las transacciones se pueden procesar en una capa separada y luego agruparse en una sola transacción liquidada en la Capa 1 subyacente.

En términos simples, los rollups son redes de ejecución de transacciones separadas y de alto rendimiento construidas en la parte superior y toman prestada la seguridad de las cadenas de bloques de Capa 1. Los rollups permiten que las cadenas de bloques se escalen a decenas de miles de transacciones por segundo sin comprometer la seguridad y la descentralización. Los rollups brindan a los usuarios una experiencia superior al reducir significativamente los costos de transacción y aumentar los tiempos de liquidación. A modo de comparación, dependiendo de la congestión actual de la red, las transacciones en Ethereum pueden costar a los usuarios entre unos pocos y un par de cientos de dólares. Por otro lado, las tarifas de transacción actuales en rollups basados en Ethereum oscilan entre $ 0,01 y $ 0,1.
 \
\*Antes de continuar, consulta también la explicación de la cadena de bloques de Capa 1 vs. Capa 2 para comprender completamente los términos que se utilizan aquí.

## La diferencia entre ZK-Rollups y Optimistic Rollups

La principal diferencia entre los dos tipos de rollup es cómo validan las pruebas.

Los Optimistic Rollups se denominan "optimistas" porque asumen que todas las transacciones de la Capa 2 son válidas hasta que se demuestre lo contrario. Por otro lado, los ZK-Rollups usan una pieza compleja de criptografía llamada prueba de conocimiento cero para probar la validez de las transacciones sin saber demasiado sobre los detalles de las transacciones.

Otra diferencia entre las dos tecnologías es la cantidad de datos que publican en sus cadenas base subyacentes. Debido a que los ZK-Rollups tienen un mecanismo para validar las transacciones antes de publicarlas en la cadena base, no necesitan transmitir tantos datos como sus contrapartes optimistas a la Capa 1. Es decir, los ZK-Rollups solo publican las pruebas de validez para liquidar las transacciones. con finalidad en la cadena base, mientras que los Optimistic rollups publican los datos completos de la transacción.

![alt_text](images/image2.png 'image_tooltip')
\
_Los datos transmitidos a la Capa 1 por ZK-Rollups (izquierda) frente a Optimistic Rollups (derecha)._

Para los usuarios, la diferencia crucial entre los dos tipos de rollup es el tiempo de retiro. Es decir, debido a que los Optimistic Rollups se basan en validadores para verificar cada transacción y potencialmente disputarla si la consideran no válida, el tiempo de retiro de los activos puede durar desde varios días hasta dos semanas. Si bien el período de disputa para varias implementaciones de Optimistic Rollup puede variar, todavía es necesario, lo que significa que los usuarios siempre deben esperar un par de días para retirar su dinero en la cadena base.

![alt_text](images/image3.png 'image_tooltip')

Este período de disputa es necesario para dar a los verificadores tiempo suficiente para disputar transacciones sospechosas a través de las llamadas pruebas de fraude. Una prueba de fraude es una afirmación de que una transición de estado (es decir, una transacción) no es válida y, como resultado, todo el lote debe revertirse. Los verificadores pueden demostrar que las transacciones no son válidas porque tienen datos completos para todas las transacciones en la capa 2, incluida una copia del estado del rollup actual. También calculan la raíz posterior al estado en el rollup.

Si no hay un reclamo a prueba de fraude de ningún verificador, el lote de transacciones se liquidará en la Capa 1 automáticamente al final del período de disputa. Una vez que esto termine, los activos originales en la Capa 1 se desbloquearán mientras que las copias idénticas en la Capa 2 se quemarán.

En cuanto a los ZK-Rollups, los retiros de activos a la cadena base pueden ser instantáneos porque las transacciones ya están validadas. Como se mencionó, los ZK-Rollups prueban que las transacciones son válidas a través de pruebas de conocimiento cero, que son mecanismos criptográficos que permiten que una parte (probador) pruebe algo a otra parte (verificador) sin compartir información confidencial sobre el tema en cuestión. Las pruebas de conocimiento cero pueden presentarse en dos formas, STARKS (argumento de conocimiento sucinto y transparente) y SNARKS (argumento de conocimiento sucinto y no interactivo), cada uno con sus propios beneficios e inconvenientes.

### Optimista vs. ZK-Rollups: estructura y mecanismo

ZK-Rollups y Optimistic Rollups vienen con dos raíces, una raíz anterior al estado y una raíz posterior al estado.

La raíz previa al estado muestra la ejecución previa a la transacción del estado del rollup. Por otro lado, la raíz posterior al estado muestra la ejecución posterior a la transacción del estado consolidado.

Ambos rollups también utilizan múltiples contratos inteligentes. Los ZK-Rollups utilizan dos contactos inteligentes, un contrato principal y otro verificador. El contrato principal almacena bloques rollup y realiza un seguimiento de los depósitos y retiros de activos. Mientras tanto, el contrato del verificador verifica las pruebas de conocimiento cero publicadas en la Capa 1.

Por otro lado, los Optimistic Rollups utilizan contratos inteligentes de puente implementados tanto en el rollup como en la capa 1 subyacente. Por cada activo bloqueado en el contrato inteligente puente en la capa 1, se acuña un activo idéntico en el rollup.

Tanto los ZK-Rollups como los Optimistic Rollups tienen un operador llamado secuenciador cuyo trabajo es facilitar las transacciones, producir bloques rollup, agregar transacciones al contrato y enviar datos a la Capa 1 subyacente. Los secuenciadores tienen la tarea efectiva de conectar la Capa 1 y Redes de capa 2. Cuando los usuarios migran activos de la cadena base al resumen y viceversa, los secuenciadores transmiten las transacciones.

Cuando un secuenciador envía datos de transacciones, también propone automáticamente una nueva raíz posterior al estado para el contrato inteligente del rollup. El resumen debe garantizar que la raíz del estado actual sea equivalente a la raíz anterior al estado. Una vez verificada, la raíz post-estado propuesta por el secuenciador se convierte en la nueva raíz del estado actual.

### Beneficios y desventajas

\
Los beneficios de las Optimistic Rollups son su menor complejidad y costos de transacción más bajos, que tiene como desventaja largos períodos de disputa o tiempos de retiro. Por otro lado, los ZK-Rollups son considerablemente más complejos bajo el capó, pero cuentan con considerables ventajas en cuanto a velocidad, seguridad y privacidad.

<table>
  <tr>
   <td>
   </td>
   <td>ZK-rollups
   </td>
   <td>Optimistic Rollups
   </td>
  </tr>
  <tr>
   <td>Desafíos
   </td>
   <td>Requisitos de hardware más costosos y costos para generar pruebas de conocimiento cero para validaciones
   </td>
   <td>Largo período de retiro (de la Capa 2 a la Capa 1) debido al período de disputa y al mecanismo a prueba de fraude que requiere la existencia de verificadores
   </td>
  </tr>
  <tr>
   <td>Beneficios
   </td>
   <td>Tiempo de retiro más rápido ya que no hay necesidad de un período de disputa. Todo se verifica a través de pruebas criptográficas.
   </td>
   <td>Reduce los costos del rollup ya que no es necesario usar pruebas criptográficas para cada bloque de transacciones. Dado que se supone que cada transacción es válida hasta que se presente una reclamación a prueba de fraude, se ahorran muchos costos en el envío de datos.
   </td>
  </tr>
</table>

_Una tabla de comparación entre Optimistic Rollups y ZK-Rollups._

## ¿Qué tipo de rollup utiliza Nervos?

Nervos utiliza una solución Optimistic Rollup personalizada para su primera cadena de Capa 2, Godwoken. El período de disputa de Godwoken es de siete días aproximadamente, que es similar a otras soluciones rollup en Ethereum, siendo lo suficientemente largo como para garantizar una seguridad adecuada.

[Godwoken](https://www.nervos.org/godwoken) es una red de capa 2 de alto rendimiento centrada en GameFi construida sobre la prueba de trabajo de capa 1 altamente segura de Nervos, Common Knowledge Base. Es totalmente compatible con EVM, lo que significa que los desarrolladores pueden portar sus aplicaciones descentralizadas desde Ethereum con relativa facilidad y solo modificaciones menores.

## Conclusión

La cuestión acerca de ZK-Rollup frente a Optimistic Rollup sigue siendo un tema muy debatido, y cada enfoque tiene sus propias ventajas y desventajas. Actualmente, los Optimistic Rollup son marginalmente más favorecidos que los ZK-Rollup debido a su naturaleza más rentable. Sin embargo, como el desarrollo de ambos tipos de rollup avanza rápidamente, aún no ha surgido un claro ganador entre ellos. Sigue siendo plausible que los ZK-Rollups eventualmente ganen mayor prominencia y practicidad, convirtiéndolos así en una opción popular en el futuro.
