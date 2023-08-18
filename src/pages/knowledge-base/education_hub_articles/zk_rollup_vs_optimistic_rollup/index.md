---
title: 'ZK-Rollups vs. Optimistic Rollups: What’s The Difference?'
coverImage: 'images/image1.png'
category: 'Scaling'
date: '2023-04-09T16:00:00.000Z'
---

Rollups are powerful blockchain scaling solutions that have become very popular over the last two years. There are two types of rollups: zero-knowledge rollups (ZK-rollups) and Optimistic rollups, which serve the same purpose but function differently.

Transactions in Optimistic rollups are automatically assumed valid until proven otherwise, while ZK-rollups utilize zero-knowledge proofs (will be explained below) to prove transaction validities. Both rollup types have their own benefits and drawbacks, which will be explained in detail below.

## Why are Rollups Needed?

The last couple of years in the blockchain space have shown that scaling monolithic blockchains–which have transaction execution, consensus, and data availability all happen on the same layer–without sacrificing security and decentralization is very difficult, if not impossible.

For this reason, many Layer 1 blockchains have recently begun utilizing different rollup solutions to alleviate throughput demand by migrating transaction execution to Layer 2s. This way, the bulk of the transactions can be processed on a separate layer and then batched into a single transaction settled on the underlying Layer 1.

In simple terms, rollups are separate, high-throughput transaction execution networks built on top and borrow the security of Layer 1 blockchains. Rollups allow blockchains to scale to tens of thousands of transactions per second without compromising security and decentralization. Rollups provide users with a superior experience by significantly lowering transaction costs and increasing settlement times. For comparison, depending on the current network congestion, transactions on Ethereum can cost users anywhere between a few to a couple of hundred dollars. On the other hand, the current transaction fees on Ethereum-based rollups range from $0.01 to $0.1. \
 \
