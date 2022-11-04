let arr = [
  {
    description:
      "1inch Network is a decentralized exchange (DEX) aggregator to help users discover the best trade prices for tokens. Instead of swapping tokens from a single liquidity pool of a DEX, 1inch will aggregate across different pools and suggest the most efficient way to trade tokens.",
    slug: "1inch",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/111676b0a9e53433f480260cc904f704912fd44d9b63fbc9103069cf299eeab1_1612281140765_1inch.png",
    ticker: "1INCH",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_aave.png",
    description: "A decentralized finance protocol, new token after LEND",
    ticker: "AAVE",
    slug: "aave",
  },
  {
    ticker: "ADA",
    description: "Layered currency and contracts",
    slug: "cardano",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_cardano.png",
  },
  {
    description: "Decentralized cloud computing marketplace",
    ticker: "AKT",
    slug: "akash-network",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_akash-network.png",
  },
  {
    slug: "algorand",
    ticker: "ALGO",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_algorand.png",
    description: "A scalable, secure and decentralized digital currency",
  },
  {
    slug: "aurora",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_aurora.png",
    description: "Lightning-fast contracts to link industries",
    ticker: "AOA",
  },
  {
    ticker: "APE",
    description: "Yield farming and NFT collectibles",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_apecoin.png",
    slug: "apecoin",
  },
  {
    description: "Decentralized APIs for Web 3.0",
    ticker: "API3",
    slug: "api3",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_api3.png",
  },
  {
    description: "A new data storage blockchain protocol",
    slug: "arweave",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_arweave.png",
    ticker: "AR",
  },
  {
    description:
      "An ecosystem of blockchains that can scale and interoperate with each other",
    slug: "cosmos",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_cosmos.png",
    ticker: "ATOM",
  },
  {
    description: "Streaming platform",
    ticker: "AUDIO",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/a659f4f831616bd606f9aaab99d885d2944a8a509d155818ed83916fe0834bbd_1616690880636_AUDIO.png",
    slug: "audius",
  },
  {
    ticker: "AURORA",
    slug: "aurora-near",
    description: "EVM built on NEAR Protocol",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_aurora-near.png",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_avalanche.png",
    ticker: "AVAX",
    description: "A platform for launching highly decentralized applications",
    slug: "avalanche",
  },
  {
    ticker: "AXS",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_axie-infinity.png",
    slug: "axie-infinity",
    description: "A Pokemon-inspired digital pet universe",
  },
  {
    slug: "balancer",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_balancer.png",
    ticker: "BAL",
    description:
      "A non-custodial portfolio manager, liquidity provider and price sensor",
  },
  {
    slug: "basic-attention-token",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_basic-attention-token.png",
    description: "Decentralized ad network",
    ticker: "BAT",
  },
  {
    description: "Bitcoin clone",
    ticker: "BCH",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_bitcoin-cash.png",
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
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_bluzelle.png",
    slug: "bluzelle",
    description: "Brings together the sharing economy and token economy",
    ticker: "BLZ",
  },
  {
    description: "The BNB coin on the Binance network",
    slug: "binance-coin",
    ticker: "BNB",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_bnb.png",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_bitcoin.png",
    ticker: "BTC",
    slug: "bitcoin",
    description: "Digital gold",
  },
  {
    ticker: "BTT",
    slug: "blocktrade-token",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_blocktrade-token.png",
    description:
      "A high-performant, soon-to-be MiFID II regulated Crypto Assets Trading Facility",
  },
  {
    description: "Yield farming on Binance Smart Chain",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_pancakeswap.png",
    ticker: "CAKE",
    slug: "pancakeswap",
  },
  {
    slug: "celo",
    description: "Financial tools platform",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_celo.png",
    ticker: "CELO",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_chiliz.png",
    ticker: "CHZ",
    slug: "chiliz",
    description: "A currency for sports and entertainment platforms",
  },
  {
    description: "A suite of scalable and interoperable protocols",
    slug: "nervos-network",
    ticker: "CKB",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_nervos-network.png",
  },
  {
    slug: "compound",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_compound.png",
    description: "Yield interest on idle assets",
    ticker: "COMP",
  },
  {
    ticker: "CQT",
    description: "An API to billions of blockchain data points",
    slug: "covalent",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_covalent.png",
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
    ticker: "CRV",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_curve-dao-token.png",
    slug: "curve",
  },
  {
    description:
      "The first live PoS blockchain built off the Casper CBC specification",
    slug: "casper",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_casper.png",
    ticker: "CSPR",
  },
  {
    ticker: "DASH",
    slug: "dash",
    description: "Payments focused cryptocurrency. Privacy included",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_dash.png",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_defichain.png",
    slug: "defichain",
    ticker: "DFI",
    description: "Native Decentralized Finance for Bitcoin",
  },
  {
    description: "Metaverse Poker, Blackjack, Roulette and Slots",
    ticker: "DG",
    slug: "decentral-games-new",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_decentral-games-new.png",
  },
  {
    ticker: "DOGE",
    slug: "dogecoin",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_dogecoin.png",
    description: "An open source peer-to-peer digital currency",
  },
  {
    slug: "polkadot-new",
    ticker: "DOT",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_polkadot-new.png",
    description: "Enables blockchain networks to operate together",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_elrond-egld.png",
    ticker: "EGLD",
    description: "The internet scale blockchain",
    slug: "elrond-egld",
  },
  {
    ticker: "ENJ",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_enjin-coin.png",
    description: "ERC1155 wallet, marketplace and gaming APIs",
    slug: "enjin-coin",
  },
  {
    ticker: "ENS",
    slug: "ethereum-name-service",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_ethereum-name-service.png",
    description: "Decentralised naming for wallets, websites and more",
  },
  {
    slug: "eos",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_eos.png",
    description: "Decentralized applications on WebAssembly",
    ticker: "EOS",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_ethereum-classic.png",
    description: "Ethereum clone",
    ticker: "ETC",
    slug: "ethereum-classic",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_ethereum.png",
    slug: "ethereum",
    description: "Programmable contracts and money",
    ticker: "ETH",
  },
  {
    ticker: "ETHW",
    description: "Hard fork of Ethereum before switching to PoS",
    slug: "ethereum-pow",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_ethereum-pow.png",
  },
  {
    slug: "file-coin",
    description: "A decentralized storage system",
    ticker: "FIL",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_filecoin.png",
  },
  {
    ticker: "FLC",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_flowchain.png",
    slug: "flowchain",
    description:
      "Flowchain/IPFS: Distributed Storage using Blockchain Technology. Aims to implement the IoT blockchain technology and already proposed the virtual blocks technology that can ensure data stream transactions in a near real-time manner",
  },
  {
    slug: "floki-inu",
    ticker: "FLOKI",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_floki-inu.png",
    description: "Cross-chain community-driven token",
  },
  {
    slug: "flow",
    ticker: "FLOW",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_flow.png",
    description: "Infrastructure for open, composable and permissionless apps",
  },
  {
    slug: "flux",
    description: "Generates dividends every 15 seconds",
    ticker: "FLUX",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_flux.png",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_frax.png",
    description: "Fractional-algorithmic stablecoin",
    ticker: "FRAX",
    slug: "frax",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_fantom.png",
    ticker: "FTM",
    description: "DAG based smart contract platform",
    slug: "fantom",
  },
  {
    ticker: "FTT",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_ftx-token.png",
    slug: "ftx-token",
    description: "Cryptocurrency Derivatives Exchange",
  },
  {
    description: "Gaming and NFT",
    ticker: "GALA",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_gala.png",
    slug: "gala",
  },
  {
    description: "The nocode protocol for Blockchain development",
    ticker: "GLQ",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_graphlinq-protocol.png",
    slug: "graphlinq-protocol",
  },
  {
    slug: "bnb-green-metaverse-token",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_green-metaverse-token.png",
    description:
      "GMT is the governance token of STEPN with a limited supply of 6 billion tokens",
    ticker: "GMT",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_the-graph.png",
    ticker: "GRT",
    description: "An indexing protocol for querying networks",
    slug: "the-graph",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_gatetoken.png",
    slug: "gatechain-token",
    ticker: "GT",
    description: "Part of Gate.io ecosystem",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_hedera.png",
    description: "A new form of distributed consensus",
    slug: "hedera-hashgraph",
    ticker: "HBAR",
  },
  {
    slug: "handshake",
    description: "Decentralized naming and certificate authority",
    ticker: "HNS",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_handshake.png",
  },
  {
    slug: "helium",
    description:
      "Helium is a digital currency and blockchain network that focuses on improving supply chain logistics in the construction and infrastructure sector.",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_helium.png",
    ticker: "HNT",
  },
  {
    slug: "holo",
    description: "Decentralized hosting platform",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_holo.png",
    ticker: "HOT",
  },
  {
    description: "Blockchain-Powered Loyalty Point System",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_huobi-token.png",
    slug: "huobi-token",
    ticker: "HT",
  },
  {
    slug: "internet-computer",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_internet-computer.png",
    description: "Public decentralized cloud computing",
    ticker: "ICP",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_immutable-x.png",
    slug: "immutable-x",
    description: "NFT scaling platform",
    ticker: "IMX",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_injective-protocol.png",
    description: "Layer-2 DEX",
    slug: "injective-protocol",
    ticker: "INJ",
  },
  {
    slug: "iotex",
    description:
      "A decentralized network for IoT powered by a privacy-centric blockchain",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_iotex.png",
    ticker: "IOTX",
  },
  {
    slug: "kava",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_kava.png",
    description: "Cross-blockchain DeFi platform",
    ticker: "KAVA",
  },
  {
    ticker: "KDA",
    slug: "kadena",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_kadena.png",
    description: "Scalable smart-contract blockchain",
  },
  {
    description: "Blockchain network for everyone",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_klaytn.png",
    ticker: "KLAY",
    slug: "klaytn",
  },
  {
    description: "An early, unaudited, and unrefined release of Polkadot",
    ticker: "KSM",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_kusama.png",
    slug: "kusama",
  },
  {
    description: "A revolutionary new digital currency",
    ticker: "LC4",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_leocoin.png",
    slug: "leocoin",
  },
  {
    description: "Liquid staking solution for Ethereum",
    ticker: "LDO",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_lido-dao.png",
    slug: "lido-dao",
  },
  {
    slug: "unus-sed-leo",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_unus-sed-leo.png",
    ticker: "LEO",
    description: "Digital asset trading platform",
  },
  {
    slug: "chainlink",
    ticker: "LINK",
    description: "External data for contracts",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_chainlink.png",
  },
  {
    slug: "litentry",
    ticker: "LIT",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_litentry.png",
    description:
      "Decentralized identity authentication and user activity data management Infrastructure",
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
    description: "Faster bitcoin",
    ticker: "LTC",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_litecoin.png",
  },
  {
    description: "Virtual reality platform",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_decentraland.png",
    slug: "decentraland",
    ticker: "MANA",
  },
  {
    ticker: "MATIC",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_matic-network.png",
    description: "Ethereum scaling solution (previously Matic)",
    slug: "matic-network",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_mobox.png",
    description: "DeFi and Gaming NFT",
    slug: "mobox",
    ticker: "MBOX",
  },
  {
    description: "The world's lightest blockchain",
    ticker: "MINA",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_mina.png",
    slug: "mina",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_iota.png",
    description: "Internet-of-Things payments",
    slug: "iota",
    ticker: "MIOTA",
  },
  {
    slug: "maker",
    ticker: "MKR",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_maker.png",
    description: "Stablecoin governance on Ethereum",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_machine-xchange-coin.png",
    description:
      "MXC IoT solutions provide a wide scope of essential data services, measuring everything from air-quality, water purity & even commuter traffic",
    ticker: "MXC",
    slug: "machine-xchange-coin",
  },
  {
    ticker: "NEAR",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_near-protocol.png",
    description: "The Developer Platform for the Open Web",
    slug: "near-protocol",
  },
  {
    ticker: "NEO",
    slug: "neo",
    description: "Chinese Ethereum",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_neo.png",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_nexo.png",
    ticker: "NEXO",
    slug: "nexo",
    description: "The World’s First Instant Crypto Overdrafts",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_ocean-protocol.png",
    description: "Decentralized data exchange protocol ",
    slug: "ocean-protocol",
    ticker: "OCEAN",
  },
  {
    slug: "okb",
    ticker: "OKB",
    description: "Trusted Digital Asset Exchange",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_okb.png",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_harmony.png",
    slug: "harmony",
    description: "A high-throughput and low-latency platform",
    ticker: "ONE",
  },
  {
    ticker: "ONT",
    description: "Identity and data",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_ontology.png",
    slug: "ontology",
  },
  {
    ticker: "OP",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_optimism-ethereum.png",
    description: "Ethereum, scaled",
    slug: "o-optimism",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_osmosis.png",
    ticker: "OSMO",
    slug: "osmosis",
    description: "The Interchain AMM",
  },
  {
    ticker: "PRQ",
    slug: "parsiq",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_parsiq.png",
    description: "A Blockchain monitoring and compliance platform",
  },
  {
    ticker: "PUSH",
    slug: "epns",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_epns.png",
    description: "Decentralized Notification Protocol on Ethereum",
  },
  {
    ticker: "QNT",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_quant.png",
    description: "Bridging existing networks to new blockchains",
    slug: "quant",
  },
  {
    description: "Create and sell digital collectibles",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_rarible.png",
    ticker: "RARI",
    slug: "rarible",
  },
  {
    description: "Utilizes GPUs across the world",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_render-token.png",
    slug: "render-token",
    ticker: "RNDR",
  },
  {
    ticker: "ROSE",
    description: "Blockchain network for DeFi and Open Data",
    slug: "oasis-network",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_oasis-network.png",
  },
  {
    slug: "thorchain",
    description: "A lightning fast liquidity network protocol",
    ticker: "RUNE",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_thorchain.png",
  },
  {
    ticker: "RVN",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_ravencoin.png",
    slug: "ravencoin",
    description: "Bitcoin fork, a digital peer to peer network",
  },
  {
    slug: "the-sandbox",
    description: "Monetizing gaming experience",
    ticker: "SAND",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_the-sandbox.png",
  },
  {
    description: "Rent disk space",
    slug: "siacoin",
    ticker: "SC",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_siacoin.png",
  },
  {
    slug: "shiba-inu",
    description:
      "Half tokens sent to Vitalik, another half locked in LP, keys burned",
    ticker: "SHIB",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_shiba-inu.png",
  },
  {
    description: "Enables the creation of on-chain synthetic assets",
    slug: "synthetix-network-token",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_synthetix-network-token.png",
    ticker: "SNX",
  },
  {
    description: "High-speed blockchain without sharding",
    slug: "solana",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_solana.png",
    ticker: "SOL",
  },
  {
    slug: "serum",
    description: "Decentralized derivatives exchange",
    ticker: "SRM",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_serum.png",
  },
  {
    ticker: "STX",
    slug: "blockstack",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_blockstack.png",
    description: "A new decentralized internet",
  },
  {
    slug: "sushi",
    ticker: "SUSHI",
    description: "An evolution of Uniswap with SUSHI tokenomics",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_sushi.png",
  },
  {
    ticker: "THETA",
    slug: "theta",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_theta.png",
    description: "Next generation video delivery powered by you",
  },
  {
    description: "A smart contract blockchain running on EOSIO software",
    ticker: "TLOS",
    slug: "telos",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_telos.png",
  },
  {
    ticker: "TON",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_toncoin.png",
    slug: "toncoin",
    description:
      "The next gen network to unite all blockchains and the existing Internet",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_tron.png",
    slug: "tron",
    ticker: "TRX",
    description: "Content entertainment protocol",
  },
  {
    slug: "bnb-trust-wallet-token",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_trust-wallet-token.png",
    ticker: "TWT",
    description: "Crypto wallet",
  },
  {
    ticker: "UNI",
    slug: "uniswap",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_uniswap.png",
    description:
      "Governance system on highly decentralized financial infrastructure",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_vechain.png",
    slug: "vechain",
    ticker: "VET",
    description: "Blockchain platform for products",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_waves.png",
    ticker: "WAVES",
    slug: "waves",
    description: "Decentralized exchange and crowdfunding",
  },
  {
    description: "Super fast NFT exchange",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_wax.png",
    slug: "wax",
    ticker: "WAXP",
  },
  {
    ticker: "XCN",
    description: "Launch your blockchain in minutes",
    slug: "chain",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_chain.png",
  },
  {
    description: "Rebranded Bitcoin Cash ABC (BCHA)",
    ticker: "XEC",
    slug: "ecash",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_ecash.png",
  },
  {
    description:
      "NEM is a smart asset blockchain that offers highly customizable blockchain solutions to businesses in a cost-effective way. NEM in full stands for New Economic Movement, though the name has been dropped in favor of the shorter version – NEM",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_nem.png",
    slug: "nem",
    ticker: "XEM",
  },
  {
    ticker: "XLM",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_stellar.png",
    slug: "stellar",
    description: "Digital IOUs",
  },
  {
    slug: "monero",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_monero.png",
    description: "Private digital cash",
    ticker: "XMR",
  },
  {
    slug: "radix-protocol",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_radix-protocol.png",
    ticker: "XRD",
    description: "Layer 1 DeFi done right",
  },
  {
    ticker: "XRP",
    slug: "ripple",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_xrp.png",
    description: "Enterprise payment settlement network",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_tezos.png",
    ticker: "XTZ",
    description: "Self-amending cryptographic ledger",
    slug: "tezos",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_xyo.png",
    slug: "xyo",
    description:
      "The location-verifying proof of origin protocol that connects the blockchain to the real world",
    ticker: "XYO",
  },
  {
    slug: "zcash",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_zcash.png",
    ticker: "ZEC",
    description: "Private digital cash",
  },
  {
    slug: "zilliqa",
    ticker: "ZIL",
    description: "Blockchain platform designed to scale",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_zilliqa.png",
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
