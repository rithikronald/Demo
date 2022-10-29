import React from "react";

const AccountDetails = () => {
  return (
    <>
      <p className="text-white opacity-40 font-mont text-[24px]">Support</p>
      <div className="absolute top-1/2 -translate-y-[140px] w-[90%]">
        <div className="flex">
          <div style={{ flex: 1 }}>
            <p className="font-mont text-white font-bold text-[32px]">
              Contact Us
            </p>
            <p className="font-mont text-white opacity-40 text-[20px]">
              Please reach out to us if you face any issues
            </p>
          </div>
        </div>
        <div className="flex mt-[20px]">
          <div style={{ flex: 1 }}>
            <p className="font-mont text-white font-bold text-[26px]">
              Email
            </p>
            <p className="font-mont text-white opacity-40 text-[20px]">
              contact@m3p.io
            </p>
          </div>
        </div>
        <div className="flex mt-[20px]">
          <div style={{ flex: 1 }}>
            <p className="font-mont text-white font-bold text-[26px]">
              Phone Number
            </p>
            <p className="font-mont text-white opacity-40 text-[20px]">
              +91 95383 20888
            </p>
          </div>
        </div>
        <div className="flex mt-[20px]">
          <div style={{ flex: 1 }}>
            <p className="font-mont text-white font-bold text-[32px]">
              Lets Connect
            </p>
            <p className="font-mont text-white opacity-40 text-[20px]">
              Follow us on social media for more!
            </p>
          </div>
          <div>
            <div  className="flex justify-between w-[150px]" >
            <img  src={require('../../../assets/facebook.png')} />
            <img src={require('../../../assets/linkedin.png')} />
            <img src={require('../../../assets/twitter.png')} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountDetails;
