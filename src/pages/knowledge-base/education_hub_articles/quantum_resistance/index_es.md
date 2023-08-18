---
title: 'Resistencia Cuántica en Cadenas de Bloques: Preparación para un Mundo Informático Poscuántico'
coverImage: 'images/image2.png'
category: popular
subtitle: 'Una exploración en profundidad de la resistencia cuántica en las cadenas de bloques, abordando las posibles amenazas que plantean los avances en computación cuántica y las medidas que se están tomando para asegurar las redes de cadenas de bloques para el futuro.'
date: '2023-06-05T16:00:00.000Z'
---

A medida que el campo de la computación cuántica avanza rápidamente, aumentan las preocupaciones sobre el impacto potencial de estas poderosas máquinas en la seguridad de las redes blockchain. Las computadoras cuánticas, con su capacidad para resolver problemas complejos a una velocidad sin precedentes, podrían socavar los cimientos criptográficos de las tecnologías blockchain actuales. Este artículo examina el concepto de resistencia cuántica en las cadenas de bloques y las medidas que se están tomando para garantizar la seguridad y la integridad de estas redes en un mundo informático poscuántico.

## Comprendiendo la Amenaza de la Computación Cuántica

Las computadoras cuánticas aprovechan los principios de la mecánica cuántica para realizar cálculos que las computadoras clásicas no pueden resolver de manera eficiente. Usan bits cuánticos, o qubits, en lugar de los bits binarios tradicionales que usan las computadoras clásicas. Los qubits pueden existir en múltiples estados simultáneamente, lo que permite que las computadoras cuánticas realicen numerosos cálculos en paralelo. Esta capacidad, conocida como paralelismo cuántico, podría permitir que las computadoras cuánticas resuelvan problemas complejos, como romper esquemas criptográficos, a velocidades mucho más rapidas que las computadoras clásicas.

Los algoritmos criptográficos que protegen las redes blockchain actuales, como la ampliamente utilizada criptografía de curva elíptica (ECC), se basan en la suposición de que ciertos problemas matemáticos son demasiado intensivos desde el punto de vista computacional para que las computadoras clásicas los resuelvan en un período de tiempo razonable. Sin embargo, con la llegada de las poderosas computadoras cuánticas, es posible que esta suposición ya no sea cierta. Por ejemplo, el algoritmo de Shor, un algoritmo cuántico, puede factorizar números enteros grandes y resolver problemas de logaritmos discretos mucho más eficientemente que cualquier algoritmo clásico conocido, lo que podría hacer que la criptografía de clave pública basada en ECC sea vulnerable.

## Preparando Blockchains para un Futuro de Computación Cuántica

Para hacer frente a las amenazas potenciales que plantean los avances en computación cuántica, los investigadores y desarrolladores están explorando el concepto de cadenas de bloques resistentes a la computación cuántica. Estas redes emplean esquemas criptográficos que se cree que son resistentes a los ataques de las computadoras clásicas y cuánticas. El objetivo es desarrollar sistemas de cadena de bloques que puedan resistir la destreza computacional de las computadoras cuánticas mientras mantienen la seguridad e integridad de sus redes.

