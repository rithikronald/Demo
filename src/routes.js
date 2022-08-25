import React from "react";
const Splash = React.lazy(() => import("./views/Splash"));
const Login = React.lazy(() => import("./views/Login"));
const Home = React.lazy(() => import("./views/Home"));
const CoinDesc = React.lazy(() => import("./views/CoinDesc"));
const Indexes = React.lazy(() => import("./views/Indexes"));
const TransactionSummary = React.lazy(() => import('./views/TransactionSummary'))

const routes = [
  { path: "/", name: "Splash", exact: true, component: Splash },
  { path: "/login", name: "Login", exact: true, component: Login },
  { path: "/dashboard", name: "Home", exact: true, component: Home },
  { path: "/coin-desc", name: "CoinDesc", exact: true, component: CoinDesc },
  { path: "/indexes", name: "Indexes", exact: true, component: Indexes },
  {path: '/transactionSummary', name: 'transactionSummary', exact: true, component: TransactionSummary}
];

export default routes;
