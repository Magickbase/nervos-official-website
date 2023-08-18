---
title: 'Sorprendentemente, la Emisión Secundaria no es Inflacionaria'
coverImage: 'images/image1.png'
category: popular, economics
subtitle: 'El propósito de este artículo es mostrar de una forma gráfica e intuitiva el planteamiento expuesto por Peter Todd, desarrollador de Bitcoin Core, en su artículo titulado [Surprisingly, tail emission is not inflationary](https://petertodd.org/2022/surprisingly-tail-emission-is-not-inflationary). Para ilustrarlo emplearemos como ejemplo el modelo de emisión de CKB, aportando a la comunidad una perspectiva complementaria que permita a su vez una comprensión más completa del artículo [Understanding the Nervos CKB Issuance Model](https://www.nervos.org/knowledge-base/understanding_nervos_ckb_issuance_model).'
date: '2023-08-02T16:00:00.000Z'
author: 
  - github:alejandroRbit
  - github:ChemaESP
---


Normalmente, cuando analizamos el modelo  de emisión de una moneda como CKB solo solemos considerar el número total teórico de monedas emitidas a lo largo del tiempo, es decir, la curva de emisión. Pero eso no se corresponde totalmente con la realidad, ya que el número total teórico de CKBytes emitidos y en circulación en un momento dado no debe confundirse con el suministro total gastable en dicho momento. Esto es debido a que continuamente se pierden monedas por múltiples razones, convirtiéndolas de facto en monedas no gastables.

![alt_text](images/image2.png 'image_tooltip')

_Este gráfico solo tiene en cuenta la emisión de nuevos tokens en circulación, no así lo CKBytes perdidos y no gastables debido a fallecimientos, accidentes, pérdidas de claves privadas, etc._

Algunas situaciones que pueden llevar a que las monedas emitidas queden fuera de circulación, convirtiéndose en monedas no gastables, son:

* **Pérdida de claves privadas debido a error humano o accidentes:** una pérdida accidental de las claves privadas puede conducir a la pérdida permanente de los fondos asociados con esa dirección. Por ejemplo, imaginemos que alguien decide respaldar su clave privada en una hoja de papel y guarda ese papel en un cajón en su casa. Lamentablemente, un día ocurre un incendio en la vivienda y la hoja de papel con la clave privada se pierde irremediablemente en el fuego. En esta situación, los CKBytes asociados con esa clave privada se considerarían perdidos de forma permanente. Las posibilidades de que alguien encuentre aleatoriamente una clave privada que coincida con la dirección afectada son tan astronómicamente bajas, que en la práctica la recuperación de esos fondos es imposible.
* **Fallecimientos:** cuando una persona fallece y no ha tomado previsiones para compartir sus claves privadas o dejar instrucciones claras sobre cómo acceder a sus criptomonedas, sus fondos pueden quedar prácticamente inaccesibles.
* **Destrucción deliberada:** los CKBytes también pueden ser destruidos intencionalmente, por ejemplo, adjuntando condiciones que hacen que sea imposible gastarlos. El ejemplo mas sencillo es enviando a una dirección inaccesible, donde los fondos enviados nunca podrán ser recuperados ni gastados, ya que no hay una clave privada correspondiente para acceder a esos fondos. Este tipo de direcciones son comúnmente conocidas como dirección de quema o "burn address".
* **Polvo:** las fracciones mínimas y extremadamente pequeñas de las monedas que quedan como remanentes después de las transacciones se las conoce como "polvo". Estas cantidades suelen ser tan insignificantes que su valor nominal es prácticamente despreciable. En consecuencia, pueden resultar difíciles o incluso prohibitivas de gastar, ya que las tarifas de transacción necesarias para enviarlas o utilizarlas pueden superar con creces su valor real, pudiendo quedar fuera de circulación con el paso del tiempo.
* **Peculiaridades técnicas:** también hay peculiaridades técnicas que impiden el gasto de CKBytes. Por ejemplo, los NFT creados a través de Kollect, un marketplace antiguo que ya no existe, no se pueden volver a cambiar por los CKBytes usados para acuñarlos. Estos NFT están escritos en piedra en la cadena y vivirán para siempre.

Con el tiempo, todos estos factores reducen continuamente el suministro de monedas disponibles. Por tanto, podemos deducir que el suministro total gastable siempre es inferior al numero de CKBytes emitidos, por tanto:

<code>CKBytes emitidos -  CKBytes perdidos y no gastables = Suministro total de CKBytes gastables</code>

### Calculando la Tasa de CKBytes Perdidos y no Gastables

Realmente no sabemos la tasa de CKBytes perdidos y no gastables e incluso puede no ser constante a lo largo del tiempo. Pero si sabemos ciertas cosas de forma segura:

* Las monedas se pierden debido a muertes, frases semilla olvidadas, accidentes, etc.
* Estas pérdidas ocurren continuamente a lo largo del tiempo.
* Las monedas solo se pueden perder una vez, por tanto la tasa de pérdida de monedas en un tiempo dado es proporcional a la oferta total en ese momento.

Sabiendo todo esto, podemos definir λ como la tasa de pérdida de monedas, y le podemos asignar un valor determinado. Por ejemplo, para este artículo hemos decidido que la tasa de pérdida de monedas (λ) sea del 0,5%, una tasa anual y constante.

