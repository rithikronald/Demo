import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { connect } from "react-redux";
import { maximumInstance } from "../../App";
import { GradientContainer } from "../../components/GradientContainer";
import { getCoinMeta } from "../../hooks/getcoinMetaData";
import { useWindowDimensions } from "../../hooks/useWindowDimension";
import types from "../../store/types";

const ManageAddresses = () => {
  const { height, width } = useWindowDimensions();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState();
  const [chain, setChain] = useState();
  const [address, setAddress] = useState();
  const [addressName, setAddressName] = useState();
  const [editData, setEditData] = useState();

  const columns = [
    {
      name: "Coin",
      selector: (row) => {
        const coinData = getCoinMeta(row?.currency);
        return (
          <div className="flex items-center cursor-pointer">
            <img
              className="w-6 h-6 xl:w-8 xl:h-8 rounded-full bg-white"
              src={coinData?.logoUrl}
              alt="logo"
            />
            <p className="xl:text-xl text-lg  font-bold ml-2">
              {coinData?.ticker}
            </p>
            <p className="text-white xl:text-lg text-xs ml-2 ">
              {coinData?.slug}
            </p>
          </div>
        );
      },
      sortable: true,
    },
    {
      name: "Network",
      selector: (row) => {
        return <p className="font-mont text-white text-sm">{row?.chain}</p>;
      },
      sortable: true,
      style: {
        color: "#fff",
        fontWeight: "500",
      },
      grow: 1,
    },
    {
      name: "Address Name",
      selector: (row) => {
        return <p className="font-mont  text-sm">{row?.name}</p>;
      },
      sortable: true,
      style: {
        fontWeight: "500",
      },
    },
    {
      name: "Status",
      selector: (row) => {
        return <p className="font-mont  text-sm">{row?.status}</p>;
      },
      sortable: true,
      style: {
        fontWeight: "500",
      },
    },
    {
      name: "Address",
      selector: (row) => <p className="font-mont text-sm">{row?.address}</p>,
      sortable: true,
      style: {
        color: "#fff",
        fontWeight: "500",
      },
      grow: 1.5,
    },
    {
      name: "Actions",
      selector: (row, index) => (
        <div className="flex gap-x-3">
          <button
            onClick={() => {
              setEditData(row);
              setIsModalOpen(true);
              console.log("EditData", row);
            }}
            className="p-2.5 px-5 font-semibold rounded-xl text-white font-mont bg-green-600"
          >
            Edit
          </button>
          <button
            onClick={() => DeleteAddress(row?.key)}
            className="p-1.5 px-5 font-semibold rounded-xl text-white font-mont bg-red-600"
          >
            Delete
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

  useEffect(() => {
    setChain(editData?.chain);
    maximumInstance
      .get(`/gateio/withdrawalAddresses/${localStorage.getItem("uid")}`)
      .then((res) => {
        console.log("Response", res?.data);
        const data = Object.keys(res?.data).map((key) => {
          return {
            ...res?.data[key],
            key,
          };
        });
        setData(data);
      })
      .catch((e) => console.log("Error", e));
  }, [editData]);

  const AddWithDrawAddress = () => {
    maximumInstance
      .post(`/gateio/withdrawalAddresses/${localStorage.getItem("uid")}`, {
        currency: "USDT",
        address: address,
        name: addressName,
        chain: chain,
      })
      .then((res) => {
        console.log("Response", res?.data);
        setIsModalOpen(false);
      })
      .catch((e) => console.log("Error", e));
  };

  const DeleteAddress = (key) => {
    maximumInstance
      .delete(
        `/gateio/withdrawalAddresses/${localStorage.getItem("uid")}/${key}`
      )
      .then((res) => {
        console.log("Response", res?.data);
        setIsModalOpen(false);
      })
      .catch((e) => console.log("Error", e));
  };

  const EditWithdrawAddress = (key) => {
    maximumInstance
      .put(
        `/gateio/withdrawalAddresses/${localStorage.getItem("uid")}/${key}`,
        {
          currency: "USDT",
          address: address,
          name: addressName,
          chain: chain,
        }
      )
      .then((res) => {
        console.log("Edit Response", res?.data);
        setIsModalOpen(false);
      })
      .catch((e) => console.log("Error", e));
  };

  useEffect(() => {
    setChain(editData?.chain);
    setAddress(editData?.address);
    setAddressName(editData?.name);
  }, [editData]);

  return (
    <div className="App  bg-gradient-to-tl justify-center items-center from-bg via-bgl1 to-darkPurple  flex h-screen w-full font-mont">
      <div
        className={`flex mt-5 flex-col ${
          height > 800 ? "h-[800px]" : "h-screen"
        } ${width > 1440 ? "w-[80%]" : "w-full"}`}
      >
        {isModalOpen && (
          <div
            tabindex="-1"
            className="h-modal fixed top-0 right-0 left-0 z-50 w-full h-full flex justify-center items-center"
          >
            <div className="bg-gradient-to-tr from-maxPurple to-purple-800 shadow-md w-[50%] h-[50%] rounded-lg p-6">
              <div className="w-full flex justify-between">
                <p className="font-semibold text-xl text-white">Add Address</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 stroke-white font-semibold"
                  onClick={() => setIsModalOpen(false)}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <div className="flex-col flex w-full h-[85%] p-3 overflow-y-auto">
                <div className="flex flex-col mt-6">
                  <div>
                    <p className="font-semibold text-lg text-white">
                      Select Coin
                    </p>
                    <button
                      className={`rounded-3xl mt-4 bg-maxPurple ring-2 ring-white flex justify-between items-center px-4 p-1 `}
                    >
                      <img
                        alt="vector"
                        className="w-6 h-6"
                        src={require("../../assets/usdt.png")}
                      />
                      <p className="text-white ml-1 text-xs font-semibold">
                        USDT
                      </p>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col mt-6">
                  <div>
                    <p className="font-semibold text-lg text-white">
                      Select Network
                    </p>
                    <div className="bg-maxPurple mt-2 rounded-lg h-10 w-[40%] flex items-center p-1 pl-2">
                      <select
                        id="countries"
                        className="focus:outline-none h-full w-full bg-transparent text-gray-500 text-md rounded-lg focus:ring-bg focus:border-bg"
                        value={chain}
                        onChange={(e) => setChain(e.target.value)}
                      >
                        {["ETH", "BSC", "TRX", "SOL", "MAT"].map((item) => {
                          return <option value={item}>{item}</option>;
                        })}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mt-6">
                  <div>
                    <p className="font-semibold text-lg text-white">
                      Enter Address
                    </p>
                    <div className="bg-maxPurple mt-2 rounded-lg h-10 w-[40%] flex items-center p-1 pl-2">
                      <input
                        type="text"
                        className="h-full w-full bg-transparent outline-none text-white text-lg font-semibold rounded-lg text-center form-control"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mt-6">
                  <div>
                    <p className="font-semibold text-lg text-white">
                      Address Name
                    </p>
                    <div className="bg-maxPurple mt-2 rounded-lg h-10 w-[40%] flex items-center p-1 pl-2">
                      <input
                        type="text"
                        className="h-full w-full bg-transparent outline-none text-white text-lg font-semibold rounded-lg text-center form-control"
                        value={addressName}
                        onChange={(e) => setAddressName(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="border-2 border-purple-800 text-white p-4 font-semibold rounded-lg h-12 shadow-lg text-sm flex justify-center items-center"
                >
                  Cancel
                </button>
                <button
                  onClick={() =>
                    editData
                      ? EditWithdrawAddress(editData?.key)
                      : AddWithDrawAddress()
                  }
                  className="bg-primaryButton text-white p-4 font-semibold rounded-lg h-12 shadow-lg text-sm flex justify-center items-center"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="w-full h-full flex flex-col">
          <div className="w-full flex justify-between">
            <p className="text-white text-2xl font-semibold">Address Book</p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-primaryButton text-white p-4 font-semibold rounded-lg h-12 shadow-lg text-sm flex justify-center items-center"
            >
              Add Address
            </button>
          </div>
          <div className="Table bg-gradient-to-b from-fuchsia-500 to-cyan-500 p-[1px] sm:rounded-lg mt-4">
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
              {data && (
                <DataTable
                  columns={columns}
                  data={data}
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
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeLoader: () => dispatch({ type: types.CLOSE_LOADER }),
    openLoader: () => dispatch({ type: types.OPEN_LOADER }),
  };
};

export default connect(null, mapDispatchToProps)(ManageAddresses);
