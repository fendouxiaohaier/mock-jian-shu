import { combineReducers } from "redux-immutable";
import { reducer as headerReducer } from "../common/header/store/";
import { reducer as homeReducer } from "../pages/home/store/";

// 将返回的state转化为immutable对象
const reducer =  combineReducers({
    header: headerReducer,
    home: homeReducer
});

export default reducer;