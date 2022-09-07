import React, { useState } from "react";

const stages = {
  INTRO: "INTRO",
  HELPDESK: "HELPDESK",
};

const About1 = (props) => {
  return (
    <>
      <p className="text-white opacity-40 font-mont text-[24px]">About</p>
      <div className="absolute top-1/2 -translate-y-1/3 w-[90%]">
        <div className="flex">
          <div style={{ flex: 1 }}>
            <p className="font-mont text-white font-bold text-[32px]">
              Whitepaper
            </p>
            <p className="font-mont text-white font-bold opacity-40 text-[20px]">
              Learn More about Maximum Protocol Here
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#fff"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </div>
        <div className="flex mt-[20px]">
          <p
            style={{ flex: 1 }}
            className="font-mont text-white font-bold text-[32px] cursor-pointer"
            onClick={() => props.setStage(stages.HELPDESK)}
          >
            Helpdesk
          </p>
        </div>
      </div>
    </>
  );
};

const About2 = (props) => {
  return (
    <>
      <p
        onClick={() => props.setStage(stages.INTRO)}
        style={{ flex: 1, cursor: "pointer" }}
        className="text-white opacity-40 font-mont text-[24px]"
      >
        {"<"} Helpdesk
      </p>
      <div className="absolute top-1/2 -translate-y-1/3 w-[90%] h-[70%] overflow-y-scroll">
        <div className="flex mt-[20px]">
          <div>
          <p className="font-mont text-white font-bold text-[24px]">
            What is an Index?
          </p>
          <p className="font-mont text-white opacity-40 text-[20px]">
            It’s a hand-picked collection of coins grouped up to give you
            optimal returns based on market.
          </p>
          </div>
        </div>
        <div className="flex mt-[20px]">
          <div>
          <p className="font-mont text-white font-bold text-[24px]">
          What is a generated portfolio suggestion?
          </p>
          <p className="font-mont text-white opacity-40 text-[20px]">
          Just tell it what to do and our Smart Suggestion Engine generates the optimal portfolio for you.
          </p>
          </div>
        </div>
        <div className="flex mt-[20px]">
          <div>
          <p className="font-mont text-white font-bold text-[24px]">
          What is a transaction fee?
          </p>
          <p className="font-mont text-white opacity-40 text-[20px]">
          Maximum Protocol will collect a 1% transaction fee for all purchases made.
          </p>
          </div>
        </div>
        <div className="flex mt-[20px]">
          <div>
          <p className="font-mont text-white font-bold text-[24px]">
          Will there be any performance fee?
          </p>
          <p className="font-mont text-white opacity-40 text-[20px]">
          Yes.
          </p>
          </div>
        </div>
      </div>
    </>
  );
};

const About = () => {
  const [stage, setStage] = useState(stages.INTRO);

  return (
    <>
      {stage === stages.INTRO && <About1 stage={stage} setStage={setStage} />}
      {stage === stages.HELPDESK && (
        <About2 stage={stage} setStage={setStage} />
      )}
    </>
  );
};

export default About;