Consideramos que un 0,5% anual es un valor razonable que  está en consonancia con el articulo de Peter Todd y los argumentos proporcionados por [miembros de la comunidad de Monero](https://www.reddit.com/r/Monero/comments/4z0azk/comment/d6sixyi/). Pero en cualquier caso no importa que sea un 0,5% u otra cifra, incluso da igual si no es constante, porque lo que importa es que podemos asumir que las monedas se pierden, y que tiene lugar continuamente a lo largo del tiempo. Siempre y cuando esto se cumpla, los efectos y la tendencia a largo plazo sobre la curva de emisión se mantienen, aunque tarden más o menos en materializarse.

### Efectos de la Tasa de Pérdidas sobre la Curva de Emisión de Nervos CKB

En la siguiente gráfica podemos observar como a largo plazo, la oferta inicial de CKBytes pertenecientes al bloque de génesis eventualmente se perderán a lo largo de los años.

![alt_text](images/image3.png 'image_tooltip')

Al igual que los CKBytes de génesis, los CKBytes de la emisión primaria tienden a perderse con el paso de los años.

![alt_text](images/image4.png 'image_tooltip')

De manera similar al cronograma de emisión de Bitcoin, la emisión primaria de CKB se reduce a la mitad cada cuatro años hasta que todos los CKBytes se extraen y se ponen en circulación. Para los holders a largo plazo depositantes en Nervos DAO, a los que solo les afecta la emisión primaria, significa que sus CKBytes serán efectivamente deflacionarios ya que nunca entrarán en circulación nuevas monedas a través de la emisión primaria, pero los CKBytes pertenecientes a esta emisión seguirán perdiéndose continuamente a lo largo del tiempo. Es más, posiblemente será deflacionario neto mucho antes de extraer todos los CKBytes de la emisión primaria.

Por tanto para los depositantes de Nervos DAO, sus CKBytes no solo actúan como tokens con suministro máximo al igual que Bitcoin, sino también como tokens deflacionarios de facto a largo plazo.

En el caso de la emisión secundaria, la tasa fija de suministro compuesta por 1.344.000.000 CKBytes anuales alcanzará un punto de equilibrio con el paso de los años, en el que la tasa de producción será igual a la tasa de pérdida. Dicho de otro modo, a largo plazo, la oferta de monedas pertenecientes a la emisión secundaria convergerá hacia k/λ (donde k es la tasa fija de suministro, y λ la tasa de pérdida de monedas), que es el punto donde las monedas se crean tan rápido como se pierden.

![alt_text](images/image5.png 'image_tooltip')

Económicamente esto significa que la emisión secundaria converge en el largo plazo en una oferta monetaria estable que no es ni inflacionaria ni deflacionaria. Y además muestra como la oferta monetaria de CKB no es realmente infinita en la práctica.

Así quedaría en el corto plazo la curva de emisión de CKB teniendo en cuenta la tasa de pérdida de CKBytes:

![alt_text](images/image6.png 'image_tooltip')

Mientras que a largo plazo quedaría de la siguiente manera:

![alt_text](images/image7.png 'image_tooltip')

Siempre teniendo en cuenta que para nuestro ejemplo hemos asignado a λ un valor anual de 0,5%. Si por ejemplo fuese un porcentaje menor, la tendencia sería la misma. Los CKBytes de génesis eventualmente se perderían, igual que los de la emisión primaria, creando una situación deflacionaria para los depositantes de Nervos DAO, y la emisión secundaria encontraría un punto de equilibrio en k/λ, simplemente tardaría más en llegar a ese punto.

### Conclusión y Pensamientos Finales

No importa cual sea el valor asignado a λ, siempre y cuando se pierdan CKBytes continuamente a lo largo del tiempo, es decir siempre y cuando λ sea mayor a 0 (λ > 0). Cumpliéndose esta condición podemos asumir lo siguiente:

* Los CKBytes del bloque de génesis que conforman la oferta inicial eventualmente se perderán con el transcurrir de los años.
* Respecto a la emisión primaria, al igual que con Bitcoin, la cantidad de monedas que salen de la circulación eventualmente excederá la cantidad de monedas que se crean a través de la emisión primaria, lo que lleva al mismo escenario deflacionario para todos los depositantes de Nervos DAO.
* En cuanto a la emisión secundaria, para aquellos participantes de la red que tienen sus CKBytes fuera de la DAO y por tanto les afecta esta emisión de cola, converge en el largo plazo en una oferta monetaria estable que no es ni inflacionaria ni deflacionaria, siendo de facto un suministro no infinito.

![alt_text](images/image8.png 'image_tooltip')

Es cierto que a medida que la tecnología blockchain continúa desarrollándose y los estándares mejoran cada día más, es posible que disminuya significativamente la tasa de pérdidas de claves privadas a lo largo del tiempo. Entre esos desarrollos podemos destacar los esquemas multifirma, la recuperación social, el interruptor del hombre muerto, y muchos otros desarrollos posibles gracias a la [abstracción de cuenta](https://www.nervos.org/knowledge-base/account_abstraction_where_were_going). Asimismo, el desarrollo de buenas prácticas y la educación de los usuarios en el manejo de sus llaves privadas disminuye la tasa de pérdidas.

Sin embargo, parece poco probable que en un futuro cercano estos avances logren detener por completo la pérdida de monedas, y como resultado, sus efectos seguirán manifestándose de una u otra forma en las curvas de emisión de monedas como CKB.


### Enlaces relacionados

* [Surprisingly, Tail Emission Is Not Inflationary](https://petertodd.org/2022/surprisingly-tail-emission-is-not-inflationary)
* [Bitcoin, Ethereum, Nervos: Inflationary or Deflationary?](https://www.cryptowendyo.com/bitcoin-ethereum-nervos-inflationary-deflationary/)
* [Understanding the Nervos CKB Issuance Model](https://www.nervos.org/knowledge-base/understanding_nervos_ckb_issuance_model)
* [Reasoning from the Monero community about the tail emission](https://www.reddit.com/r/Monero/comments/4z0azk/comment/d6sixyi/)
* [Bitcoin - Controlled Supply](https://en.bitcoin.it/wiki/Controlled_supply)
