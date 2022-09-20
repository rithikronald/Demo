import { data } from "autoprefixer";
import React, { useEffect, useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import { getCoinMeta } from "../../hooks/getcoinMetaData";
import { FilterComponent } from "./filterComponent";

export const Table = (props) => {
  const navigate = useNavigate()

  const columns = [
    {
      name: "NAME",
      selector: (row) => {
        const coinData = getCoinMeta(row.ticker);
        
        return (
          <div className="flex items-center cursor-pointer" onClick={() => navigate(`/coin-desc/${row.ticker}`)}>
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
      name: "CHANGE",
      selector: (row) => row.percent_change_24h + "%",
      sortable: true,
      style: {
        color: "#3fa34d",
        fontWeight: "500",
      },
    },
    {
      name: "MARKET CAP",
      selector: (row) => row.marketcap_usd.value,
      sortable: true,
      style: {
        color: "#fff",
        fontWeight: "500",
      },
    },
    {
      name: "SUPPLY",
      selector: (row) => row.total_supply.value,
      sortable: true,
      style: {
        color: "#7d8597",
        fontWeight: "500",
      },
    },
    {
      name: "VOLUME",
      selector: (row) => row.transaction_volume.value,
      sortable: true,
      style: {
        color: "#7d8597",
        fontWeight: "500",
      },
    },
    {
      name: "PRICE",
      selector: (row) => row.price.value,
      sortable: true,
      style: {
        color: "#fff",
        fontWeight: "500",
      },
    },
  ];


  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const filteredItems = props?.data.filter((item) => {
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
        <p className="text-white text-2xl font-semibold">{props?.title}</p>
        <FilterComponent
          onFilter={(e) => setFilterText(e.target.value)}
          onClear={handleClear}
          filterText={filterText}
        />
      </div>
      <div className="Table bg-gradient-to-b from-fuchsia-500 to-cyan-500 p-[1px] sm:rounded-lg mt-4">
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg ">
          <DataTable
            columns={columns}
            data={filteredItems}
            pagination
            striped
            paginationComponentOptions={{ noRowsPerPage: true }}
            paginationPerPage={10}
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
            }}
          />
        </div>
      </div>
    </div>
  );
};
