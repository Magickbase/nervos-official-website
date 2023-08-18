---
title: 'ZK Rollup 与 Optimistic Rollup 的区别在哪里？'
coverImage: 'images/image1.png'
category: 'Scaling'
date: '2023-05-25T16:00:00.000Z'
---

Rollup 是强大的区块链扩展解决方案，在过去两年中变得非常流行。有两种类型的 Rollup，ZK Rollup 和 Optimistic Rollup，它们的目的相同但功能不同。

Optimistic Rollup 中的交易被自动假定为有效，直到证明不是这样，而 ZK Rollup 使用零知识证明（将在下面解释）来证明交易的有效性。两种汇总类型都有自己的优点和缺点，将在下面详细说明。

## 为什么需要 Rollup？

过去几年的区块链行业历程表明，在不牺牲安全性和去中心化的情况下，几乎不可能扩展具有交易执行、共识和数据可用性的整体区块链。

出于这个原因，许多 1 层区块链最近开始使用不同的 Rollup 解决方案，通过将交易执行迁移到 2 层来减轻吞吐量需求。这样，大部分交易可以在单独的层上处理，然后分批处理为在底层 Layer 1 结算的单个交易。

简单来说，Rollup 是建立在顶部的独立的、高吞吐量的交易执行网络，并借用了 1 层区块链的安全性。Rollup 可以让区块链扩展到每秒数万笔交易，而不会影响安全性和去中心化。 Rollup 通过显着降低交易成本和增加结算时间为用户提供卓越的体验。相比之下，根据当前的网络拥堵情况，以太坊上的交易可能会让用户花费几美元到几百美元不等。另一方面，目前基于以太坊的 Rollup 交易费用从 0.01 美元到 0.1 美元不等。

**在继续之前，还请查看* [*Layer 1 vs. Layer 2*](https://www.nervos.org/knowledge-base/layer_1_vs_layer_2) *的解释，以充分理解此处使用的术语。*

## ZK Rollup 和 Optimistic Rollup 的区别

两种 Rollup 类型之间的主要区别在于它们如何验证证明。

Optimistic Rollup 之所以被称为“Optimistic”，是因为它们假设所有 2 层交易都是有效的，除非另有证明。另一方面，ZK Rollup 使用称为零知识证明的复杂密码学来证明交易的有效性，而无需过多了解交易的细节。

这两种技术之间的另一个区别是它们发布到其底层基础链的数据量。因为 ZK Rollup 在将交易发布到基链之前有一种验证交易的机制，所以它们不需要像 Optimistic 的对等体那样向 1 层传输那么多数据。也就是说，ZK Rollup 只发布有效性证明，以在基链上结算具有最终性的交易，而 Optimistic Rollup 则发布整个交易数据。

![alt_text](images/image2.png 'image_tooltip')
\
_通过 ZK Rollup（左）与 Optimistic Rollup（右)中继到 Layer 1 的数据_

对于用户而言，两种 Rollup 类型之间的关键区别在于提现时间。也就是说，由于 Optimisitc Rollup 依赖于验证者来检查每笔交易，如果他们认为交易无效，则可能会对其提出异议，因此资产的提取时间可能会持续几天到两周不等。虽然各种 Optimistic Rollup 实施的争议期可能会有所不同，但这仍然是必要的，这意味着用户必须始终等待几天才能在基础链上取款。

![alt_text](images/image3.png 'image_tooltip')

这个争议期是必要的，可以让验证者有足够的时间通过所谓的欺诈证明对可疑交易提出异议。欺诈证明是一种状态转换（即交易）无效的声明，因此应恢复整个批次。验证者可以证明无效交易，因为他们拥有 2 层上所有交易的完整数据，包括当前 Rollup 状态的副本。他们还计算 Rollup 中的后状态根。

如果没有来自任何验证者的欺诈证明声明，则该批交易将在争议期结束时自动在 Layer 1 上结算。一旦这一切结束，Layer 1 上的原始资产将被解锁，而 Layer 2 上的相同副本将被销毁。

