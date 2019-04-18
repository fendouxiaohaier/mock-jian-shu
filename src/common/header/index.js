import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";

import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    Addition,
    Button
} from "./styled.js";

class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo />
                
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right">
                        <i className="iconfont">&#xe605;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={this.props.focused}
                            timeout={300}
                            classNames="slide"
                        >
                            <NavSearch
                                onFocus={this.props.handleFocus}
                                onBlur={this.props.handleBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <CSSTransition
                            in={this.props.focused}
                            timeout={300}
                            classNames="slide"
                        >
                            <i className={"iconfont"}>&#xe601;</i>
                        </CSSTransition>
                    </SearchWrapper>
                    
                </Nav>

                <Addition>
                    <Button className="writting">
                        <i className="iconfont">&#xe65e;</i>
                        写文章
                    </Button>
                    <Button className="reg">注册</Button>
                </Addition>

            </HeaderWrapper>
        );
    }


}

const mapStateToProps = (state) => {
    return {
        focused: state.focused
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFocus() {
            const action = {type: "search_focus"};
            dispatch(action);
        },
        handleBlur() {
            const action = {type: "search_blur"};
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);