import React, { useState } from "react";

const stages = {
  INTRO: "INTRO",
  EMAIL: "EMAIL",
};

const AccountDetails1 = (props) => {
  return (
    <>
      <p className="text-white opacity-40 font-mont text-[24px]">
        Account Details
      </p>
      <div className="absolute top-1/2 -translate-y-1/3 w-[90%]">
        <div className="flex">
          <p
            style={{ flex: 1 }}
            className="font-mont text-white font-bold text-[32px]"
          >
            First Name
          </p>
          <p className="font-mont text-white opacity-40 font-bold text-[32px]">
            first name
          </p>
        </div>
        <div className="flex mt-[20px]">
          <p
            style={{ flex: 1 }}
            className="font-mont text-white font-bold text-[32px]"
          >
            Last Name
          </p>
          <p className="font-mont text-white opacity-40 font-bold text-[32px]">
            last name
          </p>
        </div>
        <div
          className="flex mt-[20px] cursor-pointer"
          onClick={() => props.setStage(stages.EMAIL)}
        >
          <p
            style={{ flex: 1 }}
            className="font-mont text-white font-bold text-[32px]"
          >
            Email
          </p>
          <p className="font-mont text-white opacity-40 font-bold text-[32px]">
            {">"}
          </p>
        </div>
        <div className="flex mt-[20px]">
          <p
            style={{ flex: 1 }}
            className="font-mont text-white font-bold text-[32px]"
          >
            Phone Number
          </p>
          <p className="font-mont text-white opacity-40 font-bold text-[32px]">
            {">"}
          </p>
        </div>
        {/* <div className="flex mt-[20px]">
          <p
            style={{ flex: 1 }}
            className="font-mont text-white font-bold text-[32px]"
          >
            Reset Password
          </p>
          <p className="font-mont text-white opacity-40 font-bold text-[32px]">
            {">"}
          </p>
        </div> */}
      </div>
    </>
  );
};
const AccountDetails2 = (props) => {
  return (
    <>
      <p
        onClick={() => props.setStage(stages.INTRO)}
        style={{ flex: 1, cursor: "pointer" }}
        className="text-white opacity-40 font-mont text-[24px]"
      >
        {"<"} Account Details
      </p>
      <div className="absolute top-1/2 -translate-y-1/3 w-[90%]">
        <div className="inputCard w-[650px] mt-4 h-[60px]  rounded-2xl bg-gradient-to-b from-fuchsia-500 to-cyan-500 p-0.5 3xl:h-20">
          <div className="bg-bg rounded-2xl h-full flex flex-row items-center justify-between">
            <div className="flex flex-col h-full w-full">
              <input
                className="
                    rounded-2xl
                    bg-transparent
                    form-control
                    block
                    w-full
                    h-full
                    px-3
                    py-1.5
                    text-base
                    font-mont
                    text-white
                    transition
                    ease-in-out
                    m-0
                    focus:text-white focus:bg-transparent focus:border-none focus:outline-none"
                id="nameInput"
                placeholder="Enter Email"
                value="rajendra123@gmail.com"
              />
            </div>
            <img
              className="mr-[10px]"
              src={require("../../../assets/pencilIcon.png")}
            />
          </div>
        </div>
        <div className="flex items-center mt-[20px]" >
          <img src={require('../../../assets/greenVerifiedIcon.png')} />
          <p className="font-mont text-white text-[16px] ml-[10px]">Your Email has been Verified</p>
        </div>
      </div>
    </>
  );
};

const AccountDetails = () => {
  const [stage, setStage] = useState(stages.INTRO);

  return (
    <>
      {stage === stages.INTRO && (
        <AccountDetails1 stage={stage} setStage={setStage} />
      )}
      {stage === stages.EMAIL && (
        <AccountDetails2 stage={stage} setStage={setStage} />
      )}
    </>
  );
};

export default AccountDetails;
