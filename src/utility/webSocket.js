var WebSocketClient = require("websocket").w3cwebsocket;
const WS_URL = "wss://ws.gate.io/v3/";
var ws = new WebSocketClient(WS_URL);

const KEY = "1dbcdeb0cb67b8ab5be2bfb2b2843702";
const SECRET =
  "0c7fb151f5ca9d8e748b4e5d7fdec47c3ec16663f43fba5f75fb9c8ecc67f724";

function getSign(str) {
  return crypto
    .createHmac("sha512", SECRET)
    .update(str)
    .digest()
    .toString("base64");
}

export const gateio = {
  gateGet: function (id, method, params) {
    var array = JSON.stringify({
      id: id,
      method: method,
      params: params,
    });
    ws.send(array);
  },
  gateRequest: function (id, method, params) {
    var nonce = Math.round(new Date().getTime());
    params = [KEY, getSign(nonce + ""), nonce];
    var array = JSON.stringify({
      id: id,
      method: method,
      params: params,
    });
    ws.send(array);
  },
};

// const wsGet = (id, method, params) => {
//   var methods;
//   ws.onopen = function () {
//     console.log("open");
//     methods = method;
//     if (method == "server.sign") gateio.gateRequest(id, method, params);
//     else if (
//       method == "order.query" ||
//       method == "order.subscribe" ||
//       method == "order.update" ||
//       method == "order.unsubscribe" ||
//       method == "balance.query" ||
//       method == "balance.subscribe" ||
//       method == "balance.update" ||
//       method == "balance.unsubscribe"
//     ) {
//       gateio.gateRequest(id, "server.sign", []);
//       methods = "server.sign";
//       setTimeout(() => {
//         gateio.gateGet(id, method, params);
//         methods = "";
//       }, 1000);
//     } else gateio.gateGet(id, method, params);
//   };

//   ws.onmessage = function (evt) {
//     const data = JSON.parse(evt?.data);
//     console.log(data?.params?.[0], data?.params?.[1]?.last);
//     // window.socketData = data;
//     // if(methods != 'server.sign')
//     // ws.close();
//   };

//   ws.onclose = function () {
//     console.log("close");
//   };

//   ws.onerror = function (err) {
//     console.log("error", err);
//   };
// };

// wsGet(Math.round(Math.random() * 1000), "ticker.subscribe", [
//   "BTC_USDT",
//   "ETH_USDT",
//   "BNB_USDT",
//   "XRP_USDT",
//   "ADA_USDT",
//   "SOL_USDT",
//   "DOGE_USDT",
//   "DOT_USDT",
// ]);