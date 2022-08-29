import React from "react";

const AccountDetails = () => {
  return (
    <>
      <p className="text-white opacity-40 font-mont text-[24px]">
        Security
      </p>
      <div className="absolute top-1/2 -translate-y-1/3 w-[90%]">
        <div className="flex">
          <p
            style={{ flex: 1 }}
            className="font-mont text-white font-bold text-[32px]"
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

export default AccountDetails;
