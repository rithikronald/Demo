import React from "react";

const AccountDetails = () => {
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
            Ram
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
            Singh
          </p>
        </div>
        <div className="flex mt-[20px]">
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
        <div className="flex mt-[20px]">
          <p
            style={{ flex: 1 }}
            className="font-mont text-white font-bold text-[32px]"
          >
            Reset Password
          </p>
          <p className="font-mont text-white opacity-40 font-bold text-[32px]">
            {">"}
          </p>
        </div>
      </div>
    </>
  );
};

export default AccountDetails;
