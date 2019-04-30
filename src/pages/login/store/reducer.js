import * as constants from "./constants";
import { fromJS } from "immutable";
const defaultState = fromJS({
    loginState: false
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_LOGIN:
            return state.set("loginState", action.login);
        case constants.CHANGE_LOGOUT:
            return state.set("loginState", action.login);
        default:
            return state;
    }
}