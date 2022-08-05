import React from "react";

export const HomeScreen = () => {
  return (
    <>
      <div className="Left flex-1 w-3/4 bg-yellow-40 p-10 flex flex-col justify-around sm:p-3 sm:w-full md:p-10">
        {/* Banner */}
        <div className="flex w-full h-1/3 items-center">
          <div className="welcomeCard rounded-2xl w-full h-full bg-gradient-to-l to-purple-600 from-purple-900 flex 2xl:pl-10">
            <div className="cardLeft basis:1/2 w-full h-full p-6 flex flex-col justify-around 3xl:py-20">
              <p className="text-lg text-white font-medium 3xl:text-3xl">
                Welcome Ram
              </p>
              <p className="text-2xl font-bold text-white sm:text-xl 2xl:text-4xl 3xl:text-5xl">
                Enhance your financial life with Maximum Protocol
              </p>
              <button className="bg-purple-500 text-white p-4 font-bold rounded-lg md:w-40 h-14 shadow-lg">
                Watch Now
              </button>
            </div>
            <div className="cardLeft basis:1/2 w-full h-full flex justify-center sm:hidden xl:flex">
              <img
                alt="welcomeImg"
                className="h-full"
                src={require("../assets/welcomeImg.png")}
              />
            </div>
          </div>
        </div>
        {/* Coins */}
        <div className="flex flex-col mt-4">
          <div className="maxPicks flex flex-row justify-between">
            <p className="text-white text-xl">Max Picks</p>
            <button className="text-gray-400 text">view all</button>
          </div>
          <div className="coinSection flex flex-row flex-wrap justify-between">
            {/* xl-6 2xl-8 3xl-12(or)5 */}
            {Array.apply(null, Array(6)).map(() => (
              <div className="coinCard mt-4 h-16 mr-5 rounded-2xl bg-gradient-to-b from-fuchsia-500 to-cyan-500 p-0.5 3xl:h-20">
                <div className="bg-bg rounded-2xl h-full flex flex-row items-center justify-between p-4 px-6">
                  <div className="flex flex-row mr-16 items-center">
                    <img
                      alt="logo"
                      className="w-5 h-8"
                      src={require("../assets/icon.png")}
                    />
                    <div className="ml-3">
                      <p className="text-white font-bold text-lg">ETH</p>
                      <p className="text-gray-400 text-sm">Ethereum</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-md">$5342</p>
                    <p className="text-red-600 text-sm">22%</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Indexes */}
        <div className="flex flex-col mt-4">
          <div className="maxPicks flex flex-row justify-between">
            <p className="text-white text-xl">Indexes</p>
            <button className="text-gray-400 text">view all</button>
          </div>
          <div className="basketCard flex flex-row flex-wrap justify-between">
            {/* xl-3 2xl-4 3xl-4(or)5 */}
            {Array.apply(null, Array(4)).map(() => (
              <div className="w-1/4 h-60 mt-4 rounded-3xl bg-gradient-to-b from-fuchsia-500 to-cyan-500 p-0.5 2xl:w-1/5 3xl:w-1/6 3xl:h-80">
                <div className="bg-bg rounded-3xl h-full flex flex-col justify-between p-2">
                  <div className="bg-gradient-to-tl from-right via-left to-top flex h-5/6 w-full rounded-2xl"></div>
                  <div className="flex justify-between items-center mt-1">
                    <div className="flex py-2 space-x-1">
                      <img
                        className="w-6"
                        alt="btc"
                        src={require("../assets/btc.png")}
                      />
                      <img
                        alt="eth"
                        className="w-6"
                        src={require("../assets/eth.png")}
                      />
                      <img
                        alt="bnb"
                        className="w-6"
                        src={require("../assets/bnb.png")}
                      />
                    </div>
                    <div className="bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600 h-6 w-1/3 rounded-2xl p-0.5">
                      <button className="flex h-full bg-bg rounded-2xl text-white w-full justify-center items-center">
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="Right w-1/4 bg-gradient-to-tr from-slate-900 to-purple-800 p-10 justify-around flex flex-col sm:hidden xl:flex">
        <div>
          <p className="text-xl text-center text-white font-medium 3xl:text-3xl ">
            AI Powered financial manager
          </p>
          <p className="text-white font-bold text-center mt-5  text-2xl 2xl:text-4xl 3xl:text-5xl">
            Personalised portfolio for Maximum returns
          </p>
        </div>
        <img alt="img" src={require("../assets/illustration.png")} />
        <button className="bg-purple-500 text-white p-4 font-bold rounded-lg w-full h-16 shadow-lg text-xl">
          Start Now
        </button>
      </div>
    </>
  );
};
