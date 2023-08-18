---
title: 'Redes Blockchain de Capa 1 vs de Capa 2: ¿Cuál es la Diferencia?'
coverImage: 'images/image2_es.png'
category: popular
date: '2023-04-19T16:00:00.000Z'
---

![alt_text](images/image1_es.png 'image_tooltip')

La Capa 1, en el contexto de las redes blockchain, se refiere a la cadena de la Capa base donde las transacciones se liquidan con carácter definitivo. Por otro lado, las redes de Capa 2 son soluciones de escalado construidas sobre cadenas de bloques de Capa 1 con el objetivo de aumentar el rendimiento de sus transacciones. Los ejemplos de cadenas de Capa 1 incluyen Bitcoin, Ethereum y Common Knowledge Base, mientras que los ejemplos de redes de Capa 2 incluyen Lightning Network, Optimism y Godwoken.

Una excelente analogía del mundo real que representa la diferencia entre las redes de Capa 1 y Capa 2 es la comparación entre Fedwire y los procesadores de pago como Paypal o Stripe. Al igual que la Capa 1, Fedwire liquida las transferencias bancarias con carácter definitivo, mientras que los procesadores de pagos son simplemente intermediarios que procesan muchos pagos y luego los transmiten a los bancos para la liquidación final.

## Soluciones de escalabilidad y cadenas de bloques de Capa 1

Los términos Capa 1 y cadena de bloques se pueden usar indistintamente. Describen lo mismo: un libro mayor compartido e inmutable de transacciones replicadas y mantenidas por una red descentralizada y distribuida de nodos informáticos.

A diferencia de las bases de datos centralizadas, que son mantenidas por una sola autoridad confiable, las cadenas de bloques son bases de datos distribuidas mantenidas por muchas entidades no relacionadas sin confianza. Las tres tareas principales que realizan las cadenas de bloques incluyen ejecutar transacciones, garantizar la disponibilidad de datos y lograr un consenso entre las partes involucradas sobre el verdadero estado de la cadena de bloques.

Sin embargo, y sin entrar en demasiados detalles, al intentar ejecutar estas tareas, las cadenas de bloques se encuentran con un problema comúnmente conocido como el trilema de escalabilidad, que establece que no pueden ser seguras, escalables y descentralizadas al mismo tiempo. Este problema surge porque la capacidad de rendimiento de transacciones de las cadenas de bloques está inversamente correlacionada con los requisitos de hardware y ancho de banda para los nodos en ejecución. Lograr un mayor rendimiento de transacciones y disponibilidad de datos requiere un hardware más costoso, lo que en consecuencia conduce a menos nodos participantes y una mayor centralización.

En otras palabras, las cadenas de bloques que intentan escalar en la cadena aumentando la cantidad de datos contenidos en cada bloque o acelerando la velocidad a la que se confirman los bloques necesariamente están sacrificando la descentralización, comprometiendo su seguridad y otros atributos vitales, incluida la resistencia a la censura, la resistencia a la captura e incluso la inmutabilidad. Una forma alternativa de escalar la Capa 1 es a través de la fragmentación, un mecanismo que divide el estado de la cadena de bloques en distintos conjuntos de datos llamados "fragmentos" que la red puede procesar simultáneamente. Esta solución de escalado de Capa 1 está siendo explorada actualmente por múltiples cadenas de bloques, incluidas Ethereum y Tezos, pero su desarrollo aún se encuentra en su fase experimental.

Por último, la única forma comprobada de escalar cadenas de bloques sin sacrificar la seguridad y la descentralización es descargando transacciones en redes separadas de Capa 2.

## ¿Qué es una red Blockchain de Capa 2?

Capa 2 es un término que se usa para describir una red o tecnología construida sobre un protocolo de cadena de bloques existente. El objetivo de las redes de Capa 2 es mejorar la escalabilidad y la eficiencia de las cadenas de bloques al descargar parte del procesamiento de transacciones a otra arquitectura de sistema. Las redes de Capa 2 procesan las transacciones a granel y luego las publican para su liquidación final en la cadena de bloques subyacente como una sola transacción. Esta solución de escalado reduce la carga de procesamiento en la cadena de bloques principal y aumenta su escalabilidad.

