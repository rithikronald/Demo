import React from 'react'


const Home = React.lazy(() => import("./views/Home"))
const CoinDesc = React.lazy(() => import('./views/CoinDesc'))

const routes = [
    {path: '/', name: 'Home', exact: true, component: Home},
    {path: '/coin-desc', name: 'CoinDesc', exact: true, component: CoinDesc}
]

export default routes