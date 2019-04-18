const initialState = {
    focused: false
};

export default (state = initialState, action) => {
    if("search_focus" === action.type) {
        return {
            focused: true
        }
    } else if("search_blur" === action.type) {
        return {
            focused: false
        }
    }
    
    return state;
}