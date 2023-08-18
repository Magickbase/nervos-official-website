---
title: 'Common Knowledge Base (CKB): a Blockchain Developer’s Dream'
coverImage: 'images/image1.png'
category: Popular
subtitle: 'Nervos’ Layer 1 blockchain, Common Knowledge Base, allows developers to bring their own cryptography and build decentralized applications with superior UX and financial primitives that aren’t possible on any other chain.'
date: '2023-06-19T16:00:00.000Z'
---
Any prospective blockchain developer that has tried building decentralized applications has quickly realized that the current blockchains offer rather inflexible development environments. Building applications or financial primitives with superior user experience comparable to that of Web 2 applications is nearly impossible today, and largely due to two main reasons. The first reason is the social inflexibility of specific blockchain communities, which often stigmatize potential unorthodox builders, while the second involves the inherent technical limitations burdening most blockchains.

For these reasons, experimenting with or building on Bitcoin today is practically unthinkable. Its technical limitations or lack of smart contracting capabilities make developing more complex decentralized applications impossible. Beyond that, and perhaps more importantly, its core developer and broader investor community view the protocol as very close to ossified, leaving little room for experimentation for prospective systems developers. On the other hand, Ethereum's community is exceptionally welcoming to developers, but its—and, for that matter, all other Layer 1s’—technical limitations significantly limit the scope of applications that developers can build.

Realizing that onboarding the next billion users to Web3 is contingent on removing these technical restrictions, the Layer 1 blockchain of the Nervos Network, Common Knowledge Base (CKB), has been built to be as flexible and low-level as possible. On CKB, developers can freely experiment and build Web3 applications that rival or even surpass the user experience of their Web2 counterparts. Instead of adhering to the strict conditions imposed by all other chains, blockchain developers can bring their own cryptographic primitives to CKB and build innovative applications that aren’t possible elsewhere.

To understand how that’s possible and what it means in more practical terms, it’s necessary to first look at the fundamental difference between CKB and all other blockchains.


## Common Knowledge Base vs. Legacy Blockchains

The key difference between CKB and all other blockchains is that the latter include cryptographic primitives at the consensus layer, whereas CKB incorporates them on the smart contract layer. And while this difference may seem trivial on the surface, it’s night and day in terms of the development possibilities it opens up to builders.

Taking Bitcoin and Ethereum as examples, creating user accounts on these blockchains requires managing a set of key pairs. For instance, a Bitcoin address is derived by taking a private key as an input, doing a one-way elliptic curve derivation using the Secp256k1 standard to get the public key, hashing that public key using the SHA-256 and RIPEMD-160 hash functions to get the Bitcoin address, and then using the Base58 check encoding algorithm to present the address in a more concise form. Similarly, an Ethereum address is derived by taking a private key, doing an elliptic curve derivation using the Secp256k1 standard to get a public key, then hashing that public key using the Keccak-256 hash function, and then taking the last 20 bytes of the hash output to get the address.

In either case, the SHA-256, RIPEMD-160, Base58, Secp256k1, and Keccak-256 cryptographic primitives are embedded in the consensus layers of these chains. If anyone wants to change these, i.e., replace the hash algorithms Keccak-256 or SHA-256 of the Ethereum and Bitcoin public keys for example, or use a different elliptic curve to derive the public key, then the only way is to submit a Bitcoin or an Ethereum Improvement Proposal (BIP/EIP) and hope the proposal will eventually be considered and implemented on the respective blockchains via a hard fork. Naturally, and for very good reasons, changing the rules of blockchain protocols via hard forks is a very contentious and exhaustive process that can often take years to materialize, rendering the potential use of unsupported cryptographic primitives practically unfeasible.

