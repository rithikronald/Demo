import React from "react";

const AccountDetails = () => {
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
            className="font-mont text-white font-bold text-[32px]"
          >
            Helpdesk
          </p>
        </div>
        <div className="flex mt-[20px]">
          <p
            style={{ flex: 1 }}
            className="font-mont text-white font-bold text-[32px]"
          >
            Legal
          </p>
        </div>
      </div>
    </>
  );
};

export default AccountDetails;
