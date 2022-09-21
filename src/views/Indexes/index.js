import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cell, Pie, PieChart } from "recharts";
import { CustomIndexChart } from "../../components/Charts/CustomIndexChart";
import { CustomLineChart } from "../../components/Charts/CustomLineChart";
import { GradientContainer } from "../../components/GradientContainer";
import { IndexDetails } from "../../components/RightComponent/indexDetails";
import SetupSIP from "../../components/RightComponent/setupSIP";
import { indBgImgList } from "../../constants/constants";
import { getCoinMeta } from "../../hooks/getcoinMetaData";
import { useWindowDimensions } from "../../hooks/useWindowDimension";
import "./style.css";
import {connect} from 'react-redux'
import types from "../../store/types";

const Indexes = (props) => {
  const navigate = useNavigate();
  const { height, width } = useWindowDimensions();
  const [basketData, setBasketData] = useState();
  const [indexData, setIndexData] = useState();
  const [pageRightIndex, setPageRightIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    props.openLoader()
    axios
      .get(
        `https://us-central1-maximumprotocol-50f77.cloudfunctions.net/api/indexes`,
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        setBasketData(response?.data);
        props.closeLoader()
      })
      .catch((err) => {
        console.log("error", err)
        props.closeLoader()
      });
  }, []);

  useEffect(() => {
    setIndexData(basketData?.[currentIndex]);
  }, [basketData, currentIndex]);

  return (
    <div className="App bg-gradient-to-tl from-bg via-bgl1 to-darkPurple flex h-screen w-full font-mont">
      <div className="Left bg-yellow-40 p-10 px-[7%] flex flex-col justify-around sm:flex xl:basis-3/4">
        <div className="flex w-full justify-between">
          <p className="text-white font-bold  text-[29px] ">Indexes</p>
          <p className="text-white opacity-30 font-bold  text-[14px]">
            Sort By
          </p>
        </div>
        <div className="indexListContainer grid grid-cols-3 gap-3 overflow-y-scroll">
          {basketData &&
            basketData?.map((item, index) => (
              <GradientContainer
                width="w-[98%]"
                height="h-64"
                className={"mt-4"}
                children={
                  <button
                    onClick={() => setCurrentIndex(index)}
                    className="flex w-full h-full flex-col justify-between p-2"
                  >
                    <div
                      style={{
                        backgroundImage: `url('/${indBgImgList[index]}')`,
                      }}
                      className={`bg-no-repeat bg-cover bg-center flex items-start justify-between flex-col h-5/6 w-full rounded-xl p-[6%]`}
                    >
                      <p className="text-white text-md font-semibold">
                        {item?.basketName}
                      </p>
                      <div className="flex w-full h-[90%]">
                        <CustomIndexChart width={"100%"} height={"100%"} />
                      </div>
                    </div>
                    <div className="flex w-full justify-between items-center mt-1">
                      <div className="flex">
                        {item?.coins?.map((item, index) => {
                          const data = getCoinMeta(item);
                          return (
                            index < 3 && (
                              <div className="bg-gradient-to-b from-fuchsia-500 to-cyan-500 w-6 h-6 p-[1px] rounded-full">
                                <div className="flex w-full h-full justify-center items-center">
                                  <img
                                    className="w-6 rounded-full bg-white"
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
                      <div className="flex bg-gradient-to-b from-fuchsia-500 to-cyan-500 h-6 w-14 rounded-2xl p-[1px]">
                        <button
                          onClick={() =>
                            navigate("/indexes/indexId", {
                              state: { indexData: item },
                            })
                          }
                          className="flex h-full bg-bg rounded-2xl text-white w-full justify-center items-center font-bold text-[8px]"
                        >
                          VIEW
                        </button>
                      </div>
                    </div>
                  </button>
                }
              />
            ))}
        </div>
      </div>
      <div  style={{
          backgroundImage: `url('/images/rightSectionbg.png')`,
        }} className="Right bg-no-repeat bg-cover bg-center basis-1/4 bg-gradient-to-tl from-bg via-maxPurple to-darkPurple p-8 justify-around flex flex-col sm:hidden xl:flex">
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

const mapDispatchToProps = (dispatch) => {
  return {
    closeLoader: () => dispatch({type: types.CLOSE_LOADER}),
    openLoader: () => dispatch({type: types.OPEN_LOADER})
  }
}

export default connect(null, mapDispatchToProps)(Indexes);
