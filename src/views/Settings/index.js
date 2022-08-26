import React from "react";

const Settings = () => {
  return (
    <div className="Settings bg-bgl1 flex h-screen w-full p-20 flex-col">
      <p className="text-white font-semibold text-5xl">Settings</p>
      <div className="flex w-full h-full mt-20">
        <div className="Left flex flex-col ">
          <div className=" rounded-md w-[250px] flex p-3 items-center mt-5">
            <img
              className="w-4 h-4"
              alt="vector"
              src={require("../../assets/vector1.png")}
            />
            <p className="text-white font-bold ml-10">KYC</p>
          </div>
          <div className=" rounded-md w-[250px] flex p-3 items-center mt-5">
            <img
              className="w-4 h-4"
              alt="vector"
              src={require("../../assets/vector2.png")}
            />
            <p className="text-white font-bold ml-10">Account Details</p>
          </div>
          <div className=" rounded-md w-[250px] flex p-3 items-center mt-5">
            <img
              className="w-4 h-4"
              alt="vector"
              src={require("../../assets/vector3.png")}
            />
            <p className="text-white font-bold ml-10">Security</p>
          </div>
          <div className=" rounded-md w-[250px] flex p-3 items-center mt-5">
            <img
              className="w-4 h-4"
              alt="vector"
              src={require("../../assets/vector4.png")}
            />
            <p className="text-white font-bold ml-10">Refer and Earn</p>
          </div>
          <div className=" rounded-md w-[250px] flex p-3 items-center mt-5">
            <img
              className="w-4 h-4"
              alt="vector"
              src={require("../../assets/vector5.png")}
            />
            <p className="text-white font-bold ml-10">About</p>
          </div>
          <div className=" rounded-md w-[250px] flex p-3 items-center mt-5">
            <img
              className="w-4 h-4"
              alt="vector"
              src={require("../../assets/vector6.png")}
            />
            <p className="text-white font-bold ml-10">Support</p>
          </div>
        </div>
        <div className="bg-gradient-to-b from-fuchsia-500 to-cyan-500 w-full h-full rounded-2xl p-0.5">
          <div className="bg-bg w-full h-full rounded-2xl flex p-12 flex-wrap items-center"></div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
