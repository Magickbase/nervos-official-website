---
title: 'Entendiendo el modelo de emisión de Nervos CKB'
coverImage: 'images/image1.png'
category: Popular, economics
subtitle: 'Este documento pretende ser un artículo de referencia para entender el modelo de emisión de CKB de una forma gráfica, didáctica y sencilla.'
date: '2023-07-07T16:00:00.000Z'
author: 
  - github:alejandroRbit
  - github:ChemaESP
---

La propuesta de valor más importante de Bitcoin en el plano económico es su política de emisión fija, puesto que no está sujeto a cambio alguno, y a la vez predecible, en tanto en cuanto conocemos qué cantidad y en qué momento se van a emitir nuevas monedas, por ejemplo sabemos que el último BTC se extraerá alrededor del año 2140. Los famosos 21 millones de suministro total simplemente resumen esa idea. En contraposición, Ethereum no tiene una política monetaria fija y predecible, ya que ha cambiado varias veces a lo largo de la historia, véase por ejemplo el [EIP-1559](https://eips.ethereum.org/EIPS/eip-1559).

En cuanto a Nervos, sigue la misma filosofía y propuesta de valor que Bitcoin ya que las curvas de emisión primaria y secundaria de CKB son también fijas y predecibles. La emisión primaria se reduce a la mitad cada 4 años como Bitcoin, mientras que la emisión secundaria es constante, lo que significa que la tasa de emisión disminuye cada año, acercándose infinitamente a cero.

Esta propuesta de valor es extremadamente importante ya que una política monetaria fija y predecible otorga seguridad jurídica y económica a los participantes de la red, ya sean mineros, desarrolladores, inversores, empresas o usuarios. Por ejemplo, en el mundo empresarial se tiene muy en cuenta la seguridad jurídica a la hora de invertir en una nueva jurisdicción, ya que necesitan asegurar el futuro económico de su actividad. Además, también otorga la posibilidad de calcular de una forma más fácil y precisa los costos operativos dentro de la red, por ejemplo a la hora de invertir en hardware de minería.

Consideramos que es una característica primordial para una red centrada en la preservación y almacén de valor, por eso la política monetaria y el calendario de emisión de Nervos CKB es completamente fijo y no está sujeto a cambio alguno, siendo uno de los tres invariantes de la red.

### Bloque de Génesis

La cantidad inicial de CKBytes emitidos en el bloque de génesis es de 33.600.000.000, de los cuales el 25%, o 8.400.000.000 CKBytes, fueron [quemados inmediatamente de forma efectiva](https://explorer.nervos.org/address/ckb1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqrzayrmzh9lyl25y5uea0m0p76sawug7xqdksjqr), y por consiguiente nunca entrarán en circulación. De este modo, la cantidad circulante de CKBytes en génesis es 25.200.000.000.

![alt_text](images/image2.png 'image_tooltip')

Esto es importante tenerlo en cuenta ya que no es lo mismo quemar que no emitir, esos 8.400.000.000 CKBytes emitidos pero no circulantes (quemados) impactan en la emisión secundaria, puesto que de ese 25% quemado en génesis, el 15% (5,040,000,000 CKBytes) fue codificado como capacidad ocupada, mientras que el 10% (3,360,000,000 CKBytes) restante fue codificado como CKBytes líquidos, es decir, sin ocupar estado. De esta manera, incluso si no se utilizan CKBytes para almacenar estado, o si todos los CKBytes circulantes se depositan en Nervos DAO, los mineros y la tesorería seguirán recibiendo CKBytes de la emisión secundaria.

![alt_text](images/image3.png 'image_tooltip')

_Nota: no siempre será que el 15% de la emisión secundaria vaya a los mineros y el 10% vaya a la tesorería. Ese número disminuirá a medida que se extraigan más CKBytes. El diagrama anterior dice "al menos", que solo es preciso en el momento en que se inicia la red._

Como resultado, cuando hablemos más adelante de CKBytes emitidos se incluirán los 8.400.000.000 quemados. Por ejemplo, al calcular los datos de inflación lo haremos teniendo en cuenta todos los 33.600.000.000 CKBytes emitidos en génesis. Mientras que si hablamos de CKBytes en circulación nos referiremos a la cifra de 25.200.000.000 y por tanto se excluirán los 8.400.000.000 CKBytes quemados.

 <table border="1" align="center"> 
    <tr bgcolor="edf2f2">
        <td colspan="9"; width="34%" align="center"><b><H3>GENESIS BLOCK DISTRIBUTION AND UNLOCK DATES</H3></b></td>
      </tr>
    <tr align="center">
        <td><b></td>
        <td><b>Total CKBytes from genesis</td>
        <td><b>Circulating on mainnet launch</td>
        <td><b>2020-05-01</b></td>
        <td><b>2020-07-01</b></td>
        <td><b>2020-12-31</b></td>
        <td><b>2021-05-01</b></td>
        <td><b>2022-05-01</b></td>
        <td><b>2022-12-31</b></td>
    </tr>
    <tr>
        <td><b>Public token sale (21.5%)</b></td>
        <td align="right">7,224,000,000</td>
        <td align="right">7,224,000,000 (100%)</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="center">-</td>
    </tr>
    <tr>
        <td><b>Ecosystem Fund (17%)</b></td>
        <td align="right">5,712,000,000</td>
        <td align="right">171,360,000 (3%)</td>
        <td align="center">-</td>
        <td align="right">1,428,000,000 (25%)</td>
        <td align="right">2,856,000,000 (50%)</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="right">5,712,000,000 (100%)</td>
    </tr>
    <tr>
        <td><b>Team (15%)</b></td>
        <td align="right">5,040,000,000</td>
        <td align="right">1,680,000,000 (33.33%)</td>
        <td align="right">2,520,000,000 (50%)</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="right">3,360,000,000 (66.66%)</td>
        <td align="right">5,040,000,000 (100%)</td>
        <td align="center">-</td>
    </tr>
    <tr>
        <td><b>Private Sale (14%)</b></td>
        <td align="right">4,704,000,000</td>
        <td align="right">3,136,000,000 (66.66%)</td>
        <td align="right">4,704,000,000 (100%)</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="center">-</td>
    </tr>
    <tr>
        <td><b>Founding Partners (5%)</b></td>
        <td align="right">1,680,000,000</td>
        <td align="center">-</td>
        <td align="right">420,000,000 (25%)</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="right">840,000,000 (50%)</td>
        <td align="right">1,680,000,000 (100%)</td>
        <td align="center">-</td>
    </tr>
    <tr>
        <td><b>Foundation Reserve (2%)</b></td>
        <td align="right">672,000,000</td>
        <td align="center">-</td>
        <td align="right">672,000,000 (100%)</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="center">-</td>
    </tr>
    <tr>
        <td><b>Testnet Incentives (0.5%)</b></td>
        <td align="right">168,000,000</td>
        <td align="right">168,000,000 (100%)</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="center">-</td>
    </tr>
    <tr>
        <td><b>Burn (25%)</b></td>
        <td align="right">8,400,000,000</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="center">-</td>
</table>

## Componentes de la Emisión de CKB: Emisión Primaria y Secundaria

### Emisión Base o Primaria

La emisión primaria se compone de un total finito de 33.600.000.000 CKBytes, y al igual que Bitcoin, las recompensas de esta emisión se reducen a la mitad aproximadamente cada 4 años hasta ser agotadas. La primera reducción a la mitad de CKB ocurrirá a mediados de noviembre de 2023. La emisión primaria es por tanto un suministro con limite máximo o hard cap, igual que Bitcoin.

Por ejemplo, en los primeros cuatros años de la red se emitirán 4.200.000.000 CKBytes por año y tras el primer evento de halving en noviembre de 2023 se emitirán 2.100.000.000 CKBytes por año. Como podemos ver en el siguiente gráfico, con cada halving la velocidad de extracción de CKB a través de la emisión primaria se reduce exactamente a la mitad. En consecuencia, la tasa de entrada de nuevos CKB en el mercado también se reduce en un 50%.

![alt_text](images/image4.png 'image_tooltip')

De esta forma en los cuatro primeros años de la red se emiten 16.800.000.000 CKBytes mediante la emisión primaria, los cuales representan el 50% del suministro total de 33.600.000.000 de esta emisión. Los cuatro siguientes años, desde 2023 hasta 2027, se emiten 8.400.000.000 CKBytes. Por tanto en los primeros ochos años de la red se emite el 75% de la emisión primaria. Para el año 2031, doce años desde el lanzamiento de la red principal, se habrá emitido el 87,5%, o 29.400.000.000 CKBytes, de la emisión primaria.

![alt_text](images/image5.png 'image_tooltip')

![alt_text](images/image6.png 'image_tooltip')

En este punto seguro que te has dado cuenta que en los primeros años de la red es cuando mayor emisión hay y esta se reduce rápidamente tras cada evento de halving. Esto se puede observar fácilmente en la tasa de inflación. En el primer año de la red, la inflación correspondiente a la emisión primaria es 12,5%, cuatro años después y tras el primer halving en 2023, será de 3,765%, y a partir del cuarto halving en 2031 la inflación será de 0,663%. Puesto que la emisión primaria tiene un total finito de 33.600.000.000 CKBytes la inflación llegará a cero cuando se emitan todos los CKBytes de la emisión primaria.

![alt_text](images/image7.png 'image_tooltip')

En la siguiente tabla puedes ver la evolución de la emisión primaria en cada halving.

 <table border="1" align="center"> 
    <tr bgcolor="edf2f2">
        <td colspan="6"; width="34%" align="center"><b><H3>PRIMARY ISSUANCE</H3></b></td>
      </tr>
    <tr align="center">
        <td><b>Year (estimate)*</b></td>
        <td><b>Reward era**</b></td>
        <td><b>CKBytes/year</b></td>
        <td><b>CKBytes issued</b></td>
        <td><b>CKBytes issued cumulative</b></td>
        <td><b>Percentage issued (%)</b></td>
    </tr>
    <tr align="right">
        <td>2019-2023</td>
        <td>1</td>
        <td>4,200,000,000.00</td>
        <td>16,800,000,000.00</td>
        <td>16,800,000,000.00</td>
        <td>50</td>
    </tr>
    <tr align="right">
        <td>2023-2024</td>
        <td>2</td>
        <td>2,100,000,000.00</td>
        <td>8,400,000,000.00</td>
        <td>25,200,000,000.00</td>
        <td>75</td>
    </tr>
    <tr align="right">
        <td>2024-2027</td>
        <td>3</td>
        <td>1,050,000,000.00</td>
        <td>4,200,000,000.00</td>
        <td>29,400,000,000.00</td>
        <td>87.5</td>
    </tr>
    <tr align="right">
        <td>2027-2031</td>
        <td>4</td>
        <td>525,000,000.00</td>
        <td>2,100,000,000.00</td>
        <td>31,500,000,000.00</td>
        <td>93.75</td>
    </tr>
    <tr align="right">
        <td>2031-2035</td>
        <td>5</td>
        <td>262,500,000.00</td>
        <td>1,050,000,000.00</td>
        <td>32,550,000,000.00</td>
        <td>96.875</td>
    </tr>
    <tr align="right">
        <td>2035-2039</td>
        <td>6</td>
        <td>131,250,000.00</td>
        <td>525,000,000.00</td>
        <td>33,075,000,000.00</td>
        <td>98.4375</td>
    </tr>
    <tr align="right">
        <td>2039-2043</td>
        <td>7</td>
        <td>65,625,000.00</td>
        <td>262,500,000.00</td>
        <td>33,337,500,000.00</td>
        <td>99.21875</td>
    </tr>
    <tr align="right">
        <td>2043-2047</td>
        <td>8</td>
        <td>32,812,500.00</td>
        <td>131,250,000.00</td>
        <td>33,468,750,000.00</td>
        <td>99.609375</td>
    </tr>
    <tr align="right">
        <td>2047-2051</td>
        <td>9</td>
        <td>16,406,250.00</td>
        <td>65,625,000.00</td>
        <td>33,534,375,000.00</td>
        <td>99.8046875</td>
    </tr>
    <tr align="right">
        <td>2051-2055</td>
        <td>10</td>
        <td>8,203,125.00</td>
        <td>32,812,500.00</td>
        <td>33,567,187,500.00</td>
        <td>99.90234375</td>
    </tr>
    <tr align="right">
        <td>2055-2059</td>
        <td>11</td>
        <td>4,101,562.50</td>
        <td>16,406,250.00</td>
        <td>33,583,593,750.00</td>
        <td>99.951171875</td>
    </tr>
    <tr align="right">
        <td>2059-2063</td>
        <td>12</td>
        <td>2,050,781.25</td>
        <td>8,203,125.00</td>
        <td>33,591,796,875.00</td>
        <td>99.9755859375</td>
    </tr>
    <tr align="right">
        <td>2063-2067</td>
        <td>13</td>
        <td>1,025,390.63</td>
        <td>4,101,562.52</td>
        <td>33,595,898,437.52</td>
        <td>99.9877929688</td>
    </tr>
    <tr align="right">
        <td>2067-2071</td>
        <td>14</td>
        <td>512,695.30</td>
        <td>2,050,781.20</td>
        <td>33,597,949,218.72</td>
        <td>99.9938964843</td>
    </tr>
    <tr align="right">
        <td>2071-2075</td>
        <td>15</td>
        <td>256,347.65</td>
        <td>1,025,390.60</td>
        <td>33,598,974,609.32</td>
        <td>99.9969482420</td>
    </tr>
    <tr align="right">
        <td>2075-2079</td>
        <td>16</td>
        <td>128,173.83</td>
        <td>512,695.32</td>
        <td>33,599,487,304.64</td>
        <td>99.9984741210</td>
    </tr>
    <tr align="right">
        <td>2079-2083</td>
        <td>17</td>
        <td>64,086.92</td>
        <td>256,347.68</td>
        <td>33,599,743,652.32</td>
        <td>99.9992370605</td>
    </tr>
    <tr align="right">
        <td>2083-2087</td>
        <td>18</td>
        <td>32,043.46</td>
        <td>128,173.84</td>
        <td>33,599,871,826.16</td>
        <td>99.9996185302</td>
    </tr>
    <tr align="right">
        <td>2087-2091</td>
        <td>19</td>
        <td>16,021.73</td>
        <td>64,086.92</td>
        <td>33,599,935,913.08</td>
        <td>99.9998092651</td>
    </tr>
    <tr align="right">
        <td>2091-2095</td>
        <td>20</td>
        <td>8,010.87</td>
        <td>32,043.48</td>
        <td>33,599,967,956.56</td>
        <td>99.9999046326</td>
    </tr>
    </tr>
</table>

_Nota*: La red principal de Nervos CKB se lanzó el 15 noviembre de 2019 UTC. Por tanto cada año natural debe entenderse desde noviembre hasta noviembre del año siguiente._

_Nota**: Reward era se refiere al evento de halving o reducción a la mitad._

Todos los tokens de la emisión base se recompensan a los mineros como incentivos para proteger la red, por tanto solo se pueden obtener a través de la minería.

### Emisión Secundaria

Además de la emisión base o primaria, existe una emisión secundaria, la cual es de 1.344.000.000 CKBytes por año. Por lo tanto esta emisión, a diferencia de la primaria, no es hard cap, es decir, no tiene límite máximo.

![alt_text](images/image8.png 'image_tooltip')

Como podemos observar en el gráfico, tras el segundo halving, la cantidad de CKBytes emitidos por la emisión secundaria superará a la emisión primaria en cada bloque minado, y por tanto la emisión secundaria va ganando cada vez mas importancia desde el punto de vista de las recompensas de minería. Cuando la emisión primaria llegue a cero, solo quedará las recompensas de la emisión secundaria.

Esta emisión debe entenderse como una forma de cobrar renta estatal, es decir, un impuesto mediante inflación dirigida a aquellos participantes de la red que hacen uso del estado en la blockchain. De esta forma se garantiza que la compensación de los mineros sea predecible y se base en la demanda de preservación del valor en lugar de la demanda de transacciones. Esto es primordial para el modelo de seguridad en redes que priorizan el almacén de valor en la Capa 1 como Nervos, mientras mueven la mayoría de las transacciones a la Capa 2.

Pero, ¿qué ocurre si no haces uso del estado, como es el caso de un holder? ¿No sería injusto pagar también ese impuesto? Si, sería injusto. Por esta razón Nervos incluye un contrato inteligente especial llamado Nervos DAO, que funciona como un refugio contra la inflación de la emisión secundaria. Los propietarios de CKBytes pueden depositar sus tokens en Nervos DAO y recibir una parte de la emisión secundaria que compensa exactamente los efectos inflacionarios de la emisión secundaria. Por tanto para los poseedores de tokens a largo plazo, siempre que bloqueen sus tokens en Nervos DAO, el efecto inflacionario de la emisión secundaria es solo nominal. Con los efectos de la emisión secundaria mitigados, estos usuarios tienen efectivamente tokens con suministro máximo al igual que Bitcoin.

Una forma fácil de entender la emisión secundaria es verla como una emisión de cola. Por ejemplo la emisión de cola de Monero permite que los mineros no dependan al 100% de las tarifas de transacción y, por lo tanto, pueden garantizar un ingreso específico para ellos, independientemente del mercado de tarifas y el volumen de transacciones, de esta manera las recompensas por bloque nunca llegarán a cero, manteniendo los incentivos para seguir minando la red de forma honesta y, por consiguiente, manteniendo la seguridad de la red a largo plazo.

![alt_text](images/image9.png 'image_tooltip')

_Nota: la emisión de cola de Monero se implementó en su red principal a finales de mayo de 2022, mientras que la emisión secundaria de CKB está implementada desde el lanzamiento de la red principal de Nervos en noviembre de 2019._

En el gráfico se ve claramente como ambas tasas de emisión disminuyen, tendiendo a cero de forma infinita. La diferencia fundamental entre ambas es que la emisión de cola de Monero afecta a todos los participantes de la red Monero, mientras que la emisión secundaria de Nervos solo afecta a aquellos participantes que no tienen sus CKB depositados en la DAO, por tanto se trata de una inflación dirigida solo a parte de la red, no afectando a la totalidad de los participantes de Nervos.

De hecho, si contemplamos la [tasa de compensación nominal](https://explorer.nervos.org/charts/nominal-apc) que reciben los depositantes de Nervos DAO, podemos ver que se reduce a lo largo del tiempo. Esto se debe a que como depositante de Nervos DAO siempre obtienes la misma parte del nuevo suministro, pero la tasa del nuevo suministro en sí disminuye continuamente. Esta es la razón por la que la tasa de compensación (APC) en realidad disminuye a medida que pasa el tiempo y significa que el suministro total de CKBytes aumenta cada vez más lentamente, acercándose infinitamente a cero tanto la inflación como el porcentaje de compensación de Nervos DAO.

Si comparamos la inflación de la emisión primaria y secundaria a lo largo de los años, podemos observar como los depositantes de Nervos DAO solo son afectados por la tasa de emisión de la emisión primaria, que recordemos es una emisión hard cap al igual que Bitcoin, mientras que los que tienen sus CKBytes fuera de la DAO, ya sea porque están ocupando estado o porque prefieren mantener sus CKBytes líquidos, son diluidos por la emisión secundaria.

![alt_text](images/image10.png 'image_tooltip')

<table border="1" align="center"> 
    <tr bgcolor="edf2f2">
        <td colspan="6"; width="34%" align="center"><b><H3>COMPARATIVE TABLE OF INFLATION RATES</H3></b></td>
    </tr>
    <tr align="center">
        <td><b>Year (estimate)</b></td>
        <td><b>Reward era</b></td>
        <td><b>Inflation rate primary emission (%)</b></td>
        <td><b>Inflation rate secondary emission (%)</b></td>
        <td><b>Inflation rate primary + secondary emission (%)</b></td>
    </tr>
    <tr align="right">
        <td>2019</td>
        <td>1</td>
        <td>12.5000000000</td>
        <td>4.0000000000</td>
        <td>16.5000000000</td>
    </tr>
    <tr align="right">
        <td>2020</td>
        <td>1</td>
        <td>10.7296137339</td>
        <td>3.4334763948</td>
        <td>14.1630901287</td>
    </tr>
    <tr align="right">
        <td>2021</td>
        <td>1</td>
        <td>9.3984962406</td>
        <td>3.0075187970</td>
        <td>12.4060150376</td>
    </tr>
    <tr align="right">
        <td>2022</td>
        <td>1</td>
        <td>8.3612040134</td>
        <td>2.6755852843</td>
        <td>11.0367892977</td>
    </tr>
    <tr align="right">
        <td>2023</td>
        <td>2</td>
        <td>3.7650602410</td>
        <td>2.4096385542</td>
        <td>6.1746987952</td>
    </tr>
    <tr align="right">
        <td>2024</td>
        <td>2</td>
        <td>3.5460992908</td>
        <td>2.2695035461</td>
        <td>5.8156028369</td>
    </tr>
    <tr align="right">
        <td>2025</td>
        <td>2</td>
        <td>3.3512064343</td>
        <td>2.1447721180</td>
        <td>5.4959785523</td>
    </tr>
    <tr align="right">
        <td>2026</td>
        <td>2</td>
        <td>3.1766200762</td>
        <td>2.0330368488</td>
        <td>5.2096569250</td>
    </tr>
    <tr align="right">
        <td>2027</td>
        <td>3</td>
        <td>1.5096618357</td>
        <td>1.9323671498</td>
        <td>3.4420289855</td>
    </tr>
    <tr align="right">
        <td>2028</td>
        <td>3</td>
        <td>1.4594279043</td>
        <td>1.8680677175</td>
        <td>3.3274956218</td>
    </tr>
    <tr align="right">
        <td>2029</td>
        <td>3</td>
        <td>1.4124293785</td>
        <td>1.8079096045</td>
        <td>3.2203389830</td>
    </tr>
    <tr align="right">
        <td>2030</td>
        <td>3</td>
        <td>1.3683634373</td>
        <td>1.7515051998</td>
        <td>3.1198686371</td>
    </tr>
    <tr align="right">
        <td>2031</td>
        <td>4</td>
        <td>0.6634819533</td>
        <td>1.6985138004</td>
        <td>2.3619957537</td>
    </tr>
    <tr align="right">
        <td>2032</td>
        <td>4</td>
        <td>0.6481721545</td>
        <td>1.6593207156</td>
        <td>2.3074928701</td>
    </tr>
    <tr align="right">
        <td>2033</td>
        <td>4</td>
        <td>0.6335529650</td>
        <td>1.6218955905</td>
        <td>2.2554485555</td>
    </tr>
    <tr align="right">
        <td>2034</td>
        <td>4</td>
        <td>0.6195786865</td>
        <td>1.5861214374</td>
        <td>2.2057001239</td>
    </tr>
    <tr align="right">
        <td>2035</td>
        <td>5</td>
        <td>0.3031037827</td>
        <td>1.5518913676</td>
        <td>1.8549951503</td>
    </tr>
    <tr align="right">
        <td>2036</td>
        <td>5</td>
        <td>0.2975836210</td>
        <td>1.5236281395</td>
        <td>1.8212117605</td>
    </tr>
    <tr align="right">
        <td>2037</td>
        <td>5</td>
        <td>0.2922609306</td>
        <td>1.4963759645</td>
        <td>1.7886368951</td>
    </tr>
    <tr align="right">
        <td>2038</td>
        <td>5</td>
        <td>0.2871253015</td>
        <td>1.4700815436</td>
        <td>1.7572068451</td>
    </tr>
    <tr align="right">
        <td>2039</td>
        <td>6</td>
        <td>0.1410835214</td>
        <td>1.4446952596</td>
        <td>1.5857787810</td>
    </tr>
    <tr align="right">
        <td>2040</td>
        <td>6</td>
        <td>0.1388811733</td>
        <td>1.4221432143</td>
        <td>1.5610243876</td>
    </tr>
    <tr align="right">
        <td>2041</td>
        <td>6</td>
        <td>0.1367465266</td>
        <td>1.4002844328</td>
        <td>1.5370309594</td>
    </tr>
    <tr align="right">
        <td>2042</td>
        <td>6</td>
        <td>0.1346765070</td>
        <td>1.3790874320</td>
        <td>1.5137639390</td>
    </tr>
    <tr align="right">
        <td>2043</td>
        <td>7</td>
        <td>0.0663341117</td>
        <td>1.3585226067</td>
        <td>1.4248567184</td>
    </tr>
    <tr align="right">
        <td>2044</td>
        <td>7</td>
        <td>0.0654022237</td>
        <td>1.3394375409</td>
        <td>1.4048397646</td>
    </tr>
    <tr align="right">
        <td>2045</td>
        <td>7</td>
        <td>0.0644961560</td>
        <td>1.3208812755</td>
        <td>1.3853774315</td>
    </tr>
    <tr align="right">
        <td>2046</td>
        <td>7</td>
        <td>0.0636148503</td>
        <td>1.3028321331</td>
        <td>1.3664469834</td>
    </tr>
    <tr align="right">
        <td>2047</td>
        <td>8</td>
        <td>0.0313786525</td>
        <td>1.2852696054</td>
        <td>1.3166482579</td>
    </tr>
    <tr align="right">
        <td>2048</td>
        <td>8</td>
        <td>0.0309708750</td>
        <td>1.2685670396</td>
        <td>1.2995379146</td>
    </tr>
    <tr align="right">
        <td>2049</td>
        <td>8</td>
        <td>0.0305735600</td>
        <td>1.2522930170</td>
        <td>1.2828665770</td>
    </tr>
    <tr align="right">
        <td>2050</td>
        <td>8</td>
        <td>0.0301863099</td>
        <td>1.2364312537</td>
        <td>1.2666175636</td>
    </tr>
    <tr align="right">
        <td>2051</td>
        <td>9</td>
        <td>0.0149043735</td>
        <td>1.2209662803</td>
        <td>1.2358706538</td>
    </tr>
    <tr align="right">
        <td>2052</td>
        <td>9</td>
        <td>0.0147224234</td>
        <td>1.2060609273</td>
        <td>1.2207833507</td>
    </tr>
    <tr align="right">
        <td>2053</td>
        <td>9</td>
        <td>0.0145448622</td>
        <td>1.1915151092</td>
        <td>1.2060599714</td>
    </tr>
    <tr align="right">
        <td>2054</td>
        <td>9</td>
        <td>0.0143715329</td>
        <td>1.1773159725</td>
        <td>1.1916875054</td>
    </tr>
    <tr align="right">
        <td>2055</td>
        <td>10</td>
        <td>0.0071011430</td>
        <td>1.1634512691</td>
        <td>1.1705524121</td>
    </tr>
    <tr align="right">
        <td>2056</td>
        <td>10</td>
        <td>0.0070189821</td>
        <td>1.1499900330</td>
        <td>1.1570090151</td>
    </tr>
    <tr align="right">
        <td>2057</td>
        <td>10</td>
        <td>0.0069387007</td>
        <td>1.1368367296</td>
        <td>1.1437754303</td>
    </tr>
    <tr align="right">
        <td>2058</td>
        <td>10</td>
        <td>0.0068602351</td>
        <td>1.1239809121</td>
        <td>1.1308411472</td>
    </tr>
</table>

En el siguiente gráfico puedes ver la cantidad de CKBytes en circulación a lo largo de los años.

![alt_text](images/image11.png 'image_tooltip')

_Nota: en el gráfico y en la tabla de abajo se tienen en cuenta los 25.200.000.000 CKBytes del bloque de génesis y las fechas de desbloqueo. También se cuentan todos los 1.344.000.000 CKBytes anuales de la emisión secundaria sin considerar los CKBytes quemados pertenecientes a la tesorería. Si quieres saber cuantos CKBytes de la emisión secundaria se han quemado hasta ahora puedes verlo [aquí](https://explorer.nervos.org/nervosdao)._

 <table border="1" align="center"> 
    <tr bgcolor="edf2f2">
        <td colspan="6"; width="34%" align="center"><b><H3>CKBYTES IN CIRCULATION THROUGH THE YEARS</H3></b></td>
      </tr>
    <tr align="center">
        <td><b>Year (estimate)</b></td>
        <td><b>Reward era</b></td>
        <td><b>Genesis</b></td>
        <td><b>Primary emission</b></td>
        <td><b>Secondary emission</b></td>
        <td><b>Total CKBytes in circulation</b></td>
    </tr>
    <tr align="right">
        <td>2019</td>
        <td>1</td>
        <td>12,379,360,000</td>
        <td>0</td>
        <td>0</td>
        <td>12,379,360,000</td>
    </tr>
    <tr align="right">
        <td>2020</td>
        <td>1</td>
        <td>18,564,000,000</td>
        <td>4,200,000,000</td>
        <td>1,344,000,000</td>
        <td>24,108,000,000</td>
    </tr>
    <tr align="right">
        <td>2021</td>
        <td>1</td>
        <td>19,824,000,000</td>
        <td>8,400,000,000</td>
        <td>2,688,000,000</td>
        <td>30,912,000,000</td>
    </tr>
    <tr align="right">
        <td>2022</td>
        <td>1</td>
        <td>25,200,000,000</td>
        <td>12,600,000,000</td>
        <td>4,032,000,000</td>
        <td>41,832,000,000</td>
    </tr>
    <tr align="right">
        <td>2023</td>
        <td>2</td>
        <td>25,200,000,000</td>
        <td>16,800,000,000</td>
        <td>5,376,000,000</td>
        <td>47,376,000,000</td>
    </tr>
    <tr align="right">
        <td>2024</td>
        <td>2</td>
        <td>25,200,000,000</td>
        <td>18,900,000,000</td>
        <td>6,720,000,000</td>
        <td>50,820,000,000</td>
    </tr>
    <tr align="right">
        <td>2025</td>
        <td>2</td>
        <td>25,200,000,000</td>
        <td>21,000,000,000</td>
        <td>8,064,000,000</td>
        <td>54,264,000,000</td>
    </tr>
    <tr align="right">
        <td>2026</td>
        <td>2</td>
        <td>25,200,000,000</td>
        <td>23,100,000,000</td>
        <td>9,408,000,000</td>
        <td>57,708,000,000</td>
    </tr>
    <tr align="right">
        <td>2027</td>
        <td>3</td>
        <td>25,200,000,000</td>
        <td>25,200,000,000</td>
        <td>10,752,000,000</td>
        <td>61,152,000,000</td>
    </tr>
    <tr align="right">
        <td>2028</td>
        <td>3</td>
        <td>25,200,000,000</td>
        <td>26,250,000,000</td>
        <td>12,096,000,000</td>
        <td>63,546,000,000</td>
    </tr>
    <tr align="right">
        <td>2029</td>
        <td>3</td>
        <td>25,200,000,000</td>
        <td>27,300,000,000</td>
        <td>13,440,000,000</td>
        <td>65,940,000,000</td>
    </tr>
    <tr align="right">
        <td>2030</td>
        <td>3</td>
        <td>25,200,000,000</td>
        <td>28,350,000,000</td>
        <td>14,784,000,000</td>
        <td>68,334,000,000</td>
    </tr>
    <tr align="right">
        <td>2031</td>
        <td>4</td>
        <td>25,200,000,000</td>
        <td>29,400,000,000</td>
        <td>16,128,000,000</td>
        <td>70,728,000,000</td>
    </tr>
    <tr align="right">
        <td>2032</td>
        <td>4</td>
        <td>25,200,000,000</td>
        <td>29,925,000,000</td>
        <td>17,472,000,000</td>
        <td>72,597,000,000</td>
    </tr>
    <tr align="right">
        <td>2033</td>
        <td>4</td>
        <td>25,200,000,000</td>
        <td>30,450,000,000</td>
        <td>18,816,000,000</td>
        <td>74,466,000,000</td>
    </tr>
    <tr align="right">
        <td>2034</td>
        <td>4</td>
        <td>25,200,000,000</td>
        <td>30,975,000,000</td>
        <td>20,160,000,000</td>
        <td>76,335,000,000</td>
    </tr>
    <tr align="right">
        <td>2035</td>
        <td>5</td>
        <td>25,200,000,000</td>
        <td>31,500,000,000</td>
        <td>21,504,000,000</td>
        <td>78,204,000,000</td>
    </tr>
    <tr align="right">
        <td>2036</td>
        <td>5</td>
        <td>25,200,000,000</td>
        <td>31,762,500,000</td>
        <td>22,848,000,000</td>
        <td>79,810,500,000</td>
    </tr>
    <tr align="right">
        <td>2037</td>
        <td>5</td>
        <td>25,200,000,000</td>
        <td>32,025,000,000</td>
        <td>24,192,000,000</td>
        <td>81,417,000,000</td>
    </tr>
    <tr align="right">
        <td>2038</td>
        <td>5</td>
        <td>25,200,000,000</td>
        <td>32,287,500,000</td>
        <td>25,536,000,000</td>
        <td>83,023,500,000</td>
    </tr>
    <tr align="right">
        <td>2039</td>
        <td>6</td>
        <td>25,200,000,000</td>
        <td>32,550,000,000</td>
        <td>26,880,000,000</td>
        <td>84,630,000,000</td>
    </tr>
    <tr align="right">
        <td>2040</td>
        <td>6</td>
        <td>25,200,000,000</td>
        <td>32,681,250,000</td>
        <td>28,224,000,000</td>
        <td>86,105,250,000</td>
    </tr>
    <tr align="right">
        <td>2041</td>
        <td>6</td>
        <td>25,200,000,000</td>
        <td>32,812,500,000</td>
        <td>29,568,000,000</td>
        <td>87,580,500,000</td>
    </tr>
    <tr align="right">
        <td>2042</td>
        <td>6</td>
        <td>25,200,000,000</td>
        <td>32,943,750,000</td>
        <td>30,912,000,000</td>
        <td>89,055,750,000</td>
    </tr>
    <tr align="right">
        <td>2043</td>
        <td>7</td>
        <td>25,200,000,000</td>
        <td>33,075,000,000</td>
        <td>32,256,000,000</td>
        <td>90,531,000,000</td>
    </tr>
    <tr align="right">
        <td>2044</td>
        <td>7</td>
        <td>25,200,000,000</td>
        <td>33,140,625,000</td>
        <td>33,600,000,000</td>
        <td>91,940,625,000</td>
    </tr>
    <tr align="right">
        <td>2045</td>
        <td>7</td>
        <td>25,200,000,000</td>
        <td>33,206,250,000</td>
        <td>34,944,000,000</td>
        <td>93,350,250,000</td>
    </tr>
    <tr align="right">
        <td>2046</td>
        <td>7</td>
        <td>25,200,000,000</td>
        <td>33,271,875,000</td>
        <td>36,288,000,000</td>
        <td>94,759,875,000</td>
    </tr>
    <tr align="right">
        <td>2047</td>
        <td>8</td>
        <td>25,200,000,000</td>
        <td>33,337,500,000</td>
        <td>37,632,000,000</td>
        <td>96,169,500,000</td>
    </tr>
    <tr align="right">
        <td>2048</td>
        <td>8</td>
        <td>25,200,000,000</td>
        <td>33,370,312,500</td>
        <td>38,976,000,000</td>
        <td>97,546,312,500</td>
    </tr>
    <tr align="right">
        <td>2049</td>
        <td>8</td>
        <td>25,200,000,000</td>
        <td>33,403,125,000</td>
        <td>40,320,000,000</td>
        <td>98,923,125,000</td>
    </tr>
    <tr align="right">
        <td>2050</td>
        <td>8</td>
        <td>25,200,000,000</td>
        <td>33,435,937,500</td>
        <td>41,664,000,000</td>
        <td>100,299,937,500</td>
    </tr>
    <tr align="right">
        <td>2051</td>
        <td>9</td>
        <td>25,200,000,000</td>
        <td>33,468,750,000</td>
        <td>43,008,000,000</td>
        <td>101,676,750,000</td>
    </tr>
    <tr align="right">
        <td>2052</td>
        <td>9</td>
        <td>25,200,000,000</td>
        <td>33,485,156,250</td>
        <td>44,352,000,000</td>
        <td>103,037,156,250</td>
    </tr>
    <tr align="right">
        <td>2053</td>
        <td>9</td>
        <td>25,200,000,000</td>
        <td>33,501,562,500</td>
        <td>45,696,000,000</td>
        <td>104,397,562,500</td>
    </tr>
    <tr align="right">
        <td>2054</td>
        <td>9</td>
        <td>25,200,000,000</td>
        <td>33,517,968,750</td>
        <td>47,040,000,000</td>
        <td>105,757,968,750</td>
    </tr>
    <tr align="right">
        <td>2055</td>
        <td>10</td>
        <td>25,200,000,000</td>
        <td>33,534,375,000</td>
        <td>48,384,000,000</td>
        <td>107,118,375,000</td>
    </tr>
    <tr align="right">
        <td>2056</td>
        <td>10</td>
        <td>25,200,000,000</td>
        <td>33,542,578,125</td>
        <td>49,728,000,000</td>
        <td>108,470,578,125</td>
    </tr>
    <tr align="right">
        <td>2057</td>
        <td>10</td>
        <td>25,200,000,000</td>
        <td>33,550,781,250</td>
        <td>51,072,000,000</td>
        <td>109,822,781,250</td>
    </tr>
    <tr align="right">
        <td>2058</td>
        <td>10</td>
        <td>25,200,000,000</td>
        <td>33,558,984,375</td>
        <td>52,416,000,000</td>
        <td>111,174,984,375</td>
    </tr>
</table>

### Distribución de la Emisión Secundaria

Los CKBytes de la emisión secundaria se distribuyen a los mineros, depositantes de Nervos DAO y la tesorería de forma proporcional dependiendo de cuantos CKBytes estén ocupando estado en la blockchain, cuantos CKBytes estén depositados en Nervos DAO y cuantos CKBytes estén líquidos, respectivamente.

![alt_text](images/image12.png 'image_tooltip')

Veamos un ejemplo para entenderlo mejor, imagina que el 50% de todos los CKBytes existentes ocupan estado, el 35% están en Nervos DAO y el 15% restante están líquidos (no ocupan estado ni están depositados en Nervos DAO), la distribución quedaría así:

* El 50% de la emisión secundaria se destina a recompensar a los mineros.
* El 35% de la emisión secundaria se destina a Nervos DAO para que se distribuya proporcionalmente entre los tokens depositados y sus titulares, negando los efectos de dilución de la emisión secundaria sobre los holders a largo plazo de la red.
* El 15% restante de la emisión secundaria va a la tesorería y su uso lo determina la comunidad a través del mecanismo de gobernanza. Mientras no se active la tesorería mediante hard fork estos CKBytes se [queman](https://explorer.nervos.org/nervosdao).

## Conclusión

El modelo de emisión de Nervos CKB, aunque algo más complejo, es muy parecido al modelo de Bitcoin y matiente su propuesta de valor, una emisión fija y predecible. La mayor diferencia entre ambos modelos es la inclusión de una emisión de cola, la emisión secundaria, para mantener la seguridad de la red a largo plazo y no depender de las tarifas por transacciones para pagar a los mineros. Esta emisión secundaria no afecta a todos los miembros de la red ya que los depositantes de Nervos DAO se protegen de su efecto inflacionario, convirtiendo sus CKBytes en tokens con suministro máximo, o hard cap, al estilo de Bitcoin.

### Enlaces Relacionados

* [Crypto-Economics of the Nervos Common Knowledge Base](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0015-ckb-cryptoeconomics/0015-ckb-cryptoeconomics.md)
* [The CKByte Issuance Model of Nervos](https://talk.nervos.org/t/the-ckbyte-issuance-model-of-nervos/5321)
* [Understanding the economic model of Nervos CKB](https://medium.com/@Chema_es/understanding-the-economic-model-of-nervos-ckb-408e2b74478b)
* [A detailed description of Nervos (CKB) supply and issuance](https://medium.com/@m.quinn/a-detailed-description-of-nervos-ckb-supply-and-issuance-1d55c4b101f9)
* [Nervos CKByte Distribution, and Why We Are Burning 25% in the Genesis Block](https://medium.com/nervosnetwork/nervos-ckbyte-distribution-and-why-we-are-burning-25-in-the-genesis-block-9a7ddf7f6779)
* [Bitcoin, Ethereum, Nervos: Inflationary or Deflationary?](https://www.cryptowendyo.com/bitcoin-ethereum-nervos-inflationary-deflationary/)
* [CKB Supply calculation](https://docs.google.com/spreadsheets/d/1G8eofv1qqs96aEUqEk9vZ8qxeUqSn31KCNoQlwLMyJA/edit#gid=1511634195)
