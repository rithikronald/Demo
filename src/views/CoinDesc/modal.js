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

  useEffect(() => {
    axios
      .get(
        `https://us-central1-maximumprotocol-50f77.cloudfunctions.net/api/gateio/listSpotAssets/QrUR3ejnnTY9mgTOLN4dqMwttVP2`,
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        const bal = response?.data?.find((o) => o.currency === props?.ticker);
        setBalance(bal ? bal?.available : 0);
      })
      .catch((e) => console.log("Error", e));
  }, [props?.modalOpen]);

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
        <div className="flex">
          <p className="text-white font-mont font-semibold text-2xl">
            {props?.ticker}
          </p>
          <p className="text-white font-mont font-semibold text-2xl ml-14">
            bal:{balance}
          </p>
        </div>
      )}
      <Tabs
        onClick={(val) => setTrade(val === 0 ? "buy" : "sell")}
        data={tabsData}
      />
      {props?.modalOpen && (
        <GradientContainer
          className={"w-[80%]"}
          children={
            <BuySellModal
              isOpen={props?.modalOpen}
              trade={trade}
              ticker={props?.ticker}
            />
          }
        />
      )}
    </div>
  );
};

export default Modal;
