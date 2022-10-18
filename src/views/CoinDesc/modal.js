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
      <button
        className="w-[50px] h-[100vh] absolute top-0 left-0 cursor-pointer"
        onClick={() => props.setModalOpen(!props.modalOpen)}
      >
        <div className="h-[30px] w-[4px] rounded-3xl bg-white opacity-25 absolute left-[20px] top-1/2 -translate-y-1/2"></div>
      </button>
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
