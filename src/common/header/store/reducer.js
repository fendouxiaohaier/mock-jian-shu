import * as constants from "./constants";
import { fromJS } from "immutable";

// 创建immutable数据
const initialState = fromJS({
    focused: false
});

const reducer = (state = initialState, action) => {
    if(constants.SEARCH_FOCUS === action.type) {
        return state.set("focused", true)
    } else if(constants.SEARCH_BLUR === action.type) {
        return state.set("focused", false);
    }
    
    return state;
}

export { reducer };