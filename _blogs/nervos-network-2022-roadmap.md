---
title: 'Nervos Network 2022 Roadmap'
excerpt: 'The Nervos Network has been ticking off major milestones since its foundation and last year was arguably the biggest year for Nervos in terms of growth through major releases such as Force Bridge and Godwoken. With these major milestones achieved in 2021, the doors are open for even more projects to take advantage of a much more flexible and broad reaching multi-chain ecosystem this year.'
coverImage: 'https://www.nervos.org/wp-content/uploads/2022/02/2022-Roadmap-Blog-1536x864.png'
date: '2020-03-16T05:35:07.322Z'
category: news
popular: true
---

The Nervos Network has been ticking off major milestones since its foundation and last year was arguably the biggest year for Nervos in terms of growth through major releases such as Force Bridge and Godwoken. With these major milestones achieved in 2021, the doors are open for even more projects to take advantage of a much more flexible and broad reaching multi-chain ecosystem this year.

Now in 2022, the Nervos Network is looking to take the platform even further ahead. New innovations across both the Layer 1 and Layer 2 chains are in the works right now. Improvements in interoperability will expand the reach of the Nervos community through additional bridges to new chains and are close to being launched. Finally and most importantly, the Nervos Network is continuing efforts on the cutting edge of crypto research to transform and improve blockchain technology to lead the way for the entire industry.

As you’ll see in this roadmap, the Nervos Network is clearly committed to pushing the boundaries in blockchain technology through these milestones. These focused efforts are geared towards building a multi-chain solution that will make Nervos Network the ultimate platform where a diverse ecosystem of dApps will flourish.

## Layer 1 / CKB (Common Knowledge Base)

### CKB Major Protocol Update One

The first CKB Major Protocol Update began development in 2021 and is planned for release on mainnet in early 2022. This will occur after the final audit and coordination within the community has been completed. Lina (the name of the current L1 version) has been serving CKB for over 2 years now but now will step aside to make way for a new hero to be announced.

This first protocol update lays the groundwork for a flyclient protocol and CKB light client. The CKB light client is a long-awaited feature of CKB with the potential to bring the user experience to a whole new level, without sacrificing decentralization.

The Nervos light client will use minimal resources via a flyclient protocol design, and thus is friendly to mobile, web and embedded environments. Thanks to PoW (proof of work) and cell model structure, these light clients are much easier to build on CKB than on other blockchains.

## CKB Major Protocol Update Two

In 2021 Q4, the CKB team also began the development of CKB Major Protocol Update Two, with an estimated mainnet release date of 2022 Q4. One major aspect of this protocol update is its upgrade to RISC-V V-extension (RVV) for the CKB-VM.

RVV is the key to CKB’s cryptography abstraction approach. With RVV, cryptographic algorithms implemented as on-chain scripts can run faster in CKB-VM. This means that certain cost-prohibitive cryptographic operations such as pairing, which are the basis of many zero-knowledge proof systems, will now become possible on CKB.

This update marks another significant integral improvement in the development of the Nervos Network.

These two protocol updates on CKB’s Layer 1 are integral and lay the foundation for scalability improvements on the Layer 2 architectures.

## Scalability and L2s

### Axon

Axon is a Layer 2 sidechain SDK created by the Nervos Network. The development of Axon first began in 2020 with Axon Prototype One followed by Axon Prototype Two in 2021. Axon is designed for high throughput applications such as gaming or social networks while maintaining its own data availability layer. (Axon transactions are not stored on CKB, the Layer 1 chain.)

During its prototype phase and the launch of Godwoken, many learnings were made that helped pave the way for the next Axon development sprint. In Axon’s current design, the data availability solution is separated from the sidechain protocol to be an independent project. With this separation, the first stage of Axon will be a much simpler sidechain with UDT (user defined tokens) staking on CKB. This separation also allows the possibility of many novel use cases.

With Axon, DApp developers will be able to use the Axon toolkit to create and distribute chain-specific UDT on CKB with chain token holders able to stake UDT to become an Axon chain validator or just deposit it into the Axon chain for use in dApps.

Just like Godwoken, Axon will be 100% Ethereum compatible as applications being built on Axon will inherently have multi-chain capability. The Nervos team looks forward to launching this new Layer 2 with a major event and bringing brand new dApps onto it through hackathons planned over the course of the year.

### SMT dApps

SMT dApps are able to scale smoothly and are made ready for mass adoption. In 2022 Nervos will identify common patterns and provide even more support and tools for SMT dApps.

To explain better if Godwoken and Axon are the off-the-shelf generic layer-2 solution, SMT dApps are the highly-customized layer-2 applications based on SMT (Sparse Merkle Tree). The sparse merkle tree is a highly optimized, well-tested, and audited data structure library introduced by the Godwoken team 2 years ago, to be used for state aggregation in Godwoken.

With the help of SMTs, dApps or layer-2 chains can move their state off-chain while keeping state integrity. SMTs turns purely layer-1 dApps into off-chain dApps between layer-1 and layer-2 (“layer 1.5”). Examples of applications that are already using SMTs are Mibao NFT by Nervina, Unipass V3 by Lay2 and the upcoming Sub-account Support by Decentralized Account Systems (DAS).

In addition to the current SMT dApp design, Nervos researchers will expand SMTs with additional optimizations to push the theoretical limit and formally prove its optimality. More information on these research results will be released in 2022.

