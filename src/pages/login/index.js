import React, { PureComponent } from "react";
import { actionCreator } from "./store";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { 
    LoginWrapper,
    LoginBox,
    Input,
    Button
} from "./style.js";

class Login extends PureComponent {
    render() {
        const { loginState } = this.props;
        if(!loginState) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="用户名" type="text" ref={(input) => {this.userRef = input}}/>
                        <Input placeholder="密码" type="password" ref={(input) => {this.passwordRef = input}}/>
                        <Button onClick={() => {this.props.handleLogin(this.userRef, this.passwordRef)}}>登录</Button>
                    </LoginBox>
                </LoginWrapper> 
            )
        } else {
            return (<Redirect to="/index.html" />)
        }
    }
}

const mapState = (state) => ({
    loginState: state.getIn(["login", "loginState"])
});

const mapDispatch = (dispatch) => ({
    handleLogin(userRef, passwordRef) {
        dispatch(actionCreator.login(userRef.value, passwordRef.value));
    }
});

export default connect(mapState, mapDispatch)(Login);