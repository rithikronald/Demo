import "./App.css";
// borderColor : bg-gradient-to-b from-fuchsia-500 to-cyan-500
function App() {
  return (
    <div
      className="App bg-gradient-to-tl from-bgl1 to-bgl2 flex"
      style={{ height: "100vh" }}
    >
      <div className="Left basis-3/4 bg-yellow-40 p-10 px-14 flex flex-col justify-around">
        {/* Section-1 */}
        <div className="welcomeCard bg-white rounded-2xl w-full h-1/4 bg-gradient-to-l to-purple-600 from-purple-900 flex">
          <div className="cardLeft basis:1/2 w-full h-full p-10 flex flex-col justify-around">
            <p className="sm:text-md md:text-xl text-white font-semibold">
              Welcome Ram
            </p>
            <p className="sm:text-2xl md:text-5xl font-bold text-white">
              Enhance your financial life with Maximum Protocol
            </p>
            <button className="bg-purple-500 text-white p-4 font-bold rounded-lg md:w-56 h-14 shadow-lg">
              Watch Now
            </button>
          </div>
          <div className="cardLeft basis:1/2 w-full h-full p-5 flex justify-center">
            <img
              alt="welcomeImg"
              className="h-full"
              src={require("./assets/welcomeImg.png")}
            />
          </div>
        </div>
        {/* Section-2 */}
        <div className="maxPicks flex flex-row justify-between mt-10">
          <p className="text-white text-xl">Max Picks</p>
          <button className="text-gray-400 text">view all</button>
        </div>
        <div className="coinSection flex flex-row flex-wrap justify-between">
          {/* Gradient Border */}
          {/* <div className="coinCard w-1/6 h-20 rounded-3xl  bg-gradient-to-b from-fuchsia-500 to-cyan-500 p-0.5">
            <div className="bg-gradient-to-l from-purple-800  to-violet-900 flex h-full rounded-3xl">
              </div>
            </div> */}
          {/* <div className="coinCard mt-8 h-24 mr-5 rounded-3xl bg-gradient-to-b from-fuchsia-500 to-cyan-500 p-0.5">
            <div className="bg-bg rounded-3xl h-full flex flex-row items-center justify-between p-6">
                  <div className="flex flex-row mr-10">
                    <img
                      alt="logo"
                      className="w-8 h-14"
                      src={require("../src/assets/icon.png")}
                    />
                    <div className="ml-5">
                      <p className="text-white font-semibold text-2xl">ETH</p>
                      <p className="text-white">Etherium</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-white font-semibold">$5342</p>
                    <p className="text-red-600">22%</p>
                  </div>
                </div>
            </div> */}
          {Array.apply(null, Array(12)).map(() => (
            <div className="coinCard mt-8 h-24 mr-5 rounded-3xl bg-gradient-to-b from-fuchsia-500 to-cyan-500 p-0.5">
              <div className="bg-bg rounded-3xl h-full flex flex-row items-center justify-between p-6">
                <div className="flex flex-row mr-10">
                  <img
                    alt="logo"
                    className="w-8 h-14"
                    src={require("../src/assets/icon.png")}
                  />
                  <div className="ml-5">
                    <p className="text-white font-semibold text-2xl">ETH</p>
                    <p className="text-white">Etherium</p>
                  </div>
                </div>
                <div>
                  <p className="text-white font-semibold">$5342</p>
                  <p className="text-red-600">22%</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Section-3 */}
        <div className="maxPicks flex flex-row justify-between mt-10">
          <p className="text-white text-xl">Indexes</p>
          <button className="text-gray-400 text">view all</button>
        </div>
        <div className="basketCard flex flex-row flex-wrap justify-between">
          {Array.apply(null, Array(4)).map(() => (
            <div className="w-80 h-80 mt-10 rounded-3xl bg-gradient-to-b from-fuchsia-500 to-cyan-500 p-0.5">
              <div className="bg-bg rounded-3xl h-full flex flex-col justify-between p-3">
                <div className="bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600 flex h-5/6 w-full rounded-2xl"></div>
                <div className="flex justify-between items-center">
                  <div className="flex py-2 space-x-1">
                    <img
                      className="w-7"
                      alt="btc"
                      src={require("../src/assets/btc.png")}
                    />
                    <img
                      alt="eth"
                      className="w-7"
                      src={require("../src/assets/eth.png")}
                    />
                    <img
                      alt="bnb"
                      className="w-7  "
                      src={require("../src/assets/bnb.png")}
                    />
                  </div>
                  <div className="bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600 h-9 w-1/3 rounded-2xl p-0.5">
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
      <div className="Right basis-1/4 bg-red-600 p-20 justify-center">
          <div>
            <p className="text-white text-xl text-center">Ai Powered financial manager</p>
            <p className="text-white font-bold text-4xl text-center">Personalised portfolio for Maximum returns</p>
          </div>
      </div>
    </div>
  );
}

export default App;