### Developer friendly zkSNARKs

The need for developer-friendly zkSNARKs is becoming increasingly clear with privacy on the blockchain remaining an important piece of the overall puzzle.

Zero-Knowledge Succinct Non-Interactive Argument of Knowledge, also known as zkSNARKSs, is a relatively new form of Zero-Knowledge cryptography that allows one party to prove it possesses specific information without revealing that information to another party.

With “Polynomial IOPs for Linear Algebra Relations” published in The International Conference on Practice and Theory of Public-Key Cryptography (PKC) 2022, Nervos has made steady progress in designing more efficient and developer-friendly zkSNARKs.

Nervos will present two new tools for the development of these zkSNARKS, named VOProof and VORAM.

Specifically, VOProof provides a simple and intuitive language for describing the zkSNARK design and a compiler transforms this language into the working code of the zkSNARK. Based on the VOProof toolset, Nervos has developed VORAM, which focuses on the automatic creation of zkSNARKs-based on RAMs—a class of computational models that are friendly to programmers.

## Interoperability

Building on an improved backbone of Layer 1 and Layer 2 improvements the Nervos Network will reveal additional interoperability improvements as this area is one of Nervos’ defining characteristics to create a multi-chain ecosystem.

### Godwoken Ethereum Equivalence

The Nervos Layer 2 solution named Godwoken took center stage in late 2021 with its low fees and quick runtime. Now in 2022 Nervos plans to build upon that early success to launch the next version of Godwoken and bring it to the next level.

This newest version of Godwoken will be 100% Ethereum compatible, allowing for conveniences such as full Metamask support, simpler contract deployment solutions and tighter integration with the existing Ethereum ecosystem.

In addition to Ethereum compatibility, the new version of Godwoken will improve upon its Web3 RPC scalability to increase data query and transaction capacity to meet the challenges of an ever-growing ecosystem.

### Force Bridge & Cross-chain Liquidity

Force Bridge, a cross-chain bridge network that helps users move assets between Layer 1 and Layer 2 blockchains plays an integral part in the development of the Nervos platform. The team views Force Bridges as providing tremendous opportunity to a variety of chains where there is little to no existence of dApps.

Now in 2022 the team will continue to add additional chains through new Force Bridges that will enable an even more diverse ecosystem of communities. This key connection with other chains will provide numerous opportunities for new people to utilize their assets within the Nervos ecosystem and, at the same time, bring even more cross-chain liquidity to the platform.

## Research

Research is a critical and fundamental building block of Nervos. Every day the team continues to push ahead across many highly technical research areas to further improve the Nervos platform. With these efforts, such as helping found the UTXO Alliance, Nervos will be taking more steps in 2022 to strengthen research in Proof of Work, Extended UTXO Model and payment channels.

### Strengthening Proof of Work

Nervos CKB (Layer 1) operates on a bitcoin-like proof of work model (PoW) for a zero-compromise solution for consensus. This updated consensus model was named NC-Max after the founder of bitcoin, Nakamoto.

The Nervos Network is looking forward to its consensus protocol NC-Max being published at Network and Distributed System Security (NDSS) Symposium later in 2022, one of “the big four” security conferences. This will further cement Nervos’ position as a leading PoW researcher.

However, NC-Max is not the end of the journey. Nervos researchers have identified several areas to improve Nervos CKB’s current consensus mechanism. This includes polishing its difficulty adjustment mechanism (DAM) ahead of its academic debut publishing in 2022.

Nervos is also working on a series of security analyses with different collaborators in academia. On the network layer, Nervos has identified a security-performance tradeoff (similar to that in non-NC-Max blockchain protocols in blockDAG consensus protocols) which were previously believed to be immune to the tradeoff. Conversely, on the consensus layer, research will continue to explore the use of tools in artificial intelligence to analyze the security of consensus protocols and release vulnerabilities of existing consensus protocols.

### Cell / Extended UTXO Model

Nervos CKB (Layer 1) utilizes an Extended UTXO model which enables a number of important collaborations. In 2022 in collaboration with the Cardano research team, Nervos began a research project comparing the UTXO model and the account model even prior to the inception of the UTXO Alliance.

Together they achieved some preliminary results but didn’t manage to formalize them into a full report. Now that the Nervos CKB toolchain is more complete, there are plans to demonstrate UTXO’s superiority not only conceptually but with experimental results.

The Nervos Network hopes that the upcoming paper based on these experiments will serve as an academic manifesto of the UTXO Alliance. This paper will not only be among the earliest demonstrations of this model but also serve to be an advocate of the UTXO Alliance.

### Payment Channel Network

Payment channel networks (PCN) have always been on the Nervos roadmap because Nervos consider it a necessary component of Layer 2 infrastructure. Many prototypes in previous years were completed in order to test ideas combining PCN with UDT and other Layer 2 networks. As this is a very important area of interest for Nervos, research will continue this year with new developments being shared in the later part of 2022.

### Closing

With many new major milestones set for 2022. Nervos is on a path to creating even more value across the platform.

Each of the developments these key areas outlined will enable Nervos to take another step closer to achieving its overarching goal of making the Nervos Network as simple, adaptable and scalable as possible.

In 2022 as Nervos continues to deliver major breakthroughs in the blockchain space, the team couldn’t be more excited to have shared a glimpse of the future of the Nervos multi-chain vision.
