import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./components/views/Header/Header"
import Test from "./components/views/Test/Test"
import ZeroCho from "./components/views/Zerocho/Zerocho"
import TestLogin from "./components/views/TestLogin/TestLogin"
import DashBoard from "./components/views/DashBoard/DashBoard"
import GoodsHistory from "./components/views/GoodsHistory/GoodsHistory"
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          {/* 라우터를 통해 /path 경로를 설정해주는방법 */}

          <Route exact path="/" component={Test} />
          <Route exact path="/testLogin" component={TestLogin} />
          <Route exact path="/dashboard" component={DashBoard} />
          <Route exact path="/goodshistory" component={GoodsHistory} />
          <Route exact path="/zerocho" component={ZeroCho} />
          {/* <Route exact path="/update" component={Update} /> */}
        </Switch>
      </div>
    </Router>
  )
}

export default App
