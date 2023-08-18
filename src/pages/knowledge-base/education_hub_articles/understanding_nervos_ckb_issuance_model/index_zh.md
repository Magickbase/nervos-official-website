---
title: '一文看懂 Nervos CKB 的发行机制'
coverImage: 'images/image1.png'
category: Popular, economics
subtitle: '本文将用图解、科普等简明生动的方式，向您解释 CKB 的发行机制。'
date: '2023-07-07T16:00:00.000Z'
author: 
  - github:alejandroRbit
  - github:ChemaESP
---

比特币在经济领域最重要的价值主张是其固定的发行机制，它不会因为任何因素而改变，同时也是可预测的，这样我们就能掌握新币的产量和时间。比如，我们知道最后一枚比特币大约会在 2140 年左右被挖出。2100 万的总供应量恰好概括了这件事情。相比之下，以太坊没有一个固定且可预测的货币政策，因为它曾经多次调整过，例如实施了 [EIP-1559](https://eips.ethereum.org/EIPS/eip-1559)。

Nervos 与比特币有着相同的理念和价值主张，因为 CKB 的一级发行和二级发行也是固定且可预测的。一级发行和比特币一样，大约每 4 年减半一次，而二级发行则保持不变，这意味着 CKB 的通胀率会逐年降低，最终无限趋近于零。

这一价值主张非常重要，因为它为网络参与者（无论是矿工、开发者、投资者、公司还是用户）提供了稳定且可预期的货币政策，保障了他们的法律和经济利益。例如，在商业领域中，进入新的司法管辖区投资时，法律确定性是至关重要的，因为它能够确保投资者的经济前景。此外，它还使得网络的运营成本能够以更简单、更精确的方式进行计算，比如在购买挖矿设备时。

我们认为，对于一个以保值和价值存储为核心的网络来说，Nervos CKB 的货币政策和发行时间表必须是完全固定不变的，这也是 Nervos 网络三大不变内容之一。



### 创世区块

在创世区块中，CKB 的初始发行量为 336 亿，其中的 25%，即 84 亿 CKB，被[立即销毁](https://explorer.nervos.org/address/ckb1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqrzayrmzh9lyl25y5)，永远不会进入流通。因此，创世区块中 CKB 的流通量为 252 亿。

![alt_text](images/image2.png 'image_tooltip')

"销毁" 不等同于 "未发行"，这一点很重要。那些已发行但未流通（销毁）的 84 亿 CKB 会影响二级发行，因为创世区块中销毁的 25%，其中 15%（即 50.4 亿 CKB）被硬编码为 “占用” 容量，而另外的 10%（即 33.6 亿 CKB）被硬编码为 “流动” 的状态，即不占用容量。这意味着，即使没有 CKB 被用来存储状态，或者所有流通的 CKB 都存入了 Nervos DAO 中，矿工和国库仍然会获得二级发行的 CKB。

![alt_text](images/image3.png 'image_tooltip')

_注意：二级发行并不总是 15% 归矿工，10% 归国库。随着越来越多的 CKB 被挖出，这个数字将会减少。上图说的 “至少”，指的是主网上线的那一刻。_ 

因此，我们下文中讨论发行的 CKB 时，将包括销毁的 84 亿 CKB。例如，在计算通货膨胀数据时，我们将考虑创世区块中发行的所有 336 亿 CKB。而如果我们谈论流通中的 CKB，我们将使用 252 亿这个数字，把销毁的 84 亿 CKB 排除在外。

 <table border="1" align="center"> 
    <tr bgcolor="edf2f2">
        <td colspan="9"; width="34%" align="center"><b><H3>创世区块中的 CKB 分配方式和解锁日期</H3></b></td>
      </tr>
    <tr align="center">
        <td><b></td>
        <td><b>创世区块分配的 CKB 总量</td>
        <td><b>主网上线后的流通量</td>
        <td><b>2020-05-01</b></td>
        <td><b>2020-07-01</b></td>
        <td><b>2020-12-31</b></td>
        <td><b>2021-05-01</b></td>
        <td><b>2022-05-01</b></td>
        <td><b>2022-12-31</b></td>
    </tr>
    <tr>
        <td><b>公募（21.5%）</b></td>
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
        <td><b>生态建设（17%）</b></td>
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
        <td><b>团队（15%）</b></td>
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
        <td><b>私募（14%）</b></td>
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
        <td><b>合作伙伴（5%）</b></td>
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
        <td><b>基金会（2%）</b></td>
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
        <td><b>测试网奖励（0.5%）</b></td>
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
        <td><b>销毁（25%）</b></td>
        <td align="right">8,400,000,000</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="center">-</td>
</table>


## CKB 发行机制的两大组成部分：一级发行和二级发行

### 一级发行（基础发行）

一级发行的总量固定为 336 亿 CKB，与比特币类似，一级发行的区块奖励约每 4 年减半一次，直到 336 亿 CKB 全部被挖完为止。CKB 的第一次减半事件预计将于 2023 年 11 月中旬到来。因此，一级发行是有最大限额的，就像比特币一样。

比如，在 Nervos 主网启动后的头四年，每年通过一级发行产生的 CKB 数量为 42 亿，在 2023 年 11 月第一次减半事件之后，一级发行的 CKB 数量将降为每年 21 亿 CKB，直到下一次减半。如下图所示，每次减半，一级发行的 CKB 数量都会减少一半，所以新 CKB 的流入速度也会下降 50%。

![alt_text](images/image4.png 'image_tooltip')

因此，在 Nervos 主网启动后的头四年，一级发行一共产生了 168 亿 CKB，占一级发行总量 336 亿的 50%。在第二个四年里，一级发行将产生 84 亿 CKB，即前八年通过一级发行一共产生的 CKB 将占一级发行总量的 75%。到 2031 年，即主网启动后的第 12 年，通过一级发行产生的 CKB 加起来将达到 294 亿枚，占一级发行总量的 87.5%。

![alt_text](images/image5.png 'image_tooltip')

![alt_text](images/image6.png 'image_tooltip')

至此，你可能已经注意到，在 Nervos 主网启动后的前几年，代币发行量最大，而每次减半事件后，代币发行量都会大幅下降。这也可以从通胀率中很明显地看出：主网启动后的第一年，一级发行的通胀率为 12.5%，四年后，即 2023 年首次减半后，通胀率将降至 3.765%，2031 年第四次减半后，通胀率将降至 0.663%。由于一级发行总量固定，为 336 亿 CKB，因此当一级发行的所有 CKB 都被挖出后，一级发行带来的通胀率也会降为零。

![alt_text](images/image7.png 'image_tooltip')

在下面这张表格中，我们可以看到每次减半后一级发行量的变化。

 <table border="1" align="center"> 
    <tr bgcolor="edf2f2">
        <td colspan="6"; width="34%" align="center"><b><H3>一级发行</H3></b></td>
      </tr>
    <tr align="center">
        <td><b>年份（预估）[1]</b></td>
        <td><b>减半周期[2]</b></td>
        <td><b>CKB/年</b></td>
        <td><b>CKB总量</b></td>
        <td><b>累计产生的CKB</b></td>
        <td><b>发行比例（%）</b></td>
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


_[1] 注：Nervos CKB 主网于 UTC 时间 2019 年 11 月 15 日上线。 因此，表格中的每一年应该理解为从 11 月到次年 11 月。_

_[2] 注：指的是会发生第几次减半事件。_

一级发行的代币全部作为奖励分配给矿工，以激励他们维护网络安全，因此只能通过挖矿获得。

### 二级发行

除了一级发行（基础发行）之外，还有二级发行，每年固定发行 13.44 亿 CKB。因此，二级发行与一级发行不同，没有硬顶，即没有最高限额。

![alt_text](images/image8.png 'image_tooltip')

从上图中我们可以看出，第二级减半后，每个区块中二级发行的 CKB 数量将超过一级发行的 CKB 数量，因此，从挖矿奖励的角度来看，二级发行将变得越来越重要。当一级发行耗尽时，只剩下二级发行的奖励。

二级发行可以看作是一种收取状态租金的方式，即通过通货膨胀向那些占用链上状态的网络参与者收税。这样就确保了矿工的收入是可预期的，并且是基于价值存储的需求而不是交易的需求。这对于优先考虑 Layer 1 区块链（例如 Nervos CKB）中的价值存储，同时将大多数交易转移到 Layer 2 的网络安全模型至关重要。

但是，如果你不占用链上状态，而是像长期持有者那样持有 CKB，那么你是否也要交这个税呢？是否公平呢？如果要交，那确实很不公平。因此，Nervos 设计了一个叫做 Nervos DAO 的特殊智能合约，它可以让你对冲二级发行带来的通胀。CKB 持有者可以把他们的代币存入 Nervos DAO，从而获得二级发行的一部分，这正好抵消了二级发行的通胀影响。因此，对于长期持有者来说，只要他们把代币锁定在 Nervos DAO 里，二级发行的通胀效应就只是表面上的。随着二级发行的影响减弱，这些用户实际上拥有的是像比特币一样有最大限额的代币。

一个简单的理解二级发行的方法是把它看作是长尾发行。比如，门罗币的长尾发行方案让矿工不会完全依赖交易费用，因此无论费用市场和交易量如何变化，他们都能保证有一定的收入。这样，区块奖励永远不会为零，从而激励他们持续诚实地挖矿，从而长久地保障网络的安全。

![alt_text](images/image9.png 'image_tooltip')

_注：Monero 的长尾发行方案已于 2022 年 5 月下旬在其主网实施，而 CKB 的二级发行自 2019 年 11 月 Nervos 主网上线以来一直在实施。_

上图可以明显地看出 Nervos 二级发行和门罗币长尾发行方案导致的通胀率是如何逐渐下降，并无限接近于零的。两者的本质区别在于，门罗币的长尾发行方案会影响门罗币网络的所有参与者，而 Nervos 的二级发行只影响那些没有把 CKB 存入 Nervos DAO 的参与者，因此它只是一种针对性的通胀，不会影响所有的 Nervos 参与者。

实际上，如果我们观察 Nervos DAO 存款人获得的<a href="https://explorer.nervos.org/charts/nominal-apc">名义补偿率</a>，我们可以发现它随着时间的推移而降低。这是因为作为 Nervos DAO 的存款人，你总是获得新供应量的固定份额，但新供应量本身的通胀率不断降低。这就导致补偿率（APC）实际上随着时间的流逝而下降，这也意味着 CKB 的总供应量增长得越来越缓慢，通胀率和 Nervos DAO 补偿率都将逐渐无限趋近于零。

如果我们对比历年来一级发行和二级发行的通胀率，我们可以发现 Nervos DAO 的存款人只受一级发行通胀率的影响，就像比特币一样有硬顶。而那些不在 Nervos DAO 里的 CKB，无论是占用着链上状态，还是处于流通中，都会被二级发行稀释。

![alt_text](images/image10.png 'image_tooltip')

<table border="1" align="center"> 
    <tr bgcolor="edf2f2">
        <td colspan="6"; width="34%" align="center"><b><H3>通胀率</H3></b></td>
    </tr>
    <tr align="center">
        <td><b>年份（预估）</b></td>
        <td><b>减半周期</b></td>
        <td><b>一级发行的通胀率（%）</b></td>
        <td><b>二级发行的通胀率（%）</b></td>
        <td><b>一级发行+二级发行的通胀率（%）</b></td>
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

在下图中你可以看到多年来流通的 CKB 数量。

![alt_text](images/image11.png 'image_tooltip')

_注意：上面这张图表和下面这张表格均考虑了创世块的 252 亿 CKB 和解锁日期。每年的二级发行 1.344 亿 CKB 也被计算在内，而不考虑属于国库的已经被销毁的 CKB。如果你想知道到目前为止二级发行有多少 CKB 被销毁了，你可以点击[此处](https://explorer.nervos.org/nervosdao)查看。_

 <table border="1" align="center"> 
    <tr bgcolor="edf2f2">
        <td colspan="6"; width="34%" align="center"><b><H3>CKB 的流通情况</H3></b></td>
      </tr>
    <tr align="center">
        <td><b>年份（预估）</b></td>
        <td><b>减半周期</b></td>
        <td><b>创世区块</b></td>
        <td><b>一级发行</b></td>
        <td><b>二级发行</b></td>
        <td><b>流通中的 CKB 总量</b></td>
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


### 二级发行的代币分配

二级发行的 CKB 会按比例分配给矿工、Nervos DAO 存款人和国库，具体比例取决于有多少 CKB 占用链上状态、有多少 CKB 锁在 Nervos DAO 中以及有多少 CKB 处于流通状态。

![alt_text](images/image12.png 'image_tooltip')

让我们看一个例子来更好地理解它，假设现有 CKB 的 50% 占用链上状态，35% 锁在 Nervos DAO 中，剩下的 15% 是流通的（它们不占用链上状态或者存放在 Nervos DAO 中），则二级发行的 CKB 会这样分配：

* 二级发行的 50% 用于矿工奖励 
* 二级发行的 35% 给到 Nervos DAO 存款人，存款人按照存入的代币占比瓜分这些奖励，从而消除了二级发行对长期持有者的稀释。
* 二级发行的剩余 15% 进入国库，其用途由社区通过治理机制来决定。只要国库没有通过硬分叉激活，这些 CKB 就会被[销毁](https://explorer.nervos.org/nervosdao)。



## 总结

Nervos CKB 的发行机制虽然稍显复杂，但和比特币的发行机制非常类似，并强化了其价值主张，即稳定且可预期的发行模式。两种模式最大的区别在于 CKB 引入了长尾发行方案，即二级发行，从而长久地保障网络的安全性，而不是仰赖交易费用来激励矿工。此二级发行不会影响网络的所有参与者，因为 Nervos DAO 存款人可以把他们的 CKB 变成像比特币一样有硬顶的代币，以避免二级发行的通胀影响。

### 相关链接

* [Crypto-Economics of the Nervos Common Knowledge Base](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0015-ckb-cryptoeconomics/0015-ckb-cryptoeconomics.md)
* [Understanding the economic model of Nervos CKB](https://medium.com/@Chema_es/understanding-the-economic-model-of-nervos-ckb-408e2b74478b)
* [The CKByte Issuance Model of Nervos](https://talk.nervos.org/t/the-ckbyte-issuance-model-of-nervos/5321)
* [A detailed description of Nervos (CKB) supply and issuance](https://medium.com/@m.quinn/a-detailed-description-of-nervos-ckb-supply-and-issuance-1d55c4b101f9)
* [Nervos CKByte Distribution, and Why We Are Burning 25% in the Genesis Block](https://medium.com/nervosnetwork/nervos-ckbyte-distribution-and-why-we-are-burning-25-in-the-genesis-block-9a7ddf7f6779)
* [Bitcoin, Ethereum, Nervos: Inflationary or Deflationary?](https://www.cryptowendyo.com/bitcoin-ethereum-nervos-inflationary-deflationary/)
* [CKB Supply calculation](https://docs.google.com/spreadsheets/d/1G8eofv1qqs96aEUqEk9vZ8qxeUqSn31KCNoQlwLMyJA/edit#gid=1511634195)
