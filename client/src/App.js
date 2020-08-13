import React from "react"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import LandingPage from "./components/views/LandingPage/LandingPage"
import LoginPage from "./components/views/LoginPage/LoginPage"
import RegisterPage from "./components/views/RegisterPage/RegisterPage"
import Test from "./components/views/Test/Test"
import Auth from "./hoc/auth"
import TestLogin from "./components/views/TestLogin/TestLogin"
import DashBoard from "./components/views/DashBoard/DashBoard"
import GoodsHistory from "./components/views/GoodsHistory/GoodsHistory"
function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* 라우터를 통해 /path 경로를 설정해주는방법 */}
          <Route exact path="/" component={Auth(LandingPage, null, true)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/test" component={Test} />
          <Route exact path="/testLogin" component={TestLogin} />
          <Route exact path="/dashboard" component={DashBoard} />
          <Route exact path="/goodshistory" component={GoodsHistory} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