至于 ZK Rollup，资产提取到基础链可以是即时的，因为交易已经过验证。如前所述，ZK Rollup 通过零知识证明证明交易是有效的，零知识证明是一种加密机制，允许一方（证明者）向另一方（验证者）证明某事，而无需共享有关相关主题的任何敏感信息。零知识证明可以有两种形式，STARKS（简洁、透明的知识论证）和 SNARKS（简洁、非交互式的知识论证），每种都有自己的优点和缺点。

### Optimistic 与 ZK Rollup：结构和机制

ZK Rollup 和 Optimistic Rollup 有两个根，一个状态前根和一个状态后根。

预状态根显示交易执行前的 Rollup 状态。另一方面，状态后根显示交易执行后的 Rollup 状态。

这两个 Rollup 还使用了多个智能合约。 ZK Rollup 使用两个智能合约，一个主合约和一个验证者合约。主合约存储 Rollup 块并跟踪资产存款和取款。同时，验证者合约对发布到 1 层的零知识证明进行验证。

另一方面，Optimistic Rollup 利用部署在 Rollup 和底层 Layer 1 上的桥接智能合约。对于锁定在 Layer 1 桥接智能合约中的每个资产，在 Rollup 上铸造相同的资产。

ZK Rollup 和 Optimistic Rollup 都有一个叫做 sequencer 的操作符，它的工作是促进交易，产生 Rollup 块，将交易添加到合约，并将数据提交回底层的第 1 层。Sequencer 的有效任务是连接 1 层和 2 层网络。当用户将资产从基础链迁移到 Rollup 链时，反之亦然，sequencer 会中继交易。

当 sequencer 提交交易数据时，它还会自动向 Rollup 智能合约提出一个新的状态后根。Rollup 必须确保当前状态根等同于状态前根。验证后，sequencer 提议的状态后根成为新的当状态前根。

### 优点和缺点

Optimistic Rollup 的好处是它们的复杂性和交易成本均较低，这是以较长的争议期或提款时间为代价的。另一方面，ZK Rollup 在底层要复杂得多，但在速度、安全性和隐私方面具有相当大的优势。

<table>
  <tr>
   <td>
   </td>
   <td>ZK Rollup
   </td>
   <td>Optimistic Rollup
   </td>
  </tr>
  <tr>
   <td>缺点
   </td>
   <td>为验证生成零知识证明的硬件需求和成本更高
   </td>
   <td>由于争议期和需要验证者存在的防欺诈机制，退出期长 (从 Layer 2 到 Layer 1)
   </td>
  </tr>
  <tr>
   <td>优点
   </td>
   <td>更快的提款时间，因为不需要争议期。一切都通过加密证明进行验证。
   </td>
   <td>更低的 Rollup 成本，因为无需要对每个交易块使用加密证明。由于每个交易都假定是有效的，直到出现防欺诈索赔.因此它节省了大量数据提交的成本。
   </td>
  </tr>
</table>


_Optimistic 和 ZK Rollup 的比较表_

## Nervos 使用什么类型的 Rollup？

Nervos 在其第一个第 2 层链 Godwoken 中使用了定制的 Optimistic Rollup 解决方案。Godwoken 的争议期只有五天，比以太坊上的大多数 Rollup 解决方案都短，但仍然足够长以确保足够的安全性。

[Godwoken](https://www.nervos.org/godwoken) 是一个高吞吐量、专注于 GameFi 的第 2 层网络，建立在 Nervos 高度安全的工作量证明 Layer 1 CKB 之上。它与 EVM 完全兼容，这意味着开发人员可以相对轻松地从以太坊移植他们的去中心化应用程序，只需要进行微小的修改。

## 总结

ZK Rollup vs. Optimistic Rollup 仍然是一个备受争议的话题，每种方法都有自己的优点和缺点。目前，由于具有更高的成本效益，Optimistic Rollup 比 ZK Rollup 更受青睐。然而，随着这两种类型 Rollup 的迅速发展，它们之间的明显赢家尚未出现。 ZK Rollup 最终可能会获得更大的知名度和实用性，从而使它们成为未来的流行选择，这仍然是合理的。

