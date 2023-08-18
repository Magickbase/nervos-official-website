---
title: 'Resistencia a ASIC, ¿es posible?'
coverImage: 'images/image1.png'
category: popular

date: '2023-04-23T16:00:00.000Z'
---



ASIC-Resistance describe la capacidad del algoritmo de minería de una cadena de bloques para resistir la implementación de hardware especializado llamado ASIC (Application-Specific Integrated Circuits). Los ASIC están diseñados específicamente para realizar una sola tarea, en este caso, extraer criptomonedas, y son mucho más eficientes que el hardware de propósito general como las CPU o las GPU.

## ¿Qué significa ASIC-Resistance?
El concepto de ASIC-Resistance surgió como una forma de mantener la igualdad de condiciones en la minería, donde los jugadores más pequeños con hardware de nivel de consumidor aún podían participar y ser recompensados por sus contribuciones a la red. La teoría era que al diseñar un algoritmo de minería que era difícil de implementar en los ASIC, la red se volvería más descentralizada y resistente a la centralización por parte de grandes mineros bien capitalizados.

Un enfoque para lograr la resistencia a ASIC es mediante el uso de funciones memory-hard. Estas funciones requieren que haya grandes cantidades de memoria disponibles para el hardware de minería a fin de realizar los cálculos necesarios para extraer un bloque. Esto aumenta significativamente los costos de I+D y fabricación de un ASIC, en comparación con uno que tiene una tarea puramente computacional (como una función hash).

El algoritmo de minería utilizado para extraer Ethereum de 2015 a 2022, Ethash, es un ejemplo de una función memory-hard. Requería leer una gran cantidad de datos de la memoria, y este requisito aumentaría con el tiempo, haciendo imposible el uso de hardware antiguo para extraer la cadena.

De manera similar, la cadena de bloques Grin emplea una función memory-hard llamada Cuckoo Cycle. Este algoritmo requiere que los mineros encuentren ciclos en un gran gráfico dirigido, lo que requiere una gran cantidad de memoria y acceso a la memoria de alta velocidad.



## ¿Es posible la Resistencia a ASIC?

Con el tiempo, los desarrolladores se dieron cuenta de que lograr una verdadera resistencia a ASIC era una tarea difícil, ya que los ASIC se pueden diseñar para extraer cualquier algoritmo, con suficientes recursos y tiempo. Como resultado, muchas cadenas de bloques de prueba de trabajo que alguna vez afirmaron ser resistentes a ASIC han sido reemplazadas por ASIC, lo que genera preocupaciones sobre la centralización y el control por parte de algunas grandes operaciones mineras.

Los primeros ASIC de Ethereum tardaron años en producirse, pero con el tiempo crecieron hasta representar el 50 % de la tasa de hash de la red. Después del merge de Ethereum, estos ASIC no tuvieron más remedio que pasar a otra cadena asegurada por Ethash, Ethereum Classic. Ahora no es rentable extraer Etheruem Classic con cualquier cosa que no sea un ASIC.

Para combatir esto, algunas cadenas de bloques han optado por bifurcar su protocolo para cambiar el algoritmo de minería y dejar obsoletos los ASIC existentes. Esto a menudo se hace en un esfuerzo por restaurar la igualdad de condiciones y evitar que un pequeño grupo de mineros controle la mayor parte del poder de hash de la red. Sin embargo, la bifurcación dura no siempre es una decisión fácil de tomar, ya que puede ser disruptiva para la red y sus usuarios, y puede requerir un esfuerzo significativo para garantizar una transición sin problemas.



## Conclusión

Es importante tener en cuenta que, si bien las funciones memory-hard pueden dificultar el desarrollo de ASIC para extraer una cadena de bloques, esta estrategia no es infalible. Es posible que los fabricantes de ASIC aún puedan desarrollar hardware especializado que esté optimizado para extraer estas funciones.

Como resultado, se requieren bifurcaciones duras para mantener los ASIC fuera de la red. Estas bifurcaciones duras crean concentraciones de poder (en el proceso de toma de decisiones) y requieren una gran coordinación en el ecosistema para implementarlas.

Este tipo de bifurcación dura también puede socavar a importantes partes interesadas en la comunidad de una cadena de bloques, ya que los mineros y los fabricantes de hardware de minería invierten sumas significativas en equipos que no se pueden reutilizar para minar otra cadena. Una bifurcación dura puede ser del interés de algunos miembros de la comunidad, pero crear un gran costo irrecuperable para las partes interesadas clave puede no ser del interés de la cadena en general.
