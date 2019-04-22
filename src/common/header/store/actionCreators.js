import * as constants from "./constants";
import axios from "axios";
import { fromJS } from "immutable";

export const searchFocusAction = () => ({
        type: constants.SEARCH_FOCUS
    });

export const searchBlurAction = () => ({
    type: constants.SEARCH_BLUR
});

export const searchMouseEnter = () => ({
    type: constants.SEARCH_MOUSE_ENTER
});

export const searchMouseLeave = () => ({
    type: constants.SEARCH_MOUSE_LEAVE
});

export const ChangeSearchList = (curIndex) => ({
    type: constants.CHANGE_SEARCH_LIST,
    curIndex
});

export const getSearchList = () => {
    return (dispatch) => {
        axios.get("/api/getSearchList.json").then((res) => {
            dispatch( changeList(res.data.data) );
        }).then((error) => {
            console.log(error);
        });
    }
};

// 派发到reducer的数据都应该全部保持一致，使用immutable类型的数据
// 不需要导出的变量都建议放在最下面吧，尽量不和需要导出的变量混合
const changeList = (data) => ({
    type: constants.GET_SEARCH_LIST,
    data: fromJS(data)
});