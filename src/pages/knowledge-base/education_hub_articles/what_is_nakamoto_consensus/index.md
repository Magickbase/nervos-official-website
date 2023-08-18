---
title: 'What Is Nakamoto Consensus?'
coverImage: 'images/image1.png'
category: 'PoW'
date: '2023-04-09T16:00:00.000Z'
---

Nakamoto Consensus, named after the pseudonymous creator of Bitcoin, Satoshi Nakamoto, is a Byzantine Fault Tolerant (BFT) consensus mechanism that combines Proof-of-Work with the "longest chain" rule to create a consensus protocol that adequately maintains the authenticity of decentralized blockchain networks.

First implemented in Bitcoin and later adopted by many subsequent cryptocurrencies, Nakamoto Consensus is the critical innovation that allowed Bitcoin to become the first BFT system that could scale organically without ever experiencing downtime. It's worth pointing out that while Nakamoto Consensus is often confused with Proof-of-Work, they're different. Nakamoto Consensus is a broader consensus protocol that incorporates Proof-of-Work but also other innovative ideas that make it unique.

## Nakamoto Consensus and Byzantine Fault Tolerance

Because Nakamoto Consensus is what makes Bitcoin a Byzantine Fault Tolerant system, it’s worth first exploring what that means.

Nakamoto Consensus is said to be a BFT consensus mechanism because it provides a solution to the Byzantine Generals Problem, a notorious thought experiment in computer science that grapples with the question of whether it’s possible to achieve lasting consensus in a computer network composed of independent, geographically distributed nodes.

BFT is basically a characteristic of distributed computer networks that can still work even when some of their nodes are going rogue or acting unpredictably or maliciously. Since blockchains are exactly that—distributed computer networks—they implement complex protocols to achieve consensus in a “Byzantine Fault Tolerant” way.

## Nakamoto Consensus Explained

As already mentioned, Nakamoto Consensus combines two novel ideas to achieve Byzantine Fault Tolerance: Proof-of-Work, and the “longest chain” rule.

### Nakamoto Consensus: Proof-of-Work

Proof-of-Work (PoW) is a cryptographic mechanism used in blockchain networks to validate transactions and maintain the network's security. In the case of Bitcoin, it is used as a consensus algorithm to determine the most valid block in the blockchain.

The process of validating blockchain transactions involves miners attempting to find a valid solution to a cryptographic puzzle associated with a new block of transactions. The only way for miners to find the solution to the Proof-of-Work puzzle is through trial and error, or by making thousands of guesses per second until they find one answer that matches the protocol's criteria. The first miner to find the correct answer gets to mine a new block (that, once validated by all the other full nodes in the network, is appended to the blockchain) and, in return, is rewarded with newly minted cryptocurrency.

Finding the Proof-of-Work solution, however, requires significant computing power and energy consumption, meaning miners also have something to lose, not only gain. This means that the Proof-of-Work algorithm relies on a robust incentive mechanism that (i) guarantees adequate punishment for any individual entity trying to circumvent or cheat the protocol and (ii) awards sufficient privileges to all distributed entities that follow the rules of the agreement.

Colloquially, this is also known as the "carrot and stick" approach, where the stick is the electrical energy required for computing complex problems that every mining node must do to participate in the mining process (i.e., the process of validating transactions), and the carrot is the block rewards in the form of newly minted bitcoin. In other words, the mining nodes that follow the rules of the Proof-of-Work protocol get rewarded with newly minted bitcoins, while cheating nodes are left with nothing but a hefty electrical bill for doing useless work. This is how Proof-of-Work-based blockchains can achieve real-time consensus between all participating nodes on the ledger's true state.


### Nakamoto Consensus: Longest Chain Rule

The longest chain rule, a key component of Nakamoto Consensus, states that in the event of competing blockchain forks, the chain with the most accumulated computational work, as measured by the number of blocks in the chain, is considered the correct and valid chain.

This means that miners are incentivized to extend the blockchain with the most accumulated computational work because doing so increases the likelihood that their blocks will be added to the correct chain and rewarded with cryptocurrency. In other words, the longest chain rule encourages miners to work on the same chain and ensures that the blockchain is maintained and extended by the majority of the network.

The longest chain rule helps prevent attacks on the network by making it extremely difficult for an attacker to create a longer valid chain than the existing one. Any attacker attempting to create a new, competing chain would need more computational power than the rest of the network combined, which is currently infeasible for most blockchains due to the high cost of acquiring and maintaining that much computational power.

Overall, the longest chain rule is a critical aspect of Nakamoto Consensus, as it provides a simple and effective way for the network to converge on a single, valid version of the blockchain, ensuring that the network operates securely and reliably.

## Conclusion

By utilizing Proof-of-Work and the longest chain rule, Nakamoto Consensus ensures that blockchains remain secure and resistant to attacks. While it has limitations, this consensus mechanism has proven to be a powerful and reliable tool for maintaining the integrity of blockchain networks.

For this reason, many cryptocurrencies beyond Bitcoin use different implementations of Nakamoto Consensus in their protocols. For example, Nervos’ Layer 1, Common Knowledge Base, uses Nakamoto Consensus Max (NC-Max), an improved version of the original Nakamoto Consensus that provides better security and performance.

\
Learn more about NC-Max [here](https://nervosbook.github.io/book/en/nc-max.html).
