import React, { Suspense, useEffect, useState } from "react";
import "./App.css";
import routes from "./routes";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { auth } from "./firebas-config";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { maximumInstance } from "./setup";
import Loader from "./components/Loader";
import { useWindowDimensions } from "./hooks/useWindowDimension";
import logo from "./assets/logo.svg";
var WebSocketClient = require("websocket").w3cwebsocket;
const WS_URL = "wss://api.gateio.ws/ws/v4/";
export const ws = new WebSocketClient(WS_URL);

const makeRoutes = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          path={route.path}
          element={
            <Suspense fallback={<div data-stage></div>}>
              <route.component />
            </Suspense>
          }
          exact={route.exact}
        />
      ))}
    </Routes>
  );
};

export const userIdContext = React.createContext();

function App() {
  const navigate = useNavigate();

  ws.onopen = function () {
    console.log("open - from app");
  };
  ws.onclose = function () {
    console.log("close - from app");
  };
  ws.onerror = function (err) {
    console.log("error - from app", err);
  };

  function onAuthStateChanged(user) {
    if (user) {
      localStorage.setItem("accessToken", user.accessToken);
      localStorage.setItem("uid", user.uid);
      if (user.metadata.creationTime === user.metadata.lastSignInTime) {
        maximumInstance
          .get(`/setRole/${user.uid}`)
          .then((response) => {
            console.log("CUSTOM ROLE SET", response?.data);
          })
          .catch((err) => console.log("Error", err));
      }
      // navigate("/dashboard");
    } else {
      navigate("/login");
    }
  }

  useEffect(() => {
    auth.onAuthStateChanged(onAuthStateChanged);
  }, []);

  const { width } = useWindowDimensions();
  const small = width < 1100;

  return !small ? (
    <div className="App flex">
      <Loader />
      <Sidebar />
      {makeRoutes()}
    </div>
  ) : (
    <div className="">
      <img
        src={require("./assets/chadBackground.png")}
        className="fixed top-0 left-0 h-screen w-screen object-cover "
      />
      <img
        src={logo}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-[200px] h-[200px]"
      />
      <p className="font-mont text-white text-[20px] fixed top-1/2 left-1/2 -translate-x-1/2 text-center">
        Maximum Protocol is only available on web version.
        <span className="font-bold text-[22px]">
          {" "}
          Mobile version comming soon.
        </span>
      </p>
    </div>
  );
}

export default App;
