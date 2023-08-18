---
title: 'What Are Optimistic Rollups? Everything You Need to Know'
coverImage: 'images/image3.png'
category: 'Scaling'
date: '2023-04-09T16:00:00.000Z'
---

Optimistic rollups are Layer 2 scaling solutions designed to offload some of the transaction processing from the underlying Layer 1 blockchains they're built on to increase their transaction throughput. They are called "optimistic" because they assume all the transactions on Layer 2 are valid by default and only verify transactions if validators challenge their validity during the dispute period. 

Optimistic rollups execute transactions off-chain and then bundle many transactions into batches before submitting them to the base chain. The benefits of Optimistic Rollups compared to other Layer 2 scaling solutions like ZK-Rollups or state channels include relative simplicity and lower transaction costs, which come at the cost of extended dispute periods or withdrawal times.

Another big advantage to Optimistic Rollups compared to their zero-knowledge counterparts is that they’re more generalist and can support smart contracts much like the underlying blockchains they’re built on. Native support for smart contracts means that developers can deploy their existing decentralized applications on the Layer 2 network with relative ease and only minor code adjustments.

While several different approaches to scaling blockchains via Layer 2 networks exist, Optimistic rollups are the most popular solution.


## What are Layer 2 Networks?

Layer 2 is a general term used for scaling solutions that process transactions on a separate network or “layer” away from the main blockchain but also borrow or leverage the security of the main chain. The last part is the most critical differentiator between Layer 2 scaling solutions like state channels and rollups and other scaling solutions like sidechains, which are connected to Layer 1 networks but have their own security mechanisms.

Blockchains utilize Layer 2 networks to scale because they have very limited transaction throughput, meaning they get congested in times of high demand, leading to very high transaction fees for users. Monolithic blockchains that seek to scale on-chain must sacrifice either decentralization, security, or both, which for many is oftentimes an unacceptable trade-off. For this reason, many Layer 1 blockchains have recently begun adopting a more layered approach to scaling, which implies leveraging either rollups in the case of Nervos or Ethereum, for example, or state channels like the Lightning Network in the case of Bitcoin.




## How do Optimistic Rollups Work?

As mentioned, Optimistic rollups are a Layer 2 scaling solution designed to help improve the throughput and efficiency of blockchain networks by moving transactions and computation off the main chain, reducing congestion, and resulting in faster and cheaper transactions on the base chain.


![alt_text](images/image1.png "image_tooltip")


To do this, Optimistic rollups deploy a specific smart contract, called a rollup contract, on the underlying Layer 1, which is responsible for managing the rollup's state, keeping track of user balances, and handling deposits, withdrawals, and dispute resolution. In Optimistic rollups, transactions are collected and aggregated off-chain by "sequencers" or "operators" who bundle multiple transactions together into a single "rollup block." This block contains a summary of the new account state and a cryptographic proof (a Merkle tree root). After that, sequencers submit the rollup block to the main chain by providing the Merkle tree root and additional data, called "calldata," that will be used to verify the rollup block's validity later.

Important to note here is that the term "optimistic" co comes from the fact that the protocol assumes the submitted rollup blocks are valid by default without checking every transaction. This reduces the amount of on-chain computation and, as a result, decreases gas fees on Layer 2. To ensure the rollup's security or the validity of transactions, then, a mechanism called "fraud proofs" is employed. If someone believes a submitted transaction in a rollup block is invalid, they can submit a "fraud proof" to challenge it. The "fraud proof" contains details on the specific transaction that a validator deems fraudulent.

 

After a validator submits a fraud proof disputing the validity of a specific transaction, the rollup contract will verify the transaction in question on-chain. If the transaction is indeed invalid, the rollup block will be reverted, and the challenger will receive a reward. Consequentially, the sequencer responsible for the invalid block will be penalized.

Finally, users must submit a withdrawal request to the rollup contract to withdraw funds from Layer 2 to Layer 1. The contract will verify that the user has sufficient funds on the rollup and update their balance on the main chain accordingly.



1. Entering the Rollup


To transfer a digital asset to an Optimistic rollup, users must lock their funds into a bridge smart contract. This smart contract transfers the deposit information from Layer 1 to Layer 2, subsequently creating a corresponding representation of the digital asset on Layer 2. For example, if a user wants to transfer 1 ETH from Ethereum to Arbitrum, they'll lock 1 ETH into the bridge smart contract on Ethereum and receive 10 newly-minted wrapped ETH tokens on Layer 2.



![alt_text](images/image2.png "image_tooltip")


A sequencer, responsible for creating rollup blocks and connecting transaction information between Layer 2 and Layer 1, then assigns the Layer 2 asset representation to the user's wallet address on Layer 2. The user's wallet addresses on Layer 1 and Layer 2 are automatically synchronized. The original asset on Layer 1 remains locked until the user withdraws it, while they can freely transact with the corresponding newly minted asset on the rollup.



2. Using the Rollup

Once the users have entered the rollup, they can start transacting on it using the wrapped assets. To do this, users sign transactions and submit them to the sequencer, who assumes the transactions are valid before batching them to be sent to Layer 1. A rollup smart contract is used for this purpose, which utilizes pre-state and post-state roots. The pre-state root represents the rollup state before transaction execution, while the post-state root represents the rollup state after transaction execution. The rollup contract verifies that the current state root matches the pre-state root, and upon receiving the post-state root proposal from the sequencer, the pre-state root is replaced with the post-state root as the current state root.



3. Exiting the Rollup

To withdraw their assets from the rollups, users must submit a withdrawal request to the bridge smart contract. Although the transfer might seem straightforward, it takes longer to complete compared to depositing. The withdrawal process starts when the user submits a withdrawal request and provides a Merkle proof demonstrating that their transaction is part of the current rollup state root, as explained in the previous section.

The user obtains this proof from the sequencer, who then includes the user's withdrawal request in the next batch of transactions to be processed. However, withdrawals are not instantaneous; users must wait 7-14 days for the time window known as the dispute period (or challenging process) to pass. During this period, any entity that detects a discrepancy between rollup states can dispute the withdrawal process and assert that the current batch of transactions is invalid. These entities, called verifiers or validators, can receive rewards if their fraud claims are proven accurate. In most cases, no dispute claims are made, meaning users can unlock their original assets on Layer 1 after the dispute period ends.


## Examples of Optimistic Rollup

The most popular Optimistic rollup projects are the **[Arbitrum](https://arbitrum.io/)** and **[Optimism](https://www.optimism.io/)** Layer 2 networks built on Ethereum.

Arbitrum and Optimism are similar. Arbitrum deploys multi-round fraud proofs for when users want to exit the rollup, whereas Optimism only uses single-round fraud proofs. 

Arbitrum’s multi-round fraud-proof allows validators to challenge only a particular transaction instead of an entire batch of transactions. There is a tradeoff in having multi-round fraud proofs because multi-round slows down the transaction finality on Layer 1. But at the same time, multi-round fraud proofs also have arguably lower transaction fees than single-round fraud proofs.

Nervos also has its own Layer 2 Optimistic rollup called **Godwoken**, built on its Layer 1 blockchain called Common Knowledge Base. To learn more about how Godwoken works, visit its official [webpage](https://godwoken.com/).

