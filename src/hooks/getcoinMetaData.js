let arr = [
  {
    slug: "1inch",
    description:
      "1inch Network is a decentralized exchange (DEX) aggregator to help users discover the best trade prices for tokens. Instead of swapping tokens from a single liquidity pool of a DEX, 1inch will aggregate across different pools and suggest the most efficient way to trade tokens.",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/111676b0a9e53433f480260cc904f704912fd44d9b63fbc9103069cf299eeab1_1612281140765_1inch.png",
    ticker: "1INCH",
    name: "1inch",
  },
  {
    name: "Aave",
    slug: "aave",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_aave.png",
    ticker: "AAVE",
    description:
      "Aave is a decentralized money market protocol where users can lend and borrow cryptocurrency across 20 different assets as collateral. The protocol has a native token called AAVE, which is also a governance token that lets the community decide the direction of the protocol in a collective manner. Lenders can earn interest by providing liquidity to the market, while borrowers can borrow by collateralizing their cryptoassets to take out loans from the liquidity pools",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_cardano.png",
    name: "Cardano",
    description:
      "Cardano is a decentralised platform that will allow complex programmable transfers of value in a secure and scalable fashion. It is one of the first blockchains to be built in the highly secure Haskell programming language. It is the first blockchain platform to evolve out of a scientific philosophy and a research-first driven approach. The development team consists of a large global collective of expert engineers and researchers. The Cardano project is different from other blockchain projects as it openly addresses the need for regulatory oversight whilst maintaining consumer privacy and protections through an innovative software architecture.",
    ticker: "ADA",
    slug: "cardano",
  },
  {
    description:
      "Akash Network, the world’s first decentralized and open-source cloud, accelerates deployment, scale, efficiency and price performance for high-growth industries like blockchain and machine learning/AI. Akash Network envisions a world where cloud computing is permissionless, sovereign, and open, where builders of the internet have greater freedom to expand the human experience.",
    slug: "akash-network",
    ticker: "AKT",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_akash-network.png",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_algorand.png",
    slug: "algorand",
    ticker: "ALGO",
    description:
      "Algorand is a self-sustaining, decentralized, blockchain-based network that supports a wide range of applications. These systems are secure, scalable and efficient, all critical properties for effective applications in the real world. Algorand will support computations that require reliable performance guarantees to create new forms of trust.",
    name: "Algorand",
  },
  {
    description:
      "ApeCoin is an ERC-20 governance and utility token used within the APE ecosystem to empower a decentralized community building at the forefront of web3.",
    slug: "apecoin",
    ticker: "APE",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_apecoin.png",
  },
  {
    slug: "api3",
    name: "API3",
    description:
      "API3 builds blockchain-native, decentralized APIs with DAO-governance and quantifiable security.",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_api3.png",
    ticker: "API3",
  },
  {
    name: "Arweave",
    ticker: "AR",
    description:
      "Welcome to the future of data storage. A new data storage blockchain protocol based on a novel proof of access consensus mechanism that creates truly permanent data storage for the first time. Now data is finally permanent, low-cost, and truly censorship free. Arweave has solved the millennia old problem of decentralised data availability. Arweave makes permanent data storage a reality for the very first time. As the $3 trillion data-storage industry is growing, the need for cheap, distributed, permanent data-storage on the blockchain has become an urgent necessity",
    slug: "arweave",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_arweave.png",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_cosmos.png",
    description:
      "An ecosystem of blockchains that can scale and interoperate with each other",
    name: "Cosmos",
    slug: "cosmos",
    ticker: "ATOM",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/a659f4f831616bd606f9aaab99d885d2944a8a509d155818ed83916fe0834bbd_1616690880636_AUDIO.png",
    description:
      "AUDIO is the native platform token of the Audius streaming protocol. AUDIO is staked for security, feature access and governance and earned by artists, fans and node operators who drive Audius.",
    name: "Audius",
    slug: "audius",
    ticker: "AUDIO",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_aurora-near.png",
    slug: "aurora-near",
    ticker: "AURORA",
    description:
      "Aurora is an EVM built on the NEAR Protocol, delivering a turn-key solution for developers to operate their apps on an Ethereum-compatible, high-throughput, scalable and future-safe platform, with low transaction costs for their users.",
  },
  {
    description:
      "Avalanche is a high throughput smart contract blockchain platform. Validators secure the network through a proof-of-stake consensus protocol. It is said to be fast, low cost, and environmental friendly. Mainnet was launched in September 21, 2020. Since then, the platform has grown to secure over 100+ individual projects, $1.4M+ of AVAX burned (reducing supply), 950+ individual block-producing validators, and over 500k+ community members around the globe. Decentralized finance (DeFi) applications can be found on Avalanche such as Pangolin, TraderJoe, and more.",
    ticker: "AVAX",
    slug: "avalanche",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_avalanche.png",
    name: "Avalanche",
  },
  {
    slug: "axie-infinity",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_axie-infinity.png",
    ticker: "AXS",
    description:
      "AXS is the governance token for the Axie Infinity game. Token holders will be able to shape and vote for the direction of the game universe. This is unlike traditional games where all decisions are made by the game developers. AXS holders will be able to stake their tokens to earn more AXS and even vote for governance proposals.",
    name: "Axie Infinity",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_balancer.png",
    ticker: "BAL",
    slug: "balancer",
    description:
      "Balancer is a non-custodial portfolio manager, liquidity provider, and price sensor\\r\\n\\r\\nThe Balancer Protocol Governance Token (BAL) are distributed to Liquidity Providers of Balancer. BALs are a key way of decentralizing the governance of the protocol such that it can remain resilient over time, protected from the failure of any single stakeholder.",
    name: "Balancer",
  },
  {
    name: "Basic Attention Token",
    slug: "basic-attention-token",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_basic-attention-token.png",
    ticker: "BAT",
    description:
      "The Basic Attention Token aims to fix digital advertising, which is broken, fraudulent and opaque. Basic Attention Token work by having advertisers pay BAT to website publishers for the attention of users. The BAT token is designed to correctly value and price user attention within the platform. The Basic Attention Token comprises various components, including attention measurement systems, analytics dashboards and machine learning algorithms. Integration of BAT into a given host application involves implementing BAT Ads, a system that matches and displays ads to users based on locally stored data.",
  },
  {
    description:
      " Bitcoin Cash is a hard fork of Bitcoin with a protocol upgrade to fix on-chain capacity. Bitcoin Cash intends to be a Bitcoin without Segregated Witness (SegWit) as soft fork, where upgrades of the protocol are done mainly through hard forks and without changing the original economic rules of the Bitcoin. The main upgrade is the increase in the block size limit from 1MB to 8MB. This effectively allows miners on the BCH chain to process up to 8 times more payments per second in comparison to Bitcoin. This makes for faster, cheaper transactions and a much smoother user experience.",
    name: "Bitcoin Cash",
    slug: "bitcoin-cash",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_bitcoin-cash.png",
    ticker: "BCH",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_bitdao.png",
    slug: "bitdao",
    name: "BitDAO",
    ticker: "BIT",
    description:
      "BitDAO is one of the world's largest DAOs (Decentralized Autonomous Organization). Our vision is open finance and a decentralized tokenized economy. ‌BitDAO is a protocol governed by BIT token holders. We welcome all individuals and communities to join us and contribute.",
  },
  {
    description:
      "Bluzelle is a decentralized storage network for the creator economy. Bluzelle delivers high security, un-matched availability, and is censorship resistant. Whether you are an artist, musician, scientist, publisher, or developer, Bluzelle protects the intellectual property of all creators. Bluzelle is data storage, file storage, oracles and specifically for NFTs and DeFi.",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_bluzelle.png",
    slug: "bluzelle",
    ticker: "BLZ",
    name: "Bluzelle",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_bnb.png",
    slug: "binance-coin",
    ticker: "BNB",
    name: "BNB",
    description:
      "Binance is a unique ecosystem of decentralized, blockchain-based networks. The company has grown to be the leading crypto exchange in a number of countries, and their side organizations are attracting significant interest as well. Since launching the BNB, the binance exchange has also benefited from increased investor interest in the coin. BNB went through a significant price increase at the beginning of 2021, which has put it on the map of enterprise investors.  Measures like BEP-95 have upgraded the already deflationary tokenomics to make BNB even more deflationary. Following the proposal, gas fees on Binance Smart Chain have become even lower, as the network burns a part of the fees to decentralize further. The proposal was modeled after Ethereum's famous EIP-1559.",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_bitcoin.png",
    description:
      "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.",
    slug: "bitcoin",
    ticker: "BTC",
  },
  {
    ticker: "BTT",
    slug: "bittorrent-new",
    description:
      "BitTorrent was initially conceived by Bram Cohen, a peer-to-peer protocol for users to transfer files around the world. The BitTorrent Token (BTT), a TRC-10 token is created on top of the TRON blockchain platform as a way to extend the capability of BitTorrent. The token is added to introduce some economics feature on BitTorrent for networking, bandwidth, and storage resources to be shared and traded.",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_blocktrade-token.png",
  },
  {
    name: "PancakeSwap",
    description:
      "PancakeSwap is an automated market maker (“AMM”) that allows two tokens to be exchanged on the Binance Smart Chain. It is fast, cheap, and allows anyone to participate.",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_pancakeswap.png",
    slug: "pancakeswap",
    ticker: "CAKE",
  },
  {
    description:
      "Celo is a platform that allows users to participate and earn rewards through network participation. Celo’s stability mechanism and token economics are designed in such a way that demand for cGLD directly increases as demand for Celo Dollars (cUSD) and other stable value assets increases. cGLD is a native cryptographic digital asset created at the mainnet release of the Celo Platform. cGLD has no relationship to physical gold. cGLD is a utility and governance asset required to participate on the Celo Platform.",
    slug: "celo",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_celo.png",
    name: "Celo",
    ticker: "CELO",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_chiliz.png",
    description:
      "Chiliz is a fintech platform for the sports industry to allow global fans to get closer to their favorite sports teams and clubs.",
    slug: "chiliz",
    ticker: "CHZ",
    name: "Chiliz",
  },
  {
    ticker: "CKB",
    slug: "nervos-network",
    name: "Nervos Network",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_nervos-network.png",
    description:
      "Nervos is a layered crypto-economy network. Nervos separates the infrastructure of a crypto-economy into two layers: a verification layer (layer 1) that serves as a trust root and smart custodian, and a generation layer (layer 2) for high-performance transactions and privacy protection. The Nervos Common Knowledge Base (CKB), a public permissionless blockchain and layer 1 of Nervos. CKB generates trust and extends this trust to upper layers, making Nervos a trust network. It's also the value store of the Nervos network, providing public, secure and censorship-resistant custody services for assets, identities and other common knowledge created in the network.",
  },
  {
    slug: "compound",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_compound.png",
    name: "Compound",
    description:
      "The Compound Governance Token is a governance token on the Compound Finance lending protocol, COMP allows the owner to delegate voting rights to the address of their choice; the owner’s wallet, another user, an application, or a DeFi expert. Anybody can participate in Compound governance by receiving delegation, without needing to own COMP.",
    ticker: "COMP",
  },
  {
    description:
      "Covalent leverages big-data technologies to create meaning from hundreds of billions of data points, delivering actionable insights to investors and allowing developers to allocate resources to higher-utility goals within their organization. Instead of painstakingly sourcing data from a small handful of chains, Covalent aggregates information from across dozens of sources including nodes, chains and data feeds. The Covalent API then sources end-users with individualized data by wallet, including current and historical investment performance across all types of digital assets.",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_covalent.png",
    ticker: "CQT",
    name: "Covalent",
    slug: "covalent",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_crypto-com-coin.png",
    description:
      " The Crypto.com Chain, the next generation decentralized mobile payment protocol, the most efficient and secure way to pay and be paid in crypto, anywhere, any crypto without fees. Crypto.com Chain will deliver on its vision by developing innovative technology components and processes (inc. scalable encryption algorithm to protect users’ privacy, utilizing trusted execution environments, sustainable price stability mechanisms, user protection via PoGSD) catered specifically to cryptocurrency payment, while leveraging proven blockchain technology structural design elements.",
    name: "Cronos",
    slug: "crypto-com-coin",
    ticker: "CRO",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_curve-dao-token.png",
    ticker: "CRV",
    name: "Curve [on Ethereum]",
    slug: "curve",
    description:
      "Similar to Uniswap, Curve Finance is an Automated Market Maker (AMM) based Decentralised Exchange (DEX). Unlike Uniswap, its main focus is only to swap between assets that are supposed to have the same value. This is useful in the DeFi ecosystem as there are plenty of wrapped tokens and synthetic tokens that aim to mimic the price of the real underlying asset. CRV is the governance token of the Curve platform.",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_casper.png",
    name: "Casper",
    ticker: "CSPR",
    description:
      "The Casper Network is the first live proof-of-stake blockchain built off the Casper CBC specification. Casper is designed to accelerate enterprise and developer adoption of blockchain technology today and evolve to meet user needs in the future.",
    slug: "casper",
  },
  {
    description:
      "Convex is a protocol that simplifies Curve boosting experience in order to maximize yields. Convex allows Curve liquidity providers to earn trading fees and claim boosted CRV without locking CRV themselves. Liquidity providers can receive boosted CRV and liquidity mining rewards with minimal effort. If you would like to stake CRV, Convex lets users receive trading fees as well as a share of boosted CRV received by liquidity providers. This allows for a better balance between liquidity providers and CRV stakers as well as better capital efficiency. Curve liquidity providers can deposit their LP tokens into Convex to maximize their CRV earnings with a more efficient boost. Curve DAO token stakers will be able to earn additional boosted CRV and CVX tokens through the protocol. ",
    name: "Convex Finance",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_convex-finance.png",
    slug: "convex-finance",
    ticker: "CVX",
  },
  {
    ticker: "DASH",
    slug: "dash",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_dash.png",
    name: "Dash",
    description:
      "Dash (DASH) is digital cash designed to offer financial freedom to everyone. Payments are instant, easy and secure, with near-zero fees. Built to support real life use cases, Dash is the leading decentralized payment solution. Users can purchase goods at thousands of merchants and trade it at major exchanges and brokers around the globe. ",
  },
  {
    description:
      "DeFiChain is a decentralized blockchain platform dedicated to enable fast, intelligent, and transparent decentralized financial services. Unlike most of the other DeFi projects that are built on the Ethereum network, DeFiChain is built on bitcoin (as a software fork), and is anchored to the bitcoin blockchain (via merkle root) every few minutes for maximum security. DeFiChain is designed to be non-Turing complete to reduce smart contract errors (extremely important for finance transactions) and its op codes only allow run decentralized finance dapps.",
    name: "DeFiChain",
    ticker: "DFI",
    slug: "defichain",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_defichain.png",
  },
  {
    name: "Dogecoin",
    slug: "dogecoin",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_dogecoin.png",
    ticker: "DOGE",
    description:
      'Dogecoin is a cryptocurrency based on the popular "Doge" Internet meme and features a Shiba Inu on its logo. Dogecoin is a Litecoin fork. Introduced as a "meme coin" on 6 December 2013, Dogecoin quickly developed its own online community and reached a capitalization of US$60 million in January 2014. Compared with other cryptocurrencies, Dogecoin had a fast initial coin production schedule: 100 billion coins were in circulation by mid-2015, with an additional 5.256 billion coins every year thereafter. As of 30 June 2015, the 100 billionth Dogecoin had been mined.',
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_polkadot-new.png",
    description:
      "Polkadot is a platform that allows diverse blockchains to transfer messages, including value, in a trust-free fashion; sharing their unique features while pooling their security. In brief, Polkadot is a scalable heterogeneous multi-chain technology. Polkadot is heterogeneous because it is entirely flexible and makes no assumption about the nature or structure of the chains in the network. ",
    ticker: "DOT",
    name: "Polkadot",
    slug: "polkadot-new",
  },
  {
    description:
      "MultiversX (formerly Elrond) is a technology ecosystem for the new internet. Its smart contracts execution platform is capable of 15,000 TPS, 5s latency and $0.001 tx cost, focused on fintech, DeFi and IoT. MultiversX money & DeFi app Maiar offers an intuitive first-time experience with blockchain, offering progressive security and a gamified approach to unlocking more useful features. The MultiversX Proof of Stake economic model has a limited supply; its token is named eGold to convey the notion of digital store of value to the next billion users.",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_elrond-egld.png",
    name: "Elrond",
    ticker: "EGLD",
    slug: "elrond-egld",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_enjin-coin.png",
    ticker: "ENJ",
    description:
      "Enjin Coin is a cryptocurrency for virtual goods created by Enjin. Enjin is the “largest gaming community platform online” with over 250,000 gaming communities and 18.7 million registered gamers. The Enjin team is designing the coin completely around gaming with the goal of it being the most usable cryptocurrency for the industry. The project includes the Enjin Coin as well as a suite of software development kits (SDKs) that developers can integrate into their games and communities. Bringing blockchain to gaming helps to reduce the high fees and fraud that’s prevalent in the transfer of virtual goods.",
    slug: "enjin-coin",
  },
  {
    ticker: "ENS",
    description:
      "The Ethereum Name Service (ENS) is a distributed, open, and extensible naming system based on the Ethereum blockchain. ENS’s job is to map human-readable names like ‘alice.eth’ to machine-readable identifiers such as Ethereum addresses, other cryptocurrency addresses, content hashes, and metadata. ENS also supports ‘reverse resolution’, making it possible to associate metadata such as canonical names or interface descriptions with Ethereum addresses.",
    slug: "ethereum-name-service",
    name: "Ethereum Name Service",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_ethereum-name-service.png",
  },
  {
    description:
      "The EOS Network is an open-source blockchain platform that prioritizes high performance, flexibility, security, and developer experience. As a third-generation blockchain platform powered by the EOS virtual machine, EOS has an extensible WebAssembly engine for deterministic execution of near fee-less transactions.  EOS is the market's most scalable, divisible, and programmable digital currency. EOS is a Delegated Proof of Stake (DPoS) network where stakeholders have the authority to select node operators. Due to the decentralized nature of the token distribution on EOS, power doesn't reside in the hands of block miners, but rather all parties involved in the EOS Network.",
    name: "EOS",
    slug: "eos",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_eos.png",
    ticker: "EOS",
  },
  {
    description: "Ethereum clone",
    slug: "ethereum-classic",
    name: "Ethereum Classic",
    ticker: "ETC",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_ethereum-classic.png",
  },
  {
    ticker: "ETH",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_ethereum.png",
    description:
      "Ethereum is a decentralized open-source blockchain system that features its own cryptocurrency, Ether. ETH works as a platform for numerous other cryptocurrencies, as well as for the execution of decentralized smart contracts. Ethereum’s own purported goal is to become a global platform for decentralized applications, allowing users from all over the world to write and run software that is resistant to censorship, downtime and fraud.",
    slug: "ethereum",
  },
  {
    name: "EthereumPoW",
    slug: "ethereum-pow",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_ethereum-pow.png",
    description:
      "This page refers to the Ethereum Proof of Work (ETHW or ETHPOW) which tracks the spot and derivative prices of IOU markets across a growing number of exchange as the chain forks away from the original Ethereum chain that has migrated to proof of stake.",
    ticker: "ETHW",
  },
  {
    name: "Evmos",
    ticker: "EVMOS",
    description:
      "Evmos is the one of the first Ethereum Virtual Machine-based blockchains in the Cosmos ecosystem and enables developers to launch apps that run smart contracts across any number of EVM and Cosmos-based blockchains. It makes that process as simple and seamless as possible by allowing developers to continue creating apps in Solidity and Vyper like they’re accustomed to in the Ethereum ecosystem. Evmos opens a new frontier for blockchain applications, expanding the functionality of the EVM by enabling cross-chain applications that tap the liquidity and user bases of multiple blockchain ecosystems to provide more unified experiences.",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_evmos.png",
    slug: "evmos",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_filecoin.png",
    slug: "file-coin",
    description:
      "The Filecoin network achieves staggering economies of scale by allowing anyone worldwide to participate as storage providers. It also makes storage resemble a commodity or utility by decoupling hard-drive space from additional services. On this robust global market the price of storage will be driven by supply and demand, not corporate pricing departments, and miners will compete on factors like reputation for reliability as well as price.",
    name: "Filecoin",
    ticker: "FIL",
  },
  {
    slug: "flowchain",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_flowchain.png",
    ticker: "FLC",
    name: "Flowchain",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_floki-inu.png",
    description: "Cross-chain community-driven token",
    name: "Floki Inu",
    slug: "floki-inu",
    ticker: "FLOKI",
  },
  {
    description:
      "Flow by Dapper Labs (The company which created CryptoKitties) is a blockchain network that aims to be fast, secure, and developer friendly. The idea for a new blockchain targeting games and social networks was conceived after Ethereum faced large scalability issues as seen with the high transaction fees during the CryptoKitties hype. The Flow team deduced shards and sidechains were not long term solutions for apps that strive for performance. Investors include large backers such as Andreessen Horowitz, Warner Music Group, Union Square Ventures, Digital Currency Group, and more.",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_flow.png",
    ticker: "FLOW",
    slug: "flow",
  },
  {
    slug: "flux",
    ticker: "FLUX",
    name: "FLUX",
    description:
      "FLUX functions as the native currency of the Datamine Ecosystem and is powered by Datamine (DAM) token. Every 15 seconds you generate a bit of USDc in form of FLUX tokens.",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_flux.png",
  },
  {
    name: "Frax",
    slug: "frax",
    ticker: "FRAX",
    description:
      "The Frax Protocol is the first fractional-algorithmic stablecoin system. Frax is open-source, permissionless, and entirely on-chain – currently implemented on Ethereum (with possible cross chain implementations in the future). The end goal of the Frax protocol is to provide a highly scalable, decentralized, algorithmic money in place of fixed-supply digital assets like BTC. Before Frax, stablecoins were divided into three different categories: fiat collateralized, overcollateralized with cryptocurrency, and algorithmic with no collateral. Frax is the first kind of decentralized stablecoin to classify itself as fractional-algorithmic ushering in the 4th and most unique category.",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_frax.png",
  },
  {
    name: "Fantom",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_fantom.png",
    ticker: "FTM",
    description:
      "FANTOM is a new DAG based Smart Contract platform that intends to solve the scalability issues of existing public distributed ledger technologies. The platform intends to distinguish itself from the traditional block ledger-based storage infrastructure by attempting to employ an improved version of existing DAG-based pro-tocols. The FANTOM platform adopts a new protocol known as the “Lachesis Protocol” to maintain consensus. This protocol is intended to be integrated into the Fantom OPERA Chain. The aim is to allow applications built on top of the FANTOM OPERA Chain to enjoy instant transactions and near zero transaction costs for all users. The mission of FANTOM is to provide compatibility between all transaction bodies around the world, and create an ecosystem which allows real-time transactions and data sharing with low cost.",
    slug: "fantom",
  },
  {
    ticker: "FTT",
    description:
      "FTT is FTX's exchange token. Holders get a fraction of exchange fees, a fraction of the liquidation insurance fund, and can use the token as collateral and to get tighter OTC spreads on FTX.",
    name: "FTX Token",
    slug: "ftx-token",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_ftx-token.png",
  },
  {
    description:
      "Gala Games aims to take the gaming industry in a different direction by giving players back control over their games. Gala Games mission is to make “blockchain games you’ll actually want to play.” The project wants to change the fact that players can spend hundreds of dollars on in-game assets, and countless hours spent playing the game, which could be taken away from them with the click of a button. It plans to reintroduce creative thinking into games by giving players control of the games and in-game assets with the help of blockchain technology.",
    slug: "gala",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_gala.png",
    name: "Gala",
    ticker: "GALA",
  },
  {
    slug: "graphlinq-protocol",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_graphlinq-protocol.png",
    description:
      "GLQ is the native token for the Graphlinq ecosystem built on top of Ethereum (ERC20). GLQ will be used to run a graph on the platform’s test net or main net to execute different processes over the blockchain to automate tasks, triggering events, and much more. GLQ will have more use cases as the ecosystem grows, as mentioned in Graphlinq’s Documentation.",
    ticker: "GLQ",
    name: "Graphlinq Protocol",
  },
  {
    name: "STEPN [on BNB]",
    description:
      "STEPN is a self-styled “Web3 lifestyle app” with GameFi elements on the Solana blockchain. It combines aspects of a play-to-earn game with a fitness app to create a new category coined “move-to-earn.” Users buy NFT sneakers, which they can use to earn in-game currency while walking, running, or jogging.  STEPN aims to revolutionize the market of fitness applications by incentivizing millions of users to follow a healthier lifestyle. The app solves several problems like “proof of movement” - proving that users really exercised - and a functioning GPS system. Moreover, STEPN incentivizes users financially and plans to introduce social rewards elements and successfully contributes to carbon neutrality.",
    slug: "bnb-green-metaverse-token",
    ticker: "GMT",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_green-metaverse-token.png",
  },
  {
    ticker: "GRT",
    name: "The Graph",
    slug: "the-graph",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_the-graph.png",
    description:
      "The Graph is an indexing protocol for querying data for networks like Ethereum and IPFS, powering many applications in both DeFi and the broader Web3 ecosystem. Anyone can build and publish open APIs, called subgraphs, that applications can query using GraphQL to retrieve blockchain data. There is a hosted service in production that makes it easy for developers to get started building on The Graph and the decentralized network will be launching later this year. The Graph currently supports indexing data from Ethereum, IPFS and POA, with more networks coming soon.",
  },
  {
    slug: "gatechain-token",
    name: "GateToken",
    description: "Part of Gate.io ecosystem",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_gatetoken.png",
    ticker: "GT",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_hedera.png",
    name: "Hedera",
    description:
      "Hedera is a decentralized public network where developers can build secure, fair applications with near real-time consensus. The platform is owned and governed by a council of global innovators including Avery Dennison, Boeing, Deutsche Telekom, DLA Piper, FIS (WorldPay), Google, IBM, LG Electronics, Magalu, Nomura, Swirlds, Tata Communications, University College London (UCL), Wipro, and Zain Group. The Hedera Consensus Service (HCS) acts as a trust layer for any application or permissioned network and allows for the creation of an immutable and verifiable log of messages.",
    slug: "hedera-hashgraph",
    ticker: "HBAR",
  },
  {
    slug: "handshake",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_handshake.png",
    name: "Handshake",
    description:
      "Handshake is a decentralized, permissionless naming protocol where every peer is validating and in charge of managing the root DNS naming zone with the goal of creating an alternative to existing Certificate Authorities and naming systems. Names on the internet (top level domains, social networking handles, etc.) ultimately rely upon centralized actors with full control over a system which are relied upon to be honest, as they are vulnerable to hacking, censorship, and corruption. Handshake aims to experiment with new ways the internet can be more secure, resilient, and socially useful with a peer-to-peer system validated by the network's participants.",
    ticker: "HNS",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_helium.png",
    name: "Helium ",
    ticker: "HNT",
    description:
      " Helium is a decentralized machine network powered by a physical blockchain. The network is created by gateways who also double as miners on our network. These gateway operators can earn tokens based on coverage they provide as well as transaction fees gained from machines connecting to their gateway. Helium is a new cryptocurrency. Hotspots earn for providing and validating wireless coverage and when devices on the network connect to the internet through Hospots. Helium is mined and distributed to Hotspot Owners, Helium Inc, and investors. There is no pre-mine of Helium, and every month approximately 5,000,000 new Helium are minted. ",
    slug: "helium",
  },
  {
    slug: "holo",
    name: "Holo",
    description:
      "Holochain enables a distributed web with user autonomy built directly into its architecture and protocols. Data is about remembering our lived and shared experiences. Distributing the storage and processing of that data can change how we coordinate and interact. With digital integration under user control, Holochain liberates our online lives from corporate control over our choices and information. Holochain is an energy efficient post-blockchain ledger system and decentralized application platform that uses peer-to-peer networking for processing agent centric agreement and consensus systems between users. Holochain enables any device to have its own chain based ledger system. ",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_holo.png",
    ticker: "HOT",
  },
  {
    description:
      "Huobi, the third-largest cryptocurrency exchange in the world, recently announced and launched a new currency. The Huobi Token (HT) rewards exchange users for their loyalty with lowered transaction fees while also carrying its own value in tradable pairs against popular currencies. The hope was to bring greater value to Huobi’s millions of users, mostly located in Asian countries. The launch of the Huobi Token follows in the footsteps of other loyalty-building tokens that other exchanges have launched.",
    ticker: "HT",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_huobi-token.png",
    name: "Huobi Token",
    slug: "huobi-token",
  },
  {
    slug: "internet-computer",
    name: "Internet Computer",
    description:
      "Internet Computer (IC) is the world’s first blockchain that is capable of running at web speed at unrestrictive capacities. Built by the DFINITY Foundation, IC aims to recreate the web by supporting smart contract development at scale and changing the way people can interact using web services. Internet Computer aims to extend the public internet, so that it can be the world’s computing platform, in a decentralized manner. Internet Computer sets to revolutionalize the design of the crypto economy, with an aim to overhaul traditional software services.",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_internet-computer.png",
    ticker: "ICP",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_immutable-x.png",
    name: "Immutable X",
    description:
      "Immutable X positions itself as the first layer-two scaling solution for NFTs on Ethereum. According to Immutable X, its blockchain does away with Ethereum’s limitations like low scalability, a poor user experience, illiquidity, and a slow developer experience. Instead, users benefit from instant trading and massive scalability while enjoying zero gas fees for minting and trading NFTs without compromising user or asset security. To achieve that, Immutable X is built with STARK zk-rollups, a technology that Vitalik Buterin considers Ethereum to be “all-in on.”",
    slug: "immutable-x",
    ticker: "IMX",
  },
  {
    description:
      "INJ is the native utility token of Injective. INJ is a scarce asset that is used for governance, token burn auctions and staking on the PoS network. The burn auctions on Injective are especially unique since 60% of all fees collected from dApps are auctioned off every week via a buy back and burn mechanism. This in turn allows the supply of INJ to dramatically decrease over time. The INJ burn auction is unique in that it helps accrue value for the entire Injective ecosystem. Currently, Injective has the highest token burn ratio in the industry.",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_injective-protocol.png",
    ticker: "INJ",
    name: "Injective",
    slug: "injective-protocol",
  },
  {
    name: "IoTeX",
    ticker: "IOTX",
    slug: "iotex",
    description:
      "IoTeX is the auto-scalable and privacy-centric blockchain infrastructure for the Internet of Things (IoT). IoTeX’s global team is comprised of Ph.Ds in Cryptography, Distributed Systems, and Machine Learning, top tier engineers, and experienced ecosystem builders. IoTeX is developing several in-house innovations to push the frontier of blockchain 3.0, including a blockchains-in-blockchain architecture for heterogeneous computing, lightning fast Roll-DPoS consensus mechanism, and lightweight privacy-preserving techniques. IoTeX is bringing autonomous device coordination to the masses by “connecting the physical world, block by block.",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_iotex.png",
  },
  {
    ticker: "KAVA",
    name: "Kava",
    slug: "kava",
    description:
      "Kava is a cross-chain DeFi Hub for decentralized financial services and applications. The Kava DeFi Hub operates like a decentralized bank for digital assets connecting users with products like stablecoins, loans, and interest-bearing accounts so that they can do more and earn more with their digital assets.",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_kava.png",
  },
  {
    slug: "kucoin-shares",
    name: "KuCoin Token",
    ticker: "KCS",
    description:
      "KuCoin is an international cryptocurrency exchange based out of Seychelle that currently supports the trading of 250 digital assets. What’s unique about KuCoin is that they share 50% of their overall trading fee revenue with users holding their exchange-based token. KuCoin also offers relatively low tradings fees and incentives for holding (or trading) its native cryptocurrency.",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_kucoin-shares.png",
  },
  {
    ticker: "KDA",
    description:
      "Kadena is launching one of the world’s first true scalable blockchains ready for applications. Kadena’s public blockchain is a braided, high-throughput Proof of Work system that runs Chainweb, a protocol that delivers security and throughput. The Kadena network will unite public applications, private blockchains, and other interoperable chains in one place, driving traffic to the high-bandwidth computer at the heart of the Kadena public chain.",
    slug: "kadena",
    name: "Kadena",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_kadena.png",
  },
  {
    name: "Klaytn",
    ticker: "KLAY",
    description:
      "a Klaytn is a public blockchain focused on the metaverse, gamefi, and the creator economy. Officially launched in June 2019, it is the dominant blockchain platform in South Korea and is now undergoing global business expansion from its international base in Singapore. These business expansion activities are supported by the US$500m Klaytn Growth Fund, which aims to grow the ecosystem of companies built on Klaytn. The fund is managed and disbursed by Klaytn Foundation, a Singapore-based non-profit organization established in August 2021.",
    slug: "klaytn",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_klaytn.png",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_kusama.png",
    slug: "kusama",
    description:
      "Kusama is a public blockchain network that is running the exact same codebase as Polkadot. It is aimed to be a canary build for the Polkadot network which is an experimental and development environment for new features that will eventually be deployed to Polkadot. Because of the experimental nature of Kusama, the developmental speed is much faster and it has seen significant traction since launched in 2019. Kusama is an early, highly experimental version of Polkadot presenting real economic conditions. The community will own the network – there will be no central kill switch. Kusama will exist as long as its community maintains it and we envision it will cater to new, early functionality and projects preparing to develop and deploy on Polkadot.",
    ticker: "KSM",
    name: "Kusama",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_leocoin.png",
    slug: "leocoin",
    ticker: "LC4",
    name: "LEOcoin",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_lido-dao.png",
    name: "Lido DAO Token",
    ticker: "LDO",
    description:
      "Lido is a liquid staking solution for Ethereum. Lido lets users stake their ETH - with no minimum deposits or maintaining of infrastructure - whilst participating in on-chain activities, e.g. lending, to compound returns.",
    slug: "lido-dao",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_unus-sed-leo.png",
    ticker: "LEO",
    slug: "unus-sed-leo",
    description:
      "UNUS SED LEO is a utility token that’s used across the iFinex ecosystem. The unusual name is based on a Latin citation from one of Aesop’s fables.  The cryptocurrency allows Bitfinex users to save money on trading fees. The extent of the discount depends on how much LEO that the customer has in their account — and the savings on offer are spread across three tiers. There are fluctuations depending on whether a trading pair is crypto-to-crypto, or crypto-to stablecoin.",
  },
  {
    description:
      "Chainlink is a framework for building Decentralized Oracle Networks (DONs) that bring real-world data onto blockchain networks, enabling the creation of hybrid smart contracts. These DONs provide decentralized services such as Price Feeds, Proof of Reserve, Verifiable Randomness, Keepers, and the ability to connect to any web API. It aims to ensure that the external information (pricing, weather data, event outcomes, etc.) and off-chain computations (randomness, transaction automation, fair ordering, etc.) fed to on-chain smart contracts are reliable and tamper-proof.",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_chainlink.png",
    name: "ChainLink [on Ethereum]",
    slug: "chainlink",
    ticker: "LINK",
  },
  {
    description:
      " Litentry is a network that supports DID aggregation protocol and a decentralized mobile application. Litentry Network is built on top of the Substrate framework with the objective of enabling DID aggregation, verification, and credit calculation. It aims to simplify the process of resolving agnostic DID mechanisms by integrating DID standards into a modularized identity service. The Litentry mobile application serves as a secure vehicle for users to collect their decentralized identities and manage them in one place. LIT token holders are also able to participate in on-chain governance in an efficient and secure manner.",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_litentry.png",
    name: "Litentry",
    slug: "litentry",
    ticker: "LIT",
  },
  {
    ticker: "LRC",
    name: "Loopring",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_loopring.png",
    description:
      "Loopring is a Decentralized Exchange (DEX) built on an Ethereum Layer-2 (L2) solution called zkRollup. It has both Automated Market Maker (AMM)-based and orderbook-based exchanges. zkRollup is an Ethereum L2 scaling solution that migrates computations off the blockchain. Loopring protocol only uses the underlying Ethereum blockchain as a data layer and a verification layer. As a result, Loopring's throughput is as high as 2,025 trades per second compared to Ethereum’s current throughput of 15 transactions per second. The result is that the cost per trade settlement is as small as $0.00015.",
    slug: "loopring",
  },
  {
    description:
      "Litecoin is a peer-to-peer cryptocurrency created by Charlie Lee. It was created based on the Bitcoin protocol but differs in terms of the hashing algorithm used. Litecoin uses the memory intensive Scrypt proof of work mining algorithm. Scrypt allows consumer-grade hardware such as GPU to mine those coins.",
    name: "Litecoin",
    slug: "litecoin",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_litecoin.png",
    ticker: "LTC",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_decentraland.png",
    description:
      "Decentraland is an Ethereum-powered virtual reality platform. In this virtual world, you purchase plots of land that you can later traverse, build upon, and monetize. There’s no limit to what you can do. It’s the first digital platform that’s completely owned by its users. Similar to games like Skyrim and Fallout, Decentraland is an all-immersive virtual universe. However, instead of playing on a 2-dimensional screen, you participate in a 3-dimensional world.",
    slug: "decentraland",
    ticker: "MANA",
  },
  {
    ticker: "MATIC",
    slug: "matic-network",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_matic-network.png",
    description:
      "Polygon (Previously Matic Network) is the first well-structured, easy-to-use platform for Ethereum scaling and infrastructure development. Its core component is Polygon SDK, a modular, flexible framework that supports building multiple types of applications. Using Polygon, one can create Optimistic Rollup chains, ZK Rollup chains, stand alone chains or any other kind of infra required by the developer. Polygon effectively transforms Ethereum into a full-fledged multi-chain system (aka Internet of Blockchains). This multi-chain system is akin to other ones such as Polkadot, Cosmos, Avalanche etc with the advantages of Ethereum’s security, vibrant ecosystem and openness.",
  },
  {
    name: "MOBOX",
    ticker: "MBOX",
    slug: "mobox",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_mobox.png",
    description:
      "MOBOX is a gaming platform & metaverse creator that combines automated optimized DeFi yield farming and gaming NFTs to create a GameFi metaverse — the MOMOverse , is a cross platform metaverse that can be enjoyed on all devices no matter where you are. Whether it is creating content or enjoying others’ creations, the MOMOverse rewards players, developers, and collectors for their engagement and enjoyment.",
  },
  {
    ticker: "MINA",
    name: "Mina",
    slug: "mina",
    description:
      "The world's lightest blockchain, powered by participants. Mina is building a privacy-preserving gateway between the real world and crypto — and the infrastructure for the secure, democratic future we all deserve.",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_mina.png",
  },
  {
    description:
      "IOTA is a distributed ledger for the Internet of Things. The first ledger with microtransactions without fees as well as secure data transfer. Quantum proof. IOTA is a ground breaking new open-source distributed ledger that does not use a blockchain. Its innovative new quantum-proof protocol, known as the Tangle, gives rise to unique new features like zero fees, infinite scalability, fast transactions, secure data transfer and many others. IOTA is initially focused on serving as the backbone of the Internet-of-Things (IoT)",
    slug: "iota",
    ticker: "MIOTA",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_iota.png",
    name: "IOTA",
  },
  {
    ticker: "MKR",
    slug: "maker",
    description:
      "MKR is a cryptocurrency depicted as a smart contract platform and works alongside the Dai coin and aims to act as a hedge currency that provides traders with a stable alternative to the majority of coins currently available on the market. Maker offers a transparent stablecoin system that is fully inspectable on the Ethereum blockchain.",
    name: "Maker",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_maker.png",
  },
  {
    slug: "machine-xchange-coin",
    ticker: "MXC",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_machine-xchange-coin.png",
    description:
      " The MXC vision is to introduce a systematic process to both simplify and increase IoT data transactions. The decentralized infrastructure upon which MXC’s system is based is the future of Low Power Wide Access Network (LPWAN) and the Machine eXchange Protocol (MXProtocol). Utilizing this solid device network foundation, MXC is introducing an extraordinarily unique coin offering, Machine eXchange Coin (MXC), which allows for increased data transactions and an idiosyncratic data flow monetization within the mammoth data market. ",
  },
  {
    ticker: "NEAR",
    description:
      "NEAR Protocol is a layer-one blockchain that was designed as a community-run cloud computing platform and that eliminates some of the limitations that have been bogging competing blockchains, such as low transaction speeds, low throughput and poor interoperability. This provides the ideal environment for DApps and creates a developer and user-friendly platform. For instance, NEAR uses human-readable account names, unlike the cryptographic wallet addresses common to Ethereum. NEAR also introduces unique solutions to scaling problems and has its own consensus mechanism called “Doomslug.”",
    name: "NEAR Protocol",
    slug: "near-protocol",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_near-protocol.png",
  },
  {
    description:
      " NEO is a next generation smart economy platform (formerly Antshares) and China's first open source blockchain that was founded in 2014, is often known as theEthereum of China”. NEO uses a smart economy approach to implement its distributed network concept. Its main objective is to digitize assets using the decentralized network of blockchain technology and digital identity. Neo’s main aim is to be the distributed network for “smart economy”.  ",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_neo.png",
    slug: "neo",
    ticker: "NEO",
    name: "NEO",
  },
  {
    name: "Nexo",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_nexo.png",
    description:
      "The NEXO Token is an asset-backed token and is backed by the underlying assets of Nexo’s loan portfolio. NEXO Tokens Holders will get 30% of the company’s profits. NEXO Tokens offer additional utility features such as discounted interest rates on the Nexo Instant Crypto-backed Loans and are also accepted as collateral on the Nexo Platform.",
    ticker: "NEXO",
    slug: "nexo",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_ocean-protocol.png",
    description:
      "Ocean Protocol is an ecosystem for sharing data and associated services. It provides a tokenized service layer that exposes data, storage, compute and algorithms for consumption with a set of deterministic proofs on availability and integrity that serve as verifiable service agreements. There is staking on services to signal quality, reputation and ward against Sybil Attacks. Ocean helps to unlock data, particularly for AI. It is designed for scale and uses blockchain technology that allows data to be shared and sold in a safe, secure and transparent manner.",
    slug: "ocean-protocol",
    name: "Ocean Protocol",
    ticker: "OCEAN",
  },
  {
    description:
      "   OKEx, the 2nd most popular cryptocurrency exchange by trading volume, launched its platform token ‘OKB‘ today with 10 trading pairs. On its official support page, OKEx describes OKB is a global utility token issued by the OK Blockchain Foundation. There will be one billion OKB tokens (1,000,000,000) available with a distribution model that allocates 60% of the supply to OKEx customers for marketing campaigns.",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_okb.png",
    name: "OKB",
    slug: "okb",
    ticker: "OKB",
  },
  {
    name: "Harmony",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_harmony.png",
    ticker: "ONE",
    description:
      "Harmony’s open, decentralized network is enabled through the use of the native protocol token - Harmony ONE. The token incentivizes and rewards a variety of participants including developers, validators/stakers, investors, and community members who develop, secure and govern the network. Harmony’s scalable, high-throughput protocol is powered by a native token which is used for various forms of payment and participation in the protocol (staking, transaction fees, voting & governance).",
    slug: "harmony",
  },
  {
    slug: "ontology",
    description:
      "Ontology is a new high-performance public blockchain project & a distributed trust collaboration platform.It provides new high-performance public blockchains that include a series of complete distributed ledgers and smart contract systems. Essentially, Ontology was created as a way for businesses of all sizes to install blockchain technology within their company, without having to completely change all of their current systems. The purpose of the Ontology framework is that it is not intended to operate as a single blockchain. Instead, the technology will allow businesses to make full use of both a private and public blockchain. Each and every data transaction is confirmed in a decentralized environment, meaning that no single person or authority can take control of the network.",
    name: "Ontology",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_ontology.png",
    ticker: "ONT",
  },
  {
    name: "Optimism",
    slug: "o-optimism",
    description:
      "OP is the token for the Optimism Collective that governs the Optimism L2 blockchain. The Optimism Collective is a large-scale experiment in digital democratic governance, built to drive rapid and sustainable growth of a decentralized ecosystem, and stewarded by the newly formed Optimism Foundation. OP governs upgrades to the protocol and network parameters, and creates an ongoing system of incentives for projects and users in the Optimism ecosystem. 5.4% of the total token supply will be distributed to projects on Optimism over the next six months via governance. If you're building something in the Ethereum ecosystem, you can consider applying for the grant.",
    ticker: "OP",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_optimism-ethereum.png",
  },
  {
    name: "Osmosis",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_osmosis.png",
    ticker: "OSMO",
    description:
      "Osmosis (OSMO) is an automated market maker protocol (AMM) for the ATOM ecosystem. Osmosis was inspired by Balancer and Uniswap and wants to provide tools that go beyond traditional token swaps and offer users DeFi functionality for a cross-chain world. For example, developers can build customized AMMs with sovereign liquidity pools and users can launch liquidity pools with unique parameters like bonding curves and multi-weighted asset pools. That means a liquidity pool does not always have to follow a 50:50 distribution between its assets but can be customized according to the wishes of the party setting up the pool.",
    slug: "osmosis",
  },
  {
    ticker: "PAXG",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_pax-gold.png",
    name: "PAX Gold",
    slug: "pax-gold",
    description:
      " PAX Gold (PAXG) is an asset-backed token where one token should represent one fine troy ounce of a London Good Delivery gold bar, stored in professional vault facilities. Anyone who owns PAXG has ownership rights to that gold under the custody of Paxos Trust Company. Since PAXG represents physical gold, its value is tied directly to the real-time market value of that physical gold. PAXG gives customers the benefits of actual physical ownership of specific gold bars with the speed and mobility of a digital asset. ",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_parsiq.png",
    slug: "parsiq",
    name: "PARSIQ",
    ticker: "PRQ",
    description:
      "PARSIQ describes itself as a next-generation platform for monitoring and intelligence — offering analytics tools for blockchain technology across a plethora of industries. This enables users to track network activity in real time, unlock new use cases for their application and create instant notifications. Smart Triggers can be used to react to events of interest on multiple networks. PRQ’s token contract was rolled out on Ethereum in 2019.",
  },
  {
    slug: "epns",
    description:
      "The Push Protocol, previously Ethereum Push Notification Service or EPNS, is the communication protocol of web3. Push protocol enables cross-chain notifications and messaging for dapps, wallets, and services tied to wallet addresses in an open, gasless, and platform agnostic fashion. The open communication layer allows any crypto wallet / frontend to tap into the network and get the communication across.",
    name: "Ethereum Push Notification Service",
    ticker: "PUSH",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_epns.png",
  },
  {
    name: "Quant",
    description:
      " London-based Quant Network is set to revolutionise blockchain technology with the development of their blockchain operating system Overledger. The experienced team are determined to fulfill the original vision of the internet by creating an open trusted network for people, machines, and data to operate securely and safely. Overledger -the first interoperable blockchain operating system that facilitates internet-scale development of decentralised, multi-chain applications. Overledger has the ability to unlock and distribute value and applications across current and future blockchains. It is an agnostic platform that connects the world's networks to blockchains and ensures you're not limited to any single vendor or technology. Overledger is the only platform that facilitates the development of internet-scales development of decentralised, multi-chain applications.",
    slug: "quant",
    ticker: "QNT",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_quant.png",
  },
  {
    ticker: "RARI",
    description:
      "Rarible is a creator-centric NFT marketplace and issuance platform that utilizes the RARI token to empower users who actively interact with the protocol.  Users on the Rarible platform can easily create non-fungible tokens (NFTs) for unique digital items like artworks, game items and more. The platform offers users a fully-featured marketplace that is filtered and sorted using different categories to create a smooth and easy user experience.  Anyone can create and post NFTs on the Rarible marketplace. The RARI token is a fundamental pillar of the platform as it is used to reward active users and for participating in the governance of the protocol.",
    name: "Rarible",
    slug: "rarible",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_rarible.png",
  },
  {
    description:
      "RenderToken (RNDR) is a distributed GPU rendering network built on top of the Ethereum blockchain, aiming to connect artists and studios in need of GPU compute power with mining partners willing to rent their GPU capabilities out.",
    slug: "render-token",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_render-token.png",
    ticker: "RNDR",
    name: "Render Token",
  },
  {
    slug: "oasis-network",
    ticker: "ROSE",
    name: "Oasis Network",
    description:
      "Oasis is the leading privacy-enabled and scalable layer-1 blockchain network. It combines high throughput and low gas fees with secure architecture to provide a next-generation foundation for Web3 and will power DeFi, GameFi, NFTs, Metaverse, Data tokenization and Data DAOs.",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_oasis-network.png",
  },
  {
    ticker: "RUNE",
    name: "THORChain",
    slug: "thorchain",
    description:
      "THORChain is building a chain-agnostic bridging protocol that will allow trustless and secure value-transfer connections with most other chains (such as Bitcoin, Ethereum, Monero and all of Binance Chain). Users will be able to instantly swap any asset at fair market prices and deep liquidity. Token holders will be able to stake any asset and earn on liquidity fees. Projects will be able to access manipulation resistant price feeds and accept payments in any currencies, no matter the type or liquidity.",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_thorchain.png",
  },
  {
    description:
      "Ravencoin is a digital peer-to-peer (P2P) network that aims to implement a use case specific blockchain, designed to efficiently handle one specific function: the transfer of assets from one party to another. Built on a fork of the Bitcoin code, Ravencoin was announced on Oct. 31, 2017 and released binaries for mining on Jan. 3, 2018 with what is called a fair launch: no premine, ICO or masternodes. It was named in reference to a TV show Game of Thrones.",
    slug: "ravencoin",
    name: "Ravencoin",
    ticker: "RVN",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_ravencoin.png",
  },
  {
    name: "The Sandbox",
    description:
      "The Sandbox is a blockchain-based virtual world allowing users to create, build, buy and sell digital assets in the form of a game. By combining the powers of decentralized autonomous organizations (DAO) and non-fungible tokens (NFTs), the Sandbox creates a decentralized platform for a thriving gaming community.",
    slug: "the-sandbox",
    ticker: "SAND",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_the-sandbox.png",
  },
  {
    slug: "siacoin",
    name: "Siacoin",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_siacoin.png",
    description:
      'Siacoin (SC) is the native utility token of Sia, a blockchain-based distributed, decentralized cloud storage platform. Sia acts as a secure, trustless marketplace for cloud storage in which users can lease access to their unused storage space. Agreements and transactions are enforced with smart contracts, and Siacoin is the medium of exchange for paying for storage on the network. The main goal of the project is to become the "backbone storage layer of the internet."',
    ticker: "SC",
  },
  {
    description:
      " Shiba Inu (SHIB) is a meme token which began as a fun currency and has now transformed into a decentralized ecosystem. During the initial launch, 50% of the supply was allocated into Vitalik Buterin's ethereum wallet. As a result of that, Vitalik proceeded to donate 10% of his SHIB holdings to a COVID-19 relief effort in India and the remaining 40% is burnt forever. The Shiba Inu team launched a decentralized exchange called Shibaswap with 2 new tokens, LEASH and BONE. LEASH is a scarce supply token that is used to offer incentives on Shibaswap. BONE is the governance token for holders to vote on proposals on Doggy DAO",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_shiba-inu.png",
    ticker: "SHIB",
    name: "SHIBA INU",
    slug: "shiba-inu",
  },
  {
    slug: "synthetix-network-token",
    description:
      "Synthetix is building a decentralized liquidity provisioning protocol that any protocol can tap into for various purposes. Its deep liquidity and low fees serve as a backend for many exciting protocols on both Optimism and Ethereum. Many user-facing protocols in the Synthetix ecosystem, such as Kwenta (Spot and Futures), Lyra (Options), Polynomial (Automated Options), and 1inch & Curve (Atomic Swaps), tap into Synthetix liquidity to power their protocols. Synthetix is built on Optimism and Ethereum mainnet. The Synthetix Network is collateralized by SNX, ETH, and LUSD, enabling the issuance of synthetic assets (Synths). Synths track and provide returns on the underlying asset without requiring one to directly hold the asset. The platform aims to broaden the cryptocurrency space by introducing non-blockchain assets, providing access to a more robust financial market.",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_synthetix-network-token.png",
    ticker: "SNX",
    name: "Synthetix [on Ethereum]",
  },
  {
    slug: "solana",
    name: "Solana",
    ticker: "SOL",
    description:
      "Solana crypto is a high throughput blockchain based on the Proof of History (PoH) and Proof of Stake (PoS) consensus. Built by a team of networking engineers, Solana aims to become the blockchain infrastucture for modern internet applications.",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_solana.png",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_serum.png",
    ticker: "SRM",
    description:
      "Serum is a decentralized exchange (DEX) and ecosystem that brings unprecedented speed and low transaction costs to decentralized finance (DeFi). (DeFi).  Serum is the only high-performant DEX designed around a fully on-chain central limit order book and matching engine. Ecosystem partners can compose with Serum’s on-chain orderbook to share liquidity and power their trading features for institutional and retail users.",
    name: "Serum",
    slug: "serum",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_blockstack.png",
    slug: "blockstack",
    description:
      "Stacks brings Apps and Smart Contracts to Bitcoin. Apps built on Stacks inherit all of Bitcoin’s powers. They run their logic on the blockchain with smart contracts, are controlled by code instead of companies, and are accessible to anyone. This enables decentralized apps to do things that regular apps can’t.",
    ticker: "STX",
    name: "Stacks",
  },
  {
    slug: "sushi",
    description:
      " Sushi is a DeFi protocol that is completely community-driven, serving up delicious interest for your held crypto assets. On Sushi, you can take advantage of passive-income providing DeFi tools such as liquidity providing, yield farming and staking. Furthermore, due to the decentralized nature of being an AMM (Automated Market Maker), Sushi has fewer hurdles to execute your cryptocurrency trades and all fees are paid to the users who provided liquidity, just as it should be!",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_sushi.png",
    ticker: "SUSHI",
  },
  {
    ticker: "THETA",
    description:
      "Theta network is a decentralized video streaming network that is powered by blockchain technology. Theta allows users to watch video content and get rewarded with tokens as they share their internet bandwidth and computing resources on a peer-to-peer (P2P) basis. Theta runs on a modified proof-of-stake consensus mechanism as it has a unique multi-Byzantine Fault Tolerance (BFT) which combines a committee of 20-30 Validator nodes with a second later of thousands of Guardian nodes. This acts to speed up approvals and is faster than traditional proof-of-work networks. Theta’s multi-BFT design achieves a healthy balance between consistency, speed, and decentralization.",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_theta.png",
    name: "Theta Network",
    slug: "theta",
  },
  {
    name: "Telos",
    description:
      " Telos has been driving innovation since 2018 and is home to over 100 distinct applications (dApps) attracting well-known companies including Taikai, Qudo, Qubicles, Appics, Wordproof, Seeds, Zeptagram, and NewLife.  These applications enjoy the robust on-chain services that Telos provides for voting, sentiment, decentralized file storage, location and much more. TLOS is the name of the token that reflects ownership in the Telos network. A TLOS token is used on-chain for staking CPU, RAM, and REX lending resources that power the utility of this powerful network.",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_telos.png",
    ticker: "TLOS",
    slug: "telos",
  },
  {
    name: "Toncoin",
    slug: "toncoin",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_toncoin.png",
    ticker: "TON",
    description:
      "The Open Network is a community-driven blockchain with a flexible architecture and focus on serving a typical consumer. TON stands out due to the fast processing/validation of transactions per second (TPS). In September 2021, the network processed a then-world record of 55,000 TPS during a contest, although the current TPS could be in the hundreds of thousands or even millions. This feature allows the project to grow rapidly while avoiding performance losses. At the same time, the project does not harm the environment.",
  },
  {
    slug: "tron",
    description:
      " Tron's mission is to build a truly decentralized internet and aims to be the largest blockchain-based operating system in the world, known as the TRON protocol. The TRON protocol will offer high scalability, high availability, and high throughput computing to serve decentralized applications via smart contracts. The Ethereum EVM-based smart contracts will be compatible and deployable on the TRON network, thus eliminating the need for Solidity developers to rewrite their applications.",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_tron.png",
    ticker: "TRX",
    name: "TRON",
  },
  {
    description:
      "Trust Wallet Token, or TWT, is a simple BEP-20 utility token that provides a range of benefits and incentives to Trust Wallet users. Trust Wallet itself is a mobile cryptocurrency wallet that supports dozens of popular native assets, in addition to popular tokens on the Ethereum, Binance and TRON blockchains.",
    name: "Trust Wallet Token",
    slug: "bnb-trust-wallet-token",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_trust-wallet-token.png",
    ticker: "TWT",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_uniswap.png",
    ticker: "UNI",
    description:
      "UNI is the governance token for Uniswap, an Automated Market Marker DEX on the Ethereum blockchain. The UNI token allows token holders to participate in the governance of the protocol. Key decisions such as usage of the treasury or future upgrades can be decided through a governance vote.",
    slug: "uniswap",
  },
  {
    description:
      "Launched in 2015 as a private consortium network, the VeChain Foundation went on to develop the VeChainThor public blockchain, a fully programmable EVM compatible L1 smart contract platform that is adaptable to wide-ranging real-world needs. Supply chain, sustainability, carbon emissions, SDGs, De-Fi, NFTs and more, VeChainThor seamlessly handles it all.",
    ticker: "VET",
    name: "VeChain",
    slug: "vechain",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_vechain.png",
  },
  {
    description:
      "Waves is an open blockchain protocol and development toolset for Web 3.0 applications and decentralized solutions, aiming to raise security, reliability and speed of IT systems. It enables anyone to build their apps, fostering mass adoption of blockchain.",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_waves.png",
    slug: "waves",
    ticker: "WAVES",
    name: "Waves",
  },
  {
    ticker: "WAXP",
    description:
      "WAX is a purpose-built blockchain and protocol token designed to make e-commerce transactions faster, easier, and safer for all participants. The WAX Blockchain uses Delegated Proof of Stake (DPoS) as its consensus mechanism and is fully backward compatible with EOS. The custom features and incentive mechanisms developed by WAX are designed to optimize the blockchain's usability in e-commerce, and encourage voting on guilds and proposals. WAX has created a suite of blockchain-based tools upon which dApps, marketplaces, and native non-fungible tokens (NFTs) are built.",
    name: "WAX",
    slug: "wax",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_wax.png",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_chain.png",
    slug: "chain",
    name: "Chain",
    description:
      "Chain is a cloud blockchain infrastructure that enables organizations to build better financial services from the ground up. Chain has launched Chain Cloud, a decentralized infrastructure protocol, and Sequence, its ledger as a service product. Clients can receive discounts and pay for commercial fees with Chain Tokens (XCN) as well as participate in community protocol governance and access to premium features.",
    ticker: "XCN",
  },
  {
    name: "eCash",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_ecash.png",
    ticker: "XEC",
    description:
      "Derived from one of the most trusted names in the cryptocurrency space, what was once known as BCHA is now eCash. eCash is the natural continuation of the Bitcoin Cash project. Realizing the vision of the legendary Milton Friedman, eCash follows through on key promises such as the innovative Avalanche consensus layer while also introducing concepts never before seen in a Bitcoin project such as staking, fork-free network upgrades, and subchains.",
    slug: "ecash",
  },
  {
    name: "NEM",
    slug: "nem",
    description:
      "NEM was a blockchain platform launched in March of 2015. At the time it was one of the pioneers of the industry and sought to improve on the imperfections found on other chains at the time. It was one of the first non-turing complete chains to feature user-defined tokens (called mosaics), namespaces, multisignature accounts, and a P2P reputation system based on EigenTrust++. Today, NEM remains a highly-traded cryptocurrency. Current development is centered around NEM's merge with another blockchain platform: Symbol.",
    ticker: "XEM",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_nem.png",
  },
  {
    ticker: "XLM",
    name: "Stellar",
    slug: "stellar",
    description:
      "Stellar (XLM) is a peer-to-peer (P2P) decentralized network created in 2014 by The Stellar Development Foundation or Stellar.org. The network officially launched in 2015 with the purpose of connecting the world's financial systems and ensuring a protocol for payment providers and financial institutions. The platform is designed to move financial resources swiftly and reliably at minimal cost. Stellar links people, banks, payment processors and allows users to create, send and trade multiple types of crypto.",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_stellar.png",
  },
  {
    description:
      "Monero was launched in 2014, and its goal is simple: to allow transactions to take place privately and with anonymity. Even though it’s commonly thought that BTC can conceal a person’s identity, it’s often easy to trace payments back to their original source because blockchains are transparent. On the other hand, XMR is designed to obscure senders and recipients alike through the use of advanced cryptography. Overall, XMR aims to allow payments to be made quickly and inexpensively without fear of censorship.",
    slug: "monero",
    ticker: "XMR",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_monero.png",
    name: "Monero",
  },
  {
    name: "Radix",
    description:
      "Radix is building an open, interconnected platform where the full range of powerful DeFi applications will be built securely and safely.",
    slug: "radix-protocol",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_radix-protocol.png",
    ticker: "XRD",
  },
  {
    name: "Ripple",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_xrp.png",
    ticker: "XRP",
    description:
      "Launched in 2021, the XRP Ledger (XRPL) is an open-source, permissionless and decentralized technology. Benefits of the XRP Ledger include its low-cost ($0.0002 to transact), speed (settling transactions in 3-5 seconds), scalability (1,500 transactions per second) and inherently green attributes (carbon-neutral and energy-efficient). The XRP Ledger also features the first decentralized exchange (DEX) and custom tokenization capabilities built into the protocol. Since 2012, the XRP Ledger has been operating reliably, having closed 70 million ledgers.",
    slug: "ripple",
  },
  {
    name: "Tezos",
    slug: "tezos",
    description:
      "Self-aāTezos is a coin created by a former Morgan Stanley analyst, Arthur Breitman. It is a smart contract platform which is does not involve in mining Tezos coins. It is a coin that promotes themselves on major ideas of self-amendment and on-chain governance.mending cryptographic ledger",
    ticker: "XTZ",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_tezos.png",
  },
  {
    description:
      'Our project is called the \\"XY Oracle Network\\" (XYO Network). The XYO Network enables trustless transactions through an ecosystem of crypto-location components that can bridge the gap from the world of today, to the world of tomorrow. The XYO Network makes it possible for smart contracts to access the real world by using the XYO Network\'s ecosystem of devices to determine if an object is at a specific XY-coordinate.',
    slug: "xyo",
    ticker: "XYO",
    name: "XYO Network",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_xyo.png",
  },
  {
    name: "Zcash",
    description:
      "Zcash is a decentralized and open-source cryptocurrency that offers privacy and selective transparency of transactions. Zcash payments are published on a public blockchain, but the sender, recipient, and amount of a transaction remain private. Zcash is based on peer-reviewed cryptographic research, and built by a security-specialized engineering team on an open source platform based on Bitcoin Core's battle-tested codebase. ",
    slug: "zcash",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_zcash.png",
    ticker: "ZEC",
  },
  {
    description:
      "Zilliqa (ZIL) is a token developed in the year 2017. Zilliqa is mainly based on the concept of Sharding and primarily aims at improving the scalability of the cryptocurrency networks as in case of Bitcoin or Ethereum. The white paper mentions that the transactions speed would be approximately a thousand times more than that of Ethereum network. Ziliqa is fast, secured and decentralized. Zilliqa’s high throughput means that you can focus on developing your ideas without worrying about network congestion, high transaction fees or security which are the key issues with legacy blockchain platforms.",
    slug: "zilliqa",
    ticker: "ZIL",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_zilliqa.png",
  },
  {
    description: "",
    slug: "usdt",
    ticker: "USDT",
    logoUrl: require("../assets/usdt.png"),
  },
];

