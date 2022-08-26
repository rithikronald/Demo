import { useWindowDimensions } from "../../hooks/useWindowDimension";
import classnames from "classnames";
import sortIcon from "../../assets/sort.png";
import tradeIcon from "../../assets/trade.png";
import seeAllIcon from "../../assets/seeAll.png";
import { GradientContainer } from "../../components/GradientContainer";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
const CoinList = () => {
  const { height, width } = useWindowDimensions();
  const tableSampleData = [
    {
      transactionId: "78SDFGUHSI89",
      type: "Buy",
      coin: "Gaming",
      date: "Jun 22, 2022",
      amount: "$15",
      status: "pending",
    },
    {
      transactionId: "67h5M3RTY624",
      type: "Sell",
      coin: "Ethereum",
      date: "Jun 20, 2022",
      amount: "$1000",
      status: "completed",
    },
    {
      transactionId: "67h5M3RTY624",
      type: "Sell",
      coin: "Ethereum",
      date: "Jun 20, 2022",
      amount: "$1000",
      status: "completed",
    },
    {
      transactionId: "67h5M3RTY624",
      type: "Sell",
      coin: "Ethereum",
      date: "Jun 20, 2022",
      amount: "$1000",
      status: "completed",
    },
  ];

  const transactionsSampleData = [
    {
      title: "Buy USDT",
      desc: "-50 USDT",
      amount: "+ 1024.53 USDT",
      address: "Jun 22, 2022",
      date: "Jun 21, 2022",
      token: "USDT Tether",
      network: "ERC20",
      status: "pending",
    },
    {
      title: "Buy USDT",
      desc: "-50 USDT",
      amount: "+ 1024.53 USDT",
      address: "Jun 22, 2022",
      date: "Jun 21, 2022",
      token: "USDT Tether",
      network: "ERC20",
      status: "pending",
    },
    {
      title: "Buy USDT",
      desc: "-50 USDT",
      amount: "+ 1024.53 USDT",
      address: "Jun 22, 2022",
      date: "Jun 21, 2022",
      token: "USDT Tether",
      network: "ERC20",
      status: "pending",
    },
    {
      title: "Buy USDT",
      desc: "-50 USDT",
      amount: "+ 1024.53 USDT",
      address: "Jun 22, 2022",
      date: "Jun 21, 2022",
      token: "USDT Tether",
      network: "ERC20",
      status: "pending",
    },
  ];

  const TableItem = ({
    index,
    transactionId,
    type,
    coin,
    date,
    amount,
    status,
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
          {transactionId}
        </th>

        <td className="py-4 px-6 text-white">{type}</td>
        <td className="py-4 px-6 text-white">{coin}</td>
        <td className="py-4 px-6 text-white">{date}</td>
        <td className="py-4 px-6 text-white">{amount}</td>
        <td className="py-4 px-6 text-white">{status}</td>
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
    return <CollapsedCard data={transactionsSampleData} />;
  };

  const HistoryCard = ({ title, desc, amount }) => {
    return (
      <div className="flex justify-between items-center px-2 w-full ">
        <div className="h-16 w-1 bg-red-400 rounded-md" />
        <div>
          <p className="text-white font-medium text-base">{title}</p>
          <p className="text-gray-500  font-normal text-sm">{desc}</p>
        </div>
        <p className="text-gray-500  font-normal text-sm">{amount}</p>
      </div>
    );
  };

  const CollapsedCard = ({ data }) => {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
      setOpen(open === value ? 0 : value);
    };

    const Icon = ({ id, open }) => {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`${
            id === open ? "rotate-180" : ""
          } h-5 w-5 transition-transform`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      );
    };
    return (
      <Fragment>
        {data.map((data, i) => {
          let { title, desc, amount, address, date, token, network, status } =
            data;
          return (
            <Accordion
              className="bg-tansparent border-none "
              open={open === i + 1}
              icon={<Icon id={i + 1} open={open} />}
              onClick={() => handleOpen(i + 1)}
            >
              <AccordionHeader className="border-none px-2 ">
                <HistoryCard title={title} desc={desc} amount={amount} />
              </AccordionHeader>
              <AccordionBody className="bg-transparent text-white px-2 my-0">
                <div className="text-white">
                  <p>
                    Address: {address} <p>Date: {date}</p>
                    <p>Amount: {amount}</p> <p>Token: {token}</p>
                    <p>Network: {network}</p> <p>Status: {status}</p>
                  </p>
                </div>
              </AccordionBody>
            </Accordion>
          );
        })}
      </Fragment>
    );
  };

  return (
    <div className="App bg-bgl1 flex h-screen w-full">
      {/* Left */}
      <div className="Left bg-yellow-40 p-10 px-14 flex flex-col justify-around sm:flex xl:basis-3/4">
        <div className="Header flex justify-between ">
          <p className="text-white text-2xl font-semibold">Transactions</p>
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
          <div className="Options flex justify-between">
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
          </div>

          <div className="Table bg-gradient-to-b from-fuchsia-500 to-cyan-500 p-0.5 sm:rounded-lg ">
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg ">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase border-b-2 border-fuchsia-500 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="py-3 px-6">
                      TRANSACTION ID
                    </th>
                    <th scope="col" className="py-3 px-6">
                      TYPE
                    </th>
                    <th scope="col" className="py-3 px-6">
                      COIN/INDEX
                    </th>
                    <th scope="col" className="py-3 px-6">
                      DATE
                    </th>
                    <th scope="col" className="py-3 px-6">
                      AMOUNT
                    </th>
                    <th scope="col" className="py-3 px-6">
                      STATUS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableSampleData.map((data, i) => {
                    console.log(i, data);
                    return (
                      <TableItem
                        index={i}
                        transactionId={data.transactionId}
                        type={data.type}
                        coin={data.coin}
                        date={data.date}
                        amount={data.amount}
                        status={data.status}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* <Example /> */}
        <div className="Pager flex justify-end">
          <Pager number="<" />
          <Pager number={1} current={true} />
          <Pager number="2" />
          <Pager number="3" />
          <Pager number=">" />
        </div>
      </div>

      {/* Right */}
      <div className="Right basis-1/4 bg-gradient-to-tr from-slate-900 to-purple-800 p-10 justify-around flex flex-col">
        <p className="text-white text-center font-semibold text-2xl">
          Deposit & Withdraw
        </p>
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
