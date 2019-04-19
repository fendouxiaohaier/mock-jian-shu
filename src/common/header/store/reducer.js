const initialState = {
    focused: false
};

const reducer = (state = initialState, action) => {
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

export { reducer };