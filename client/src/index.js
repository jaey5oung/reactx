import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "antd/dist/antd.css" // or 'antd/dist/antd.less'
import { Provider } from "react-redux"
import { applyMiddleware, createStore } from "redux"
import promiseMiddleware from "redux-promise"
import ReduxThunk from "redux-thunk"
import Reducer from "./_reducers"

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)
//원래는 크리에잇스토어만해서 스토어에서 리덕스만 생성하는건데 그냥스토어는 객체받기 못받기떄문에 프로미스와펑션도 받을수있게 미들웨어에만든것

ReactDOM.render(
  <Provider
    store={createStoreWithMiddleware(
      Reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <App />
  </Provider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
