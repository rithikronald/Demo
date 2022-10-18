var WebSocketClient = require("websocket").w3cwebsocket;
// const WS_URL = "wss://ws.gate.io/v3/";
const WS_URL = "wss://api.gateio.ws/ws/v4/";
export const ws = new WebSocketClient(WS_URL);

export const socketInitialiser = () => {
  ws.onopen = function () {
    console.log("open");
    var array = JSON.stringify({
      time: new Date().getTime(),
      channel: "spot.ping",
    });
    ws.send(array);
  };
  ws.onmessage = function (evt) {
    const data = JSON.parse(evt?.data);
    // console.log(data);
    if (data && data?.error == null) {
      console.log("sockets connected");
    }
  };
  ws.onclose = function () {
    console.log("close");
  };
  ws.onerror = function (err) {
    console.log("error", err);
  };
};

export const wsGet4 = ({ time, channel, event, payload, onmessage }) => {
  ws.onopen = function () {
    console.log("open");
    var array = JSON.stringify({
      time,
      channel,
      event,
      payload,
    });
    ws.send(array);
  };
  ws.onmessage = onmessage;
  ws.onclose = function () {
    console.log("close");
  };
  ws.onerror = function (err) {
    console.log("error", err);
  };
};

export const dashboardSocket = ({ event, onmessage }) => {
  ws.onmessage = onmessage;
};

export const coinDescSocket = ({ ticker, event, onmessage }) => {
  var array = JSON.stringify({
    time: new Date().getTime,
    channel: "spot.tickers",
    event,
    payload: [`${ticker}_USDT`],
  });
  ws.send(array);

  ws.onmessage = onmessage;
};
