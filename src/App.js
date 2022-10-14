import React, { Suspense, useEffect, useState } from "react";
import "./App.css";
import routes from "./routes";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { auth } from "./firebas-config";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { maximumInstance, ws } from "./setup";
import Loader from "./components/Loader";

const makeRoutes = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          path={route.path}
          element={
            <Suspense
              fallback={<div className="font-mono text-base">Loading...</div>}
            >
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

  function onAuthStateChanged(user) {
    if (user) {
      localStorage.setItem("accessToken", user.accessToken);
      localStorage.setItem("uid", user.uid);
      if (user.metadata.creationTime === user.metadata.lastSignInTime) {
        maximumInstance(user?.accessToken)
          .get(`/setRole/${user.uid}`)
          .then((response) => {
            console.log("CUSTOM ROLE SET", response?.data);
            navigate("/dashboard");
          })
          .catch((err) => console.log("Error", err));
      }
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  }

  useEffect(() => {
    auth.onAuthStateChanged(onAuthStateChanged);
  }, []);
  useEffect(() => {
    ws.onopen = function () {
      console.log("open - from app");
    };

    ws.onclose = function () {
      console.log("close - from app");
    };
    ws.onerror = function (err) {
      console.log("error", err);
    };
  }, []);
  return (
    <div className="App flex">
      <Loader />
      <Sidebar />
      {makeRoutes()}
    </div>
  );
}

export default App;
