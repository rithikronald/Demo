import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { GradientContainer } from "../../components/GradientContainer";
import { Table } from "../../components/Table";
import { ThemeButton } from "../../components/themeButton";
import { getCoinMeta } from "../../hooks/getcoinMetaData";
import { useWindowDimensions } from "../../hooks/useWindowDimension";
import { maximumInstance } from "../../setup";
import types from "../../store/types";
import "./style.css";
var WebSocketClient = require("websocket").w3cwebsocket;
const WS_URL = "wss://ws.gate.io/v3/";
var ws = new WebSocketClient(WS_URL);
const tabsData = [
  {
    label: "Buy",
  },
  {
    label: "Sell",
  },
];
const innertabsData = [
  {
    label: "Limit",
  },
  {
    label: "Market",
  },
];

export const RightContainer = ({ option, icon }) => {
  return (
    <div className="flex  flex-col p-4 px-6 w-full h-full">
      <Tabs data={innertabsData} />;
      <div>
        <div className="mt-4">
          <p className="text-white font-medium text-xs ml-2 mb-1">Price</p>
          <GradientContainer
            height="h-16"
            width="w-full"
            children={
              <input
                type="text"
                className="h-full w-full bg-transparent text-white text-2xl rounded-2xl text-center form-control "
              />
            }
          />
        </div>
        <div className="mt-4">
          <p className="text-white font-medium text-xs ml-2 mb-1">Amount</p>
          <GradientContainer
            height="h-16"
            width="w-full"
            children={
              <input
                type="text"
                className="h-full w-full bg-transparent text-white text-2xl rounded-2xl text-center form-control "
              />
            }
          />
        </div>
        <div className="mt-4">
          <p className="text-white font-medium text-xs ml-2 mb-1">Total</p>
          <GradientContainer
            height="h-16"
            width="w-full"
            children={
              <input
                type="text"
                className="h-full w-full bg-transparent text-white text-2xl rounded-2xl text-center form-control "
              />
            }
          />
        </div>
      </div>
    </div>
  );
};

export function Tabs({ data, innerTabs = false }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  const tabsRef = useRef([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  return (
    <>
      <div className="relative">
        <div className="flex space-x-10 text-white text-sm font-semibold  items-center justify-center">
          {data.map((tab, idx) => {
            return (
              <button
                key={idx}
                ref={(el) => (tabsRef.current[idx] = el)}
                className="pt-2 pb-3"
                onClick={() => setActiveTabIndex(idx)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        <span
          className="absolute bottom-0 block h-1 bg-primaryButton rounded-md transition-all duration-300"
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        />
      </div>
    </>
  );
}

const CoinList = (props) => {
  const [coinList, setCoinList] = useState();
  const { height, width } = useWindowDimensions();
  const [tickerList, setTickerList] = useState([]);
  const [currentPrice, setCurrentPrice] = useState({});

  useEffect(() => {
    props.openLoader();
    maximumInstance(localStorage.getItem("accessToken"))
      .get(`/coinList`)
      .then((response) => {
        setCoinList(response?.data);
        setTickerList([
          ...tickerList,
          response?.data?.map((item) => item?.ticker + "_USDT"),
        ]);
        props.closeLoader();
      })
      .catch((err) => {
        console.log("error", err);
        props.closeLoader();
      });
  }, []);

  const wsGet = (id, method, params) => {
    ws.onopen = function () {
      console.log("open");
      var array = JSON.stringify({
        id: id,
        method: method,
        params: params,
      });
      ws.send(array);
    };
    ws.onmessage = function (evt) {
      const data = JSON.parse(evt?.data);
      const coinName = data?.params?.[0].toString().split("_")[0];
      if (coinName) {
        setCurrentPrice((prev) => {
          return {
            ...prev,
            [`${coinName}`]: data?.params?.[1]?.last,
          };
        });
      }
      // console.log(data?.params?.[0], data?.params?.[1]?.last);
      // if(methods != 'server.sign')
      // ws.close();
    };
    ws.onclose = function () {
      console.log("close");
    };
    ws.onerror = function (err) {
      console.log("error", err);
    };
  };

  useEffect(() => {
    // console.log("TICKER LIST", tickerList[0]);
    if (tickerList[0]?.length > 0)
      wsGet(
        Math.round(Math.random() * 1000),
        "ticker.subscribe",
        tickerList[0]
      );
  }, [tickerList]);

  // useEffect(() => {
  //   // console.log("CURRENT PRICE", currentPrice);
  // }, [currentPrice]);

  return (
    <div className="App bg-gradient-to-tl from-bg via-bgl1 to-darkPurple font-mont flex h-screen w-full">
      <div className="Left p-10 px-14 flex w-[75%] flex-col sm:flex overflow-y-scroll">
        <div className="TableWithOptions">
          {coinList && (
            currentPrice != {} &&
            <Table
              title={"All Coins"}
              data={coinList}
              currentPrice={currentPrice}
            />
          )}
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url('/images/rightSectionbg.png')`,
        }}
        className="Right bg-no-repeat bg-cover bg-center w-[25%] bg-gradient-to-tr from-slate-900 to-purple-800 p-8 justify-center items-center flex flex-col"
      >
        <Tabs data={tabsData} />
        <GradientContainer
          height={` ${height > 800 ? "h-[60%]" : "h-[65%]"}`}
          className={"w-full mt-16"}
          children={<RightContainer />}
        />
        <ThemeButton text="Trade" className="w-[90%] mt-10" />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeLoader: () => dispatch({ type: types.CLOSE_LOADER }),
    openLoader: () => dispatch({ type: types.OPEN_LOADER }),
  };
};

export default connect(null, mapDispatchToProps)(CoinList);