Granted, Ethereum has, over time, added more commonly used cryptographic algorithms, but only through the precompile method. Namely, EIP-196 and EIP-197 were introduced because zk-SNARKs—a privacy-enhancing technique that allows data to be verified without revealing the data itself—needed to be more efficient in Ethereum. Verifying zk-SNARKs proofs requires a lot of computing power, which would be very costly if done directly at the smart contract layer. To make this process cheaper and more efficient, the basic components of the zk-SNARK cryptographic algorithms (like elliptic curve addition, multiplication, and pairing verification) were added as precompiles to the Ethereum Virtual Machine (EVM) through a hard fork. This means that these primitives are executed directly by the nodes rather than as part of a smart contract on the blockchain, reducing the cost of calculations. However, it also demonstrates that using cryptographic algorithms other than precompiled ones (which were baked in from the start or added later via hard forks) is impossible in practice.

This solidification of how cryptography is used in these blockchains creates significant limitations for developers. In most cases, application developers can’t escape these limitations, and when they do, the process requires making compromises that eventually still end up limiting the user experience in one way or another. For example, Ethereum recently implemented ERC-4337, a backward-compatible update that allows for the creation of smart contract wallets that can define their own transaction verification and execution logic and consequently leverage various signature schemes, elliptic curves, and signing protocols. However, ERC-4337 only allows for application-level account abstraction that upholds smart contract accounts or wallets as second-class citizens. 

Even with the ERC-4337 update, the only type of account that can initiate transactions on Ethereum remains the externally owned account (EOA), which is chained to the hardcoded rules of the EVM and can only use the precompiled cryptographic primitives. 

It can be argued that account abstraction is definitionally something that must be implemented in the protocol layer. While ERC-4337 provides permissionless and decentralized methods of social recovery and gas payments by third parties, it falls short of what could be expected of true account abstraction, in which transactions can be initiated from different kinds of policies, such as the state transition of a zk-SNARK and introduces new complexity and overhead with relayers, paymasters, and an alternative mempool for these transactions.


### CKB is a Blank Canvas

Whereas other chains, like Ethereum, resemble pre-drawn stencils where application developers can only color within precompiled boundaries, CKB is a blank canvas that grants developers ultimate freedom.

CKB’s virtual machine, the CKB-VM, has zero precompiles, meaning that the hash functions and signature schemes are not baked into it but instead run at the application level or in the same environment as smart contracts created by application developers. CKB’s accounting model, dubbed the Cell model, is a more generalized version of Bitcoin’s UTXO model. No internal structure is enforced on the data stored in cells, and the layout is entirely left to developers. It has the same programming or smart contracting capabilities (and better scaling abilities) as Ethereum’s account model but without any of the constraints.

![alt_text](images/image2.png 'image_tooltip')

