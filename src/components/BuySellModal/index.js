import { useEffect } from "react";
import { Tabs } from "../../views/CoinList";
import { GradientContainer } from "../GradientContainer";

const innertabsData = [
  {
    label: "Limit",
  },
  {
    label: "Market",
  },
];



export const BuySellModal = (props) => {
    
    const [currentPrice, setCurrentPrice] = useState()

    const wsGet = (id, method, params) => {
        ws.onopen = function () {
          console.log("open");
          var array = JSON.stringify({
            id: id,
            method: method,
            params: params,
          });
          ws.send(array);
        };
        ws.onmessage = function (evt) {
          const data = JSON.parse(evt?.data);
          const coinName = data?.params?.[0].toString().split("_")[0];
          if (coinName) {
            setCurrentPrice((prev) => {
              return {
                ...prev,
                [`${coinName}`]: data?.params?.[1]?.last,
              };
            });
          }
        };
        ws.onclose = function () {
          console.log("close");
        };
        ws.onerror = function (err) {
          console.log("error", err);
        };
      };
  useEffect(() => {
    console.log("TICKER", props?.ticker);
    if(props?.ticker){
        wsGet(Math.round(Math.random() * 1000), "ticker.subscribe", [props?.ticker]);
    }
  }, [props?.ticker]);

  return (
    <div className="flex  flex-col p-4 px-6 w-full h-full">
      <Tabs data={innertabsData} />;
      <div>
        <div className="mt-4">
          <p className="text-white font-medium text-xs ml-2 mb-1">Price</p>
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
        <div className="mt-4">
          <p className="text-white font-medium text-xs ml-2 mb-1">Amount</p>
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
        <div className="mt-4">
          <p className="text-white font-medium text-xs ml-2 mb-1">Total</p>
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
      </div>
    </div>
  );
};
