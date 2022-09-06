import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cell, Pie, PieChart } from "recharts";
import { GradientContainer } from "../../components/GradientContainer";
import { IndexDetails } from "../../components/RightComponent/indexDetails";
import SetupSIP from "../../components/RightComponent/setupSIP";
import { getCoinMeta } from "../../hooks/getcoinMetaData";
import { useWindowDimensions } from "../../hooks/useWindowDimension";
import "./style.css";


const Indexes = () => {
  const navigate = useNavigate();
  const { height, width } = useWindowDimensions();
  const [basketData, setBasketData] = useState();
  const [indexData, setIndexData] = useState();
  const [pageRightIndex, setPageRightIndex] = useState(0);
  useEffect(() => {
    axios
      .get(
        `https://us-central1-maximumprotocol-50f77.cloudfunctions.net/getAllIndexes`,
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        setBasketData(response?.data);
      })
      .catch((err) => console.log("error", err));
  }, []);

  useEffect(() => {
    setIndexData(basketData?.[0]);
  }, [basketData]);

  return (
    <div className="App bg-bgl1 flex h-screen w-full">
      <div className="Left bg-yellow-40 p-10 px-14 flex flex-col justify-around sm:flex xl:basis-3/4">
        <div className="flex w-full justify-between">
          <p className="text-white font-bold font-mont text-[29px] ">Indexes</p>
          <p className="text-white opacity-30 font-bold font-mont text-[14px]">
            Sort By
          </p>
        </div>
        <div className="indexListContainer grid grid-cols-3 gap-3 overflow-y-scroll">
          {basketData &&
            basketData?.map((item, index) => (
              <button
                onClick={() =>
                  navigate("/indexes/indexId", { state: { indexData: item } })
                }
                className="w-[250px] h-56 mt-4 rounded-3xl bg-gradient-to-b from-fuchsia-500 to-cyan-500 p-[1px] 3xl:h-80"
              >
                <div className="bg-bg rounded-3xl h-full flex flex-col justify-between p-2">
                  <div className="bg-gradient-to-tl from-right via-left to-top flex h-5/6 w-full rounded-2xl p-4">
                    <p className="text-white text-lg font-semibold">
                      {item?.basketName}
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <div className="flex py-2 space-x-1">
                      {item?.coins?.map((item, index) => {
                        const data = getCoinMeta(item);
                        return (
                          index < 3 && (
                            <div className="bg-gradient-to-b from-fuchsia-500 to-cyan-500 w-6 h-6 p-[1px] rounded-full">
                              <div className="flex w-full h-full justify-center items-center">
                                <img
                                  className="w-6 rounded-full"
                                  alt="btc"
                                  src={data?.logoUrl}
                                />
                              </div>
                            </div>
                          )
                        );
                      })}
                      <div className="bg-gradient-to-b from-fuchsia-500 to-cyan-500 w-6 h-6 p-[1px] rounded-full">
                        <div className="bg-bg rounded-full flex w-full h-full justify-center items-center flex-col">
                          <p className="text-white text-[7px] font-bold">
                            + {item?.coins.length - 3}
                          </p>
                          <p className="text-white text-[5px]">more</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600 h-6 w-1/3 rounded-2xl p-[1px]">
                      <button className="flex h-full bg-bg rounded-2xl text-white w-full justify-center items-center text-xs">
                        VIEW
                      </button>
                    </div>
                  </div>
                </div>
              </button>
            ))}
        </div>
      </div>
      <div className="Right basis-1/4 bg-gradient-to-tr from-slate-900 to-purple-800 p-8 justify-around flex flex-col sm:hidden xl:flex">
        {pageRightIndex == 0 && (
          <IndexDetails
            indexData={indexData}
            onClick={() => setPageRightIndex(1)}
          />
        )}
        {pageRightIndex == 1 && (
          <SetupSIP onClick={() => setPageRightIndex(0)} />
        )}
      </div>
    </div>
  );
};
export default Indexes;
