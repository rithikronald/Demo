import "./style.css";
import marketCapLogo from "../../assets/marketCapLogo.png";
import { CustomAreaChart } from "../../components/Charts/CustomAreaChart";
import { CustomLineChart } from "../../components/Charts/CustomLineChart";

const CoinDesc = () => {
  return (
    <div className="p-5 px-10 overflow-hidden w-screen h-screen bg-bgl1 justify-between flex flex-col">
      <div className="flex justify-end space-x-8">
        {["1W", "1M", "3M", "1Y", "ALL"].map((ele) => (
          <div
            className={`text-[12px] text-white font-mont w-[70px] flex justify-center items-center ${
              ele === "1Y" ? "bg-regularPurple rounded-full p-1" : ""
            }`}
          >
            {ele}
          </div>
        ))}
      </div>
      <div className="flex  h-[30%]">
        <div className="flex basis-1/2 mt-5">
          <div>
            <div className="flex">
              <p className="text-3xl font-mont text-white font-bold">
                Bitcoin BTC
              </p>
              <div className="flex space-x-1 ml-2">
                <div className="w-2 h-2 bg-red-500 rounded-full" />
                <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                <div className="w-2 h-2 bg-green-500 rounded-full" />
              </div>
            </div>
            <p className="font-mont text-white text-sm mt-8 pr-[40px]">
              Bitcoin is a decentralized digital currency that can be
              transferred on the peer-to-peer bitcoin network. Bitcoin
              transactions are verified by network nodes through cryptography
              and recorded in a public distributed ledger called a blockchain.
            </p>
          </div>
          <div className="flex-col text-white flex justify-">
            <div className="priceBorder p-[1px]">
              <div className="bg-bgl1 font-mont flex justify-center items-baseline py-[13px] px-[23px] priceBorderOnly">
                <p className="text-[12px] ">Price</p>
                <p className="text-[18px] ml-[5px]">$</p>
                <p className="text-[25px] font-bold">40123</p>
                <p className="text-[15px] font-bold">.79</p>
              </div>
            </div>
            <div className="flex justify-center items-end mt-8">
              <button className="bg-primaryButton font-mont flex justify-center items-baseline rounded-xl py-[15px] px-[20px] w-[100%]">
                Trade Now
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 w-[50%] ml-5">
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
      <div className="grid grid-cols-2 gap-10">
        <div>
          <div
            className={`text-[15px] text-white font-mont flex space-x-4 items-center`}
          >
            <p>Market Cap</p>
            <p className="bg-regularPurple rounded-full px-2 ">Social Volume</p>
            <p>Social Volume</p>
          </div>
          <div className="flex bg-gradient-to-b from-fuchsia-500 to-cyan-500 rounded-2xl items-center h-[230px] p-[1px] mt-4 w-full">
            <div className="rounded-2xl flex items-center bg-bgl1 h-full w-full">
              <CustomAreaChart width={"100%"} height={"98%"} />
            </div>
          </div>
        </div>
        <div>
          <div
            className={`text-[15px] text-white font-mont flex space-x-4 items-center`}
          >
            <p style={{ transform: "translateX(20px)" }}>Price Action</p>
          </div>
          <div className="flex bg-gradient-to-b from-fuchsia-500 to-cyan-500 rounded-2xl items-center h-[230px] p-[1px] mt-4 w-full">
            <div className="rounded-2xl flex items-center bg-bgl1 h-full w-full">
              <CustomAreaChart width={"100%"} height={"98%"} />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-8 mt-4">
        <div>
          <div
            className={`text-[15px] text-white font-mont flex space-x-4 items-center`}
          >
            <p style={{ transform: "translateX(20px)" }}>Social Dominance</p>
          </div>
          <div className="h-[130px] mt-2 p-[1px] newGraphBorder">
            <div className="flex items-center newGraphBorderInner h-[128px]  bg-bgl1">
              <CustomAreaChart width={"100%"} height={"98%"} />
            </div>
          </div>
        </div>
        <div>
          <div
            className={`text-[15px] text-white font-mont flex space-x-4 items-center`}
          >
            <p style={{ transform: "translateX(20px)" }}>Network Growth</p>
          </div>
          <div className="h-[130px] mt-2 p-[1px] newGraphBorder">
            <div className="flex items-center newGraphBorderInner h-[128px] bg-bgl1">
              <CustomAreaChart width={"100%"} height={"98%"} />
            </div>
          </div>
        </div>
        <div>
          <div
            className={`text-[15px] text-white font-mont flex space-x-4 items-center`}
          >
            <p style={{ transform: "translateX(20px)" }}>Market Sentiment</p>
          </div>
          <div className="h-[130px] mt-2 p-[1px] newGraphBorder">
            <div className="flex items-center newGraphBorderInner h-[128px]  bg-bgl1">
              <CustomLineChart width={"100%"} height={"98%"} />
            </div>
          </div>
        </div>
        <div>
          <div
            className={`text-[15px] text-white font-mont flex space-x-4 items-center`}
          >
            <p style={{ transform: "translateX(20px)" }}>Dev Activity</p>
          </div>
          <div className="h-[130px] mt-2 p-[1px] newGraphBorder">
            <div className="flex items-center newGraphBorderInner h-[128px]  bg-bgl1">
              <CustomLineChart width={"100%"} height={"98%"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinDesc;
