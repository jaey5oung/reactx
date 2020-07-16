import { combineReducers } from "redux"
import user from "./user_reducer"
// import comment from './comment_reducer';

const rootReducer = combineReducers({
  user,
})
//스토어가 잇는데 리듀서들이 여러가지가 있는데(리듀서안에서하는일이 어떻게스테이터가 변하는것을 보여주는것 마지막값을 리턴해주는것 ex userReducer,postReducer)
//콤바인 리듀서를 루트리듀서로 이용해서 하나로 합쳐주는것
export default rootReducer