Un enfoque posible para lograr la resistencia cuántica en las cadenas de bloques es implementar criptografía poscuántica, también conocida como criptografía resistente a computación cuántica. Los algoritmos criptográficos poscuánticos están diseñados para ser seguros contra los ataques de las computadoras cuánticas y clásicas. Estos algoritmos se basan en problemas matemáticos los cuales son difíciles de resolver para ambos tipos de computadoras, como[ la criptografía basada en celosía](https://medium.com/cryptoblog/what-is-lattice-based-cryptography-why-should-you-care-dbf9957ab717),[ la criptografía basada en código, la criptografía multivariada y la criptografía basada en hash.](https://www.di.ens.fr/brice.minaud/slides/Qhub-2018.pdf)

Los proyectos de blockchain ya están incorporando esquemas criptográficos poscuánticos para prepararse para un futuro de computación cuántica. Uno de los primeros proyectos de cadena de bloques que abordó este problema fue el proyecto QRL (Quantum Resistant Ledger), lanzado en 2018, con una cadena de bloques que utiliza el esquema de firma Merkle eXtended (XMSS), un esquema de firma digital basado en hash considerado resistente a la computación cuántica.

![alt_text](images/image1.png 'image_tooltip')

Además de emplear criptografía poscuántica, los esquemas criptográficos híbridos también se pueden usar para mejorar la resistencia cuántica de las cadenas de bloques. Estos esquemas combinan algoritmos criptográficos clásicos con algoritmos poscuánticos, con el objetivo de proporcionar una seguridad sólida y mantener la compatibilidad con los sistemas existentes. Los esquemas híbridos pueden servir como un enfoque de transición para las redes de cadenas de bloques, permitiéndoles migrar gradualmente hacia soluciones totalmente resistentes a la computación cuántica.

## Incorporando Criptografía Resistente a Computación Cuántica en la Capa 1 de Nervos: Common Knowledge Base (CKB)

Nervos Network, un ecosistema blockchain de múltiples capas, se está preparando de manera proactiva para los desafíos que plantea la computación cuántica. Su Capa 1, Common Knowledge Base (CKB), está diseñada para ser flexible y adaptable, lo que permite la incorporación de primitivas criptográficas resistentes a la computación cuántica y de esta manera proteger la red contra posibles amenazas informáticas cuánticas.

El modelo de contabilidad único de CKB, conocido como modelo Cell, combina los mejores aspectos del modelo UTXO y el modelo de cuenta, proporcionando una estructura generalizada y abstracta para almacenar código y datos arbitrarios. El modelo Cell permite a Nervos tratar todos los activos, incluidos los tokens definidos por el usuario y los NFT, como ciudadanos de primera clase. Esto significa que los algoritmos criptográficos y las estructuras de datos se pueden implementar en CKB como scripts almacenados dentro de las cells, en lugar de estar codificados en la máquina virtual como en otras cadenas de bloques. Esta adaptabilidad permite una red más ágil y preparada para el futuro, capaz de actualizar sus primitivas criptográficas básicas a otras resistentes a la computación cuántica sin sufrir una bifurcación dura.

Además, el entorno de ejecución de transacciones de CKB, CKB-VM, es una máquina virtual basada en el conjunto de instrucciones RISC-V, que proporciona instrucciones sin procesar directamente a la CPU. Este diseño de bajo nivel genera una flexibilidad sin precedentes y permite a los desarrolladores utilizar cualquier lenguaje de programación o primitiva criptográfica al crear contratos inteligentes en CKB. Este criptoagnosticismo permite la fácil incorporación de algoritmos criptográficos resistentes a la computación cuántica cuando surge la necesidad, lo que garantiza que Nervos permanezca seguro en un mundo informático poscuántico.

En resumen, el diseño innovador de la Capa 1 de Nervos, Common Knowledge Base, con su modelo Cell y su máquina virtual basada en RISC-V, permite la incorporación perfecta de primitivas criptográficas resistentes a la computación cuántica. A medida que la amenaza de la computación cuántica se avecina en el horizonte, la flexibilidad y adaptabilidad de CKB garantizan que Nervos se mantenga seguro y resistente en un mundo de computación poscuántica.

## Conclusión

A medida que avanza la tecnología de la computación cuántica, las amenazas potenciales que plantea para la seguridad de las redes blockchain se vuelven cada vez más críticas. La resistencia a computación cuántica en blockchains es un área esencial de investigación y desarrollo, cuyo objetivo es proteger estas redes de las poderosas capacidades computacionales de las computadoras cuánticas. Al incorporar criptografía poscuántica, esquemas criptográficos híbridos y otros enfoques innovadores, los desarrolladores e investigadores de cadenas de bloques están trabajando para garantizar la seguridad e integridad a largo plazo de las redes de cadenas de bloques en un mundo informático poscuántico.
