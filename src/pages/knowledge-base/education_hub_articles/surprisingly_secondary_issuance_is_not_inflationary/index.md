---
title: 'Surprisingly, Secondary Issuance is not Inflationary'
coverImage: 'images/image1.png'
category: popular, economics
subtitle: 'The purpose of this article is to present in a graphic and intuitive way the approach outlined by Peter Todd, Bitcoin Core developer, in his article entitled [Surprisingly, tail emission is not inflationary](https://petertodd.org/2022/surprisingly-tail-emission-is-not-inflationary). To illustrate this, we will use the CKB issuance model as an example, providing the community with a complementary perspective that allows a more complete understanding of the article [Understanding the Nervos CKB Issuance Model](https://www.nervos.org/knowledge-base/understanding_nervos_ckb_issuance_model).'
date: '2023-08-02T16:00:00.000Z'
author: 
  - github:alejandroRbit
  - github:ChemaESP
---


Normally, when we analyze the emission model of a coin such as CKB, we usually only consider the theoretical total number of coins issued over time, i.e., the emission curve. However, this does not fully correspond to reality, since the theoretical total number of CKBytes issued and circulating at any given moment should not be confused with the total spendable supply at that moment. This is because coins are continuously lost for multiple reasons, effectively turning them into non-spendable coins.

![alt_text](images/image2.png 'image_tooltip')

_This chart only takes into account the emission of new tokens in circulation, not CKBytes lost and unspendable due to deaths, accidents, loss of private keys, etc._

Some situations that can lead to issued coins being out of circulation, becoming non-spendable coins, are:

* **Loss of private keys due to human error or accidents:** Accidental loss of private keys can lead to permanent loss of funds associated with that address. For example, imagine someone who decides to back up their private key on a piece of paper and keeps that paper in a drawer at home. Unfortunately, one day, a fire breaks out in their home, and the paper with the private key is irretrievably lost in the flames. In this situation, the CKBytes associated with that private key would be considered permanently lost. The chances of someone randomly finding a private key that matches the affected address are so astronomically low that, in practice, the recovery of those funds is impossible.
* **Death:** When a person dies and has not made provisions to share their private keys or leave clear instructions on how to access their cryptocurrencies, their funds may become practically inaccessible.
* **Deliberate destruction:** CKBytes can also be intentionally destroyed, for example, by attaching conditions that make it impossible to spend them. The simplest example is sending to an inaccessible address, where the funds sent can never be retrieved or spent, as there is no corresponding private key to access those funds. Such addresses are commonly known as "burn addresses".
* **Dust:** Tiny and extremely small fractions of coins that remain as remnants after transactions are known as "dust". These amounts are often so insignificant that their nominal value is practically negligible. Consequently, they can be difficult or even prohibitively expensive to spend, as the transaction fees required to send or use them may far exceed their actual value, and may become out of circulation over time.
* **Technical peculiarities:** There are also technical peculiarities that prevent the spending of CKBytes. For example, NFTs created through Kollect, an old marketplace that no longer exists, cannot be exchanged back for the CKBytes used to mint them. These NFTs are written in stone on the chain and will live forever.

Over time, all these factors continuously reduce the supply of available coins. We can deduce that the total spendable supply is always less than the number of CKBytes issued. Therefore:

<code>CKBytes issued - CKBytes lost and non-spendable = Total supply of spendable CKBytes</code>

### Calculating the Rate of Lost and Unspendable CKBytes

We do not know the rate of lost and unspendable CKBytes, and it may not even be constant over time. However, we do know certain things for sure:

* Coins are lost due to deaths, forgotten seed phrases, accidents, etc.
* These losses occur continuously over time.
* Coins can only be lost once, therefore the rate of coin loss at any given time is proportional to the total supply at that moment.

Knowing all this, we can define λ as the coin loss rate, and we can assign it a specific value. For example, for this article, we have decided to set the coin loss rate (λ) at 0.5%, an annual and constant rate.

We consider a 0.5% annual rate reasonable, which is in line with Peter Todd's article and the arguments provided by [members of the Monero community](https://www.reddit.com/r/Monero/comments/4z0azk/comment/d6sixyi/). However, it doesn't matter whether it's 0.5% or another value, it does not even matter if it is not constant, because what matters is that we can assume coins are lost, and this loss takes place continuously over time. As long as this condition is met, the effects and long-term trends on the emission curve remain, even if it takes more or less time to materialize.

