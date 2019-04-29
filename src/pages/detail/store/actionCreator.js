import axios from "axios";
import * as constants from "./constants";

export const changeDetail = () => {
    return (dispatch) => {
        axios.get("/api/getDetail.json").then((res) => {
            const result = res.data.data;
            dispatch({
                type: constants.CHANGE_DETAIL,
                title: result.title,
                content: result.content
            })
        });
    }
}