import * as constants from "./constants";
import { fromJS } from "immutable";

// 创建immutable数据
const initialState = fromJS({
    focused: false,
    list: []   // 内部的对象数据也会被转化为immutable
});

const reducer = (state = initialState, action) => {
    if(constants.SEARCH_FOCUS === action.type) {
        return state.set("focused", true)
    } else if(constants.SEARCH_BLUR === action.type) {
        return state.set("focused", false);
    } else if(constants.GET_SEARCH_LIST === action.type) {
        return state.set("list", action.data);
    }
    
    return state;
}

export { reducer };