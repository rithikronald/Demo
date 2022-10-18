import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Table } from "../../components/Table";
import { ws } from "../../setup";
import { useWindowDimensions } from "../../hooks/useWindowDimension";
import { maximumInstance } from "../../setup";
import types from "../../store/types";
import Modal from "../CoinDesc/modal";
import "./style.css";

const CoinList = (props) => {
  const [coinList, setCoinList] = useState();
  const { height, width } = useWindowDimensions();
  const [tickerList, setTickerList] = useState([]);
  const [currentPrice, setCurrentPrice] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [tickerName, setTickerName] = useState();

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
      console.log(data?.params?.[0], data?.params?.[1]?.last);
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

  // useEffect(() => {
  //   // console.log("TICKER LIST", tickerList);
  //   if (tickerList[0]?.length > 0)
  //     wsGet(Math.round(Math.random() * 1000), "ticker.subscribe", [
  //       "BTC_USDT",
  //       "ETH_USDT",
  //       "BNB_USDT",
  //       "XRP_USDT",
  //       "ADA_USDT",
  //       "SOL_USDT",
  //       "DOGE_USDT",
  //       "DOT_USDT",
  //       "MATIC_USDT",
  //       "SHIB_USDT",
  //       "TRX_USDT",
  //       "AVAX_USDT",
  //       "UNI_USDT",
  //       "LEO_USDT",
  //       "LTC_USDT",
  //       "ETC_USDT",
  //       "LINK_USDT",
  //       "ATOM_USDT",
  //       "FTT_USDT",
  //       "XLM_USDT",
  //       "CRO_USDT",
  //       "NEAR_USDT",
  //       "XMR_USDT",
  //     ]);
  // }, [tickerList]);

  return (
    <div className="App bg-gradient-to-tl from-bg via-bgl1 to-darkPurple font-mont flex h-screen w-full">
      <div className="Left p-10 px-14 flex w-[96%] flex-col sm:flex overflow-y-scroll">
        <div className="TableWithOptions">
          {coinList && currentPrice != {} && (
            <Table
              title={"All Coins"}
              data={coinList}
              currentPrice={currentPrice}
              openModal={(val) => {
                console.log("Modal", val);
                setTickerName(val);
                setModalOpen(true);
              }}
            />
          )}
          <Modal
            ticker={tickerName}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
          />
        </div>
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
