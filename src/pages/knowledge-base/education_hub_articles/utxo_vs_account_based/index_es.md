---
title: 'UTXO vs. Blockchains basadas en cuentas - Beneficios y desventajas'
coverImage: 'images/image3_es.png'
category: popular
date: '2023-04-23T16:00:00.000Z'
---

![alt_text](images/image1_es.png 'image_tooltip')

_UTXO (izquierda) frente a basado en cuenta (derecha) se puede imaginar como una transacción en efectivo frente a una transferencia bancaria_

Los modelos UTXO y basados en cuentas representan los dos métodos de contabilidad más populares en el espacio de la cadena de bloques. Los dos modelos representan dos formas fundamentalmente diferentes de cómo las cadenas de bloques procesan y registran las transacciones.

En pocas palabras, el modelo UTXO funciona de manera similar a las transacciones en efectivo, mientras que el modelo basado en cuentas funciona de manera similar a cómo funcionan las cuentas bancarias.

## ¿Cómo funciona el modelo UTXO?

Los UTXO funcionan de manera similar al efectivo, donde cada UTXO es como una factura en papel fiduciaria única que los usuarios pueden gastar. Cada usuario de cadenas de bloques basadas en UTXO puede realizar un seguimiento de su saldo sumando las criptomonedas que posee.

Por ejemplo, supongamos que un tipo llamado Bob va a un restaurante de comida rápida para comprar una hamburguesa que cuesta $10. Sin embargo, Bob solo tiene un billete de $20, lo que significa que cuando paga la hamburguesa, el restaurante debe darle un billete de $10 como cambio.

En cadenas de bloques basadas en UTXO, el billete de $20 y el cambio de $10 se representarían como dos UTXO separados. Entonces, en el caso de Bob, el saldo de su cuenta de criptomonedas es solo una suma de sus UTXO, al igual que su billetera física es solo una suma de todos los diferentes billetes que pone en su billetera.

En cadenas de bloques basadas en UTXO como Bitcoin, por ejemplo, no existe la noción de identidad. Solo hay UTXO o monedas no gastadas designadas para diferentes direcciones de billetera. El punto crítico es que el protocolo Bitcoin no rastrea los saldos de los usuarios, sino monedas individuales representadas como UTXO que se atribuyen a diferentes direcciones.

Echa un vistazo al artículo sobre la [Explicación del modelo UTXO](https://www.nervos.org/knowledge-base/utxo_model_explained) para saber más al respecto.

## ¿Cómo funciona el modelo basado en cuentas?

El modelo basado en cuentas es el método de contabilidad blockchain más popular entre los dos. Inicialmente popularizado por Ethereum, el modelo de cuenta es utilizado por muchas, si no la mayoría, de las cadenas de bloques hoy en día para registrar tanto las transacciones como los cambios de estado.

La contabilidad en el modelo de cuenta funciona igual que las cuentas bancarias, donde las transferencias de dinero se registran como débitos y créditos en las cuentas de diferentes usuarios en el libro mayor del banco. Por ejemplo, cuando Alice quiere enviar $10 a Bob, el banco acredita o deduce $10 de la cuenta de Alice y carga o agrega $10 a nombre de Bob en su libro mayor.

Lo mismo sucede en las cadenas de bloques basadas en cuentas; solo el libro mayor que registra los saldos de los usuarios se distribuye entre muchas entidades (nodos completos). El punto clave es que las cadenas de bloques basadas en cuentas no rastrean las monedas, sino que equilibran los cambios en las cuentas de los usuarios. En este modelo, la noción de identidad está presente y un usuario generalmente está asociado con una sola cuenta o dirección de blockchain.

![alt_text](images/image2_es.png 'image_tooltip')

## Diferencias clave entre UTXO y blockchains basadas en cuentas

Al examinar las ventajas y desventajas de la UTXO y los modelos basados en cuentas, surgen varias diferencias clave que destacan las características únicas de cada sistema contable.

Por ejemplo, en el modelo UTXO, las billeteras criptográficas generalmente generan nuevas direcciones para cada transacción de usuario, lo que dificulta que terceros rastreen o vinculen transacciones a un individuo específico. Esta característica proporciona un nivel de privacidad más alto que el modelo de cuenta, donde los usuarios normalmente interactúan con la cadena de bloques a través de una sola cuenta con un saldo transparente.

Además, el modelo UTXO naturalmente admite el procesamiento de transacciones paralelas, que se refiere al procesamiento simultáneo de muchas transacciones de blockchain, lo que permite una mayor eficiencia y rendimiento. Esto contrasta con las cadenas de bloques basadas en cuentas que procesan las transacciones de forma secuencial o una transacción tras otra de forma lineal.

El procesamiento de transacciones en paralelo puede ser particularmente beneficioso en situaciones con un gran volumen de transacciones, ya que permite que la red acomode más transacciones por segundo y maneje una demanda creciente. Además, puede contribuir a tiempos de confirmación de transacciones más rápidos, una red más receptiva y eficiente y una mejor utilización de los recursos. Dicho esto, lograr un procesamiento paralelo óptimo requiere algoritmos de consenso eficientes y técnicas efectivas de gestión de recursos, lo que significa que las cadenas de bloques basadas en UTXO no son necesariamente más escalables que las basadas en cuentas actuales.

Por otro lado, las cadenas de bloques basadas en cuentas generalmente se consideran más programables o más adecuadas para contratos inteligentes que las cadenas de bloques basadas en UTXO. Esto se debe a que las cadenas de bloques basadas en cuentas tienen estado, lo que permite interacciones más complejas entre las cuentas de usuario y los contratos inteligentes y facilita a los desarrolladores la creación de lógica programable y la creación de aplicaciones descentralizadas sofisticadas. En otras palabras, el modelo basado en cuentas es generalmente más sencillo para que trabajen los desarrolladores porque las transacciones se asemejan a transferencias directas entre cuentas o llamadas de funciones a contratos inteligentes, lo que imita más de cerca los paradigmas de programación tradicionales.

## Conclusión

En conclusión, las diferencias entre UTXO y las cadenas de bloques basadas en cuentas se derivan de sus distintos enfoques para administrar transacciones y estados. El modelo UTXO ofrece mayor privacidad y paralelismo debido a su estructura, que se centra en el seguimiento de las salidas no gastadas y permite el procesamiento simultáneo de transacciones no relacionadas. Por otro lado, el modelo basado en cuentas simplifica las transacciones al mantener un estado global de cuentas y saldos, lo que lo hace más intuitivo para los desarrolladores y más adecuado para contratos inteligentes y aplicaciones complejas.

En última instancia, comprender los matices entre estos modelos es crucial para que los desarrolladores, usuarios y partes interesadas tomen decisiones informadas al construir o participar en ecosistemas de cadenas de bloques.
