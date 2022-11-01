import React, { useState } from "react";
import "./kyc.css";
import Persona from "persona";
import Modal from "react-bootstrap/Modal";

const stages = {
  INTRO: "INTRO",
  DETAILS: "DETAILS",
  VERIFIED: "VERIFIED",
  UPLOAD: "UPLOAD",
};

const Kyc1 = (props) => {
  const [beginKYC, setBeginKYC] = useState(false);

  const InlineInquiry = () => {
    return (
      <div className="w-full h-[98%] flex">
        <Persona.Inquiry
          templateId="itmpl_jn1nNDs3wMGuoBajLvmT5t5h"
          environment="sandbox"
          onLoad={() => {
            console.log("Loaded inline");
          }}
          onComplete={(response) => {
            // Inquiry completed. Optionally tell your server about it.
            console.log("KYC response", response);
            setBeginKYC(false);
          }}
        />
      </div>
    );
  };

  return (
    <>
      {/* <button type="button"
  class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
  data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button> */}
      <p className="text-white opacity-40 font-mont text-[24px]">KYC</p>
      {beginKYC ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setBeginKYC(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative h-[700px] p-4 mx-auto bg-white rounded-md shadow-lg">
                <div className="w-full flex justify-end">
                  <svg
                    onClick={() => setBeginKYC(false)}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <InlineInquiry />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center flex-col w-[100%] translate-x-[-48px]">
          <p className="font-mont text-white font-bold text-[22px]">
            Help us confirm your identity
          </p>
          <button
            onClick={() => {
              // props.setStage(stages.DETAILS);
              // InlineInquiry();
              setBeginKYC(true);
            }}
            data-modal-toggle="popup-modal"
            className=" bg-primaryButton w-[330px] text-white text-[20px] font-bold font-mont flex justify-center items-baseline rounded-xl py-[24px]  mt-[20px]"
          >
            Begin KYC
          </button>
        </div>
      )}
    </>
  );
};
const Kyc2 = (props) => {
  return (
    <>
      <div className="flex">
        <p
          onClick={() => props.setStage(stages.INTRO)}
          style={{ flex: 1, cursor: "pointer" }}
          className="text-white opacity-40 font-mont text-[24px]"
        >
          {"<"} KYC
        </p>
        <button
          onClick={() => props.setStage(stages.UPLOAD)}
          className="w-[80px] h-[45px] font-mont text-white bg-bgl2"
        >
          Next {">"}
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2">
        <p className="font-mont text-white font-bold text-[18px]">
          Please Enter the following details exactly as written on your PAN Card
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
                    border border-solid border-gray-300
                    transition
                    ease-in-out
                    m-0
                    focus:text-white focus:bg-transparent focus:border-none focus:outline-none"
                id="nameInput"
                placeholder="Full Name"
              />
            </div>
          </div>
        </div>
        <div className="inputCard w-[450px] mt-4 h-[60px]  rounded-2xl bg-gradient-to-b from-fuchsia-500 to-cyan-500 p-0.5 3xl:h-20">
          <div className="bg-bg rounded-2xl h-full flex flex-row items-center justify-between">
            <div className="flex flex-col h-full w-full">
              <input
                type="date"
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
                    border border-solid border-gray-300
                    transition
                    ease-in-out
                    m-0
                    focus:text-white focus:bg-transparent focus:border-none focus:outline-none"
                id="dobInput"
                placeholder="Date of Birth"
              />
            </div>
          </div>
        </div>
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
                    border border-solid border-gray-300
                    transition
                    ease-in-out
                    m-0
                    focus:text-white focus:bg-transparent focus:border-none focus:outline-none"
                id="PANinput"
                placeholder="PAN Number"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const Kyc3 = (props) => {
  return (
    <>
      <div className="flex items-center">
        <p
          style={{ flex: 1, cursor: "pointer" }}
          className="text-white opacity-40 font-mont text-[24px]"
          onClick={() => props.setStage(stages.DETAILS)}
        >
          {"<"} KYC
        </p>
        <p className="mr-[10px] text-[#fff500] font-mont text-[16px]">
          Pending
        </p>
        <button
          onClick={() => props.setStage(stages.VERIFIED)}
          className="w-[80px] h-[45px] font-mont text-white bg-bgl2"
        >
          Next {">"}
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-[120px] flex">
        <div className="w-[400px] h-[300px] mr-[20px] yellowBackground pt-[50px]">
          <div className="w-full flex items-center justify-center">
            <img
              className="h-[70px] mr-2"
              src={require("../../../assets/idCardIcon.png")}
            />
            <p className="font-mont text-white text-[20px]">ID Card</p>
          </div>
          <div className="px-[120px] w-full flex items-center justify-between pt-[50px]">
            <div className="flex flex-col items-center">
              <img
                className="h-[55px]"
                src={require("../../../assets/scanIcon.png")}
              />
              <p className="font-mont text-white text-[16px] mt-[20px]">Scan</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="h-[55px]"
                src={require("../../../assets/uploadIcon.png")}
              />
              <p className="font-mont text-white text-[16px] mt-[20px]">
                Upload
              </p>
            </div>
          </div>
        </div>
        <div className="w-[400px] h-[300px] mr-[20px] yellowBackground pt-[50px]">
          <div className="w-full flex items-center justify-center">
            <img
              className="h-[70px] mr-2"
              src={require("../../../assets/panCardIcon.png")}
            />
            <p className="font-mont text-white text-[20px]">PAN Card</p>
          </div>
          <div className="px-[120px] w-full flex items-center justify-between pt-[50px]">
            <div className="flex flex-col items-center">
              <img
                className="h-[55px]"
                src={require("../../../assets/scanIcon.png")}
              />
              <p className="font-mont text-white text-[16px] mt-[20px]">Scan</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="h-[55px]"
                src={require("../../../assets/uploadIcon.png")}
              />
              <p className="font-mont text-white text-[16px] mt-[20px]">
                Upload
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const Kyc4 = (props) => {
  return (
    <>
      <div className="flex items-center">
        <p
          style={{ flex: 1, cursor: "pointer" }}
          className="text-white opacity-40 font-mont text-[24px]"
          onClick={() => props.setStage(stages.UPLOAD)}
        >
          {"<"} KYC
        </p>
      </div>
      <div className="absolute top-1/2 -translate-y-[120px] flex justify-center items-center flex-col w-full box-border ">
        <img src={require("../../../assets/verificationSuccess.png")} />
        <p className="font-mont text-white text-[16px] mt-[20px]">
          Verified Successfully
        </p>
      </div>
    </>
  );
};

const Kyc = () => {
  const [stage, setStage] = useState(stages.INTRO);

  return (
    <>
      {stage === stages.INTRO && <Kyc1 stage={stage} setStage={setStage} />}
      {stage === stages.DETAILS && <Kyc2 stage={stage} setStage={setStage} />}
      {stage === stages.UPLOAD && <Kyc3 stage={stage} setStage={setStage} />}
      {stage === stages.VERIFIED && <Kyc4 stage={stage} setStage={setStage} />}
    </>
  );
};

export default Kyc;