\*Before continuing further, also check out the [Layer 1 vs. Layer 2 blockchain](https://www.nervos.org/knowledge-base/layer_1_vs_layer_2) explanation to fully understand the terms being used here.

## The Difference Between ZK-Rollups and Optimistic Rollups

The main difference between the two rollup types is how they validate proofs.

Optimistic rollups are called “optimistic” because they assume all the Layer 2 transactions are valid until proven otherwise. On the other hand, ZK-rollups use a complex piece of cryptography called a zero-knowledge proof to prove the transactions’ validity without knowing too much about the transactions’ specifics.

Another difference between the two technologies is the amount of data they post to their underlying base chains. Because ZK-rollups have a mechanism to validate transactions before posting them to the base chain, they don’t need to transmit as much data as their optimistic counterparts to the Layer 1. Namely, ZK-rollups post only the validity proofs to settle transactions with finality on the base chain, while Optimistic rollups post the entire transaction data.

![alt_text](images/image2.png 'image_tooltip')
\
_The data relayed to Layer 1 by ZK-rollups (left) vs. Optimistic rollups (right)._

For users, the crucial difference between the two rollup types is the withdrawal time. Namely, because Optimisitc rollups rely on validators to check each transaction and potentially dispute it if they deem it not valid, the withdrawal time for assets can last from several days to up to two weeks. While the dispute period for various Optimistic rollup implementations may vary, it’s nevertheless necessary, meaning that users must always wait a couple of days to withdraw their money on the base chain.

![alt_text](images/image3.png 'image_tooltip')

This dispute period is necessary to give verifiers enough time to dispute suspect transactions via so-called fraud proofs. A fraud proof is a claim that a state transition (i.e., transaction) is invalid, and the entire batch should be reverted as a result. The verifiers can prove invalid transactions because they have complete data for all the transactions on Layer 2, including a copy of the current rollup state. They also compute the post-state root in the rollup.

If there’s no fraud proof claim from any verifier, the batch of transactions will be settled on Layer 1 automatically at the end of the dispute period. Once this is over, the original assets on Layer 1 will be unlocked while the identical copies on the Layer 2 get burned.

As for ZK-rollups, asset withdrawals to the base chain can be instantaneous because the transactions are already validated. As mentioned, ZK-rollups prove that transactions are valid via zero-knowledge proofs, which are cryptographic mechanisms that allow one party (prover) to prove something to another party (verifier) without sharing any sensitive information about the subject in question. Zero-knowledge proofs can come in two forms, STARKS (succinct, transparent argument of knowledge) and SNARKS (succinct, non-interactive argument of knowledge), each with its own benefits and drawbacks.

### Optimistic vs. ZK-Rollups: Structure and Mechanism

ZK-rollups and Optimistic Rollups come with two roots, a pre-state root, and a post-state root.

The pre-state root displays the rollup state pre-transaction execution. On the other hand, the post-state root displays the rollup state post-transaction execution.

Both rollups also utilize multiple smart contracts. ZK-rollups use two smart contacts, a main and a verifier contract. The main contract stores rollup blocks and tracks asset deposits and withdrawals. Meanwhile, the verifier contract verifies the zero-knowledge proofs posted to the Layer 1.

On the other hand, Optimistic rollups utilize bridge smart contracts deployed on both the rollup and the underlying Layer 1. For every asset locked in the bridge smart contract on the Layer 1, an identical asset is minted on the rollup.

Both ZK-rollups and Optimistic rollups have an operator called a sequencer whose job is to facilitate transactions, produce rollup blocks, add transactions to the contract, and submit data back to the underlying Layer 1. Sequencers are effectively tasked to connect the Layer 1 and Layer 2 networks. When users migrate assets from the base chain to the rollup and vice versa, the sequencers relay the transactions.

When a sequencer submits transaction data, it also automatically proposes a new post-state root to the rollup smart contract. The rollup has to ensure the current state root is equivalent to the pre-state root. After it is verified, the sequencer's proposed post-state root becomes the new current state root.

### Benefits and Drawbacks

\
The benefits of Optimistic rollups are their lesser complexity and lower transaction costs, which come at a cost of long dispute periods or withdrawal times. On the other hand, ZK-rollups are considerably more complex under the hood, but boast considerable advantages in speed, security, and privacy.

<table>
  <tr>
   <td>
   </td>
   <td>ZK-rollups
   </td>
   <td>Optimistic Rollups
   </td>
  </tr>
  <tr>
   <td>Challenges
   </td>
   <td>More expensive hardware requirements and costs to generate zero-knowledge proofs for validations
   </td>
   <td>Long withdrawal period (from Layer 2 to Layer 1) due to dispute period and fraud-proof mechanism which requires the existence of verifiers
   </td>
  </tr>
  <tr>
   <td>Benefits
   </td>
   <td>Faster withdrawal time since there is no need for a dispute period. Everything is verified through cryptographic proofs
   </td>
   <td>Lower rollup costs since there’s no need to use cryptographic proofs for every transaction block. Since every transaction is assumed to be valid until a fraud-proof claim, it saves a lot of costs for data submission.
   </td>
  </tr>
</table>

_A comparison table between Optimistic and ZK-rollups._

## What Type of Rollup Does Nervos Use? 

Nervos utilizes a custom Optimistic rollup solution for its first Layer 2 chain, Godwoken. Godwoken’s dispute period is approximately seven days, like other rollup solutions on Ethereum, long enough to ensure adequate security.

[Godwoken](https://www.nervos.org/godwoken) is a high-throughput, GameFi-focused Layer 2 network built on top of Nervos’ highly secure Proof-of-Work Layer 1, Common Knowledge Base. It’s fully EVM-compatible, meaning developers can port their decentralized applications from Ethereum with relative ease and only minor modifications.

## Conclusion

The topic of ZK-rollup vs. Optimistic Rollup remains a highly debated issue, with each approach having its own advantages and disadvantages. Currently, Optimistic Rollups are marginally more favored than ZK-rollups due to their more cost-effective nature. However, as the development of both types of rollups progresses rapidly, a clear winner between them has yet to emerge. It remains plausible that ZK-rollups may eventually gain greater prominence and practicality, thus making them a popular choice in the future.
