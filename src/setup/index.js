import axios from "axios";
export const MAXIMUM_BASE_URL =
  "https://us-central1-maximumprotocol-50f77.cloudfunctions.net/api";

const MAXIMUM_LOCAL =
  "https://192.168.0.109:5001/maximumprotocol-50f77/us-central1/api";



// var WebSocketClient = require("websocket").w3cwebsocket;
// const WS_URL = "wss://api.gateio.ws/ws/v4/";
// export const ws = new WebSocketClient(WS_URL);

// export const wsGet = (id, method, params, onmessage) => {
//   ws.onopen = function () {
//     console.log("open");
//     var array = JSON.stringify({
//       id: id,
//       method: method,
//       params: params,
//     });
//     ws.send(array);
//   };
//   ws.onmessage = onmessage;
//   ws.onclose = function () {
//     console.log("close");
//   };
//   ws.onerror = function (err) {
//     console.log("error", err);
//   };
// };
