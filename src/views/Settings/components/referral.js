import React from "react";
import "./referral.css";

const AccountDetails = () => {
  return (
    <>
      <p className="text-white opacity-40 font-mont text-[24px]">
        Refer and Earn
      </p>
      <div className="mt-[30px] ml-[30px] flex">
        <p className="flex-1 font-mont text-white opacity-60 text-[24px]">
          Copy this code/Send an invite using this link to earn rewards!
        </p>
        <div className="flex-1 borderColor">
          <div className="flex justify-center items-center bg-bg borderColorInner absolute top-[3px] left-[3px] right-[3px] bottom-[3px] font-mont text-white font-bold text-[36px]">
            AZQJ998
          </div>
        </div>
      </div>
      <div>
      <div className="mt-[50px] borderColor">
        <div className=" borderColorInner absolute top-[3px] left-[3px] right-[3px] bottom-[3px]">
          <p className="text-white opacity-40 font-mont text-[24px]">
            Earnings
          </p>
          <p className="font-mont text-white text-[32px] font-bold">
            1/5 Referrals
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default AccountDetails;