Existen varios tipos de soluciones de Capa 2, incluidos optimistic rollups, ZK-Rollups y los canales de estado.

### Optimistic Rollups

Los [Optimistic rollups](https://www.nervos.org/knowledge-base/what_are_optimistic_rollups) son una solución de escalado de Capa 2 para cadenas de bloques. Funcionan agrupando muchas transacciones en una sola transacción y luego procesándolas fuera de la cadena de bloques principal. El procesamiento de estas transacciones ocurre de manera "optimista" o bajo el supuesto de que todas las transacciones del paquete son válidas. Esto acelera el tiempo de procesamiento y reduce la carga computacional en la cadena de bloques principal.

Para usar un Optimistic Rollup, los usuarios deben bloquear sus activos originales en la Capa 1 a través de un contrato inteligente. El contrato inteligente en la Capa 2 luego crea activos idénticos, conocidos como tokens envueltos, con una valoración de 1 a 1 a los activos originales previamente bloqueados en la Capa 1. Cuando un usuario realiza una transacción en la Capa 2 con estos tokens envueltos, las transacciones se agrupan en grandes lotes y solo los datos de la transacción se vuelven a publicar en la Capa 1 como datos de llamadas.

Cuando los usuarios desean retirar su activo original de regreso a la Capa 1, deben enviar el token envuelto acuñado previamente en la Capa 2 de regreso al contrato inteligente. Sin embargo, deben esperar días o semanas durante el período de disputa antes de retirar sus activos originales en la cadena de bloques principal. Este período de disputa es necesario para dar a los validadores tiempo suficiente para disputar transacciones sospechosas en el rollup antes de que se liquiden de manera irreversible en la cadena de bloques principal.

La cadena de bloques de Capa 1 de Nervos, Common Knowledge Base, utiliza un optimistic rollup llamado Godwoken para aumentar su escalabilidad.

### ZK-Rollups

Los ZK-rollups son un tipo de solución de escalado de Capa 2 para cadenas de bloques que utilizan una técnica criptográfica llamada pruebas de conocimiento cero para garantizar la validez de las transacciones. Las pruebas de conocimiento cero permiten que un probador demuestre la validez de una declaración a un verificador sin revelar ninguna información adicional más allá de la validez de la declaración.

Cuando un usuario realiza una transacción en un resumen ZK, la transacción se agrupa con muchas otras transacciones para formar una sola transacción. Esta transacción única luego se registra para su liquidación final en la Capa 1, junto con una prueba de validez. Esto significa que las transacciones no están sujetas al período de espera o al proceso de resolución de disputas porque ya se ha probado matemáticamente que son válidas. Los resúmenes ZK son más seguros que los resúmenes optimistas porque no dependen de la honestidad de otros participantes para garantizar la validez de las transacciones.

En comparación, los rollups optimistas son menos costosos desde el punto de vista computacional, pero requieren un período desafiante para garantizar la validez de la transacción. Al mismo tiempo, los ZK-rollups utilizan pruebas de conocimiento cero para validar las transacciones, lo que las hace más seguras y privadas, pero computacionalmente más costosas.

### Canales de Estado

Los canales de estado son un tipo de solución de escalado de Capa 2 que permite a los usuarios realizar transacciones fuera de la cadena sin involucrar a la cadena de bloques principal. Funcionan creando un canal virtual entre dos partes, donde el estado del canal se actualiza cada vez que las partes realizan transacciones entre sí. Estas transacciones se realizan fuera de la cadena, lo que significa que no se registran inmediatamente en la cadena de bloques principal. En cambio, son almacenados y validados por las partes involucradas en el canal y solo se registran en la cadena de bloques principal cuando el canal está cerrado o cuando una de las partes desea retirar sus fondos del canal. Este enfoque reduce la cantidad de transacciones que debe procesar la cadena de bloques principal, lo que hace que las transacciones sean más rápidas y económicas.

La implementación de canal de estado más popular es la solución de escalado Lightning Network Layer 2 construida sobre Bitcoin. Permite transacciones de bitcoin instantáneas y de muy bajo costo mediante la creación de una red de canales de pago entre usuarios.

## ¿Cuál es mejor: redes de Capa 1 o de Capa 2?

No hay una respuesta sencilla a cuál es mejor entre las cadenas de bloques de Capa 1 y Capa 2 porque tienen diferentes propósitos y tienen sus propias ventajas y limitaciones únicas.

Las cadenas de bloques de Capa 1 brindan una seguridad superior y una liquidación de transacciones final o irreversible, lo que las hace ideales para casos de uso que requieren seguridad y transparencia. Por otro lado, las cadenas de bloques de Capa 2 están diseñadas para abordar los problemas de escalabilidad de las cadenas de bloques de Capa 1. Las soluciones de Capa 2, como canales de estado, cadenas laterales y rollups, ofrecen transacciones más rápidas y económicas al descargar parte de la carga de procesamiento de transacciones de la Capa 1 a la Capa 2. También pueden admitir transacciones más complejas, como intercambios atómicos e interoperabilidad entre cadenas.

En resumen, las cadenas de bloques de Capa 1 y Capa 2 tienen sus propias fortalezas y debilidades, y su idoneidad depende del caso de uso y los requisitos específicos. Algunas aplicaciones pueden requerir la alta seguridad y la descentralización de la Capa 1, mientras que otras pueden beneficiarse de la velocidad y flexibilidad de las soluciones de la Capa 2.

## ¿Qué pasa con la capa 3?

Las redes de Capa 3, también conocidas como cadenas de bloques específicas de aplicación, están diseñadas para ejecutarse sobre las soluciones de Capa 2 y proporcionar funcionalidades y servicios específicos para una aplicación o caso de uso en particular. Las redes de Capa 3 se pueden considerar un subconjunto de las redes de Capa 2, donde las soluciones de Capa 2 abordan los problemas de escalabilidad de las cadenas de bloques de Capa 1, mientras que las redes de Capa 3 se construyen sobre las redes de Capa 2 para proporcionar servicios y funcionalidades adicionales.

![alt_text](images/image3_es.png 'image_tooltip')

Fuente: [https://vitalik.ca/general/2022/09/17/layer_3.html](https://vitalik.ca/general/2022/09/17/layer_3.html)

Las redes de Capa 3 se pueden usar para diversas aplicaciones, como finanzas descentralizadas (DeFi), tokens no fungibles (NFT), gestión de cadenas de suministros y juegos. Al construir sobre las soluciones de Capa 2, las redes de Capa 3 pueden beneficiarse de la escalabilidad, la interoperabilidad y la rentabilidad de las soluciones de Capa 2 al mismo tiempo que brindan funcionalidades más especializadas y personalizadas para casos de uso específicos.

## Arquitectura multicapa de Nervos

Nervos es una cadena de bloques modular o de varias capas que utiliza varias soluciones de escalado para lograr un alto rendimiento. Es decir, Nervos aprovecha una solución de cadena lateral patentada llamada Axon que permite a los desarrolladores lanzar sus propias cadenas laterales seguras, interoperables y de alto rendimiento en [CKB](https://medium.com/@AlejandroR.bit/nervos-ckb-en-pocas-palabras-c0146f3e6b20) en cuestión de minutos. Debido a la flexibilidad sin igual de CKB, las cadenas laterales de Axon pueden admitir todos los mecanismos de consenso y primitivas criptográficas. Más allá de las cadenas laterales, CKB también puede admitir todas las soluciones de escalado de Capa 2, incluidos los rollups y los canales de estado. Si bien los canales de estado están en proceso, ya se lanzó un rollup llamado Godwoken.
