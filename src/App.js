import { Suspense, useEffect } from "react";
import "./App.css";
import routes from "./routes";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import {auth} from "./firebas-config";
import { useNavigate } from "react-router-dom";

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

function App() {
  const navigate = useNavigate();

  function onAuthStateChanged(user) {
    if (user) {
      window.accessToken = user.accessToken
      console.log("userToken", user.accessToken);
      // User is signed in.
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  }

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  return (
    <div className="App flex">
      <Sidebar />
      {makeRoutes()}
    </div>
  );
}

export default App;
