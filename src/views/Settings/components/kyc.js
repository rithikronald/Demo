import React, { useState } from "react";
import "./kyc.css";
import { getAuth, signOut } from "firebase/auth";
const stages = {
  INTRO: "INTRO",
  DETAILS: "DETAILS",
  VERIFIED: "VERIFIED",
  UPLOAD: "UPLOAD",
};

const Kyc1 = (props) => {
  const auth = getAuth();
  const logout = () => {
    signOut(auth)
      .then((res) => {
        console.log("USER LOGGED OUT", res);
        // setPageRightIndex(1);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
  return (
    <>
      <p className="text-white opacity-40 font-mont text-[24px]">KYC</p>
      <div className="absolute top-1/2 -translate-y-1/2">
        <p className="font-mont text-white font-bold text-[32px]">
          Help us confirm your identity
        </p>
        <button
          onClick={() => {
            // props.setStage(stages.DETAILS)
            logout();
          }}
          className="bg-primaryButton w-[330px] text-white text-[20px] font-bold font-mont flex justify-center items-baseline rounded-xl py-[24px]  mt-[20px]"
        >
          Begin KYC
        </button>
      </div>
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
