import * as constants from "./constants";
import axios from "axios";

export const login = (user, password) => {
    return (dispatch) => {
        axios.get("/api/login.json?user="+user+"&password="+password).then((res) => {
            if(res.data.success) {
                dispatch({
                    type: constants.CHANGE_LOGIN,
                    login: res.data.data
                });
            } else {
                console.log("登录失败");
            }
        })
        
    }
}

export const logout = () => {
    return {
        type: constants.CHANGE_LOGOUT,
        login: false
    }
}