function getCoinMeta(ticker) {
  let obj = arr.find((o) => o.ticker === ticker);
  return obj;
}
// arr.map((item) => console.log(`"${item.ticker}_USDT",`));

const idGen = () => {
  let ids = [];
  let str;
  arr.map((d) => {
    ids.push(d.slug);
  });

  str = ids.join("%2C");
  return str;
};

// const coinMetaList = () => {
//   maximumInstance
//     .get("/getCoinMetaList")
//     .then((res) => console.log("MetaCoinList", res?.data))
//     .catch((err) => console.log("Error", err));
// };

const coinGekoUrl =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=1inch%2Caave%2Ccardano%2Calgorand%2Capecoin%2Capi3%2Carweave%2Ccosmos%2Caurora%2Cavalanche%2Caxie-infinity%2Cbasic-attention-token%2Cbitcoin-cash%2Cbluzelle%2Cbnb%2Cbitcoin%2Cblocktrade-token%2Cpancakeswap%2Ccelo%2Cchiliz%2Cnervos-network%2Ccompound%2Ccovalent%2Ccrypto-com-coin%2Ccurve%2Cdogecoin%2Cpolkadot-new%2Celrond-egld%2Cenjin-coin%2Cethereum-name-service%2Ceos%2Cethereum-classic%2Cethereum%2Cfile-coin%2Cfloki-inu%2Cflow%2Cflux%2Cfantom%2Cftx-token%2Cgala%2Cgraphlinq-protocol%2Cgreen-metaverse-token%2Cthe-graph%2Chedera-hashgraph%2Chandshake%2Chelium%2Cholo%2Chuobi-token%2Cinternet-computer%2Cimmutable-x%2Cinjective-protocol%2Ciotex%2Ckucoin-shares%2Ckadena%2Cklaytn%2Ckusama%2Cunus-sed-leo%2Cchainlink%2Clition%2Cloopring%2Clitecoin%2Cdecentraland%2Cmatic-network%2Cmobox%2Ciota%2Cmaker%2Cmachine-xchange-coin%2Cnear-protocol%2Cneo%2Cnexo%2Cocean-protocol%2Cokb%2Charmony%2Contology%2Coptimism-ethereum%2Cparsiq%2Cepns%2Crarible%2Crender-token%2Cthorchain%2Cthe-sandbox%2Csiacoin%2Cshiba-inu%2Csolana%2Cserum%2Csushi%2Ctelos%2Ctron%2Cuniswap%2Cvechain%2Cwaves%2Cwax%2Cstellar%2Cmonero%2Cripple%2Ctezos%2Cxyo%2Czcash%2Czilliqa&order=market_cap_desc&per_page=250&page=1&sparkline=false";

module.exports = {
  getCoinMeta,
  arr,
  idGen,
  coinGekoUrl,
  //   coinMetaList,
};
