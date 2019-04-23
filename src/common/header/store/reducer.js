import * as constants from "./constants";
import { fromJS } from "immutable";

// 创建immutable数据
const initialState = fromJS({
    switchIconRotateDeg: 0,
    focused: false,
    mouseIn: false,  // 鼠标是否移入热门搜索显示框
    curIndex: 0,  // 热门搜索index坐标，表示下一次显示热门搜索应该从list数据的哪里开始选取，一共选取10个
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
            return state.merge({"list": action.data});
        
        case constants.SEARCH_MOUSE_ENTER:
            return state.set("mouseIn", true);
        case constants.SEARCH_MOUSE_LEAVE:
            return state.set("mouseIn", false);

        case constants.CHANGE_SEARCH_LIST:
            return state.set("curIndex", action.curIndex);

        case constants.CHANGE_SWITCH_ICON_DEG:
            return state.set("switchIconRotateDeg", (state.get("switchIconRotateDeg")+360));
            
        default:
            return state;
    }
    
}

export { reducer };