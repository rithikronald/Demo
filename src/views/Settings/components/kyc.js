import React from "react";

const Kyc = () => {
  return (
    <>
      <p className="text-white opacity-40 font-mont text-[24px]">KYC</p>
      <div className="absolute top-1/2 -translate-y-1/2">
        <p className="font-mont text-white font-bold text-[32px]">
          Help us confirm your identity
        </p>
        <button className="bg-primaryButton w-[330px] text-white text-[20px] font-bold font-mont flex justify-center items-baseline rounded-xl py-[24px]  mt-[20px]">
          Begin KYC
        </button>
      </div>
    </>
  );
}

export default Kyc