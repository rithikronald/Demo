import "./style.css";
import React from "react";
import { Cell, Pie, PieChart } from "recharts";
import { useLocation } from "react-router-dom";
import { getCoinMeta } from "../../hooks/getcoinMetaData";
import { GradientContainer } from "../../components/GradientContainer";
import { Tooltip } from "flowbite-react";
import { CustomPieChart } from "../../components/Charts/CustomPieChart";
import { pieColors } from "../../constants/constants";
import { Table } from "../../components/TransactionsHistoryTable";
import { Deopsite } from "../../components/Deposite";

const TransactionSummary = () => {
  const location = useLocation();
  return (
    <div className="TransactionSummary bg-gradient-to-tl from-bg via-bgl1 to-darkPurple flex h-screen w-full font-mont">
      <div className="Left bg-yellow-40  p-8 px-14 flex flex-col justify-center items-center overflow-y-scroll sm:flex xl:basis-3/4">
        <p className="text-2xl 2xl:text-2xl 3xl:text-5xl font-semibold text-white font-mont">
          Transaction Summary
        </p>
        <div className="flex w-[80%] mt-[5%]">
          <p className="text-white font-medium">Composition Breakdown</p>
        </div>
        <GradientContainer
          width="w-[80%]"
          height="h-[50%]"
          className={"mt-2"}
          children={
            <div className="w-full h-full rounded-2xl flex flex-col">
              <div className="flex justify-center items-center">
                <p className="text-white font-mont text-xl font-semibold mt-3">
                  {location?.state?.indexData?.basketName}
                </p>
              </div>
              <div className="flex w-full h-[76%]">
                <div className="coin-list grid grid-cols-2 gap-2 w-[60%]  p-10 overflow-scroll">
                  {location?.state?.indexData?.coins?.map((item, index) => {
                    const data = getCoinMeta(item);
                    return (
                      <GradientContainer
                        className={"mt-4"}
                        children={
                          <div className="flex items-center p-2 w-[100%] rounded-2-xl h-full px-4">
                            <img
                              alt="btc"
                              className="h-10 w-10 3xl:h-14 3xl:w-14 bg-white rounded-full"
                              src={data?.logoUrl}
                            />
                            <div className="pl-[6px]">
                              <p className="font-mont text-white text-[10px] 3xl:text-xl">
                                {data?.slug}
                              </p>
                              <div
                                className={`h-[6px] w-[${
                                  (
                                    100 /
                                    location?.state?.indexData?.coins.length
                                  ).toFixed(2) + 20
                                }px] rounded-lg bg-[${pieColors[index]}]`}
                              ></div>
                              <p className="font-semibold text-white text-sm 3xl:text-xl">
                                {data?.ticker}
                              </p>
                            </div>
                          </div>
                        }
                      />
                    );
                  })}
                </div>
                <div className="flex flex-col justify-center items-center w-[40%]">
                  <CustomPieChart
                    data={location?.state?.indexData}
                    width={"100%"}
                    height={"100%"}
                  />
                  <div className="flex mt-3 items-center ml-5">
                    <p className="text-gray-400 text-sm font-medium w-1/3">
                      Portfolio Value
                    </p>
                    <p className="text-white font-semibold text-4xl ml-4">
                      $5100
                    </p>
                  </div>
                </div>
              </div>
            </div>
          }
        />
        <div className="w-[80%] h-[30%] rounded-2xl flex flex-col justify-center ">
          <div className="">
            <p className="text-gray-400 text-sm font-medium">Order Number</p>
            <p className="font-semibold text-white text-xl">894ytiwnhiuyb8n</p>
          </div>
          <div className="mt-10">
            <p className="text-gray-400  text-sm font-medium">
              You have to pay
            </p>
            <div className="flex w-full justify-between">
              <div className="flex items-end">
                <p className="font-semibold text-white text-5xl">5289</p>
                <p className="font-bold text-2xl text-gray-400 ml-3">USD</p>
              </div>
              <button className="bg-primaryButton text-white p-2 font-medium rounded-lg w-[200px] h-12 shadow-lg text-lg">
                Pay Now
              </button>
            </div>
          </div>
        </div>
        {/* <div className="w-[80%] mt-[50px]">
        <Table title={"Transactions"} data={[
          {transactionId: '3343443433434',
          type: 'Buy', 
          coin: 'Gaming Index', 
          date: 'June 22, 2022',
          amount: '$15', 
          status: 'Pending'},
          {transactionId: '3343443433434',
          type: 'Buy', 
          coin: 'Gaming Index', 
          date: 'June 22, 2022',
          amount: '$15', 
          status: 'Pending'},
          {transactionId: '3343443433434',
          type: 'Buy', 
          coin: 'Gaming Index', 
          date: 'June 22, 2022',
          amount: '$15', 
          status: 'Pending'},
          {transactionId: '3343443433434',
          type: 'Buy', 
          coin: 'Gaming Index', 
          date: 'June 22, 2022',
          amount: '$15', 
          status: 'Pending'},
        ]} />
        </div> */}
      </div>
      <div
        style={{
          backgroundImage: `url('/images/rightSectionbg.png')`,
        }}
        className="Right bg-no-repeat bg-cover bg-center basis-1/4 bg-gradient-to-tr from-slate-900 to-purple-800 p-10 justify-center items-center flex flex-col sm:hidden xl:flex"
      >
        <Deopsite />
      </div>
    </div>
  );
};

export default TransactionSummary;
