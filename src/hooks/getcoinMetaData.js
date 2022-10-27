let arr = [
  {
    slug: "1inch",
    description: "DEX aggregator",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/111676b0a9e53433f480260cc904f704912fd44d9b63fbc9103069cf299eeab1_1612281140765_1inch.png",
    ticker: "1INCH",
  },
  {
    description: "A decentralized finance protocol, new token after LEND",
    ticker: "AAVE",
    slug: "aave",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_aave.png",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_cardano.png",
    description: "Layered currency and contracts",
    slug: "cardano",
    ticker: "ADA",
  },
  {
    description: "Decentralized cloud computing marketplace",
    ticker: "AKT",
    slug: "akash-network",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_akash-network.png",
  },
  {
    description: "A scalable, secure and decentralized digital currency",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_algorand.png",
    ticker: "ALGO",
    slug: "algorand",
  },
  {
    ticker: "AOA",
    slug: "aurora",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_aurora.png",
    description: "Lightning-fast contracts to link industries",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_apecoin.png",
    description: "Yield farming and NFT collectibles",
    slug: "apecoin",
    ticker: "APE",
  },
  {
    description: "Decentralized APIs for Web 3.0",
    slug: "api3",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_api3.png",
    ticker: "API3",
  },
  {
    description: "A new data storage blockchain protocol",
    ticker: "AR",
    slug: "arweave",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_arweave.png",
  },
  {
    description:
      "An ecosystem of blockchains that can scale and interoperate with each other",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_cosmos.png",
    slug: "cosmos",
    ticker: "ATOM",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/a659f4f831616bd606f9aaab99d885d2944a8a509d155818ed83916fe0834bbd_1616690880636_AUDIO.png",
    slug: "audius",
    ticker: "AUDIO",
    description: "Streaming platform",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_aurora-near.png",
    slug: "aurora-near",
    description: "EVM built on NEAR Protocol",
    ticker: "AURORA",
  },
  {
    description: "A platform for launching highly decentralized applications",
    ticker: "AVAX",
    slug: "avalanche",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_avalanche.png",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_axie-infinity.png",
    ticker: "AXS",
    slug: "axie-infinity",
    description: "A Pokemon-inspired digital pet universe",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_balancer.png",
    description:
      "A non-custodial portfolio manager, liquidity provider and price sensor",
    ticker: "BAL",
    slug: "balancer",
  },
  {
    slug: "basic-attention-token",
    description: "Decentralized ad network",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_basic-attention-token.png",
    ticker: "BAT",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_bitcoin-cash.png",
    description: "Bitcoin clone",
    ticker: "BCH",
    slug: "bitcoin-cash",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_bitdao.png",
    ticker: "BIT",
    description: null,
    slug: "bitdao",
  },
  {
    slug: "bluzelle",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_bluzelle.png",
    description: "Brings together the sharing economy and token economy",
    ticker: "BLZ",
  },
  {
    description: "The BNB coin on the Binance network",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_bnb.png",
    slug: "binance-coin",
    ticker: "BNB",
  },
  {
    ticker: "BTC",
    description: "Digital gold",
    slug: "bitcoin",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_bitcoin.png",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_blocktrade-token.png",
    description:
      "A high-performant, soon-to-be MiFID II regulated Crypto Assets Trading Facility",
    ticker: "BTT",
    slug: "blocktrade-token",
  },
  {
    description: "Yield farming on Binance Smart Chain",
    slug: "pancakeswap",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_pancakeswap.png",
    ticker: "CAKE",
  },
  {
    slug: "celo",
    description: "Financial tools platform",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_celo.png",
    ticker: "CELO",
  },
  {
    slug: "chiliz",
    description: "A currency for sports and entertainment platforms",
    ticker: "CHZ",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_chiliz.png",
  },
  {
    slug: "nervos-network",
    description: "A suite of scalable and interoperable protocols",
    ticker: "CKB",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_nervos-network.png",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_compound.png",
    ticker: "COMP",
    description: "Yield interest on idle assets",
    slug: "compound",
  },
  {
    ticker: "CQT",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_covalent.png",
    slug: "covalent",
    description: "An API to billions of blockchain data points",
  },
  {
    slug: "crypto-com-coin",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_crypto-com-coin.png",
    description: "Cryptocurrency credit card",
    ticker: "CRO",
  },
  {
    description: "Governance token on the Curve platform",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_curve-dao-token.png",
    ticker: "CRV",
    slug: "curve",
  },
  {
    ticker: "CSPR",
    slug: "casper",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_casper.png",
    description:
      "The first live PoS blockchain built off the Casper CBC specification",
  },
  {
    slug: "convex-finance",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_convex-finance.png",
    ticker: "CVX",
    description: "Boosted Curve staking",
  },
  {
    slug: "dash",
    ticker: "DASH",
    description: "Payments focused cryptocurrency. Privacy included",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_dash.png",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_defichain.png",
    ticker: "DFI",
    slug: "defichain",
    description: "Native Decentralized Finance for Bitcoin",
  },
  {
    description: "Metaverse Poker, Blackjack, Roulette and Slots",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_decentral-games-new.png",
    ticker: "DG",
    slug: "decentral-games-new",
  },
  {
    slug: "dogecoin",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_dogecoin.png",
    description: "An open source peer-to-peer digital currency",
    ticker: "DOGE",
  },
  {
    description: "Enables blockchain networks to operate together",
    slug: "polkadot-new",
    ticker: "DOT",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_polkadot-new.png",
  },
  {
    description: "The internet scale blockchain",
    ticker: "EGLD",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_elrond-egld.png",
    slug: "elrond-egld",
  },
  {
    description: "ERC1155 wallet, marketplace and gaming APIs",
    ticker: "ENJ",
    slug: "enjin-coin",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_enjin-coin.png",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_ethereum-name-service.png",
    description: "Decentralised naming for wallets, websites and more",
    ticker: "ENS",
    slug: "ethereum-name-service",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_eos.png",
    slug: "eos",
    description: "Decentralized applications on WebAssembly",
    ticker: "EOS",
  },
  {
    ticker: "ETC",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_ethereum-classic.png",
    slug: "ethereum-classic",
    description: "Ethereum clone",
  },
  {
    ticker: "ETH",
    slug: "ethereum",
    description: "Programmable contracts and money",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_ethereum.png",
  },
  {
    description: "Hard fork of Ethereum before switching to PoS",
    ticker: "ETHW",
    slug: "ethereum-pow",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_ethereum-pow.png",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_evmos.png",
    description: "The Ethereum Virtual Machine (EVM) Hub on Cosmos",
    slug: "evmos",
    ticker: "EVMOS",
  },
  {
    description: "A decentralized storage system",
    ticker: "FIL",
    slug: "file-coin",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_filecoin.png",
  },
  {
    slug: "flowchain",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_flowchain.png",
    description:
      "Flowchain/IPFS: Distributed Storage using Blockchain Technology. Aims to implement the IoT blockchain technology and already proposed the virtual blocks technology that can ensure data stream transactions in a near real-time manner",
    ticker: "FLC",
  },
  {
    slug: "floki-inu",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_floki-inu.png",
    ticker: "FLOKI",
    description: "Cross-chain community-driven token",
  },
  {
    description: "Infrastructure for open, composable and permissionless apps",
    slug: "flow",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_flow.png",
    ticker: "FLOW",
  },
  {
    ticker: "FLUX",
    slug: "flux",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_flux.png",
    description: "Generates dividends every 15 seconds",
  },
  {
    slug: "frax",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_frax.png",
    description: "Fractional-algorithmic stablecoin",
    ticker: "FRAX",
  },
  {
    description: "DAG based smart contract platform",
    slug: "fantom",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_fantom.png",
    ticker: "FTM",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_ftx-token.png",
    slug: "ftx-token",
    description: "Cryptocurrency Derivatives Exchange",
    ticker: "FTT",
  },
  {
    ticker: "GALA",
    slug: "gala",
    description: "Gaming and NFT",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_gala.png",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_graphlinq-protocol.png",
    slug: "graphlinq-protocol",
    description: "The nocode protocol for Blockchain development",
    ticker: "GLQ",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_green-metaverse-token.png",
    slug: "bnb-green-metaverse-token",
    description:
      "GMT is the governance token of STEPN with a limited supply of 6 billion tokens",
    ticker: "GMT",
  },
  {
    ticker: "GRT",
    description: "An indexing protocol for querying networks",
    slug: "the-graph",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_the-graph.png",
  },
  {
    slug: "gatechain-token",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_gatetoken.png",
    ticker: "GT",
    description: "Part of Gate.io ecosystem",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_hedera.png",
    ticker: "HBAR",
    slug: "hedera-hashgraph",
    description: "A new form of distributed consensus",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_handshake.png",
    description: "Decentralized naming and certificate authority",
    slug: "handshake",
    ticker: "HNS",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_helium.png",
    slug: "helium",
    description:
      "Helium is a digital currency and blockchain network that focuses on improving supply chain logistics in the construction and infrastructure sector.",
    ticker: "HNT",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_holo.png",
    ticker: "HOT",
    slug: "holo",
    description: "Decentralized hosting platform",
  },
  {
    description: "Blockchain-Powered Loyalty Point System",
    ticker: "HT",
    slug: "huobi-token",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_huobi-token.png",
  },
  {
    slug: "internet-computer",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_internet-computer.png",
    description: "Public decentralized cloud computing",
    ticker: "ICP",
  },
  {
    ticker: "IMX",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_immutable-x.png",
    slug: "immutable-x",
    description: "NFT scaling platform",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_injective-protocol.png",
    ticker: "INJ",
    description: "Layer-2 DEX",
    slug: "injective-protocol",
  },
  {
    description:
      "A decentralized network for IoT powered by a privacy-centric blockchain",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_iotex.png",
    ticker: "IOTX",
    slug: "iotex",
  },
  {
    ticker: "KAVA",
    description: "Cross-blockchain DeFi platform",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_kava.png",
    slug: "kava",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_kucoin-shares.png",
    ticker: "KCS",
    slug: "kucoin-shares",
    description: "Exchange shares",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_kadena.png",
    description: "Scalable smart-contract blockchain",
    ticker: "KDA",
    slug: "kadena",
  },
  {
    description: "Blockchain network for everyone",
    ticker: "KLAY",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_klaytn.png",
    slug: "klaytn",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_kusama.png",
    slug: "kusama",
    ticker: "KSM",
    description: "An early, unaudited, and unrefined release of Polkadot",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_leocoin.png",
    ticker: "LC4",
    slug: "leocoin",
    description: "A revolutionary new digital currency",
  },
  {
    slug: "lido-dao",
    description: "Liquid staking solution for Ethereum",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_lido-dao.png",
    ticker: "LDO",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_unus-sed-leo.png",
    ticker: "LEO",
    slug: "unus-sed-leo",
    description: "Digital asset trading platform",
  },
  {
    description: "External data for contracts",
    ticker: "LINK",
    slug: "chainlink",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_chainlink.png",
  },
  {
    slug: "litentry",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_litentry.png",
    description:
      "Decentralized identity authentication and user activity data management Infrastructure",
    ticker: "LIT",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_loopring.png",
    ticker: "LRC",
    slug: "loopring",
    description: "Decentralized exchange",
  },
  {
    slug: "litecoin",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_litecoin.png",
    description: "Faster bitcoin",
    ticker: "LTC",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_decentraland.png",
    slug: "decentraland",
    ticker: "MANA",
    description: "Virtual reality platform",
  },
  {
    ticker: "MATIC",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_matic-network.png",
    description: "Ethereum scaling solution (previously Matic)",
    slug: "matic-network",
  },
  {
    slug: "mobox",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_mobox.png",
    ticker: "MBOX",
    description: "DeFi and Gaming NFT",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_mina.png",
    slug: "mina",
    description: "The world's lightest blockchain",
    ticker: "MINA",
  },
  {
    slug: "iota",
    description: "Internet-of-Things payments",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_iota.png",
    ticker: "MIOTA",
  },
  {
    ticker: "MKR",
    slug: "maker",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_maker.png",
    description: "Stablecoin governance on Ethereum",
  },
  {
    slug: "machine-xchange-coin",
    description:
      "MXC IoT solutions provide a wide scope of essential data services, measuring everything from air-quality, water purity & even commuter traffic",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_machine-xchange-coin.png",
    ticker: "MXC",
  },
  {
    slug: "near-protocol",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_near-protocol.png",
    ticker: "NEAR",
    description: "The Developer Platform for the Open Web",
  },
  {
    ticker: "NEO",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_neo.png",
    description: "Chinese Ethereum",
    slug: "neo",
  },
  {
    slug: "nexo",
    description: "The World’s First Instant Crypto Overdrafts",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_nexo.png",
    ticker: "NEXO",
  },
  {
    slug: "ocean-protocol",
    description: "Decentralized data exchange protocol ",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_ocean-protocol.png",
    ticker: "OCEAN",
  },
  {
    description: "Trusted Digital Asset Exchange",
    ticker: "OKB",
    slug: "okb",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_okb.png",
  },
  {
    slug: "harmony",
    ticker: "ONE",
    description: "A high-throughput and low-latency platform",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_harmony.png",
  },
  {
    slug: "ontology",
    description: "Identity and data",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_ontology.png",
    ticker: "ONT",
  },
  {
    description: "Ethereum, scaled",
    slug: "o-optimism",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_optimism-ethereum.png",
    ticker: "OP",
  },
  {
    slug: "osmosis",
    description: "The Interchain AMM",
    ticker: "OSMO",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_osmosis.png",
  },
  {
    description: "Each token is backed by an ounce of allocated gold",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_pax-gold.png",
    slug: "pax-gold",
    ticker: "PAXG",
  },
  {
    slug: "parsiq",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_parsiq.png",
    ticker: "PRQ",
    description: "A Blockchain monitoring and compliance platform",
  },
  {
    slug: "epns",
    description: "Decentralized Notification Protocol on Ethereum",
    ticker: "PUSH",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_epns.png",
  },
  {
    ticker: "QNT",
    description: "Bridging existing networks to new blockchains",
    slug: "quant",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_quant.png",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_rarible.png",
    slug: "rarible",
    description: "Create and sell digital collectibles",
    ticker: "RARI",
  },
  {
    description: "Utilizes GPUs across the world",
    slug: "render-token",
    ticker: "RNDR",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_render-token.png",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_oasis-network.png",
    ticker: "ROSE",
    description: "Blockchain network for DeFi and Open Data",
    slug: "oasis-network",
  },
  {
    description: "A lightning fast liquidity network protocol",
    ticker: "RUNE",
    slug: "thorchain",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_thorchain.png",
  },
  {
    description: "Bitcoin fork, a digital peer to peer network",
    ticker: "RVN",
    slug: "ravencoin",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_ravencoin.png",
  },
  {
    slug: "the-sandbox",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_the-sandbox.png",
    ticker: "SAND",
    description: "Monetizing gaming experience",
  },
  {
    ticker: "SC",
    slug: "siacoin",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_siacoin.png",
    description: "Rent disk space",
  },
  {
    ticker: "SHIB",
    slug: "shiba-inu",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_shiba-inu.png",
    description:
      "Half tokens sent to Vitalik, another half locked in LP, keys burned",
  },
  {
    description: "Enables the creation of on-chain synthetic assets",
    ticker: "SNX",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_synthetix-network-token.png",
    slug: "synthetix-network-token",
  },
  {
    description: "High-speed blockchain without sharding",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_solana.png",
    ticker: "SOL",
    slug: "solana",
  },
  {
    ticker: "SRM",
    slug: "serum",
    description: "Decentralized derivatives exchange",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_serum.png",
  },
  {
    ticker: "STX",
    description: "A new decentralized internet",
    slug: "blockstack",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_blockstack.png",
  },
  {
    slug: "sushi",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_sushi.png",
    description: "An evolution of Uniswap with SUSHI tokenomics",
    ticker: "SUSHI",
  },
  {
    description: "Next generation video delivery powered by you",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_theta.png",
    slug: "theta",
    ticker: "THETA",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_telos.png",
    ticker: "TLOS",
    slug: "telos",
    description: "A smart contract blockchain running on EOSIO software",
  },
  {
    slug: "toncoin",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_toncoin.png",
    description:
      "The next gen network to unite all blockchains and the existing Internet",
    ticker: "TON",
  },
  {
    description: "Content entertainment protocol",
    ticker: "TRX",
    slug: "tron",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_tron.png",
  },
  {
    slug: "bnb-trust-wallet-token",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_trust-wallet-token.png",
    description: "Crypto wallet",
    ticker: "TWT",
  },
  {
    slug: "uniswap",
    ticker: "UNI",
    description:
      "Governance system on highly decentralized financial infrastructure",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_uniswap.png",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_vechain.png",
    slug: "vechain",
    ticker: "VET",
    description: "Blockchain platform for products",
  },
  {
    description: "Decentralized exchange and crowdfunding",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_waves.png",
    slug: "waves",
    ticker: "WAVES",
  },
  {
    description: "Super fast NFT exchange",
    slug: "wax",
    ticker: "WAXP",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_wax.png",
  },
  {
    description: "Launch your blockchain in minutes",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_chain.png",
    slug: "chain",
    ticker: "XCN",
  },
  {
    slug: "ecash",
    description: "Rebranded Bitcoin Cash ABC (BCHA)",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_ecash.png",
    ticker: "XEC",
  },
  {
    slug: "nem",
    description:
      "NEM is a smart asset blockchain that offers highly customizable blockchain solutions to businesses in a cost-effective way. NEM in full stands for New Economic Movement, though the name has been dropped in favor of the shorter version – NEM",
    ticker: "XEM",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_nem.png",
  },
  {
    description: "Digital IOUs",
    slug: "stellar",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_stellar.png",
    ticker: "XLM",
  },
  {
    slug: "monero",
    ticker: "XMR",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_monero.png",
    description: "Private digital cash",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_radix-protocol.png",
    description: "Layer 1 DeFi done right",
    ticker: "XRD",
    slug: "radix-protocol",
  },
  {
    slug: "ripple",
    ticker: "XRP",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_xrp.png",
    description: "Enterprise payment settlement network",
  },
  {
    slug: "tezos",
    description: "Self-amending cryptographic ledger",
    ticker: "XTZ",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_tezos.png",
  },
  {
    ticker: "XYO",
    description:
      "The location-verifying proof of origin protocol that connects the blockchain to the real world",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_xyo.png",
    slug: "xyo",
  },
  {
    ticker: "ZEC",
    slug: "zcash",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_zcash.png",
    description: "Private digital cash",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_zilliqa.png",
    ticker: "ZIL",
    slug: "zilliqa",
    description: "Blockchain platform designed to scale",
  },
];

