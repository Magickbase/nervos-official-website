---
title: 'Understanding the Nervos CKB Issuance Model'
coverImage: 'images/image1.png'
category: Popular, economics
subtitle: 'This document is intended to be a reference article to understand the CKB issuance model in a graphic, didactic and simple way.'
date: '2023-07-07T16:00:00.000Z'
author: 
  - github:alejandroRbit
  - github:ChemaESP
---

Bitcoin’s most important value proposition in the economic sphere is its fixed issuance policy, since it is not subject to any change, and at the same time predictable, as long as we know how much and when new coins are going to be issued. For example, we know that the last BTC will be mined around the year 2140. The famous 21 million total supply just sums up that idea. In contrast, Ethereum does not have a fixed and predictable monetary policy, as it has changed several times throughout history, see for example [EIP-1559](https://eips.ethereum.org/EIPS/eip-1559).

As for Nervos, it follows the same philosophy and value proposition as Bitcoin since CKB’s primary and secondary issuance curves are also fixed and predictable. Primary issuance halves every 4 years like Bitcoin, while secondary issuance is constant, meaning the issuance rate decreases every year, infinitely close to zero.

This value proposition is extremely important since a fixed and predictable monetary policy provides legal and economic security to network participants, whether they are miners, developers, investors, companies or users. For example, in the business world, legal certainty is essential when investing in a new jurisdiction, since they need to ensure the economic future of their activity. In addition, it also gives the possibility of calculating the operating costs within the network in an easier and more accurate way, for example when investing in mining hardware.

We consider that it is a fundamental characteristic for a network focused on the preservation and store of value, for this reason the monetary policy and the issuance schedule of Nervos CKB is completely fixed and is not subject to any change, being one of the three invariants of the network.

### Genesis Block

The initial amount of CKBytes issued in the genesis block is 33,600,000,000, of which 25%, or 8,400,000,000 CKBytes, were [effectively burned immediately](https://explorer.nervos.org/address/ckb1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqrzayrmzh9lyl25y5uea0m0p76sawug7xqdksjqr) and therefore will never enter circulation. Thus, the circulating amount of CKBytes in genesis is 25,200,000,000.

![alt_text](images/image2.png 'image_tooltip')

This is important to consider since burning is not the same as not-issued, those 8,400,000,000 CKBytes issued but not circulating (burned) have an impact on secondary issuance, since 15% (5,040,000,000 CKBytes) from that 25% burned in genesis was hard-coded as “occupied” capacity, while the remaining 10% (3,360,000,000 CKBytes) was hard-coded as “liquid”, that is, without occupying state. This way, even if no CKBytes are used to store state, or if all circulating CKBytes are deposited in the Nervos DAO, miners and treasury will still receive CKBytes from the secondary issuance

![alt_text](images/image3.png 'image_tooltip')

_Note: it will not always be that 15% of the secondary issuance goes to the miners and 10% goes to the treasury. That number will decrease as more CKBytes are mined. The diagram above says “at least”, which is only accurate at the time the network is started._

As a result, when we talk about issued CKBytes later, the 8,400,000,000 burned will be included. For example, when calculating the inflation data we will do it taking into account all the 33,600,000,000 CKBytes issued in genesis. While if we talk about CKBytes in circulation we will refer to the figure of 25,200,000,000 and therefore the 8,400,000,000 CKBytes burned will be excluded.

 <table border="1" align="center"> 
    <tr bgcolor="edf2f2">
        <td colspan="9"; width="34%" align="center"><b><H3>GENESIS BLOCK DISTRIBUTION AND UNLOCK DATES</H3></b></td>
      </tr>
    <tr align="center">
        <td><b></td>
        <td><b>Total CKBytes from genesis</td>
        <td><b>Circulating on mainnet launch</td>
        <td><b>2020-05-01</b></td>
        <td><b>2020-07-01</b></td>
        <td><b>2020-12-31</b></td>
        <td><b>2021-05-01</b></td>
        <td><b>2022-05-01</b></td>
        <td><b>2022-12-31</b></td>
    </tr>
    <tr>
        <td><b>Public token sale (21.5%)</b></td>
        <td align="right">7,224,000,000</td>
        <td align="right">7,224,000,000 (100%)</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="center">-</td>
    </tr>
    <tr>
        <td><b>Ecosystem Fund (17%)</b></td>
        <td align="right">5,712,000,000</td>
        <td align="right">171,360,000 (3%)</td>
        <td align="center">-</td>
        <td align="right">1,428,000,000 (25%)</td>
        <td align="right">2,856,000,000 (50%)</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="right">5,712,000,000 (100%)</td>
    </tr>
    <tr>
        <td><b>Team (15%)</b></td>
        <td align="right">5,040,000,000</td>
        <td align="right">1,680,000,000 (33.33%)</td>
        <td align="right">2,520,000,000 (50%)</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="right">3,360,000,000 (66.66%)</td>
        <td align="right">5,040,000,000 (100%)</td>
        <td align="center">-</td>
    </tr>
    <tr>
        <td><b>Private Sale (14%)</b></td>
        <td align="right">4,704,000,000</td>
        <td align="right">3,136,000,000 (66.66%)</td>
        <td align="right">4,704,000,000 (100%)</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="center">-</td>
    </tr>
    <tr>
        <td><b>Founding Partners (5%)</b></td>
        <td align="right">1,680,000,000</td>
        <td align="center">-</td>
        <td align="right">420,000,000 (25%)</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="right">840,000,000 (50%)</td>
        <td align="right">1,680,000,000 (100%)</td>
        <td align="center">-</td>
    </tr>
    <tr>
        <td><b>Foundation Reserve (2%)</b></td>
        <td align="right">672,000,000</td>
        <td align="center">-</td>
        <td align="right">672,000,000 (100%)</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="center">-</td>
    </tr>
    <tr>
        <td><b>Testnet Incentives (0.5%)</b></td>
        <td align="right">168,000,000</td>
        <td align="right">168,000,000 (100%)</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="center">-</td>
    </tr>
    <tr>
        <td><b>Burn (25%)</b></td>
        <td align="right">8,400,000,000</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="center">-</td>
        <td align="center">-</td>
</table>

## Components of CKB Issuance: Primary and Secondary Issuance

### Base or Primary Issuance

The primary issuance is made up of a finite total of 33,600,000,000 CKBytes, and like Bitcoin, the block rewards from this issuance are cut in half approximately every 4 years until all 33,600,000,000 CKBytes are mined. The first halving of CKB will occur in mid-November 2023. The primary issuance is therefore a supply with a maximum limit or hard cap, just like Bitcoin.

For example, in the first four years of the network, 4,200,000,000 CKBytes will be issued per year through primary issuance, and after the first halving event in November 2023, the number of CKBytes issued per year will be 2,100. 000,000. As we can see in the following chart, with each halving the speed of CKB extraction through the primary issuance is reduced exactly in half. Consequently, the rate of entry of new CKBytes into the market is also reduced by 50%.

![alt_text](images/image4.png 'image_tooltip')

Thus, in the first four years of the network, 16,800,000,000 CKBytes are issued through the primary issuance, which represent 50% of the total supply of 33,600,000,000 CKBytes belonging to this emission. Instead, in the next four years, from 2023 to 2027, 8,400,000,000 CKBytes are issued. Therefore, in the first eight years of the network, 75% of the total primary emission is issued. By the year 2031, twelve years from mainnet launch, 87.5%, or 29,400,000,000 CKBytes, of the primary emission will be issued.

![alt_text](images/image5.png 'image_tooltip')

![alt_text](images/image6.png 'image_tooltip')

At this point, surely you have realized that in the first years of the network is when there is the greatest amount of token emission and this is reduced rapidly after each halving event. This can easily be seen in the inflation rate. In the first year of the network, the inflation corresponding to the primary issuance is 12.5%, four years later and after the first halving in 2023, it will be 3.765%, and from the fourth halving in 2031 inflation will be 0.663%. Since the primary issuance has a finite total of 33,600,000,000 CKBytes, inflation will reach zero when all CKBytes of the primary emission are issued.

![alt_text](images/image7.png 'image_tooltip')

In the following table you can see the evolution of the primary issuance in each halving.

 <table border="1" align="center"> 
    <tr bgcolor="edf2f2">
        <td colspan="6"; width="34%" align="center"><b><H3>PRIMARY ISSUANCE</H3></b></td>
      </tr>
    <tr align="center">
        <td><b>Year (estimate)*</b></td>
        <td><b>Reward era**</b></td>
        <td><b>CKBytes/year</b></td>
        <td><b>CKBytes issued</b></td>
        <td><b>CKBytes issued cumulative</b></td>
        <td><b>Percentage issued (%)</b></td>
    </tr>
    <tr align="right">
        <td>2019-2023</td>
        <td>1</td>
        <td>4,200,000,000.00</td>
        <td>16,800,000,000.00</td>
        <td>16,800,000,000.00</td>
        <td>50</td>
    </tr>
    <tr align="right">
        <td>2023-2024</td>
        <td>2</td>
        <td>2,100,000,000.00</td>
        <td>8,400,000,000.00</td>
        <td>25,200,000,000.00</td>
        <td>75</td>
    </tr>
    <tr align="right">
        <td>2024-2027</td>
        <td>3</td>
        <td>1,050,000,000.00</td>
        <td>4,200,000,000.00</td>
        <td>29,400,000,000.00</td>
        <td>87.5</td>
    </tr>
    <tr align="right">
        <td>2027-2031</td>
        <td>4</td>
        <td>525,000,000.00</td>
        <td>2,100,000,000.00</td>
        <td>31,500,000,000.00</td>
        <td>93.75</td>
    </tr>
    <tr align="right">
        <td>2031-2035</td>
        <td>5</td>
        <td>262,500,000.00</td>
        <td>1,050,000,000.00</td>
        <td>32,550,000,000.00</td>
        <td>96.875</td>
    </tr>
    <tr align="right">
        <td>2035-2039</td>
        <td>6</td>
        <td>131,250,000.00</td>
        <td>525,000,000.00</td>
        <td>33,075,000,000.00</td>
        <td>98.4375</td>
    </tr>
    <tr align="right">
        <td>2039-2043</td>
        <td>7</td>
        <td>65,625,000.00</td>
        <td>262,500,000.00</td>
        <td>33,337,500,000.00</td>
        <td>99.21875</td>
    </tr>
    <tr align="right">
        <td>2043-2047</td>
        <td>8</td>
        <td>32,812,500.00</td>
        <td>131,250,000.00</td>
        <td>33,468,750,000.00</td>
        <td>99.609375</td>
    </tr>
    <tr align="right">
        <td>2047-2051</td>
        <td>9</td>
        <td>16,406,250.00</td>
        <td>65,625,000.00</td>
        <td>33,534,375,000.00</td>
        <td>99.8046875</td>
    </tr>
    <tr align="right">
        <td>2051-2055</td>
        <td>10</td>
        <td>8,203,125.00</td>
        <td>32,812,500.00</td>
        <td>33,567,187,500.00</td>
        <td>99.90234375</td>
    </tr>
    <tr align="right">
        <td>2055-2059</td>
        <td>11</td>
        <td>4,101,562.50</td>
        <td>16,406,250.00</td>
        <td>33,583,593,750.00</td>
        <td>99.951171875</td>
    </tr>
    <tr align="right">
        <td>2059-2063</td>
        <td>12</td>
        <td>2,050,781.25</td>
        <td>8,203,125.00</td>
        <td>33,591,796,875.00</td>
        <td>99.9755859375</td>
    </tr>
    <tr align="right">
        <td>2063-2067</td>
        <td>13</td>
        <td>1,025,390.63</td>
        <td>4,101,562.52</td>
        <td>33,595,898,437.52</td>
        <td>99.9877929688</td>
    </tr>
    <tr align="right">
        <td>2067-2071</td>
        <td>14</td>
        <td>512,695.30</td>
        <td>2,050,781.20</td>
        <td>33,597,949,218.72</td>
        <td>99.9938964843</td>
    </tr>
    <tr align="right">
        <td>2071-2075</td>
        <td>15</td>
        <td>256,347.65</td>
        <td>1,025,390.60</td>
        <td>33,598,974,609.32</td>
        <td>99.9969482420</td>
    </tr>
    <tr align="right">
        <td>2075-2079</td>
        <td>16</td>
        <td>128,173.83</td>
        <td>512,695.32</td>
        <td>33,599,487,304.64</td>
        <td>99.9984741210</td>
    </tr>
    <tr align="right">
        <td>2079-2083</td>
        <td>17</td>
        <td>64,086.92</td>
        <td>256,347.68</td>
        <td>33,599,743,652.32</td>
        <td>99.9992370605</td>
    </tr>
    <tr align="right">
        <td>2083-2087</td>
        <td>18</td>
        <td>32,043.46</td>
        <td>128,173.84</td>
        <td>33,599,871,826.16</td>
        <td>99.9996185302</td>
    </tr>
    <tr align="right">
        <td>2087-2091</td>
        <td>19</td>
        <td>16,021.73</td>
        <td>64,086.92</td>
        <td>33,599,935,913.08</td>
        <td>99.9998092651</td>
    </tr>
    <tr align="right">
        <td>2091-2095</td>
        <td>20</td>
        <td>8,010.87</td>
        <td>32,043.48</td>
        <td>33,599,967,956.56</td>
        <td>99.9999046326</td>
    </tr>
    </tr>
</table>

_Note*: The Nervos CKB mainnet was launched on November 15, 2019 UTC. Therefore, each calendar year must be understood from November to November of the following year._

_Note**: Reward era refers to the halving event._

All primary issuance tokens are rewarded to miners as incentives to protect the network, therefore they can only be obtained through mining.

### Secondary Issuance

In addition to the base or primary issuance, there is a secondary emission, which is 1,344,000,000 CKBytes per year. Therefore this issuance, unlike the primary one, is not hard cap, that is, it does not have a maximum limit.

![alt_text](images/image8.png 'image_tooltip')

As we can see in the chart, after the second halving, the number of CKBytes issued by the secondary emission will exceed the primary one in each mined block, and therefore the secondary emission will gain more and more importance from the point of view of the mining rewards. When the primary issuance reaches zero, only the rewards from the secondary issuance will remain.

This issuance should be understood as a way to collect state rent, that is, a tax through inflation aimed at those network participants who make use of the state in the blockchain. In this way, it is guaranteed that the miners’ compensation is predictable and is based on the demand for preservation of value instead of the demand for transactions. This is essential for the security model in networks that prioritize the store of value in the Layer 1 blockchain, such as Nervos, while moving most transactions to Layer 2.

But what happens if you don’t use the state, as is the case with a long-term holder? Wouldn’t it be unfair to also pay that tax? Yes, it would be unfair. For this reason, Nervos includes a special smart contract called Nervos DAO, which functions as an inflation hedge for secondary issuance. CKByte owners can deposit their tokens into the Nervos DAO and receive a portion of the secondary issuance that exactly offsets the inflationary effects of the secondary issuance. Thus for long-term token holders, as long as they lock their tokens in Nervos DAO, the inflationary effect of secondary issuance is only nominal. With the effects of secondary issuance mitigated, these users effectively have max-supply tokens just like Bitcoin.

An easy way to understand the secondary issuance is to view it as a tail emission. For example, Monero tail emission allows miners to not be 100% dependent on transaction fees and thus can guarantee a specific income for them, regardless of the fee market and transaction volume. This way block rewards will never reach zero, maintaining the incentives to continue mining the network honestly and therefore maintaining the security of the network in the long term.

![alt_text](images/image9.png 'image_tooltip')

_Note: Monero’s tail emission was implemented on its mainnet in late May 2022, while CKB’s secondary issuance has been implemented since the Nervos mainnet launch in November 2019._

In the graph it is clearly seen how both emission rates decrease, tending to zero infinitely. The fundamental difference between the two is that the tail emission of Monero affects all the participants of the Monero network, while the secondary issuance of Nervos only affects those participants who do not have their CKBytes deposited in the DAO, therefore it is an inflation directed only to part of the network, not affecting all of the Nervos participants.

In fact, if we look at the [nominal compensation rate](https://explorer.nervos.org/charts/nominal-apc) that Nervos DAO depositors receive, we can see that it decreases over time. This is because as a depositor of Nervos DAO you always get the same share of the new supply, but the rate of the new supply itself continually decreases. This is why the compensation rate (APC) actually decreases as time goes by, and means that the total supply of CKBytes increases more and more slowly, getting infinitely close to zero both inflation rate and Nervos DAO compensation rate.

If we compare the inflation of the primary and secondary issuance over the years, we can see how Nervos DAO depositors are only affected by the inflation rate of the primary issuance, which we remember is a hard cap issuance just like Bitcoin, while those that have their CKBytes outside the DAO, either because they are occupying state or because they prefer to keep their CKBytes liquid, are diluted by secondary issuance.

![alt_text](images/image10.png 'image_tooltip')

<table border="1" align="center"> 
    <tr bgcolor="edf2f2">
        <td colspan="6"; width="34%" align="center"><b><H3>COMPARATIVE TABLE OF INFLATION RATES</H3></b></td>
    </tr>
    <tr align="center">
        <td><b>Year (estimate)</b></td>
        <td><b>Reward era</b></td>
        <td><b>Inflation rate primary emission (%)</b></td>
        <td><b>Inflation rate secondary emission (%)</b></td>
        <td><b>Inflation rate primary + secondary emission (%)</b></td>
    </tr>
    <tr align="right">
        <td>2019</td>
        <td>1</td>
        <td>12.5000000000</td>
        <td>4.0000000000</td>
        <td>16.5000000000</td>
    </tr>
    <tr align="right">
        <td>2020</td>
        <td>1</td>
        <td>10.7296137339</td>
        <td>3.4334763948</td>
        <td>14.1630901287</td>
    </tr>
    <tr align="right">
        <td>2021</td>
        <td>1</td>
        <td>9.3984962406</td>
        <td>3.0075187970</td>
        <td>12.4060150376</td>
    </tr>
    <tr align="right">
        <td>2022</td>
        <td>1</td>
        <td>8.3612040134</td>
        <td>2.6755852843</td>
        <td>11.0367892977</td>
    </tr>
    <tr align="right">
        <td>2023</td>
        <td>2</td>
        <td>3.7650602410</td>
        <td>2.4096385542</td>
        <td>6.1746987952</td>
    </tr>
    <tr align="right">
        <td>2024</td>
        <td>2</td>
        <td>3.5460992908</td>
        <td>2.2695035461</td>
        <td>5.8156028369</td>
    </tr>
    <tr align="right">
        <td>2025</td>
        <td>2</td>
        <td>3.3512064343</td>
        <td>2.1447721180</td>
        <td>5.4959785523</td>
    </tr>
    <tr align="right">
        <td>2026</td>
        <td>2</td>
        <td>3.1766200762</td>
        <td>2.0330368488</td>
        <td>5.2096569250</td>
    </tr>
    <tr align="right">
        <td>2027</td>
        <td>3</td>
        <td>1.5096618357</td>
        <td>1.9323671498</td>
        <td>3.4420289855</td>
    </tr>
    <tr align="right">
        <td>2028</td>
        <td>3</td>
        <td>1.4594279043</td>
        <td>1.8680677175</td>
        <td>3.3274956218</td>
    </tr>
    <tr align="right">
        <td>2029</td>
        <td>3</td>
        <td>1.4124293785</td>
        <td>1.8079096045</td>
        <td>3.2203389830</td>
    </tr>
    <tr align="right">
        <td>2030</td>
        <td>3</td>
        <td>1.3683634373</td>
        <td>1.7515051998</td>
        <td>3.1198686371</td>
    </tr>
    <tr align="right">
        <td>2031</td>
        <td>4</td>
        <td>0.6634819533</td>
        <td>1.6985138004</td>
        <td>2.3619957537</td>
    </tr>
    <tr align="right">
        <td>2032</td>
        <td>4</td>
        <td>0.6481721545</td>
        <td>1.6593207156</td>
        <td>2.3074928701</td>
    </tr>
    <tr align="right">
        <td>2033</td>
        <td>4</td>
        <td>0.6335529650</td>
        <td>1.6218955905</td>
        <td>2.2554485555</td>
    </tr>
    <tr align="right">
        <td>2034</td>
        <td>4</td>
        <td>0.6195786865</td>
        <td>1.5861214374</td>
        <td>2.2057001239</td>
    </tr>
    <tr align="right">
        <td>2035</td>
        <td>5</td>
        <td>0.3031037827</td>
        <td>1.5518913676</td>
        <td>1.8549951503</td>
    </tr>
    <tr align="right">
        <td>2036</td>
        <td>5</td>
        <td>0.2975836210</td>
        <td>1.5236281395</td>
        <td>1.8212117605</td>
    </tr>
    <tr align="right">
        <td>2037</td>
        <td>5</td>
        <td>0.2922609306</td>
        <td>1.4963759645</td>
        <td>1.7886368951</td>
    </tr>
    <tr align="right">
        <td>2038</td>
        <td>5</td>
        <td>0.2871253015</td>
        <td>1.4700815436</td>
        <td>1.7572068451</td>
    </tr>
    <tr align="right">
        <td>2039</td>
        <td>6</td>
        <td>0.1410835214</td>
        <td>1.4446952596</td>
        <td>1.5857787810</td>
    </tr>
    <tr align="right">
        <td>2040</td>
        <td>6</td>
        <td>0.1388811733</td>
        <td>1.4221432143</td>
        <td>1.5610243876</td>
    </tr>
    <tr align="right">
        <td>2041</td>
        <td>6</td>
        <td>0.1367465266</td>
        <td>1.4002844328</td>
        <td>1.5370309594</td>
    </tr>
    <tr align="right">
        <td>2042</td>
        <td>6</td>
        <td>0.1346765070</td>
        <td>1.3790874320</td>
        <td>1.5137639390</td>
    </tr>
    <tr align="right">
        <td>2043</td>
        <td>7</td>
        <td>0.0663341117</td>
        <td>1.3585226067</td>
        <td>1.4248567184</td>
    </tr>
    <tr align="right">
        <td>2044</td>
        <td>7</td>
        <td>0.0654022237</td>
        <td>1.3394375409</td>
        <td>1.4048397646</td>
    </tr>
    <tr align="right">
        <td>2045</td>
        <td>7</td>
        <td>0.0644961560</td>
        <td>1.3208812755</td>
        <td>1.3853774315</td>
    </tr>
    <tr align="right">
        <td>2046</td>
        <td>7</td>
        <td>0.0636148503</td>
        <td>1.3028321331</td>
        <td>1.3664469834</td>
    </tr>
    <tr align="right">
        <td>2047</td>
        <td>8</td>
        <td>0.0313786525</td>
        <td>1.2852696054</td>
        <td>1.3166482579</td>
    </tr>
    <tr align="right">
        <td>2048</td>
        <td>8</td>
        <td>0.0309708750</td>
        <td>1.2685670396</td>
        <td>1.2995379146</td>
    </tr>
    <tr align="right">
        <td>2049</td>
        <td>8</td>
        <td>0.0305735600</td>
        <td>1.2522930170</td>
        <td>1.2828665770</td>
    </tr>
    <tr align="right">
        <td>2050</td>
        <td>8</td>
        <td>0.0301863099</td>
        <td>1.2364312537</td>
        <td>1.2666175636</td>
    </tr>
    <tr align="right">
        <td>2051</td>
        <td>9</td>
        <td>0.0149043735</td>
        <td>1.2209662803</td>
        <td>1.2358706538</td>
    </tr>
    <tr align="right">
        <td>2052</td>
        <td>9</td>
        <td>0.0147224234</td>
        <td>1.2060609273</td>
        <td>1.2207833507</td>
    </tr>
    <tr align="right">
        <td>2053</td>
        <td>9</td>
        <td>0.0145448622</td>
        <td>1.1915151092</td>
        <td>1.2060599714</td>
    </tr>
    <tr align="right">
        <td>2054</td>
        <td>9</td>
        <td>0.0143715329</td>
        <td>1.1773159725</td>
        <td>1.1916875054</td>
    </tr>
    <tr align="right">
        <td>2055</td>
        <td>10</td>
        <td>0.0071011430</td>
        <td>1.1634512691</td>
        <td>1.1705524121</td>
    </tr>
    <tr align="right">
        <td>2056</td>
        <td>10</td>
        <td>0.0070189821</td>
        <td>1.1499900330</td>
        <td>1.1570090151</td>
    </tr>
    <tr align="right">
        <td>2057</td>
        <td>10</td>
        <td>0.0069387007</td>
        <td>1.1368367296</td>
        <td>1.1437754303</td>
    </tr>
    <tr align="right">
        <td>2058</td>
        <td>10</td>
        <td>0.0068602351</td>
        <td>1.1239809121</td>
        <td>1.1308411472</td>
    </tr>
</table>

In the following chart you can see the number of CKBytes in circulation over the years.

![alt_text](images/image11.png 'image_tooltip')

_Note: both the 25,200,000,000 CKBytes of genesis block and the unlock dates are taken into account in the chart and in the table below. All 1,344,000,000 annual CKBytes of the secondary issuance are also counted without considering the burned CKBytes belonging to the treasury. If you want to know how many CKBytes of the secondary issuance have been burned so far you can see it [here](https://explorer.nervos.org/nervosdao)._

 <table border="1" align="center"> 
    <tr bgcolor="edf2f2">
        <td colspan="6"; width="34%" align="center"><b><H3>CKBYTES IN CIRCULATION THROUGH THE YEARS</H3></b></td>
      </tr>
    <tr align="center">
        <td><b>Year (estimate)</b></td>
        <td><b>Reward era</b></td>
        <td><b>Genesis</b></td>
        <td><b>Primary emission</b></td>
        <td><b>Secondary emission</b></td>
        <td><b>Total CKBytes in circulation</b></td>
    </tr>
    <tr align="right">
        <td>2019</td>
        <td>1</td>
        <td>12,379,360,000</td>
        <td>0</td>
        <td>0</td>
        <td>12,379,360,000</td>
    </tr>
    <tr align="right">
        <td>2020</td>
        <td>1</td>
        <td>18,564,000,000</td>
        <td>4,200,000,000</td>
        <td>1,344,000,000</td>
        <td>24,108,000,000</td>
    </tr>
    <tr align="right">
        <td>2021</td>
        <td>1</td>
        <td>19,824,000,000</td>
        <td>8,400,000,000</td>
        <td>2,688,000,000</td>
        <td>30,912,000,000</td>
    </tr>
    <tr align="right">
        <td>2022</td>
        <td>1</td>
        <td>25,200,000,000</td>
        <td>12,600,000,000</td>
        <td>4,032,000,000</td>
        <td>41,832,000,000</td>
    </tr>
    <tr align="right">
        <td>2023</td>
        <td>2</td>
        <td>25,200,000,000</td>
        <td>16,800,000,000</td>
        <td>5,376,000,000</td>
        <td>47,376,000,000</td>
    </tr>
    <tr align="right">
        <td>2024</td>
        <td>2</td>
        <td>25,200,000,000</td>
        <td>18,900,000,000</td>
        <td>6,720,000,000</td>
        <td>50,820,000,000</td>
    </tr>
    <tr align="right">
        <td>2025</td>
        <td>2</td>
        <td>25,200,000,000</td>
        <td>21,000,000,000</td>
        <td>8,064,000,000</td>
        <td>54,264,000,000</td>
    </tr>
    <tr align="right">
        <td>2026</td>
        <td>2</td>
        <td>25,200,000,000</td>
        <td>23,100,000,000</td>
        <td>9,408,000,000</td>
        <td>57,708,000,000</td>
    </tr>
    <tr align="right">
        <td>2027</td>
        <td>3</td>
        <td>25,200,000,000</td>
        <td>25,200,000,000</td>
        <td>10,752,000,000</td>
        <td>61,152,000,000</td>
    </tr>
    <tr align="right">
        <td>2028</td>
        <td>3</td>
        <td>25,200,000,000</td>
        <td>26,250,000,000</td>
        <td>12,096,000,000</td>
        <td>63,546,000,000</td>
    </tr>
    <tr align="right">
        <td>2029</td>
        <td>3</td>
        <td>25,200,000,000</td>
        <td>27,300,000,000</td>
        <td>13,440,000,000</td>
        <td>65,940,000,000</td>
    </tr>
    <tr align="right">
        <td>2030</td>
        <td>3</td>
        <td>25,200,000,000</td>
        <td>28,350,000,000</td>
        <td>14,784,000,000</td>
        <td>68,334,000,000</td>
    </tr>
    <tr align="right">
        <td>2031</td>
        <td>4</td>
        <td>25,200,000,000</td>
        <td>29,400,000,000</td>
        <td>16,128,000,000</td>
        <td>70,728,000,000</td>
    </tr>
    <tr align="right">
        <td>2032</td>
        <td>4</td>
        <td>25,200,000,000</td>
        <td>29,925,000,000</td>
        <td>17,472,000,000</td>
        <td>72,597,000,000</td>
    </tr>
    <tr align="right">
        <td>2033</td>
        <td>4</td>
        <td>25,200,000,000</td>
        <td>30,450,000,000</td>
        <td>18,816,000,000</td>
        <td>74,466,000,000</td>
    </tr>
    <tr align="right">
        <td>2034</td>
        <td>4</td>
        <td>25,200,000,000</td>
        <td>30,975,000,000</td>
        <td>20,160,000,000</td>
        <td>76,335,000,000</td>
    </tr>
    <tr align="right">
        <td>2035</td>
        <td>5</td>
        <td>25,200,000,000</td>
        <td>31,500,000,000</td>
        <td>21,504,000,000</td>
        <td>78,204,000,000</td>
    </tr>
    <tr align="right">
        <td>2036</td>
        <td>5</td>
        <td>25,200,000,000</td>
        <td>31,762,500,000</td>
        <td>22,848,000,000</td>
        <td>79,810,500,000</td>
    </tr>
    <tr align="right">
        <td>2037</td>
        <td>5</td>
        <td>25,200,000,000</td>
        <td>32,025,000,000</td>
        <td>24,192,000,000</td>
        <td>81,417,000,000</td>
    </tr>
    <tr align="right">
        <td>2038</td>
        <td>5</td>
        <td>25,200,000,000</td>
        <td>32,287,500,000</td>
        <td>25,536,000,000</td>
        <td>83,023,500,000</td>
    </tr>
    <tr align="right">
        <td>2039</td>
        <td>6</td>
        <td>25,200,000,000</td>
        <td>32,550,000,000</td>
        <td>26,880,000,000</td>
        <td>84,630,000,000</td>
    </tr>
    <tr align="right">
        <td>2040</td>
        <td>6</td>
        <td>25,200,000,000</td>
        <td>32,681,250,000</td>
        <td>28,224,000,000</td>
        <td>86,105,250,000</td>
    </tr>
    <tr align="right">
        <td>2041</td>
        <td>6</td>
        <td>25,200,000,000</td>
        <td>32,812,500,000</td>
        <td>29,568,000,000</td>
        <td>87,580,500,000</td>
    </tr>
    <tr align="right">
        <td>2042</td>
        <td>6</td>
        <td>25,200,000,000</td>
        <td>32,943,750,000</td>
        <td>30,912,000,000</td>
        <td>89,055,750,000</td>
    </tr>
    <tr align="right">
        <td>2043</td>
        <td>7</td>
        <td>25,200,000,000</td>
        <td>33,075,000,000</td>
        <td>32,256,000,000</td>
        <td>90,531,000,000</td>
    </tr>
    <tr align="right">
        <td>2044</td>
        <td>7</td>
        <td>25,200,000,000</td>
        <td>33,140,625,000</td>
        <td>33,600,000,000</td>
        <td>91,940,625,000</td>
    </tr>
    <tr align="right">
        <td>2045</td>
        <td>7</td>
        <td>25,200,000,000</td>
        <td>33,206,250,000</td>
        <td>34,944,000,000</td>
        <td>93,350,250,000</td>
    </tr>
    <tr align="right">
        <td>2046</td>
        <td>7</td>
        <td>25,200,000,000</td>
        <td>33,271,875,000</td>
        <td>36,288,000,000</td>
        <td>94,759,875,000</td>
    </tr>
    <tr align="right">
        <td>2047</td>
        <td>8</td>
        <td>25,200,000,000</td>
        <td>33,337,500,000</td>
        <td>37,632,000,000</td>
        <td>96,169,500,000</td>
    </tr>
    <tr align="right">
        <td>2048</td>
        <td>8</td>
        <td>25,200,000,000</td>
        <td>33,370,312,500</td>
        <td>38,976,000,000</td>
        <td>97,546,312,500</td>
    </tr>
    <tr align="right">
        <td>2049</td>
        <td>8</td>
        <td>25,200,000,000</td>
        <td>33,403,125,000</td>
        <td>40,320,000,000</td>
        <td>98,923,125,000</td>
    </tr>
    <tr align="right">
        <td>2050</td>
        <td>8</td>
        <td>25,200,000,000</td>
        <td>33,435,937,500</td>
        <td>41,664,000,000</td>
        <td>100,299,937,500</td>
    </tr>
    <tr align="right">
        <td>2051</td>
        <td>9</td>
        <td>25,200,000,000</td>
        <td>33,468,750,000</td>
        <td>43,008,000,000</td>
        <td>101,676,750,000</td>
    </tr>
    <tr align="right">
        <td>2052</td>
        <td>9</td>
        <td>25,200,000,000</td>
        <td>33,485,156,250</td>
        <td>44,352,000,000</td>
        <td>103,037,156,250</td>
    </tr>
    <tr align="right">
        <td>2053</td>
        <td>9</td>
        <td>25,200,000,000</td>
        <td>33,501,562,500</td>
        <td>45,696,000,000</td>
        <td>104,397,562,500</td>
    </tr>
    <tr align="right">
        <td>2054</td>
        <td>9</td>
        <td>25,200,000,000</td>
        <td>33,517,968,750</td>
        <td>47,040,000,000</td>
        <td>105,757,968,750</td>
    </tr>
    <tr align="right">
        <td>2055</td>
        <td>10</td>
        <td>25,200,000,000</td>
        <td>33,534,375,000</td>
        <td>48,384,000,000</td>
        <td>107,118,375,000</td>
    </tr>
    <tr align="right">
        <td>2056</td>
        <td>10</td>
        <td>25,200,000,000</td>
        <td>33,542,578,125</td>
        <td>49,728,000,000</td>
        <td>108,470,578,125</td>
    </tr>
    <tr align="right">
        <td>2057</td>
        <td>10</td>
        <td>25,200,000,000</td>
        <td>33,550,781,250</td>
        <td>51,072,000,000</td>
        <td>109,822,781,250</td>
    </tr>
    <tr align="right">
        <td>2058</td>
        <td>10</td>
        <td>25,200,000,000</td>
        <td>33,558,984,375</td>
        <td>52,416,000,000</td>
        <td>111,174,984,375</td>
    </tr>
</table>

### Secondary Issuance Distribution

CKBytes from secondary issuance are distributed to miners, Nervos DAO depositors, and treasury proportionally depending on how many CKBytes are occupying state on the blockchain, how many CKBytes are deposited in Nervos DAO, and how many CKBytes are liquid, respectively.

![alt_text](images/image12.png 'image_tooltip')

Let’s see an example to understand it better, imagine that 50% of all existing CKBytes occupy state, 35% are in Nervos DAO and the remaining 15% are liquid (they do not occupy state or are deposited in Nervos DAO), the distribution would be like this:

* 50% of the secondary issuance goes to reward miners.
* 35% of the secondary issuance goes to the Nervos DAO to be distributed proportionally between the deposited tokens and their holders, negating the dilutive effects of the secondary issuance on long-term holders of the network.
* The remaining 15% of the secondary issuance goes to the treasury and its use is determined by the community through the governance mechanism. As long as the treasury is not activated through hard fork these CKBytes are [burned](https://explorer.nervos.org/nervosdao).

## Conclusion

The Nervos CKB issuance model, although somewhat more complex, is very similar to the Bitcoin model and strengthens its value proposition, a fixed and predictable issuance. The biggest difference between the two models is the inclusion of a tail emission, the secondary issuance, to maintain the security of the network in the long term and not rely on transaction fees to compensate miners. This secondary issuance does not affect all members of the network, as Nervos DAO depositors protect themselves from its inflationary effect, converting their CKBytes into Bitcoin-style hard cap tokens.

### Related Links

* [Crypto-Economics of the Nervos Common Knowledge Base](https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0015-ckb-cryptoeconomics/0015-ckb-cryptoeconomics.md)
* [Understanding the economic model of Nervos CKB](https://medium.com/@Chema_es/understanding-the-economic-model-of-nervos-ckb-408e2b74478b)
* [The CKByte Issuance Model of Nervos](https://talk.nervos.org/t/the-ckbyte-issuance-model-of-nervos/5321)
* [A detailed description of Nervos (CKB) supply and issuance](https://medium.com/@m.quinn/a-detailed-description-of-nervos-ckb-supply-and-issuance-1d55c4b101f9)
* [Nervos CKByte Distribution, and Why We Are Burning 25% in the Genesis Block](https://medium.com/nervosnetwork/nervos-ckbyte-distribution-and-why-we-are-burning-25-in-the-genesis-block-9a7ddf7f6779)
* [Bitcoin, Ethereum, Nervos: Inflationary or Deflationary?](https://www.cryptowendyo.com/bitcoin-ethereum-nervos-inflationary-deflationary/)
* [CKB Supply calculation](https://docs.google.com/spreadsheets/d/1G8eofv1qqs96aEUqEk9vZ8qxeUqSn31KCNoQlwLMyJA/edit#gid=1511634195)
