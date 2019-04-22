import * as constants from "./constants";
import { fromJS } from "immutable";

// 创建immutable数据
const initialState = fromJS({
    focused: false,
    list: []   // 内部的对象数据也会被转化为immutable
});

// 从原来的采用if-else if的方式切换为switch的方式
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case constants.SEARCH_FOCUS:
            return state.set("focused", true);
        
        case constants.SEARCH_BLUR:
            return state.set("focused", false);
        
        case constants.GET_SEARCH_LIST:
            return state.set("list", action.data);
        
        default:
            return state;
    }
    
}

export { reducer };