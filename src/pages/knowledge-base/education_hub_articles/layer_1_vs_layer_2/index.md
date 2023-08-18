---
title: 'Layer 1 vs. Layer 2 Blockchain Networks: What is the Difference?'
coverImage: 'images/image2.png'
category: 'Blockchain, Nervos'
date: '2023-04-09T16:00:00.000Z'
---

![alt_text](images/image1.png 'image_tooltip')

Layer 1, in the context of blockchain networks, refers to the base layer chain where transactions are settled with finality. On the other hand, Layer 2 networks are scaling solutions built on top of Layer 1 blockchains with the goal of increasing their transaction throughput. Examples of Layer 1 chains include Bitcoin, Ethereum, and Common Knowledge Base, whereas examples of Layer 2 networks include the Lightning Network, Optimism, and [Godwoken](https://www.nervos.org/godwoken).

An excellent real-world analogy depicting the difference between Layer 1 and Layer 2 networks is the comparison between Fedwire and payment processors like Paypal or Stripe. Like Layer 1s, Fedwire settles bank transfers with finality, whereas payment processors are merely intermediaries that process many payments and then relay them to banks for final settlement.

## Layer 1 Blockchains and Scalability Solutions

The terms Layer 1 and blockchain can be used interchangeably. They describe the same thing: a shared, immutable ledger of transactions replicated among and maintained by a decentralized and distributed network of computer nodes.

Unlike centralized databases, which are maintained by a single trusted authority, blockchains are distributed databases maintained by many unrelated entities in a trustless manner. The three main tasks blockchains perform include executing transactions, guaranteeing data availability, and achieving consensus among the involved parties on the true state of the blockchain.

However–and without getting into too much detail–in trying to execute these tasks, blockchains run into a problem commonly known as the Scalability Trilemma, which states that they can’t be secure, scalable, and decentralized all at the same time. This problem arises because the transaction throughput capacity of blockchains is inversely correlated with the hardware and bandwidth requirements for running nodes. Achieving higher transaction throughput and data availability requires more expensive hardware, which consequently leads to fewer participating nodes and higher centralization.

In other words, blockchains that try to scale on-chain by increasing the amount of data contained in each block or accelerating the rate at which blocks are confirmed are necessarily sacrificing decentralization, compromising their security and other vital attributes, including censorship resistance, capture resistance, and even immutability. An alternative way of scaling Layer 1s is through sharding, a mechanism that breaks the state of the blockchain into distinct datasets called "shards" that the network can simultaneously process. This Layer 1 scaling solution is currently explored by multiple blockchains, including Ethereum and Tezos, but its development is still in its experimental phase.

Lastly, the only proven way to scale blockchains without sacrificing security and decentralization is by off-loading transactions on separate Layer 2 networks.

## What is a Layer 2 Blockchain Network?

Layer 2 is a term used to describe a network or technology built on top of an existing blockchain protocol. The goal of Layer 2 networks is to improve the scalability and efficiency of blockchains by offloading some of the transaction processing to another system architecture. Layer 2 networks process transactions in bulk and then post them for final settlement to the underlying blockchain as a single transaction. This scaling solution reduces the processing load on the main blockchain and increases its scalability.

Multiple types of Layer 2 solutions exist, including Optimistic rollups, ZK-rollups, and state channels.

### Optimistic Rollups

[Optimistic rollups](https://www.nervos.org/knowledge-base/what_are_optimistic_rollups) are a Layer 2 scaling solution for blockchains. They work by bundling up many transactions into a single transaction and then processing them outside the main blockchain. The processing of these transactions happens "optimistically" or under the assumption that all the transactions in the bundle are valid. This speeds up the processing time and reduces the computational load on the main blockchain.

To use an optimistic rollup, users must lock their original assets on Layer 1 through a smart bridging contract. The smart contract on Layer 2 then creates identical assets, known as wrapped tokens, with a 1-to-1 valuation to the original assets previously locked on Layer 1. When a user makes a transaction on Layer 2 with these wrapped tokens, the transactions are bundled into large batches, and only the transaction data is posted back on Layer 1 as call data.

When users want to withdraw their original asset back to Layer 1, they must send the previously-minted wrapped token on Layer 2 back to the smart contract. However, they must wait for days or weeks during the dispute period before withdrawing their original assets on the main blockchain. This dispute period is necessary to give validators ample time to dispute suspicious transactions on the rollup before they're irreversibly settled on the main blockchain.

Nervos’ Layer 1 blockchain, Common Knowledge Base, uses an optimistic rollup called Godwoken to boost its scalability.

### ZK-Rollups

ZK-rollups are a type of Layer 2 scaling solution for blockchains that use a cryptographic technique called zero-knowledge proofs to ensure the validity of the transactions. Zero-knowledge proofs allow a prover to prove the validity of a statement to a verifier without revealing any additional information beyond the statement's validity.

When a user makes a transaction on a ZK-rollup, the transaction is bundled with many other transactions to form a single transaction. This single transaction is then posted for final settlement on the Layer 1, along with a validity proof. This means that the transactions are not subject to the waiting period or dispute resolution process because they are already mathematically proven to be valid. ZK-rollups are more secure than optimistic rollups because they don't rely on other participants' honesty to ensure the transactions' validity.

Put side to side, Optimistic rollups are less computationally expensive but require a challenging period to ensure transaction validity. At the same time, ZK-rollups use zero-knowledge proofs to validate the transactions, which makes them more secure and private but more computationally expensive.

### State Channels

State channels are a type of Layer 2 scaling solution that enables users to conduct off-chain transactions without involving the main blockchain. They work by creating a virtual channel between two parties, where the state of the channel is updated each time the parties transact with each other. These transactions are conducted off-chain, meaning they are not immediately recorded on the main blockchain. Instead, they are stored and validated by the parties involved in the channel and are only recorded on the main blockchain when the channel is closed or when one party wants to withdraw their funds from the channel. This approach reduces the number of transactions that need to be processed by the main blockchain, making transacting faster and cheaper.

The most popular state channel implementation is the Lightning Network Layer 2 scaling solution built on top of Bitcoin. It enables instant and extremely low-cost bitcoin transactions by creating a network of payment channels between users.

## Which Is Better – Layer 1 or Layer 2 Networks?

There is no straightforward answer to which is better between Layer 1 and Layer 2 blockchains because they serve different purposes and have their own unique advantages and limitations.

Layer 1 blockchains provide superior security and final or irreversible transaction settlement, making them ideal for use cases requiring security and transparency. On the other hand, Layer 2 blockchains are designed to address the scalability issues of Layer 1 blockchains. Layer 2 solutions, such as state channels, sidechains, and rollups, offer faster and cheaper transactions by offloading some of the transaction processing load from Layer 1 to Layer 2. They can also support more complex transactions, such as atomic swaps and cross-chain interoperability.

In summary, both Layer 1 and Layer 2 blockchains have their own strengths and weaknesses, and their suitability depends on the specific use case and requirements. Some applications may require the high security and decentralization of Layer 1, while others may benefit from the speed and flexibility of Layer 2 solutions.

## What About Layer 3s?

Layer 3 networks, also known as application-specific blockchains, are designed to run on top of Layer 2 solutions and provide specific functionalities and services for a particular application or use case. Layer 3 networks can be considered a subset of Layer 2 networks, where Layer 2 solutions address the scalability issues of Layer 1 blockchains, while Layer 3 networks are built on top of Layer 2 networks to provide additional services and functionalities.

![alt_text](images/image3.png 'image_tooltip')

Source: [https://vitalik.ca/general/2022/09/17/layer_3.html](https://vitalik.ca/general/2022/09/17/layer_3.html)

Layer 3 networks can be used for various applications, such as decentralized finance (DeFi), non-fungible tokens (NFTs), supply chain management, and gaming. By building on top of Layer 2 solutions, Layer 3 networks can benefit from the scalability, interoperability, and cost-effectiveness of Layer 2 solutions while also providing more specialized and customized functionalities for specific use cases.

## Nervos’ Multi-Layered Architecture

Nervos is a modular or multi-layered blockchain that utilizes several scaling solutions to achieve high throughput. Namely, Nervos leverages a proprietary sidechain solution called Axon that allows developers to launch their own high-throughput, interoperable, and secure sidechains on [CKB](https://medium.com/nervosnetwork/nervos-ckb-in-a-nutshell-7a4ac8f99e0e) within minutes. Due to CKB's unparalleled flexibility, Axon sidechains can support all consensus mechanisms and cryptographic primitives. Beyond sidechains, CKB can also support all Layer 2 scaling solutions, including rollups and state channels. While state channels are in the works, an Optimistic rollup called Godwoken has already been launched.
