import React, { Component } from "react";
import { CSSTransition } from 'react-transition-group';

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
    constructor(props) {
        super(props);

        this.state = {
            focused: false
        }

        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }


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
                            in={this.state.focused}
                            timeout={20000}
                            classNames="slide"
                        >
                            <NavSearch 
                                className={this.state.focused ? "focused": ""}
                                onFocus={this.handleFocus}
                                onBlur={this.handleBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={this.state.focused ? "focused iconfont": "iconfont"}>&#xe601;</i>
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

    handleFocus() {
        this.setState({
            focused: true
        });
    }

    handleBlur() {
        this.setState({
            focused: false
        }); 
    }

}

export default Header;