import React, { useState } from "react";
import Kyc from "./components/kyc";
import AccountDetails from "./components/accountDetails";
import Security from "./components/security";
import About from "./components/about";
import Support from "./components/support";
import Referral from "./components/referral";
import './style.css'

const types = {
  KYC: "KYC",
  ACCOUNT_DETAILS: "ACCOUNT_DETAILS",
  SECURITY: "SECURITY",
  REFERRAL: "REFERRAL",
  ABOUT: "ABOUT",
  SUPPORT: "SUPPORT",
};

const Settings = () => {
  const [currentScreen, setCurrentScreen] = useState(types.KYC);

  const InnerComponent = () => {
    switch (currentScreen) {
      case types.KYC:
        return <Kyc />;
      case types.ACCOUNT_DETAILS:
        return <AccountDetails />;
      case types.SECURITY:
        return <Security />;
      case types.ABOUT:
        return <About />;
      case types.SUPPORT:
        return <Support />;
      case types.REFERRAL:
        return <Referral />;
      default:
        return <></>;
    }
  };

  return (
    <div className="Settings bg-bgl1 flex h-screen w-full p-20 flex-col">
      <p className="text-white font-semibold text-5xl">Settings</p>
      <div className="flex w-full h-full mt-20">
        <div className="Left flex flex-col">
          {[
            {
              type: types.KYC,
              name: "KYC",
            },
            {
              type: types.ACCOUNT_DETAILS,
              name: "Account Details",
            },
            {
              type: types.SECURITY,
              name: "Security",
            },
            {
              type: types.REFERRAL,
              name: "Refer and Earn",
            },
            {
              type: types.ABOUT,
              name: "About",
            },
            {
              type: types.SUPPORT,
              name: "Support",
            },
          ].map((item, index) => (
            <div
              onClick={() => {
                setCurrentScreen(item.type);
              }}
              className={`rounded-md w-[250px] flex p-3 items-center mt-5 cursor-pointer ${currentScreen === item.type ? "selected" : ""}`}
            >
              <img
                className="w-4 h-4"
                alt="vector"
                src={require(`../../assets/vector${index + 1}.png`)}
              />
              <p className="text-white font-bold ml-10">{item.name}</p>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-b from-fuchsia-500 to-cyan-500 w-full h-full rounded-2xl p-0.5">
          <div className="bg-bg w-full h-full rounded-2xl p-12 relative">
            <InnerComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
