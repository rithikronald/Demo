import React, { useState } from "react";
import Kyc from "./components/kyc";
import AccountDetails from "./components/accountDetails";
import Security from "./components/security";
import About from "./components/about";
import Support from "./components/support";
import Referral from "./components/referral";
import "./style.css";
import { getAuth, signOut } from "firebase/auth";

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
  const auth = getAuth();

  const logout = () => {
    signOut(auth)
      .then((res) => {
        console.log("USER LOGGED OUT", res);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
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
    <div className="Settings bg-bgl1 flex h-screen w-full p-20 flex-col font-mont">
      <div className="flex justify-between">
        <p className="text-white font-semibold text-5xl">Settings</p>
        <button
          onClick={logout}
          className="bg-primaryButton text-white px-4 font-semibold rounded-lg shadow-lg text-lg h-10"
        >
          <div className="flex items-center">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              ></path>
            </svg>
            <p className="ml-2">Logout</p>
          </div>
        </button>
      </div>

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
              name: "Reach out to us",
            },
          ].map((item, index) => (
            <div
              onClick={() => {
                setCurrentScreen(item.type);
              }}
              className={`rounded-md w-[250px] flex p-3 items-center mt-5 cursor-pointer ${
                currentScreen === item.type ? "selected" : ""
              }`}
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
          <div className="bg-bg w-full h-full rounded-2xl p-12 relative box-border">
            <InnerComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