### Effects of the Loss Rate on the Nervos CKB Emission Curve 

In the following graph we can see how in the long term, the initial supply of CKBytes belonging to the genesis block will eventually be lost over the years.

![alt_text](images/image3.png 'image_tooltip')

Similar to genesis, CKBytes from primary issuance tend to be lost over time.

![alt_text](images/image4.png 'image_tooltip')

Just as with Bitcoin's issuance schedule, primary issuance experiences a reduction by half every four years until all primary issuance CKBytes are mined into circulation. For long-term depositors in Nervos DAO, who are only affected by the primary emission, it means that their CKBytes will effectively become deflationary as eventually no new coins will ever enter circulation through the primary issuance, but CKBytes belonging to this emission will continue to be lost steadily over time. In fact, it may become net deflationary long before all the CKBytes from the primary emission are mined.

Thus, for Nervos DAO depositors, their CKBytes not only act as tokens with maximum supply just like Bitcoin, but also as de facto long-term deflationary tokens.

In the case of secondary issuance, the fixed supply rate consisting of 1,344,000,000 CKBytes per year will reach an equilibrium point over the years, where the production rate will be equal to the loss rate. In other words, in the long run, the supply of coins belonging to the secondary emission will converge to k/λ (where k is the fixed supply rate, and λ is the coin loss rate), which is the point where coins are created as fast as they are lost.

![alt_text](images/image5.png 'image_tooltip')

Economically this means that secondary issuance converges in the long run to a stable money supply that is neither inflationary nor deflationary. And it also shows how the CKB monetary supply is not really infinite in practice.

This is how the CKB issuance curve would look in the short term, considering the CKByte loss rate:

![alt_text](images/image6.png 'image_tooltip')

While in the long term, it would look like this:

![alt_text](images/image7.png 'image_tooltip')

Keep in mind that for our example we assigned an annual value of 0.5% to λ. If, for example, it were a lower percentage, the trend would remain the same. Genesis CKBytes would eventually be lost, just like those from the primary issuance, creating a deflationary situation for Nervos DAO depositors, and the secondary issuance would reach an equilibrium point at k/λ;  it would just take longer to reach that point.

### Conclusion and Final Thoughts

No matter what value is assigned to λ, as long as CKBytes are continuously lost over time (i.e., λ > 0), we can assume the following:

* CKBytes from the genesis block that make up the initial supply will eventually be lost over the years.
* Regarding primary issuance, as with Bitcoin, the number of coins leaving circulation will eventually exceed the number of coins created through the primary issuance, leading to the same deflationary scenario for all Nervos DAO depositors.
* As for the secondary issuance, for those network participants who hold their CKBytes outside of the DAO and are thus affected by this targeted tail emission, it converges in the long run to a stable monetary supply that is neither inflationary nor deflationary, being de facto a non-infinite supply.

![alt_text](images/image8.png 'image_tooltip')

As blockchain technology continues to develop and standards improve further every day, it is possible that the rate of private key loss will significantly decrease over time. Among those developments we can highlight multi-signature schemes, social recovery, dead man's switch, and many other developments made possible by [account abstraction](https://www.nervos.org/knowledge-base/account_abstraction_where_were_going). Also, the development of good practices and the education of users in the management of their private keys decreases the loss of these keys. 

However, it seems unlikely that these advancements will completely stop coin losses in the near future, and as a result, their effects will continue to manifest in one way or another in the emission curves of coins like CKB.


### Related Links

* [Surprisingly, Tail Emission Is Not Inflationary](https://petertodd.org/2022/surprisingly-tail-emission-is-not-inflationary)
* [Bitcoin, Ethereum, Nervos: Inflationary or Deflationary?](https://www.cryptowendyo.com/bitcoin-ethereum-nervos-inflationary-deflationary/)
* [Understanding the Nervos CKB Issuance Model](https://www.nervos.org/knowledge-base/understanding_nervos_ckb_issuance_model)
* [Reasoning from the Monero community about the tail emission](https://www.reddit.com/r/Monero/comments/4z0azk/comment/d6sixyi/)
* [Bitcoin - Controlled Supply](https://en.bitcoin.it/wiki/Controlled_supply)

