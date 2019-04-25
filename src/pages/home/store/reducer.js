import { fromJS } from "immutable";
import * as constants from "./constants.js";

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    writerList: [],
    articlePage: 0,
    showScrollToTopBtn: false
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_HOME_LIST:
            return state.merge({
                    topicList: fromJS(action.data.topicList),
                    articleList: fromJS(action.data.articleList),
                    recommendList: fromJS(action.data.recommendList),
                    writerList: fromJS(action.data.writerList)
                });
        case constants.GTE_MORE_ARTICLE_LIST:
            return state.merge({
                "articleList": state.get("articleList").concat(fromJS(action.list)),
                "articlePage": action.nextArticlePage
            });
        case constants.TOGGLE_SCROLL_BTN:
            return state.set("showScrollToTopBtn", action.flag)
        default:
            return state;
    }
}

