import axios from "axios";
import React, { useEffect, useState } from "react";
import { BuySellModal } from "../../components/BuySellModal";
import { GradientContainer } from "../../components/GradientContainer";
import { Tabs } from "../../components/Tabs";
import { numFormatter } from "../../utility/kFormatter";
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
  const [balance, setBalance] = useState(0);
  const [refresh, setRefresh] = useState(0);
  const [refresh2, setRefresh2] = useState(0);
  const [showRefresh, setShowRefresh] = useState(true)
  const [showRefresh2, setShowRefresh2] = useState(true)
  const [balance2, setBalance2] = useState(0)

  useEffect(() => {
    setShowRefresh(false)
    axios
      .get(
        `https://us-central1-maximumprotocol-50f77.cloudfunctions.net/api/gateio/listSpotAssets/${localStorage.getItem('uid')}`,
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        const bal = response?.data?.find((o) => o.currency === props?.ticker);
        setBalance(bal ? bal?.available : 0);
        setShowRefresh(true)
      })
      .catch((e) => console.log("Error", e));
  }, [props?.modalOpen, refresh]);

  useEffect(() => {
    setShowRefresh2(false)
    axios
      .get(
        `https://us-central1-maximumprotocol-50f77.cloudfunctions.net/api/gateio/listSpotAssets/QrUR3ejnnTY9mgTOLN4dqMwttVP2`,
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        const bal = response?.data?.find((o) => o.currency === 'USDT');
        setBalance2(Number(bal?.available).toFixed(2));
        setShowRefresh2(true)
      })
      .catch((e) => console.log("Error", e));
  }, [refresh2])

  return (
    <div
      style={{
        backgroundImage: `url('/images/rightSectionbg.png')`,
      }}
      className={`flex flex-col transitionClass items-center gap-10  justify-center fixed top-0 right-0 h-[100vh] w-[30vw] ${
        props.modalOpen ? "translate-x-[0px]" : "translate-x-[27vw]"
      } bg-bg bg-no-repeat bg-cover bg-center  z-[100]`}
    >
      <button
        className="w-[50px] h-[100vh] absolute top-0 left-0 cursor-pointer"
        onClick={() =>
          props?.modalOpen ? props.setModalOpen(!props.modalOpen) : null
        }
      >
        <div className="h-[30px] w-[4px] rounded-3xl bg-white opacity-25 absolute left-[20px] top-1/2 -translate-y-1/2"></div>
      </button>
      {props?.modalOpen && (
        <div className="flex justify-center items-center">
          <p className="text-white font-mont font-semibold text-2xl">
            {props?.ticker}
          </p>
          <p className="text-white font-mont font-semibold text-lg ml-14">
            Balance: {balance}
          </p>
          {showRefresh && <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-4 h-4 ml-3 cursor-pointer"
            onClick={() => setRefresh((prev) => prev + 1)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>}
        </div>
      )}
      <Tabs
        onClick={(val) => setTrade(val === 0 ? "buy" : "sell")}
        data={tabsData}
      />
      {props?.modalOpen && (
        <GradientContainer
          className={"w-[74%]"}
          children={
            <BuySellModal
              isOpen={props?.modalOpen}
              trade={trade}
              ticker={props?.ticker}
              price={props?.price}
              isAllCoins={props?.isAllCoins}
            />
          }
        />
      )}
      <div className="flex flex-col w-[80%]">
        <p className="text-gray-400 text-xs text-center">
          Make sure you have enough balance in wallet to proceed with this
          deposit transaction
        </p>
        <GradientContainer
          className={"mt-3"}
          children={
            <div className="rounded-3xl h-full flex flex-col p-4">
              <div className="flex items-center">
              <p className="text-gray-400 text-sm font-mont">Available Balance</p>
              {showRefresh2 && <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-4 h-4 ml-3 cursor-pointer"
            onClick={() => setRefresh2((prev) => prev + 1)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>}</div>
              <p className="text-white font-bold text-2xl 2xl:text-3xl 3xl:text-5xl">
                <span className="font-normal font-mont">$</span>{balance2}
              </p>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Modal;
