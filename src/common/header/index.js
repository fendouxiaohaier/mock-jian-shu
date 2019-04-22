import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { actionCreators } from "./store";

import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    SearchInfo,
    SearchTitle,
    SearchList,
    SearchItem,
    NavSearch,
    Addition,
    Button
} from "./styled.js";

class Header extends Component {
    render() {
        const { 
            focused, 
            handleInoutFocus, 
            handleInoutBlur, 
            list 
        } = this.props;

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
                            in={focused}
                            timeout={300}
                            classNames="slide"
                        >
                            <NavSearch
                                onFocus={handleInoutFocus}
                                onBlur={handleInoutBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <CSSTransition
                            in={focused}
                            timeout={300}
                            classNames="slide"
                        >
                            <i className={"iconfont"}>&#xe601;</i>
                        </CSSTransition>

                        <SearchInfo className={focused ? "focused" : ""}>
                            <SearchTitle>
                                <span>热门搜索</span>
                                <a href="www.baidu.com">换一批</a>
                            </SearchTitle>
                            <SearchList>
                                {
                                    list.map((item) => {
                                        return  <SearchItem key={item}>
                                                    <a href="www.baidu.com">
                                                        {item}
                                                    </a>
                                                </SearchItem>
                                    })
                                }
                              
                            </SearchList>
                        </SearchInfo>
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
        //       两种获取数据的方式是一样的getIn为嵌套获取
        //       state.get("header").get("focused")
        focused: state.getIn(["header", "focused"]),
        list: state.getIn(["header", "list"])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInoutFocus() {
            dispatch(actionCreators.getSearchList());
            dispatch(actionCreators.searchFocusAction());
        },
        handleInoutBlur() {
            dispatch(actionCreators.searchBlurAction());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);