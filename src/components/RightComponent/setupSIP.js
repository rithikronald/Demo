import React from "react";
import { GradientContainer } from "../GradientContainer";

const SetupSIP = (props) => {
  return (
    <>
      <GradientContainer
        width="w-full"
        height="h-[70%]"
        className={"my-5 2xl:h-[60%]"}
        children={
          <div className="w-full h-full rounded-2xl flex flex-col justify-around py-10 p-4">
            <div>
              <div className="flex justify-between items-center">
                <p className="text-white font-mont text-xs">Saving Goals</p>
                <div className="flex space-x-1">
                  <button className="text-green-500 font-bold flex justify-center items-center bg-slate-100 rounded-full h-4 w-4 text-sm">
                    +
                  </button>
                  <button className="text-red-500 font-bold flex justify-center items-center bg-slate-100 rounded-full h-4 w-4 text-sm">
                    -
                  </button>
                </div>
              </div>
              <GradientContainer
                height="h-16"
                width="w-full"
                className="mt-2"
                children={
                  <div className="flex px-4 items-center">
                    <p className="text-white text-3xl font-bold">$</p>
                    <input
                      type="text"
                      className="h-full w-full bg-transparent text-white text-3xl ml-2 font-bold rounded-2xl text-center form-control outline-0"
                    />
                  </div>
                }
              />
            </div>
            <div className="">
              <p className="text-white font-mont text-xs">Saving Period</p>
              <GradientContainer
                height="h-16"
                width="w-full"
                className="mt-2"
                children={
                  <div className="flex items-center flex-row justify-around w-full">
                    <button className="flex justify-center items-center  text-white font-mont text-sm focus:ring-1 focus:ring-purple-600 rounded-full px-2">
                      Daily
                    </button>
                    <button className="flex justify-center items-center  text-white font-mont text-sm focus:ring-1 focus:ring-purple-600 rounded-full px-2">
                      Weekly
                    </button>
                    <button className="flex justify-center items-center  text-white font-mont text-sm focus:ring-1 focus:ring-purple-600 rounded-full px-2">
                      Monthly
                    </button>
                  </div>
                }
              />
            </div>
            <div className="">
              <p className="text-white font-mont text-xs">Saving Amount</p>
              <GradientContainer
                height="h-16"
                width="w-full"
                className="mt-2"
                children={
                  <div className="flex  flex-row justify-around w-full px-1 space-x-1 items-center">
                    <button className="flex justify-center items-center text-white font-mont text-sm focus:ring-1 focus:ring-purple-600 rounded-full px-2">
                      $100
                    </button>
                    <button className="flex justify-center items-center  text-white font-mont text-sm focus:ring-1 focus:ring-purple-600 rounded-full px-2">
                      $500
                    </button>
                    <GradientContainer
                      height="h-8"
                      width="w-2/3"
                      children={
                        <input
                          type="text"
                          className="h-full w-full bg-transparent text-gray-300 text-[10px] text-center px-1"
                          placeholder="Enter custom amount"
                        />
                      }
                    />
                  </div>
                }
              />
            </div>
          </div>
        }
      />
      <div className="flex w-full space-x-2">
        <button
          onClick={() => props?.onClick()}
          className="bg-gradient-to-r from-purple-300 bg-purple-400 text-white p-4 font-medium rounded-lg w-full h-14 shadow-lg text-xl flex justify-center items-center"
        >
          Go Back
        </button>
        <button className="bg-primaryButton text-white p-4 font-medium rounded-lg w-full h-14 shadow-lg text-xl flex justify-center items-center">
          Setup SIP
        </button>
      </div>
    </>
  );
};

export default SetupSIP;
