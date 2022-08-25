import React from 'react'


const Home = React.lazy(() => import("./views/Home"))
const CoinDesc = React.lazy(() => import('./views/CoinDesc'))
const Indexes = React.lazy(() => import('./views/Indexes'))
const TransactionSummary = React.lazy(() => import('./views/TransactionSummary'))

const routes = [
    {path: '/', name: 'Home', exact: true, component: Home},
    {path: '/coin-desc', name: 'CoinDesc', exact: true, component: CoinDesc}, 
    {path: '/indexes', name: 'Indexes', exact: true, component: Indexes},
    {path: '/transactionSummary', name: 'transactionSummary', exact: true, component: TransactionSummary}
]

export default routes