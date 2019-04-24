import { fromJS } from "immutable";
import * as constants from "./constants.js";

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    writerList: []
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

        default:
            return state;
    }
}