The advantages of CKB’s RISC-V-based virtual machine and the Cell model are numerous. For one, their extremely generalized or abstract nature gives developers much greater options in terms of the blockchain applications they can build. The CKB-VM can run CosmWasm or EVM-based virtual machines with relative ease, allowing developers to build interoperable decentralized applications in environments they’re already familiar with. Moreover, CKB supports all programming languages, meaning builders can code using whatever language they’ve already mastered. For example, the developers behind CKB recently [integrated Lua 5.4](https://blog.cryptape.com/enhancing-ergonomics-and-extensibility-of-ckb-contract-development-with-lua#heading-introduction) into the CKB-VM, allowing developers to either run a standalone Lua interpreter on CKB or embed Lua code into the main CKB contracts, thus greatly lowering the barrier of contract development on the chain.

In more direct terms, the unmatched flexibility of CKB’s virtual machine and accounting model means that application developers can build decentralized applications and financial primitives that provide a far superior user experience than applications on other chains. Instead of being limited to using only the existing precompiled crypto primitives or waiting for new ones to be compiled at the protocol level via hard forks, developers on CKB can bring their own cryptographic primitives and install them as if they were mere plug-ins without requiring any consensus-layer changes. For example, developers could deploy Ethereum’s Keccak-256 hash function in a cell (similar to deploying a smart contract on Ethereum), implement the crypto library that supports it, and then build a decentralized application that can verify Ethereum signatures on CKB. In fact, that’s what the Lay2 team did with the Secp256k1 and Keccak-256 libraries in 2020, and thousands of CKB holders use the [ckb.pw](https://ckb.pw/#/) wallet with their Ethereum addresses.

The best current examples of decentralized applications leveraging the unmatched flexibility and interoperability of CKB are .bit and JoyID.


## .Bit

One of the most innovative applications built on CKB is the [.bit](https://did.id) protocol, which showcases the true potential of CKB's flexibility and compatibility across chains. .bit is a cross-chain Web3 digital identity protocol that enables users to map human-readable names, like "Nervos.bit," to machine-readable identifiers such as blockchain addresses.

What sets .bit apart from other digital identity protocols like Ethereum's ENS (Ethereum Name Service) is its broad compatibility. While ENS only supports Ethereum addresses, .bit allows users to register and manage their accounts using (theoretically) any public chain address or even email. This means that users can create and manage .bit accounts with their Dogecoin, Bitcoin, or any other public chain addresses and seamlessly use them across multiple chains. Beyond managing digital identities, .bit users can also store a wide range of information in their .bit accounts, including PGP public keys, Magnet URL schemes, smart contract addresses, software MD5 hashes, and personal introductions. 

Essentially, .bit is a self-sovereign data container that users can use as their all-encompassing Web3 account. Because CKB supports all cryptographic primitives, .bit accounts can be accessed using the keypairs of all public chains or other sign-in methods typical of Web2 applications like FaceID, fingerprints, Apple Passkeys, and others.


## JoyID

CKB is the only Layer 1 blockchain in the industry with protocol-level account abstraction, and JoyID is the best demonstration of what that looks like in practice. [JoyID](https://joy.id) is a non-custodial, cross-platform, password and mnemonic-free crypto wallet built on CKB. It allows users to own and manage cryptocurrencies without creating and safekeeping passwords or mnemonic phrases, leading to a much better user experience than all other crypto wallets. 

CKB’s highly generalized or “abstract” design allows JoyID to leverage WebAuthn’s widely implemented Secp256r1 (P256) signature algorithm instead of the typically hard-coded Secp256k1. WebAuthn is a technology fully supported by mainstream operating systems, including MacOS, Windows, Linux, ChromeOS, iOS, and Android. It allows a website to create a public-private key pair in the Trusted Execution Environment (TEE) on the user’s device and uses the private key to sign transactions, with the guarantee that the private key cannot ever be leaked. Local authentication is performed through biometric identification or PIN code verification during the signature authorization process. 

JoyID uses WebAuthn to turn a regular mobile device into a passwordless cold storage wallet, creating a crypto wallet that is both as secure and user-friendly as possible—something that has never been done before and isn’t possible on any Layer 1 chain other than CKB. Moreover, JoyID enjoys all the benefits of CKB’s protocol-level account abstraction, including the possibility for social recovery and multi-signature accounts.


## Final Thoughts

The Common Knowledge Base (CKB) has proven itself to be a game-changer in the blockchain industry, providing developers with unparalleled flexibility and freedom to build decentralized applications that were once deemed unattainable. By moving cryptographic primitives to the application layer and offering a highly generalized virtual machine and accounting model, CKB opens up a new world of possibilities for the development of Web3 applications with superior user experiences.

The success of innovative applications like .bit and JoyID stands testament to the transformative potential of CKB's design, showcasing its ability to enable cross-chain compatibility, seamless user experience, and next-level security. As the blockchain landscape continues to evolve, it is clear that CKB has positioned itself as the blockchain developer's dream, providing the necessary tools and framework to bring about the widespread adoption of Web3 technologies and applications.

With its forward-thinking approach and commitment to fostering a thriving ecosystem for developers, Nervos' Common Knowledge Base is poised to play a pivotal role in driving the future of decentralized technology and, ultimately, empowering the next billion users to embrace the benefits of Web3.
