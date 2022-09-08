import axios from "axios";
import { useEffect, useRef, useState } from "react";
import DataTable from "react-data-table-component";
import { GradientContainer } from "../../components/GradientContainer";
import { ThemeButton } from "../../components/themeButton";
import { getCoinMeta } from "../../hooks/getcoinMetaData";

const columns = [
  {
    name: "NAME",
    selector: (row) => {
      console.log("ROW", getCoinMeta(row.ticker));
      const coinData = getCoinMeta(row.ticker);
      return (
        <div className="flex items-center">
          <img className="w-6 h-6 rounded-full bg-white" src={coinData?.logoUrl} alt ="logo" />
          <p className="text- font-bold ml-2">{coinData?.ticker}</p>
          <p className="text-white ml-2">{coinData?.slug}</p>
        </div>
      );
    },
    sortable: true,
    grow:2
  },
  {
    name: "CHANGE",
    selector: (row) => row.percent_change_24h,
    sortable: true,
  },
  {
    name: "MARKET CAP",
    selector: (row) => row.marketcap_usd.value,
    sortable: true,
  },
  {
    name: "SUPPLY",
    selector: (row) => row.total_supply.value,
    sortable: true,
  },
  {
    name: "VOLUME",
    selector: (row) => row.transaction_volume.value,
    sortable: true,
  },
  {
    name: "PRICE",
    selector: (row) => row.price.value,
    sortable: true,
  },
];
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

const RightContainer = ({ option, icon }) => {
  return (
    <div className="py-10 px-6 flex justify-center flex-col">
      <Tabs data={innertabsData} />;
      <div className="bg-transparent my-2 px-2">
        <p className="text-white font-medium text-lg">Price</p>
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
      <div className="bg-transparent my-2 px-2">
        <p className="text-white font-medium text-lg">Amount</p>
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
      <div className="bg-transparent my-2 px-2">
        <p className="text-white font-medium text-lg">Total</p>
        <GradientContainer
          height="h-16"
          width="w-full"
          children={
            <p className="text-white font-medium text-lg text-center mt-4">
              $6553.94
            </p>
          }
        />
      </div>
      <ThemeButton text="Trade" className="w-full mt-4" />
    </div>
  );
};

function Tabs({ data, innerTabs = false }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  const tabsRef = useRef([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      console.log(currentTab?.offsetLeft, currentTab?.clientWidth);
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
        <div className="flex space-x-3 text-white text-lg font-semibold  items-center justify-center">
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

const CoinList = () => {
  const [coinList, setCoinList] = useState();
  useEffect(() => {
    axios
      .get(
        `https://us-central1-maximumprotocol-50f77.cloudfunctions.net/api/coinList/`,
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        setCoinList(response?.data);
      })
      .catch((err) => console.log("error", err));
  }, []);

  return (
    <div className="App bg-bgl1 flex h-screen w-full">
      {/* Left */}
      <div className="Left bg-yellow-40 p-10 px-14 flex flex-col justify-around sm:flex xl:basis-3/4">
        <div className="Header flex justify-between ">
          <p className="text-white text-2xl font-semibold">All Coins</p>
          <form>
            <div className="flex">
              <label
                for="search-dropdown"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
              >
                Your Email
              </label>

              <div className="relative w-full">
                <input
                  type="search"
                  id="search-dropdown"
                  className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-regularPurple focus:border-regularPurple focus:outline-none"
                  placeholder="Search Coin"
                  required
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-primaryButton rounded-r-lg border border-regularPurple hover:bg-regularPurple focus:ring-4 focus:outline-none "
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="TableWithOptions">
          {/*  */}
          <div className="Table bg-gradient-to-b from-fuchsia-500 to-cyan-500 p-0.5 sm:rounded-lg ">
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg ">
              <DataTable
                columns={columns}
                data={coinList}
                pagination
                striped
                paginationComponentOptions={{ noRowsPerPage: true }}
                highlightOnHover
                paginationPerPage={10}
                responsive
                customStyles={{
                  rows: {
                    stripedStyle: {
                      backgroundColor: "#24225B",
                      color: "#fff",
                    },
                    style: {
                      backgroundColor: "#100E35",
                      color: "#fff",
                    },
                  },
                  headRow: {
                    style: {
                      backgroundColor: "#100E35",
                      color: "#fff",
                      borderBottomWidth:1,
                      borderBottomColor:"#9433d5"
                    },
                  },
                  pagination: {
                    style: {
                      backgroundColor: "#100E35",
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
      </div>

      {/* Right */}
      <div className="Right basis-1/4 bg-gradient-to-tr from-slate-900 to-purple-800 p-10 justify-around flex flex-col">
        <Tabs data={tabsData} />
        <GradientContainer
          height="h-4/5"
          width="3/4"
          children={<RightContainer />}
        />
      </div>
    </div>
  );
};

export default CoinList;