function getCoinMeta(ticker) {
  let obj = arr.find((o) => o.ticker === ticker);
  return obj;
}

const idGen = () => {
  let ids = [];
  let str;
  arr.map((d) => {
    ids.push(d.slug);
  });

  str = ids.join("%2C");
  return str;
};

const coinGekoUrl =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=1inch%2Caave%2Ccardano%2Calgorand%2Capecoin%2Capi3%2Carweave%2Ccosmos%2Caurora%2Cavalanche%2Caxie-infinity%2Cbasic-attention-token%2Cbitcoin-cash%2Cbluzelle%2Cbnb%2Cbitcoin%2Cblocktrade-token%2Cpancakeswap%2Ccelo%2Cchiliz%2Cnervos-network%2Ccompound%2Ccovalent%2Ccrypto-com-coin%2Ccurve%2Cdogecoin%2Cpolkadot-new%2Celrond-egld%2Cenjin-coin%2Cethereum-name-service%2Ceos%2Cethereum-classic%2Cethereum%2Cfile-coin%2Cfloki-inu%2Cflow%2Cflux%2Cfantom%2Cftx-token%2Cgala%2Cgraphlinq-protocol%2Cgreen-metaverse-token%2Cthe-graph%2Chedera-hashgraph%2Chandshake%2Chelium%2Cholo%2Chuobi-token%2Cinternet-computer%2Cimmutable-x%2Cinjective-protocol%2Ciotex%2Ckucoin-shares%2Ckadena%2Cklaytn%2Ckusama%2Cunus-sed-leo%2Cchainlink%2Clition%2Cloopring%2Clitecoin%2Cdecentraland%2Cmatic-network%2Cmobox%2Ciota%2Cmaker%2Cmachine-xchange-coin%2Cnear-protocol%2Cneo%2Cnexo%2Cocean-protocol%2Cokb%2Charmony%2Contology%2Coptimism-ethereum%2Cparsiq%2Cepns%2Crarible%2Crender-token%2Cthorchain%2Cthe-sandbox%2Csiacoin%2Cshiba-inu%2Csolana%2Cserum%2Csushi%2Ctelos%2Ctron%2Cuniswap%2Cvechain%2Cwaves%2Cwax%2Cstellar%2Cmonero%2Cripple%2Ctezos%2Cxyo%2Czcash%2Czilliqa&order=market_cap_desc&per_page=250&page=1&sparkline=false";

module.exports = {
  getCoinMeta,
  arr,
  idGen,
  coinGekoUrl,
};

// arr.map((item)=>console.log(`"${item.ticker}_USDT",`))
