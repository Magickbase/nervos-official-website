---
title: '令人惊讶的是，二级发行并不会造成通货膨胀'
coverImage: 'images/image1.png'
category: popular, economics
subtitle: '本文将以图文并茂的方式，对比特币核心开发者 Peter Todd 在他的文章 [Surprisingly, tail emission is not inflationary](https://petertodd.org/2022/surprisingly-tail-emission-is-not-inflationary) 中提出的方法进行解读。同时，我们以 CKB 的发行机制为例，为读者呈现一个补充性的视角，以更加全面地理解在文章 [《一文看懂 Nervos CKB 的发行机制》](https://www.nervos.org/knowledge-base/understanding_nervos_ckb_issuance_model) 中所阐述的内容。'
date: '2023-08-02T16:00:00.000Z'
author: 
  - github:alejandroRbit
  - github:ChemaESP
---

一般而言，当我们分析诸如 CKB 等加密货币的发行机制时，通常仅考虑随时间推移而变化的理论发行总量，即发行曲线。然而，这种方法并不完全符合实际情况，因为在任何特定时刻，实际发行和流通中的 CKB 总量不应与当时的理论发行量混淆。这是因为代币由于多种原因不断丢失，这些丢失的代币实际上变成了不可使用的代币。

![alt_text](images/image2.png 'image_tooltip')

_上面这张图表仅考虑了 Nervos CKB 的释放，未考虑由于身故、意外、私钥丢失等原因丢失或者无法使用的 CKB_。

以下几种情况可能导致已发行的代币停止流通，成为无法使用的代币：

* **由于人为错误或意外丧失私钥：** 意外丧失私钥可能导致与该地址相关的资金永久丧失。举例来说，假设某人将私钥备份在纸上，然后将该纸放在家中抽屉里。不幸的是，有一天家中发生火灾，纸张与私钥被烧毁。在这种情况下，与该私钥相关的代币将被视为永久丧失。他人要想随机找到匹配受影响地址的私钥几乎不可能，实际上，恢复这些资金几乎是不现实的。
* **身故：** 当一个人去世且未分享私钥或没有明确指示如何访问其加密货币账户时，他的那些加密资产几乎无法访问。
* **故意销毁：** CKB 也可能被故意销毁，例如通过添加使其无法使用的条件。一个简单的例子是将代币发送到无法访问的地址，然后这些代币就永远无法取回或使用了，因为没有相应的私钥可用来访问它们。此类地址通常被称为 “销毁地址” 或 “黑洞地址”。
* **碎币：** 交易后残留的极小部分代币被称为 “碎币”。这些金额通常微不足道，其名义价值实际上可以忽略不计。因此，花费这些碎币可能很困难，甚至昂贵得令人望而却步，因为发送或使用它们所需的交易费用可能远远超过它们的实际价值，所以随着时间的推移这些碎币可能会不再流通。
* **技术特性：** 还有一些技术特性阻碍了 CKB 的支出。例如，通过 Kollect.me（一个已关闭的 NFT 交易市场）创建的 NFT 无法换回用于铸造它们的 CKB。这些 NFT 被永久记录在区块链上。

随着时间推移，上述因素不断减少可用代币的供应。我们可以推断出可使用代币的数量总是小于发行的 CKB 数量。所以：

<code>CKB 的发行数量 - 已丢失的 CKB 和不可使用的 CKB = 可使用的 CKB 数量</code>



### 计算已丢失和不可再使用的 CKB 比例

我们目前尚无法确定丢失和无法使用的 CKB 比例，这个比例可能会随着时间推移而变化，而非保持恒定。但以下几点是我们可以肯定的：

* 代币可能因死亡、忘记助记词、意外事故等原因而丢失。
* 这些损失会随着时间的推移而不断发生。
* 每个代币只能丢失一次，因此在任何特定时间点上的代币丢失率与当时的总供应量成正比。

有了这些基础，我们可以引入一个符号 λ，用来表示代币的丢失率，并对其进行具体设定。例如，在本文中，我们决定将代币丢失率（λ）设定为 0.5%，且每年都是这个固定值。

