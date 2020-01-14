// 将相应的模块store中的index文件, 在全局的store中进行注册


import { combineReducers } from "redux";
// import DetailsReducer from "../application/Details/store/reducer.js";
import { reducer as DetailsReducer} from "../application/Details/store/index"

const reducer = combineReducers({
  details: DetailsReducer
})

export default reducer;