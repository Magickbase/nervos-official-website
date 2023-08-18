---
title: 'Explicación del modelo UTXO'
coverImage: 'images/image1_es.png'
category: popular
date: '2023-04-23T16:00:00.000Z'
---

![alt_text](images/image2.png 'image_tooltip')

El modelo de contabilidad de salida de transacción no gastada (UTXO) juega un papel fundamental en el funcionamiento de Bitcoin y otras criptomonedas basadas en UTXO. Garantiza el seguimiento preciso de los cambios de propiedad de monedas y respalda la seguridad y la integridad de las redes de cadena de bloques.

## ¿Cómo funciona el modelo de transacción UTXO?

En las cadenas de bloques basadas en UTXO, el estado del libro mayor está representado por un conjunto de salidas de transacciones no gastadas, que son las unidades indivisibles de criptomoneda que se pueden gastar en transacciones futuras. Cada UTXO está asociado con la clave pública de un propietario específico y solo se puede gastar proporcionando una firma válida correspondiente a esa clave pública.

Las transacciones en una cadena de bloques basada en UTXO consisten en entradas y salidas. Las entradas se refieren a los UTXO que se gastan, mientras que las salidas se refieren a "monedas" no gastadas pendientes. Una transacción consume uno o más UTXO existentes como entradas y genera nuevos UTXO como salidas, que luego se agregan al conjunto de UTXO. Este proceso mantiene la conservación del valor dentro del sistema.

El modelo UTXO es esencial para mantener la seguridad e integridad de las redes blockchain. El modelo previene eficazmente los ataques de doble gasto al garantizar que cada UTXO solo se pueda gastar una vez. Los nodos de la red mantienen un conjunto de UTXO, lo que les permite validar transacciones comprobando que los UTXO a los que se hace referencia existen y no se han gastado anteriormente. Si una transacción es válida, los nodos la agregan a su mempool, un conjunto de transacciones no confirmadas que esperan ser incluidas en un bloque.

Cuando se extrae un bloque y se agrega a la cadena de bloques, los nodos actualizan su conjunto de UTXO eliminando las entradas gastadas y agregando las salidas recién creadas. En el caso de reorganizaciones de cadenas, los nodos también deben actualizar su conjunto de UTXO para reflejar los cambios introducidos por la nueva cadena.

## Comparación con otros modelos de transacciones

Si bien el modelo UTXO se emplea ampliamente en criptomonedas como Bitcoin y Litecoin, existen otros modelos de transacciones. Ethereum, por ejemplo, utiliza un modelo basado en cuentas, que funciona más como una cuenta bancaria tradicional. En el modelo basado en cuentas, el estado del libro mayor está representado por saldos de cuentas en lugar de UTXO. Las transacciones actualizan directamente los saldos de cuenta del remitente y del destinatario, y no se crean nuevas salidas.

Los modelos UTXO y basados en cuentas tienen sus ventajas y desventajas. El modelo UTXO ofrece privacidad y escalabilidad mejoradas, mientras que el modelo basado en cuentas brinda simplicidad y facilidad de uso. La elección del modelo de transacción depende de los requisitos y objetivos únicos de un proyecto de criptomoneda específico.

## Las ventajas y desventajas del modelo UTXO

Como ya se mencionó, las ventajas de UTXO sobre el modelo de cuenta incluyen una mayor escalabilidad y una mejor privacidad.

Específicamente, las cadenas de bloques basadas en UTXO son más escalables porque pueden procesar transacciones en paralelo, es decir, los mineros pueden validar cada transacción de forma independiente y procesar diferentes transacciones simultáneamente. Esto contrasta con las cadenas de bloques basadas en cuentas que solo pueden procesar transacciones secuencialmente o una tras otra de manera lineal, lo que a menudo puede provocar la congestión de la red en momentos de gran demanda de usuarios.

Cuando se trata de privacidad, el modelo UTXO es superior al modelo basado en cuentas porque abstrae la noción de una identidad en cadena. Es decir, en las cadenas de bloques basadas en UTXO, se alienta a los usuarios a crear nuevas direcciones para cada transacción que realicen o reciban, lo que dificulta mucho más que terceros vinculen transacciones a usuarios individuales. En las cadenas de bloques basadas en cuentas, los usuarios suelen utilizar una única cuenta o dirección pública para todas sus transacciones, lo que facilita mucho la vinculación de su cuenta en cadena con la identidad de la vida real.

La desventaja más notable del modelo UTXO es su falta de programabilidad o soporte de contratación inteligente. Es decir, el modelo UTXO estándar utilizado en Bitcoin solo admite transacciones de criptomonedas simples y no se puede utilizar para crear aplicaciones descentralizadas. Sin embargo, otros proyectos establecidos de blockchain como Nervos y Cardano han implementado sus propias versiones generalizadas del modelo UTXO, a saber, el modelo celular y los modelos Extended UTXO (EUTXO) que son tan, si no más, flexibles y programables que las blockchains basadas en cuentas.