我们认为 0.5% 的比例是合理的，这与 Peter Todd 的文章以及[门罗币社区成员](https://www.reddit.com/r/Monero/comments/4z0azk/comment/d6sixyi/)提供的论点一致。然而，不论该比例是 0.5% 还是其他数值，甚至是否随时间变动，都没关系，因为重要的是我们可以假设代币会丢失，并且这种丢失会随着时间的推移而持续发生。只要满足了这个前提，即使实际的时间跨度可能长短不一，对发行曲线的影响和长期趋势仍然会存在。



### 丢失率对 Nervos CKB 发行曲线的影响

从下图中我们可以看到，从长远来看，创世区块发行的 CKB 最终将随着时间的推移而丢失。

![alt_text](images/image3.png 'image_tooltip')

与创世区块发行的 CKB 类似，基础发行的 CKB 也往往会随着时间的推移而丢失。

![alt_text](images/image4.png 'image_tooltip')

就像比特币的发行时间表一样，CKB 的基础发行也会每四年减半一次，直至所有基础发行的 CKB 都被开采完毕。对于 Nervos DAO 的储户而言，他们仅会受到基础发行的影响，这意味着他们持有的 CKB 实际上会经历通缩，因为基础发行一旦完结，新的代币将不再通过基础发行进入市场流通，而现有的基础发行量将随着时间逐渐减少。实际上，在所有基础发行的 CKB 被开采完之前，就有可能出现净通货紧缩的情况。

因此，对于 Nervos DAO 的储户而言，他们所拥有的 CKB 不仅类似于比特币那样具有硬顶，而且还是事实上的长期通缩。

二级发行每年会固定发行 13.44 亿 CKB，随着时间的推移，这种发行将在多年后达到一个平衡点，即发行比例与丢失率持平。换句话说，从长远来看，二级发行的 CKB 供应将逐渐趋近于 k/λ（其中 k 是固定供应率，λ 是丢失率），即新产生的币与丢失的币速率保持一致。

![alt_text](images/image5.png 'image_tooltip')

从经济学角度来看，这意味着从长远来看，二级发行将趋向于稳定的代币供应，既不会引起通货膨胀，也不会导致通货紧缩。这也说明了 CKB 的代币供应量实际上并不是无限的。

考虑到 CKB 的丢失率，短期内 CKB 的发行曲线如下：

![alt_text](images/image6.png 'image_tooltip')

从长远来看，情况会变成下面这样：

![alt_text](images/image7.png 'image_tooltip')

需要注意的是，在我们的示例中，我们将 λ 设置成了 0.5%，如果该百分比较低，趋势依然保持不变。创世区块发行的 CKB 最终会丢失，就像基础发行的 CKB 一样，给 Nervos DAO 储户造成通货紧缩的情况，而二级发行将在 k/λ 处达到平衡点，只不过需要更长的时间才能实现。



### 总结

无论给 λ 赋值多少，只要 CKB 会随着时间的推移而持续丢失（即 λ > 0），我们就可以有如下假设：

* 创世区块发行的 CKB 多年后最终会丢失。
* 基础发行与比特币一样，退出流通的代币数量最终将超过通过基础发行产生的新代币数量，从而导致所有 Nervos DAO 储户面临通货紧缩情况。
* 至于二级发行，对于那些在 Nervos DAO 之外持有 CKB 并因此受二级发行影响的网络参与者来说，从长远来看，它会收敛到既不通胀也不通缩的稳定供应，而非无限供给。

![alt_text](images/image8.png 'image_tooltip')

随着区块链技术的持续发展和标准的日益完善，私钥丢失的风险可能随着时间推移逐渐降低。我们可以重点关注多重签名方案、社交恢复方案、失能开关，以及通过[账户抽象](https://www.nervos.org/knowledge-base/account_abstraction_where_were_going)实现的许多其他功能。此外，良好的用户密钥管理教育也可以减少这些密钥的丢失。

然而，这些技术的进步似乎不太可能在不久的将来完全阻止代币丢失，因此，它们的影响将继续以某种方式在 CKB 等代币的发行曲线中显现出来。




### 相关链接

* [Surprisingly, Tail Emission Is Not Inflationary](https://petertodd.org/2022/surprisingly-tail-emission-is-not-inflationary)
* [Bitcoin, Ethereum, Nervos: Inflationary or Deflationary?](https://www.cryptowendyo.com/bitcoin-ethereum-nervos-inflationary-deflationary/)
* [Understanding the Nervos CKB Issuance Model](https://www.nervos.org/knowledge-base/understanding_nervos_ckb_issuance_model)
* [Reasoning from the Monero community about the tail emission](https://www.reddit.com/r/Monero/comments/4z0azk/comment/d6sixyi/)
* [Bitcoin - Controlled Supply](https://en.bitcoin.it/wiki/Controlled_supply)

