import * as constants from "./constants";

const initialState = {
    focused: false
};

const reducer = (state = initialState, action) => {
    if(constants.SEARCH_FOCUS === action.type) {
        return {
            focused: true
        }
    } else if(constants.SEARCH_BLUR === action.type) {
        return {
            focused: false
        }
    }
    
    return state;
}

export { reducer };