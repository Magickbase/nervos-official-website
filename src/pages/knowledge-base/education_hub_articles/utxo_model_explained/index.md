---
title: 'The UTXO Model Explained'
coverImage: 'images/image1.png'
category: 'UTXO'
date: '2023-04-09T16:00:00.000Z'
---

![alt_text](images/image2.png 'image_tooltip')

The Unspent Transaction Output (UTXO) accounting model plays a critical role in the functioning of Bitcoin and other UTXO-based cryptocurrencies. It ensures the accurate tracking of coin ownership changes and supports the security and integrity of blockchain networks.

## How Does the UTXO Transaction Model Work

In UTXO-based blockchains, the ledger's state is represented by a set of unspent transaction outputs, which are the indivisible units of cryptocurrency that can be spent in future transactions. Each UTXO is associated with a specific owner's public key and can only be spent by providing a valid signature corresponding to that public key.

Transactions in a UTXO-based blockchain consist of inputs and outputs. Inputs refer to the UTXOs being spent, while outputs outstanding unspent "coins." A transaction consumes one or more existing UTXOs as inputs and generates new UTXOs as outputs, which are then added to the UTXO set. This process maintains the conservation of value within the system.

The UTXO model is essential for maintaining the security and integrity of blockchain networks. The model effectively prevents double-spending attacks by ensuring that each UTXO can only be spent once. Nodes in the network maintain a UTXO set, which allows them to validate transactions by checking that the referenced UTXOs exist and have not been spent previously. If a transaction is valid, nodes add it to their mempool—a pool of unconfirmed transactions waiting to be included in a block.

When a block is mined and added to the blockchain, nodes update their UTXO set by removing the spent inputs and adding the newly created outputs. In the case of chain reorganizations, nodes must also update their UTXO set to reflect the changes introduced by the new chain.

## Comparisons to Other Transaction Models

While the UTXO model is widely employed in cryptocurrencies like Bitcoin and Litecoin, other transaction models exist. Ethereum, for example, uses an account-based model, which operates more like a traditional bank account. In the account-based model, the ledger's state is represented by account balances rather than UTXOs. Transactions directly update the sender's and recipient's account balances, and no new outputs are created.

The UTXO and account-based models each have their advantages and drawbacks. The UTXO model offers enhanced privacy and scalability, while the account-based model provides simplicity and ease of use. The transaction model choice depends on a specific cryptocurrency project's unique requirements and goals.

## The Advantages and Disadvantages of the UTXO Model

As already mentioned, the advantages of the UTXO over the account model include greater scalability and better privacy.

Specifically, UTXO-based blockchains are more scalable because they can process transactions in parallel, i.e., miners can validate every transaction independently and process different transactions simultaneously. This is in contrast to account-based blockchains that can only process transactions sequentially or one after another in a linear manner, which can often lead to network congestion in times of high user demand.

When it comes to privacy, the UTXO model is superior to the account-based model because it abstracts away the notion of an on-chain identity. Namely, in UTXO-based blockchains, users are encouraged to create new addresses for every transaction they make or receive, making it much more difficult for third persons to link transactions to individual users. In account-based blockchains, users typically use a single public address or account for all their transactions, making it much easier to link their on-chain account with real-life identity.

The most notable disadvantage of the UTXO model is its lack of programmability or smart contracting support. Namely, the standard UTXO model used in Bitcoin supports only simple cryptocurrency transactions and can’t be used to build decentralized applications. However, other established blockchain projects like Nervos and Cardano have implemented their own generalized versions of the UTXO model, namely the cell model and the Extended UTXO (EUTXO) models that are just as—if not more flexible and programmable than account-based blockchains.
