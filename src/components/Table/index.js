import { data } from "autoprefixer";
import React, { useEffect, useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import { getCoinMeta } from "../../hooks/getcoinMetaData";
import { FilterComponent } from "./filterComponent";
import { numFormatter } from "../../utility/kFormatter";
import { ws } from "../../App";

export const Table = ({ openModal, data, title, price }) => {
  const navigate = useNavigate();
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [coinData, setCoinData] = useState();
  const [currentPrice, setCurrentPrice] = useState(0);

  // function onmessage(evt) {
  //   const data = JSON.parse(evt?.data);
  //   // console.log("Buy/Sell", data?.result?.currency_pair, data?.result?.last);
  //   const coinName = data?.result?.currency_pair?.split("_")[0];
  //   if (coinName && coinName === ) {
  //     // setCurrentPrice(data?.result?.last);
  //   }
  // }

  const getSocketData = (val) => {
    var array = JSON.stringify({
      time: new Date().getTime,
      channel: "spot.tickers",
      event: "subscribe",
      payload: [`${val}_USDT`],
    });
    if (ws.readyState) {
      console.log("Buy/Sell Sub");
      ws.send(array);
      ws.onmessage = (evt) => {
        const data = JSON.parse(evt?.data);
        const coinName = data?.result?.currency_pair?.split("_")[0];
        console.log("CoinList", coinName, data?.result?.last);
        if (coinName && coinName === val) {
          // setCurrentPrice(data?.result?.last);
          price(data?.result?.last);
        }
      };
    }
    openModal(val);
  };

  // useEffect(()=>{
  //   if(openModal)
  // },[openModal])

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
              className="w-6 h-6 rounded-full bg-white"
              src={coinData?.logoUrl}
              alt="logo"
            />
            <p className="text- font-bold ml-2">{coinData?.ticker}</p>
            <p className="text-white ml-2">{coinData?.slug}</p>
          </div>
        );
      },
      sortable: true,
      grow: 1.5,
    },
    {
      name: "PRICE",
      selector: (row) => {
        const coinData = getCoinMeta(row.ticker);
        return "$" + Number(row?.price?.value).toFixed(10);
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
        return row.percent_change_24h + "%";
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
      selector: (row) => numFormatter(row.marketcap_usd?.value),
      sortable: true,
      style: {
        color: "#fff",
        fontWeight: "500",
      },
    },
    {
      name: "VOLUME",
      selector: (row) => numFormatter(row.tradingVolume?.value),
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
            onClick={() => getSocketData(row?.ticker)}
            className="p-1.5 px-4 font-semibold rounded-xl text-white font-mont bg-green-600"
          >
            Buy
          </button>
          <button
            onClick={() => getSocketData(row?.ticker)}
            className="p-1.5 px-4 font-semibold rounded-xl text-white font-mont bg-red-600"
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
