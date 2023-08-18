---
title: '¿Qué es el Consenso de Nakamoto?'
coverImage: 'images/image1.png'
category: popular
date: '2023-04-27T16:00:00.000Z'
---

El Consenso de Nakamoto, que lleva el nombre del creador seudónimo de Bitcoin, Satoshi Nakamoto, es un mecanismo de consenso tolerante a faltas bizantinas (BFT) que combina la prueba de trabajo con la regla de la "cadena más larga" para crear un protocolo de consenso que mantiene adecuadamente la autenticidad de las redes blockchain descentralizadas.

Implementado por primera vez en Bitcoin y luego adoptado por muchas criptomonedas posteriores, el Consenso de Nakamoto es la innovación crítica que permitió que Bitcoin se convirtiera en el primer sistema BFT que podía escalar orgánicamente sin experimentar tiempos de inactividad. Vale la pena señalar que, si bien el Consenso de Nakamoto a menudo se confunde con la prueba de trabajo, son diferentes. El Consenso de Nakamoto es un protocolo de consenso más amplio que incorpora prueba de trabajo pero también otras ideas innovadoras que lo hacen único.

## Consenso de Nakamoto y tolerancia a faltas bizantinas

Debido a que el Consenso de Nakamoto es lo que hace que Bitcoin sea un sistema tolerante a faltas bizantinas, primero vale la pena explorar lo que eso significa.

Se dice que el Consenso de Nakamoto es un mecanismo de consenso BFT porque brinda una solución al problema de los generales bizantinos, un notorio experimento mental en ciencias de la computación que aborda la cuestión de si es posible lograr un consenso duradero en una red informática compuesta por nodos independientes distribuidos  geográficamente.

BFT es básicamente una característica de las redes informáticas distribuidas que aún pueden funcionar incluso cuando algunos de sus nodos se vuelven deshonestos o actúan de manera impredecible o maliciosa. Dado que las cadenas de bloques son exactamente eso, redes informáticas distribuidas, implementan protocolos complejos para lograr el consenso de una manera "tolerante a faltas bizantinas".

## Explicación del Consenso de Nakamoto

Como ya se mencionó, el Consenso de Nakamoto combina dos ideas novedosas para lograr la tolerancia a fallas bizantinas: la prueba de trabajo y la regla de la "cadena más larga".

### Consenso de Nakamoto: Prueba de trabajo

La prueba de trabajo (PoW) es un mecanismo criptográfico utilizado en las redes blockchain para validar transacciones y mantener la seguridad de la red. En el caso de Bitcoin, se utiliza como algoritmo de consenso para determinar el bloque más válido en la cadena de bloques.

El proceso de validación de transacciones de blockchain implica que los mineros intenten encontrar una solución válida a un rompecabezas criptográfico asociado con un nuevo bloque de transacciones. La única forma en que los mineros pueden encontrar la solución al acertijo de la prueba de trabajo es a través de prueba y error, o haciendo miles de conjeturas por segundo hasta que encuentren una respuesta que coincida con los criterios del protocolo. El primer minero que encuentra la respuesta correcta extrae un nuevo bloque (que, una vez validado por todos los demás nodos completos de la red, se agrega a la cadena de bloques) y, a cambio, es recompensado con criptomonedas recién acuñadas.

Sin embargo, encontrar la solución de prueba de trabajo requiere una potencia informática y un consumo de energía significativos, lo que significa que los mineros también tienen algo que perder, no solo ganar. Esto significa que el algoritmo de prueba de trabajo se basa en un sólido mecanismo de incentivos que garantiza un castigo adecuado para cualquier entidad individual que intente eludir o engañar al protocolo y otorga suficientes privilegios a todas las entidades distribuidas que siguen las reglas del acuerdo.

Coloquialmente, esto también se conoce como el enfoque de "zanahoria y palo", donde el palo es la energía eléctrica requerida para calcular problemas complejos que cada nodo de minería debe hacer para participar en el proceso de minería (es decir, el proceso de validación de transacciones), y la zanahoria son las recompensas en bloque en forma de bitcoins recién acuñados. En otras palabras, los nodos de minería que siguen las reglas del protocolo de prueba de trabajo son recompensados con bitcoins recién acuñados, mientras que los nodos maliciosos se quedan con nada más que una fuerte factura de electricidad por hacer un trabajo inútil. Así es como las cadenas de bloques basadas en prueba de trabajo pueden lograr un consenso en tiempo real entre todos los nodos participantes sobre el estado real del libro mayor.


### Consenso de Nakamoto: regla de la cadena más larga

La regla de la cadena más larga, un componente clave del Consenso de Nakamoto, establece que en el caso de bifurcaciones de cadenas de bloques competidoras, la cadena con el trabajo computacional más acumulado, medido por la cantidad de bloques en la cadena, se considera la cadena correcta y válida.

Esto significa que se incentiva a los mineros a extender la cadena de bloques con el trabajo computacional más acumulado porque al hacerlo aumenta la probabilidad de que sus bloques se agreguen a la cadena correcta y sean recompensados con criptomonedas. En otras palabras, la regla de la cadena más larga alienta a los mineros a trabajar en la misma cadena y garantiza que la cadena de bloques sea mantenida y extendida por la mayoría de la red.

La regla de la cadena más larga ayuda a prevenir ataques en la red al hacer que sea extremadamente difícil para un atacante crear una cadena válida más larga que la existente. Cualquier atacante que intente crear una nueva cadena competidora necesitaría más poder de cómputo que el resto de la red combinada, lo que actualmente es inviable para la mayoría de las cadenas de bloques debido al alto costo de adquirir y mantener tanto poder de cómputo.

En general, la regla de la cadena más larga es un aspecto crítico del Consenso de Nakamoto, ya que proporciona una manera simple y efectiva para que la red converja en una única versión válida de la cadena de bloques, lo que garantiza que la red funcione de manera segura y confiable.

## Conclusión

Al utilizar la prueba de trabajo y la regla de la cadena más larga, el Consenso de Nakamoto garantiza que las cadenas de bloques permanezcan seguras y resistentes a los ataques. Si bien tiene limitaciones, este mecanismo de consenso ha demostrado ser una herramienta poderosa y confiable para mantener la integridad de las redes blockchain.

Por esta razón, muchas criptomonedas más allá de Bitcoin utilizan diferentes implementaciones del Consenso de Nakamoto en sus protocolos. Por ejemplo, la Capa 1 de Nervos, Common Knowledge Base, utiliza Nakamoto Consensus Max (NC-Max), una versión mejorada del Consenso de Nakamoto original que brinda mayor seguridad y rendimiento.


Aprende más acerca de NC-Max [aquí](https://nervosbook.github.io/book/en/nc-max.html).
