import * as constants from "./constants.js";
import axios from "axios";

export const changeHomeList = () => {
    return (dispatch) => {
        axios.get("/api/getHomeList.json").then((res) => {
            const result = res.data.data;
            dispatch({
                type: constants.CHANGE_HOME_LIST,
                data: result
            })
        });
    }
}

export const getMoreArticleList = (articlePage) => {
    return (dispatch) => {
        axios.get("/api/getMoreArticleList.json?articlePage="+articlePage).then((res) => {
            const result = res.data.data;
            dispatch({
                type: constants.GTE_MORE_ARTICLE_LIST,
                list: result,
                nextArticlePage: (articlePage+1)
            });
        });
    }
}
