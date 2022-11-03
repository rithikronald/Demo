import { data } from "autoprefixer";
import React, { useEffect, useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import { getCoinMeta } from "../../hooks/getcoinMetaData";
import { FilterComponent } from "./filterComponent";
import { numFormatter } from "../../utility/kFormatter";
import { ws } from "../../App";
import { coinTickerList } from "../../constants/SocketCoinTickerList";

export const Table = ({ openModal, data, title, price }) => {
  const navigate = useNavigate();
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [coinData, setCoinData] = useState();
  const [currentPrice, setCurrentPrice] = useState(0);
  const [percentage, setPercentage] = useState();

  function onmessage(evt) {
    const data = JSON.parse(evt?.data);
    // console.log("CoinList", data?.result?.currency_pair, data?.result?.last);
    const coinName = data?.result?.currency_pair?.split("_")[0];
    if (coinName) {
      setCurrentPrice((prev) => {
        return {
          ...prev,
          [`${coinName}`]: data?.result?.last,
        };
      });
      setPercentage((prev) => {
        return {
          ...prev,
          [`${coinName}`]: data?.result?.change_percentage,
        };
      });
    }
  }

  // useEffect(() => {
  //   console.log("CoinList", currentPrice);
  // }, [currentPrice]);

  useEffect(() => {
    console.log(ws.readyState);
    // setCurrentPrice([]);
    var array = JSON.stringify({
      time: new Date().getTime,
      channel: "spot.tickers",
      event: "subscribe",
      payload: coinTickerList,
    });
    if (ws.readyState) {
      console.log("CLEARED");
      ws.send(array);
    }
    ws.onmessage = onmessage;

    //   // return () => {
    //   //   if (ws.readyState) {
    //   //     var array = JSON.stringify({
    //   //       time: Date.now(),
    //   //       channel: "spot.tickers",
    //   //       event: "unsubscribe",
    //   //       payload: [
    //   //         "ETH_USDT",
    //   //         "BNB_USDT",
    //   //         "XRP_USDT",
    //   //         "ADA_USDT",
    //   //         "SOL_USDT",
    //   //         "DOGE_USDT",
    //   //         "DOT_USDT",
    //   //       ],
    //   //     });
    //   //     ws.send(array);
    //   //   }
    //   // };
  }, [ws.readyState]);

  const columns = [
    {
      name: "NAME",
      selector: (row) => {
        const coinData = getCoinMeta(row.ticker);
        return (
          <div
            onClick={() =>
              navigate(`/coin-desc/${row?.ticker}`, {
                state: { coin: row?.ticker },
              })
            }
            className="flex items-center cursor-pointer"
          >
            <img
              className="w-8 h-8 rounded-full bg-white"
              src={coinData?.logoUrl}
              alt="logo"
            />
            <p className="text-xl font-bold ml-2">{coinData?.ticker}</p>
            <p className="text-white text-lg ml-2 ">{coinData?.slug}</p>
          </div>
        );
      },
      sortable: true,
      grow: 1.5,
    },
    {
      name: "PRICE",
      selector: (row) => {
        return (
          <p className="font-mont text-white text-lg">
            $
            {currentPrice?.[row?.ticker]
              ? currentPrice?.[row?.ticker]
              : row?.price?.value}
          </p>
        );
      },
      sortable: true,
      style: {
        color: "#fff",
        fontWeight: "500",
      },
      grow: 1.5,
    },
    {
      name: "24h CHANGE",
      selector: (row) => {
        return (
          <p className="font-mont text-lg">
            {percentage?.[row?.ticker]
              ? percentage?.[row?.ticker]
              : row.percent_change_24h}%
          </p>
        );
      },
      sortable: true,
      style: {
        fontWeight: "500",
      },
      conditionalCellStyles: [
        {
          when: (row) => row.percent_change_24h > 0,
          style: {
            color: "#3fa34d",
          },
        },
        {
          when: (row) => row.percent_change_24h < 0,
          style: {
            color: "red",
          },
        },
      ],
    },
    {
      name: "MARKET CAP",
      selector: (row) => (
        <p className="font-mont text-lg">
          {numFormatter(row.marketcap_usd?.value)}
        </p>
      ),
      sortable: true,
      style: {
        color: "#fff",
        fontWeight: "500",
      },
    },
    {
      name: "VOLUME",
      selector: (row) => (
        <p className="font-mont text-lg">
          {numFormatter(row.tradingVolume?.value)}
        </p>
      ),
      sortable: true,
      style: {
        color: "#7d8597",
        fontWeight: "500",
      },
    },
    // {
    //   name: "SUPPLY",
    //   selector: (row) => numFormatter(row.total_supply?.value),
    //   sortable: true,
    //   style: {
    //     color: "#7d8597",
    //     fontWeight: "500",
    //   },
    // },
    {
      name: "Trade",
      selector: (row) => (
        <div className="flex gap-x-3">
          <button
            onClick={() => openModal(row?.ticker)}
            className="p-2.5 px-5 font-semibold rounded-xl text-white font-mont bg-green-600"
          >
            Buy
          </button>
          <button
            onClick={() => openModal(row?.ticker)}
            className="p-1.5 px-5 font-semibold rounded-xl text-white font-mont bg-red-600"
          >
            Sell
          </button>
        </div>
      ),
      sortable: false,
      style: {
        color: "#7d8597",
        fontWeight: "500",
      },
    },
  ];

  const filteredItems = data.filter((item) => {
    const coinData = getCoinMeta(item?.ticker);
    return (
      JSON.stringify(coinData?.slug + coinData?.ticker)
        .toLowerCase()
        .indexOf(filterText.toLowerCase()) !== -1
    );
  });

  const handleClear = () => {
    if (filterText) {
      setResetPaginationToggle(!resetPaginationToggle);
      setFilterText("");
    }
  };

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between self-end">
        <p className="text-white text-2xl font-semibold">{title}</p>
        <FilterComponent
          onFilter={(e) => setFilterText(e.target.value)}
          onClear={handleClear}
          filterText={filterText}
        />
      </div>
      <div className="Table bg-gradient-to-b from-fuchsia-500 to-cyan-500 p-[1px] sm:rounded-lg mt-4">
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <DataTable
            columns={columns}
            data={filteredItems}
            striped
            responsive
            customStyles={{
              responsiveWrapper: {
                style: {
                  borderRadius: 0,
                },
              },
              rows: {
                stripedStyle: {
                  backgroundColor: "#24225B",
                  color: "#fff",
                },
                style: {
                  backgroundColor: "#131136",
                  color: "#fff",
                  height: "6em",
                },
              },
              headRow: {
                style: {
                  backgroundColor: "#131136",
                  color: "#7d8597",
                  borderBottomWidth: 1,
                  borderBottomColor: "#9433d5",
                  fontWeight: "600",
                },
              },
              pagination: {
                style: {
                  backgroundColor: "#131136",
                  color: "#fff",
                },
                pageButtonsStyle: {
                  fill: "#fff",
                  "&:disabled": {
                    fill: "#5c5c5c",
                  },
                },
              },
              noData: {
                style: {
                  backgroundColor: "#100E35",
                  color: "#fff",
                  fontWeight: 600,
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};
