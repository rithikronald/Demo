import React from "react";
import Indexes from './views/Indexes'
const IndexesParticular = React.lazy(() => import("./views/IndexParticulars"));
const Splash = React.lazy(() => import("./views/Splash"));
const Login = React.lazy(() => import("./views/Login"));
const OTPVerification = React.lazy(() => import("./views/OTP-Verification"));
const Home = React.lazy(() => import("./views/Home"));
const CoinDesc = React.lazy(() => import("./views/CoinDesc"));

// const Indexes = React.lazy(() => import("./views/Indexes"));
const Transactions = React.lazy(() => import("./views/Transactions"));
const CoinList = React.lazy(() => import("./views/CoinList"));
const TransactionSummary = React.lazy(() =>
  import("./views/TransactionSummary")
);
const WalletOverview = React.lazy(() => import("./views/WalletOverview"));
const Settings = React.lazy(() => import("./views/Settings"));

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
  {
    path: "/coin-desc/:coinId",
    name: "CoinDesc",
    exact: true,
    component: CoinDesc,
  },
  { path: "/indexes", name: "Indexes", exact: true, component: Indexes },
  { path: "/coinList", name: "CoinList", exact: true, component: CoinList },
  {
    path: "/transactions",
    name: "Transactions",
    exact: true,
    component: Transactions,
  },
  {
    path: "/transactionSummary",
    name: "transactionSummary",
    exact: true,
    component: TransactionSummary,
  },
  {
    path: "/walletOverview",
    name: "walletOverview",
    exact: true,
    component: WalletOverview,
  },
  { path: "/settings", name: "settings", exact: true, component: Settings },
  {
    path: "/indexes/indexId",
    name: "IndexesParticular",
    exact: true,
    component: IndexesParticular,
  },
];

export default routes;
