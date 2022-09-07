import React, { useState } from "react";

const stages = {
  INTRO: "INTRO",
  RESET: "RESET",
  VERIFIFED: "VERIFIED",
};

const Security1 = (props) => {
  return (
    <>
      <p className="text-white opacity-40 font-mont text-[24px]">Security</p>
      <div className="absolute top-1/2 -translate-y-1/3 w-[90%]">
        <div className="flex">
          <p
            style={{ flex: 1 }}
            className="font-mont text-white font-bold text-[32px] cursor-pointer"
            onClick={() => props.setStage(stages.RESET)}
          >
            Reset Password
          </p>
        </div>
        <div className="flex mt-[20px]">
          <p
            style={{ flex: 1 }}
            className="font-mont text-white font-bold text-[32px]"
          >
            2 Factor Authentication
          </p>
        </div>
        <div className="flex mt-[20px]">
          <p
            style={{ flex: 1 }}
            className="font-mont text-white font-bold text-[32px]"
          >
            Devices and Activity
          </p>
        </div>
        <div className="flex mt-[20px]">
          <p
            style={{ flex: 1 }}
            className="font-mont text-white font-bold text-[32px]"
          >
            Advanced
          </p>
        </div>
      </div>
    </>
  );
};
const Security2 = (props) => {
  return (
    <>
      <p
        onClick={() => props.setStage(stages.INTRO)}
        style={{ flex: 1, cursor: "pointer" }}
        className="text-white opacity-40 font-mont text-[24px]"
      >
        {"<"} Security
      </p>
      <div className="absolute top-1/2 -translate-y-[150px] w-[90%]">
        <p className="font-mont text-white font-bold text-[32px]">
          A link will be sent to your registered number.
        </p>
        <p className="font-mont text-white text-[16px] mt-[50px]">
          Please type 'yes' to confirm
        </p>
        <div className="inputCard w-[450px] mt-4 h-[60px]  rounded-2xl bg-gradient-to-b from-fuchsia-500 to-cyan-500 p-0.5 3xl:h-20">
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
              />
            </div>
          </div>
        </div>
        <button
          onClick={() => props.setStage(stages.VERIFIFED)}
          className="mt-[50px] bg-primaryButton w-[330px] text-white text-[20px] font-bold font-mont flex justify-center items-baseline rounded-xl py-[24px]"
        >
          Confirm
        </button>
      </div>
    </>
  );
};
const Security3 = (props) => {
  return (
    <>
      <p
        onClick={() => props.setStage(stages.RESET)}
        style={{ flex: 1, cursor: "pointer" }}
        className="text-white opacity-40 font-mont text-[24px]"
      >
        {"<"} Security
      </p>
      <div className="absolute top-1/2 -translate-y-1/2 w-[90%] flex items-center">
        <div className="flex items-center mt-[20px]">
          <img className="w-[72x] h-[72px] " src={require("../../../assets/greenVerifiedIcon2.png")} />
          <div>
            <p className="font-mont text-white font-bold text-[32px] ml-[10px]">
              Link sent successfully!
            </p>
            <p className="font-mont text-white text-[16px] ml-[10px]">
              Please follow the instructions in the given link
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const Security = () => {
  const [stage, setStage] = useState(stages.INTRO);

  return (
    <>
      {stage === stages.INTRO && (
        <Security1 stage={stage} setStage={setStage} />
      )}
      {stage === stages.RESET && (
        <Security2 stage={stage} setStage={setStage} />
      )}
      {stage === stages.VERIFIFED && (
        <Security3 stage={stage} setStage={setStage} />
      )}
    </>
  );
};

export default Security;
