var WebSocketClient = require("websocket").w3cwebsocket;
const WS_URL = "wss://ws.gate.io/v3/";
export const ws = new WebSocketClient(WS_URL);
