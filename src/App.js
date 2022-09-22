import React, { Suspense, useEffect, useState } from "react";
import "./App.css";
import routes from "./routes";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { auth } from "./firebas-config";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
  const [userDetails, setUserDetails] = useState();

  function onAuthStateChanged(user) {
    if (user) {
      setUserDetails({ uid: user.uid, accessToken: user.accessToken });
      window.accessToken = user.accessToken;
      console.log("userToken", window.uid);
      if (user.metadata.creationTime === user.metadata.lastSignInTime) {
        axios
          .get(
            `https://us-central1-maximumprotocol-50f77.cloudfunctions.net/api/setRole/${user.uid}`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.accessToken}`,
              },
            }
          )
          .then((response) => {
            console.log("CUSTOM ROLE SET", response?.data);
            navigate("/dashboard");
          })
          .catch((err) => console.log("Error", err));
      }
      navigate("/dashboard");
      // User is signed in.
    } else {
      navigate("/login");
    }
  }

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  return (
    <userIdContext.Provider value={userDetails}>
      <div className="App flex">
        <Sidebar />
        {makeRoutes()}
      </div>
    </userIdContext.Provider>
  );
}

export default App;
