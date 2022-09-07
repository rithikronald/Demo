import { useWindowDimensions } from "../../hooks/useWindowDimension";
import { useEffect, useRef, useState } from "react";
import classnames from "classnames";
import sortIcon from "../../assets/sort.png";
import tradeIcon from "../../assets/trade.png";
import seeAllIcon from "../../assets/seeAll.png";
import { GradientContainer } from "../../components/GradientContainer";
import { ThemeButton } from "../../components/themeButton";
import DataTable from "react-data-table-component";
import axios from "axios";

const columns = [
  {
    name: "NAME",
    selector: (row) => row.ticker,
    sortable: true,
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

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
  },
];

const CoinList = () => {
  const tableSampleData = [
    {
      name: "Bitcoin",
      change: "+32%",
      marketCap: "$203,122,218,705",
      supply: "$20,727,732,216",
      volume: "12,430,561 ETH",
      price: "$1,667.48",
    },
    {
      name: "Bitcoin",
      change: "+32%",
      marketCap: "$203,122,218,705",
      supply: "$20,727,732,216",
      volume: "12,430,561 ETH",
      price: "$1,667.48",
    },
    {
      name: "Bitcoin",
      change: "+32%",
      marketCap: "$203,122,218,705",
      supply: "$20,727,732,216",
      volume: "12,430,561 ETH",
      price: "$1,667.48",
    },
    {
      name: "Bitcoin",
      change: "+32%",
      marketCap: "$203,122,218,705",
      supply: "$20,727,732,216",
      volume: "12,430,561 ETH",
      price: "$1,667.48",
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

  const TableItem = ({
    index,
    name,
    change,
    marketCap,
    supply,
    volume,
    price,
  }) => {
    return (
      <tr
        className={classnames(
          `border-b ${
            index % 2 === 0 ? `dark:bg-bg` : "dark:bg-[#24225B]"
          } dark:border-gray-700`
        )}
      >
        <th
          scope="row"
          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {name}
        </th>

        <td className="py-4 px-6 text-white">{change}</td>
        <td className="py-4 px-6 text-white">{marketCap}</td>
        <td className="py-4 px-6 text-white">{supply}</td>
        <td className="py-4 px-6 text-white">{volume}</td>
        <td className="py-4 px-6 text-white">{price}</td>
      </tr>
    );
  };

  const Pager = ({ number, current = false }) => {
    return (
      <button
        className={classnames(
          `h-8  w-8 rounded-md mx-1 flex items-center justify-center ${
            current
              ? `bg-primaryButton`
              : `bg-transparent border border-gray-600`
          }`
        )}
      >
        <p
          className={classnames(
            `font-semibold text-sm text-center ${
              current ? `text-white` : `text-gray-600`
            }`
          )}
        >
          {number}
        </p>
      </button>
    );
  };

  const TableOption = ({ option, icon }) => {
    return (
      <div className="flex m-1 justify-center items-center">
        <img src={icon} alt="" className="h-4" />
        <p className="text-white text-base  font-medium ml-1 ">{option}</p>
      </div>
    );
  };

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
          {/* <div className="Options flex justify-between">
            <div className="LeftOptions flex items-center justify-center">
              <TableOption option="Sort" icon={sortIcon} />

              <p className="text-gray-500  text-sm  font-normal ml-5 ">
                Ascending
              </p>
            </div>
            <div className="RightOptions flex items-center justify-center">
              <TableOption option="Trade" icon={tradeIcon} />
              <TableOption option="See All" icon={seeAllIcon} />

              <p className="text-gray-500  text-sm  font-normal ml-5 ">
                10/Page
              </p>
            </div>
          </div> */}
          <div className="Table bg-gradient-to-b from-fuchsia-500 to-cyan-500 p-0.5 sm:rounded-lg ">
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg ">
              <DataTable
                columns={columns}
                data={coinList}
                pagination
                striped
                highlightOnHover
                paginationPerPage={10}
                responsive
                customStyles={{
                  rows:{
                    stripedStyle:{
                      backgroundColor:"#24225B",
                      color:"#fff"
                    },
                    style:{
                      backgroundColor:"#100E35",
                      color:"#fff"
                    }
                  },
                  headRow:{
                    style:{
                      backgroundColor:"#100E35",
                      color:"#fff"
                    }
                  },
                  pagination:{
                    style:{
                      backgroundColor:"#100E35",
                      color:"#fff",
                    },
                    pageButtonsStyle:{
                      fill:"#fff",
                      '&:disabled': {
                        fill: "#5c5c5c",
                      },
                    }
                  },
                }}
              />
            </div>
          </div>
        </div>
        {/* <Example /> */}
        {/* <div className="Pager flex justify-end">
          <Pager number="<" />
          <Pager number={1} current={true} />
          <Pager number="2" />
          <Pager number="3" />
          <Pager number=">" />
        </div> */}
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
