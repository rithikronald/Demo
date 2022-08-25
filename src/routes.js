import React from "react";

const Splash = React.lazy(() => import("./views/Splash"));
const Home = React.lazy(() => import("./views/Home"));
const CoinDesc = React.lazy(() => import("./views/CoinDesc"));
const Indexes = React.lazy(() => import("./views/Indexes"));
const Login = React.lazy(() => import("./views/Login"));
const OTPVerification = React.lazy(() => import("./views/OTP-Verification"));

const routes = [
  { path: "/", name: "Splash", exact: true, component: Splash },
  { path: "/login", name: "Login", exact: true, component: Login },
  {
    path: "/otpVerification",
    name: "OTPVerification",
    exact: true,
    component: OTPVerification,
  },
  { path: "/dashboard", name: "Home", exact: true, component: Home },
  { path: "/coin-desc", name: "CoinDesc", exact: true, component: CoinDesc },
  { path: "/indexes", name: "Indexes", exact: true, component: Indexes },
];

export default routes;
