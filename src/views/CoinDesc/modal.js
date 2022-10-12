import React, { useState } from "react";
import { BuySellModal } from "../../components/BuySellModal";
import { GradientContainer } from "../../components/GradientContainer";
import { Tabs } from "../../components/Tabs";
import "./style.css";

const tabsData = [
  {
    label: "Buy",
  },
  {
    label: "Sell",
  },
];

const Modal = (props) => {
  const [trade, setTrade] = useState("buy");
  return (
    <div
      style={{
        backgroundImage: `url('/images/rightSectionbg.png')`,
      }}
      className={`flex flex-col transitionClass items-center gap-10  justify-center fixed top-0 right-0 h-[100vh] w-[30vw] ${
        props.modalOpen ? "translate-x-[0px]" : "translate-x-[27vw]"
      } bg-bg bg-no-repeat bg-cover bg-center  z-[100]`}
    >
      <div
        className="w-[50px] h-[100vh] absolute top-0 left-0 cursor-pointer"
        onClick={() => props.setModalOpen(!props.modalOpen)}
      >
        <div className="h-[30px] w-[4px] rounded-3xl bg-white opacity-25 absolute left-[20px] top-1/2 -translate-y-1/2"></div>
      </div>
      <Tabs
        onClick={(val) => setTrade(val === 0 ? "buy" : "sell")}
        data={tabsData}
      />
      <GradientContainer
        className={"w-[75%]"}
        children={<BuySellModal trade={trade} ticker={props?.ticker} />}
      />
    </div>
  );
};

export default Modal;

{
  /* <div className="flex w-[200px] justify-around mb-[60px]">
        <p
          className="font-mont text-white text-[15px] relative cursor-pointer"
          onClick={() => setBuy(true)}
        >
          BUY
          {buy && (
            <div className="absolute -bottom-[10px] left-1/2 -translate-x-1/2 w-14 h-2 bg-orange-500 rounded-3xl"></div>
          )}
        </p>
        <p
          className="font-mont text-white text-[15px] relative cursor-pointer"
          onClick={() => setBuy(false)}
        >
          SELL
          {!buy && (
            <div className="absolute -bottom-[10px] left-1/2 -translate-x-1/2 w-14 h-2 bg-orange-500 rounded-3xl"></div>
          )}
        </p>
      </div>
      <div className="priceBorder p-[1px]">
        <div className="bg-bgl2 priceBorderOnly flex flex-col w-[336px] items-center p-[10px]">
          <div className="p-[20px] flex justify-around items-center w-[286px]">
            <div
              onClick={() => setLimit(true)}
              className={`font-mont text-white text-[15px] cursor-pointer ${
                limit ? "border-2 border-[rgba(255,255,255,0.2)]" : ""
              } rounded-3xl px-6 py-[4px]`}
            >
              Limit
            </div>
            <div
              onClick={() => setLimit(false)}
              className={`font-mont text-white text-[15px] ${
                !limit ? "border-2 border-[rgba(255,255,255,0.2)]" : ""
              } cursor-pointer rounded-3xl px-6 py-[4px]`}
            >
              Market
            </div>
          </div>
          <div>
            <p className="font-mont text-white text-[10px] pl-4 mt-6">Price</p>
            <div className="inputCard w-[250px] mt-2 h-[70px] rounded-2xl bg-gradient-to-b from-fuchsia-500 to-cyan-500 p-[1px] 3xl:h-20">
              <div className="bg-bgl2 rounded-2xl h-full flex flex-row items-center justify-between">
                <div className=" flex flex-col h-full w-full relative">
                  <div className="absolute top-1/2 left-[30px] font-mont text-white text-[26px] font-semibold -translate-y-1/2">
                    $
                  </div>
                  <input
                    defaultValue="6513.44"
                    className="
                    rounded-2xl
                    bg-transparent
                    form-control
                    block
                    w-full
                    h-full
                    px-3
                    pl-[50px]
                    py-1.5
                    text-[35px]
                    font-mont
                    font-bold
                    text-white
                    transition
                    ease-in-out
                    m-0
                    focus:text-white focus:bg-transparent focus:border-none focus:outline-none"
                    id="priceInput"
                    placeholder="Price"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="font-mont text-white text-[10px] pl-4 mt-6">Amount</p>
            <div className="inputCard w-[250px] mt-2 h-[70px] rounded-2xl bg-gradient-to-b from-fuchsia-500 to-cyan-500 p-[1px] 3xl:h-20">
              <div className="bg-bgl2 rounded-2xl h-full flex flex-row items-center justify-between">
                <div className=" flex flex-col h-full w-full relative">
                  <input
                    defaultValue="0.245"
                    className="
                    rounded-2xl
                    bg-transparent
                    form-control
                    block
                    w-full
                    h-full
                    px-3
                    pl-[50px]
                    py-1.5
                    text-[35px]
                    font-mont
                    font-bold
                    text-white
                    transition
                    ease-in-out
                    m-0
                    focus:text-white focus:bg-transparent focus:border-none focus:outline-none"
                    id="priceInput"
                    placeholder="Price"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-[20px]">
            <p className="font-mont text-white text-[10px] pl-4 mt-6">Total</p>
            <div className="inputCard w-[250px] mt-2 h-[70px] rounded-2xl bg-gradient-to-b from-fuchsia-500 to-cyan-500 p-[1px] 3xl:h-20">
              <div className="bg-bgl2 rounded-2xl h-full flex flex-row items-center justify-between">
                <div className=" flex flex-col h-full w-full relative">
                  <div className="absolute top-1/2 left-[30px] font-mont text-white text-[26px] font-semibold -translate-y-1/2">
                    $
                  </div>
                  <input
                    defaultValue="6553.94"
                    className="
                    rounded-2xl
                    bg-transparent
                    form-control
                    block
                    w-full
                    h-full
                    px-3
                    pl-[50px]
                    py-1.5
                    text-[35px]
                    font-mont
                    font-bold
                    text-white
                    transition
                    ease-in-out
                    m-0
                    focus:text-white focus:bg-transparent focus:border-none focus:outline-none"
                    id="priceInput"
                    placeholder="Price"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */
}
{
  /* <button
        onClick={() => props.setModalOpen(false)}
        className="bg-primaryButton font-mont text-white mt-[20px] p-4 font-medium rounded-lg w-[356px] h-14 shadow-lg text-xl flex justify-center items-center"
      >
        Trade
      </button> */
}
