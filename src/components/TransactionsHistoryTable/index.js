import { data } from "autoprefixer";
import React, { useEffect, useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import { getCoinMeta } from "../../hooks/getcoinMetaData";
import { FilterComponent } from "./filterComponent";
import { numFormatter } from "../../utility/kFormatter";

export const Table = (props) => {
  const navigate = useNavigate();
  const columns = [
    {
      name: "TRANSACTION ID",
      selector: (row) => {
        return (
          <div
            className="flex items-center cursor-pointer"
          >
            <p className="text- font-bold ml-2">{row.transactionId}</p>
          </div>
        );
      },
      sortable: true,
      grow: 1.5,
    },
    {
      name: "TYPE",
      selector: (row) => {
        return row.type;
      },
      sortable: true,
      style: {
        fontWeight: "500",
      },
      // conditionalCellStyles: [
      //   {
      //     when: (row) => row.percent_change_24h > 0,
      //     style: {
      //       color: "#3fa34d",
      //     },
      //   },
      //   {
      //     when: (row) => row.percent_change_24h < 0,
      //     style: {
      //       color: "red",
      //     },
      //   }
      // ],
    },
    {
      name: "COIN/INDEX",
      selector: (row) => {
        return row.coin
      },
      sortable: true,
      style: {
        color: "#fff",
        fontWeight: "500",
      },
    },
    {
      name: "DATE",
      selector: (row) => {return row.date},
      sortable: true,
      style: {
        color: "#7d8597",
        fontWeight: "500",
      },
    },
    {
      name: "AMOUNT",
      selector: (row) => {return row.amount},
      sortable: true,
      style: {
        color: "#7d8597",
        fontWeight: "500",
      },
    },
    {
      name: "STATUS",
      selector: (row) => {return (
        <>
          <div className="p-1 rounded-sm bg-[rgba(201,153, 32, 0.15)] text-[#C99920]">{row.status}</div>
        </>
      )},
      sortable: true,
      style: {
        color: "#fff",
        fontWeight: "500",
      },
    },
  ];

  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  // const filteredItems = props?.data.filter((item) => {
  //   const coinData = getCoinMeta(item?.ticker);
  //   return (
  //     JSON.stringify(coinData?.slug + coinData?.ticker)
  //       .toLowerCase()
  //       .indexOf(filterText.toLowerCase()) !== -1
  //   );
  // });

  const filteredItems = props?.data

  const handleClear = () => {
    if (filterText) {
      setResetPaginationToggle(!resetPaginationToggle);
      setFilterText("");
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div className="w-full flex justify-between self-end">
        <p className="text-white text-2xl font-semibold">{props?.title}</p>
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
            // pagination
            // paginationComponentOptions={{ noRowsPerPage: true }}
            // paginationPerPage={10}
            // responsive
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
