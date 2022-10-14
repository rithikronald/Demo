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
  const [currentPrice, setCurrentPrice] = useState(0);
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
