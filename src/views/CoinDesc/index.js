import "./style.css";
import marketCapLogo from "../../assets/marketCapLogo.png";

const CoinDesc = () => {
  return (
    <div className="p-5 overflow-hidden w-screen h-screen bg-gradient-to-tl from-bgl1 to-bgl2">
      <div className="flex justify-end space-x-10">
        {["1W", "1M", "3M", "1Y", "ALL"].map((ele) => (
          <div
            className={`text-[12px] text-white font-mont w-[70px] flex justify-center items-center ${
              ele === "1Y" ? "bg-regularPurple rounded-full p-2" : ""
            }`}
          >
            {ele}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-5 mt-[20px] text-white">
        <div className="grid grid-cols-[70%_30%]">
          <div>
            <p className="text-3xl font-mont text-white font-bold">
              Bitcoin BTC
            </p>
            <p className="font-mont text-white text-sm pt-[15px]">
              Bitcoin is a decentralized digital currency that can be
              transferred on the peer-to-peer bitcoin network. Bitcoin
              transactions are verified by network nodes through cryptography
              and recorded in a public distributed ledger called a blockchain.
            </p>
          </div>
          <div className="flex-col">
            <div className="bg-transparent font-mont flex justify-center items-baseline py-[13px] px-[23px] priceBorder">
              <p className="text-[9px]">Price</p>
              <p className="text-[15px]">$</p>
              <p className="text-[25px] font-bold">40123</p>
              <p className="text-[15px] font-bold">.79</p>
            </div>
            <div className="h-[50%] flex justify-center items-end">
              <button className="bg-primaryButton font-mont flex justify-center items-baseline rounded-xl py-[15px] px-[20px] w-[100%]">
                Trade Now
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 grid-rows-2">
          {[
            {
              title: "Market Cap",
              logo: marketCapLogo,
              value: "1239k",
            },
            {
              title: "Market Cap",
              logo: marketCapLogo,
              value: "1239k",
            },
            {
              title: "Market Cap",
              logo: marketCapLogo,
              value: "1239k",
            },
            {
              title: "Market Cap",
              logo: marketCapLogo,
              value: "1239k",
            },
            {
              title: "Market Cap",
              logo: marketCapLogo,
              value: "1239k",
            },
            {
              title: "Market Cap",
              logo: marketCapLogo,
              value: "1239k",
            },
          ].map((ele) => (
            <div className="flex items-center">
              <img src={ele.logo} />
              <div className="ml-3 font-mont text-white">
                <p className="text-[9px]">{ele.title}</p>
                <p className="text-[25px] font-bold">{ele.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-[50px]">
        <div>
          <div className={`text-[15px] text-white font-mont flex space-x-4 items-center`}>
            <p>Market Cap</p>
            <p className="bg-regularPurple rounded-full px-2 " >Social Volume</p>
            <p>Social Volume</p>
          </div>
          <div className="h-[130px] mt-[15px] border-2 border-blue-500 rounded-xl">

          </div>
        </div>
        <div>
          <div className={`text-[15px] text-white font-mont flex space-x-4 items-center`}>
            <p>Price Action</p>
          </div>
          <div className="h-[130px] mt-[15px] border-2 border-blue-500 rounded-xl">

          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3 mt-[40px]">
        <div>
          <div className={`text-[15px] text-white font-mont flex space-x-4 items-center`}>
            <p>Social Dominance</p>
          </div>
          <div className="h-[130px] mt-[15px] border-2 border-blue-500 rounded-xl">

          </div>
        </div>
        <div>
          <div className={`text-[15px] text-white font-mont flex space-x-4 items-center`}>
            <p>Network Growth</p>
          </div>
          <div className="h-[130px] mt-[15px] border-2 border-blue-500 rounded-xl">

          </div>
        </div>
        <div>
          <div className={`text-[15px] text-white font-mont flex space-x-4 items-center`}>
            <p>Market Sentiment</p>
          </div>
          <div className="h-[130px] mt-[15px] border-2 border-blue-500 rounded-xl">

          </div>
        </div>
        <div>
          <div className={`text-[15px] text-white font-mont flex space-x-4 items-center`}>
            <p>Dev Activity</p>
          </div>
          <div className="h-[130px] mt-[15px] border-2 border-blue-500 rounded-xl">

          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinDesc;
