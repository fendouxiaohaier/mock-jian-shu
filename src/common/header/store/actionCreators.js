import * as constants from "./constants";
import axios from "axios";
import { fromJS } from "immutable";

export const searchFocusAction = () => ({
        type: constants.SEARCH_FOCUS
    });

export const searchBlurAction = () => ({
    type: constants.SEARCH_BLUR
});

// 派发到reducer的数据都应该全部保持一致，使用immutable类型的数据
const searchList = (data) => ({
    type: constants.GET_SEARCH_LIST,
    data: fromJS(data)
});

export const getSearchList = () => {
    return (dispatch) => {
        axios.get("/api/getSearchList.json").then((res) => {
            dispatch( searchList(res.data.data) );
        }).then((error) => {
            console.log(error);
        });
    }
};