let arr = [
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/111676b0a9e53433f480260cc904f704912fd44d9b63fbc9103069cf299eeab1_1612281140765_1inch.png",
    ticker: "1INCH",
    description: "DEX aggregator",
    slug: "1inch",
  },
  {
    slug: "aave",
    description: "A decentralized finance protocol, new token after LEND",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_aave.png",
    ticker: "AAVE",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_cardano.png",
    ticker: "ADA",
    slug: "cardano",
    description: "Layered currency and contracts",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_akash-network.png",
    description: "Decentralized cloud computing marketplace",
    ticker: "AKT",
    slug: "akash-network",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_algorand.png",
    slug: "algorand",
    description: "A scalable, secure and decentralized digital currency",
    ticker: "ALGO",
  },
  {
    ticker: "APE",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_apecoin.png",
    description: "Yield farming and NFT collectibles",
    slug: "apecoin",
  },
  {
    logoUrl: null,
    description: "Decentralized APIs for Web 3.0",
    ticker: "API3",
    slug: "api3",
  },
  {
    slug: "arweave",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_arweave.png",
    description: "A new data storage blockchain protocol",
    ticker: "AR",
  },
  {
    description:
      "An ecosystem of blockchains that can scale and interoperate with each other",
    ticker: "ATOM",
    slug: "cosmos",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_cosmos.png",
  },
  {
    slug: "aurora-near",
    description: "EVM built on NEAR Protocol",
    ticker: "AURORA",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_aurora-near.png",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_avalanche.png",
    description: "A platform for launching highly decentralized applications",
    ticker: "AVAX",
    slug: "avalanche",
  },
  {
    slug: "axie-infinity",
    ticker: "AXS",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_axie-infinity.png",
    description: "A Pokemon-inspired digital pet universe",
  },
  {
    ticker: "BAT",
    description: "Decentralized ad network",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_basic-attention-token.png",
    slug: "basic-attention-token",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_bitcoin-cash.png",
    slug: "bitcoin-cash",
    ticker: "BCH",
    description: "Bitcoin clone",
  },
  {
    slug: "bluzelle",
    description: "Brings together the sharing economy and token economy",
    ticker: "BLZ",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_bluzelle.png",
  },
  {
    slug: "binance-coin",
    ticker: "BNB",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_binance-coin.png",
    description: "The BNB coin on the Binance network",
  },
  {
    slug: "bitcoin",
    ticker: "BTC",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_bitcoin.png",
    description: "Digital gold",
  },
  {
    description:
      "A high-performant, soon-to-be MiFID II regulated Crypto Assets Trading Facility",
    ticker: "BTT",
    slug: "blocktrade-token",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_blocktrade-token.png",
  },
  {
    description: "Yield farming on Binance Smart Chain",
    ticker: "CAKE",
    slug: "pancakeswap",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_pancakeswap.png",
  },
  {
    slug: "celo",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_celo.png",
    description: "Financial tools platform",
    ticker: "CELO",
  },
  {
    description: "A currency for sports and entertainment platforms",
    ticker: "CHZ",
    slug: "chiliz",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_chiliz.png",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_nervos-network.png",
    ticker: "CKB",
    slug: "nervos-network",
    description: "A suite of scalable and interoperable protocols",
  },
  {
    description: "Yield interest on idle assets",
    ticker: "COMP",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_compound.png",
    slug: "compound",
  },
  {
    slug: "covalent",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_covalent.png",
    description: "An API to billions of blockchain data points",
    ticker: "CQT",
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
    slug: "curve",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/2eccc30e063c4ccb37f978c830b22a2a3798280a586afd080e78caa1fd4e328e_1615385157018_curve.png",
    ticker: "CRV",
  },
  {
    ticker: "DOGE",
    slug: "dogecoin",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_dogecoin.png",
    description: "An open source peer-to-peer digital currency",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_polkadot-new.png",
    ticker: "DOT",
    slug: "polkadot-new",
    description: "Enables blockchain networks to operate together",
  },
  {
    description: "The internet scale blockchain",
    slug: "elrond-egld",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_elrond-egld.png",
    ticker: "EGLD",
  },
  {
    slug: "enjin-coin",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_enjin-coin.png",
    description: "ERC1155 wallet, marketplace and gaming APIs",
    ticker: "ENJ",
  },
  {
    slug: "ethereum-name-service",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_ethereum-name-service.png",
    ticker: "ENS",
    description: "Decentralised naming for wallets, websites and more",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_eos.png",
    ticker: "EOS",
    description: "Decentralized applications on WebAssembly",
    slug: "eos",
  },
  {
    slug: "ethereum-classic",
    ticker: "ETC",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_ethereum-classic.png",
    description: "Ethereum clone",
  },
  {
    description: "Programmable contracts and money",
    ticker: "ETH",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_ethereum.png",
    slug: "ethereum",
  },
  {
    description: "A decentralized storage system",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/91240703bd6705edd410341f858e6ee3782adc65dbe9547f67bfe1d17201134c_1617286616355_filecoin.png",
    ticker: "FIL",
    slug: "file-coin",
  },
  {
    slug: "floki-inu",
    description: "Cross-chain community-driven token",
    ticker: "FLOKI",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_floki-inu.png",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_flow.png",
    ticker: "FLOW",
    description: "Infrastructure for open, composable and permissionless apps",
    slug: "flow",
  },
  {
    description: "Generates dividends every 15 seconds",
    slug: "flux",
    ticker: "FLUX",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_flux.png",
  },
  {
    ticker: "FTM",
    description: "DAG based smart contract platform",
    slug: "fantom",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_fantom.png",
  },
  {
    slug: "ftx-token",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_ftx-token.png",
    ticker: "FTT",
    description: "Cryptocurrency Derivatives Exchange",
  },
  {
    slug: "gala",
    description: "Gaming and NFT",
    ticker: "GALA",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_gala.png",
  },
  {
    description: "The nocode protocol for Blockchain development",
    ticker: "GLQ",
    slug: "graphlinq-protocol",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_graphlinq-protocol.png",
  },
  {
    slug: "green-metaverse-token",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_green-metaverse-token.png",
    ticker: "GMT",
    description:
      "GMT is the governance token of STEPN with a limited supply of 6 billion tokens",
  },
  {
    slug: "the-graph",
    description: "An indexing protocol for querying networks",
    ticker: "GRT",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_the-graph.png",
  },
  {
    description: "A new form of distributed consensus",
    slug: "hedera-hashgraph",
    ticker: "HBAR",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_hedera-hashgraph.png",
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
    ticker: "HNT",
    description:
      "Helium is a digital currency and blockchain network that focuses on improving supply chain logistics in the construction and infrastructure sector.",
  },
  {
    description: "Decentralized hosting platform",
    ticker: "HOT",
    slug: "holo",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_holo.png",
  },
  {
    ticker: "HT",
    description: "Blockchain-Powered Loyalty Point System",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_huobi-token.png",
    slug: "huobi-token",
  },
  {
    description: "Public decentralized cloud computing",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_internet-computer.png",
    ticker: "ICP",
    slug: "internet-computer",
  },
  {
    description: "NFT scaling platform",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_immutable-x.png",
    ticker: "IMX",
    slug: "immutable-x",
  },
  {
    slug: "injective-protocol",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_injective-protocol.png",
    description: "Layer-2 DEX",
    ticker: "INJ",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_iotex.png",
    ticker: "IOTX",
    description:
      "A decentralized network for IoT powered by a privacy-centric blockchain",
    slug: "iotex",
  },
  {
    slug: "kucoin-shares",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_kucoin-shares.png",
    description: "Exchange shares",
    ticker: "KCS",
  },
  {
    slug: "kadena",
    description: "Scalable smart-contract blockchain",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_kadena.png",
    ticker: "KDA",
  },
  {
    slug: "klaytn",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_klaytn.png",
    ticker: "KLAY",
    description: "Blockchain network for everyone",
  },
  {
    ticker: "KSM",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_kusama.png",
    description: "An early, unaudited, and unrefined release of Polkadot",
    slug: "kusama",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_unus-sed-leo.png",
    slug: "unus-sed-leo",
    description: "Digital asset trading platform",
    ticker: "LEO",
  },
  {
    ticker: "LINK",
    description: "External data for contracts",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_chainlink.png",
    slug: "chainlink",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_lition.png",
    slug: "lition",
    description: "Blockchain with deletable data features",
    ticker: "LIT",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_loopring.png",
    description: "Decentralized exchange",
    ticker: "LRC",
    slug: "loopring",
  },
  {
    slug: "litecoin",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_litecoin.png",
    ticker: "LTC",
    description: "Faster bitcoin",
  },
  {
    ticker: "MANA",
    description: "Virtual reality platform",
    slug: "decentraland",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_decentraland.png",
  },
  {
    slug: "matic-network",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_matic-network.png",
    description: "Ethereum scaling solution (previously Matic)",
    ticker: "MATIC",
  },
  {
    description: "DeFi and Gaming NFT",
    slug: "mobox",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_mobox.png",
    ticker: "MBOX",
  },
  {
    slug: "iota",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_iota.png",
    description: "Internet-of-Things payments",
    ticker: "MIOTA",
  },
  {
    description: "Stablecoin governance on Ethereum",
    slug: "maker",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_maker.png",
    ticker: "MKR",
  },
  {
    description:
      "MXC IoT solutions provide a wide scope of essential data services, measuring everything from air-quality, water purity & even commuter traffic",
    ticker: "MXC",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_machine-xchange-coin.png",
    slug: "machine-xchange-coin",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_near-protocol.png",
    slug: "near-protocol",
    ticker: "NEAR",
    description: "The Developer Platform for the Open Web",
  },
  {
    ticker: "NEO",
    slug: "neo",
    description: "Chinese Ethereum",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_neo.png",
  },
  {
    ticker: "NEXO",
    slug: "nexo",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_nexo.png",
    description: "The World’s First Instant Crypto Overdrafts",
  },
  {
    description: "Decentralized data exchange protocol ",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_ocean-protocol.png",
    ticker: "OCEAN",
    slug: "ocean-protocol",
  },
  {
    description: "Trusted Digital Asset Exchange",
    ticker: "OKB",
    slug: "okb",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_okb.png",
  },
  {
    ticker: "ONE",
    slug: "harmony",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_harmony.png",
    description: "A high-throughput and low-latency platform",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_ontology.png",
    slug: "ontology",
    description: "Identity and data",
    ticker: "ONT",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_optimism-ethereum.png",
    ticker: "OP",
    description: "Ethereum, scaled",
    slug: "optimism-ethereum",
  },
  {
    description: "A Blockchain monitoring and compliance platform",
    slug: "parsiq",
    ticker: "PRQ",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_parsiq.png",
  },
  {
    ticker: "PUSH",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_epns.png",
    slug: "epns",
    description: "Decentralized Notification Protocol on Ethereum",
  },
  {
    ticker: "RARI",
    slug: "rarible",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_rarible.png",
    description: "Create and sell digital collectibles",
  },
  {
    ticker: "RNDR",
    slug: "render-token",
    description: "Utilizes GPUs across the world",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_render-token.png",
  },
  {
    description: "A lightning fast liquidity network protocol",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_thorchain.png",
    ticker: "RUNE",
    slug: "thorchain",
  },
  {
    description: "Monetizing gaming experience",
    ticker: "SAND",
    slug: "the-sandbox",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_the-sandbox.png",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_siacoin.png",
    slug: "siacoin",
    description: "Rent disk space",
    ticker: "SC",
  },
  {
    slug: "shiba-inu",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_shiba-inu.png",
    description:
      "Half tokens sent to Vitalik, another half locked in LP, keys burned",
    ticker: "SHIB",
  },
  {
    ticker: "SOL",
    slug: "solana",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_solana.png",
    description: "High-speed blockchain without sharding",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_serum.png",
    ticker: "SRM",
    description: "Decentralized derivatives exchange",
    slug: "serum",
  },
  {
    description: "An evolution of Uniswap with SUSHI tokenomics",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_sushi.png",
    ticker: "SUSHI",
    slug: "sushi",
  },
  {
    slug: "telos",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_telos.png",
    ticker: "TLOS",
    description: "A smart contract blockchain running on EOSIO software",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_tron.png",
    description: "Content entertainment protocol",
    ticker: "TRX",
    slug: "tron",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_uniswap.png",
    slug: "uniswap",
    description:
      "Governance system on highly decentralized financial infrastructure",
    ticker: "UNI",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_vechain.png",
    description: "Blockchain platform for products",
    ticker: "VET",
    slug: "vechain",
  },
  {
    description: "Decentralized exchange and crowdfunding",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_waves.png",
    ticker: "WAVES",
    slug: "waves",
  },
  {
    slug: "wax",
    ticker: "WAXP",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_wax.png",
    description: "Super fast NFT exchange",
  },
  {
    slug: "stellar",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_stellar.png",
    description: "Digital IOUs",
    ticker: "XLM",
  },
  {
    slug: "monero",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_monero.png",
    description: "Private digital cash",
    ticker: "XMR",
  },
  {
    slug: "ripple",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_ripple.png",
    ticker: "XRP",
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
    description:
      "The location-verifying proof of origin protocol that connects the blockchain to the real world",
    slug: "xyo",
    ticker: "XYO",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_xyo.png",
  },
  {
    slug: "zcash",
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_zcash.png",
    description: "Private digital cash",
    ticker: "ZEC",
  },
  {
    logoUrl:
      "https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_zilliqa.png",
    ticker: "ZIL",
    description: "Blockchain platform designed to scale",
    slug: "zilliqa",
  },
];
function getCoinMeta(ticker) {
  let obj = arr.find((o) => o.ticker === ticker);
  return obj;
}

module.exports = {
  getCoinMeta,
};
