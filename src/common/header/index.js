import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { actionCreators } from "./store";
import { actionCreator as loginActionCreator } from "../../pages/login/store";
import { Link } from "react-router-dom";

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

    getHotSearchList() {
        const { list, curIndex } = this.props;
        const hotSearchList = [];
        const newList = list.toJS();
        const newListLen = newList.length;

        if(newList.length > 0) {
            for(let i=curIndex; i<(curIndex+10); i++) {
                console.log(i%newListLen);
                hotSearchList.push(
                    <SearchItem key={ newList[i%newListLen] }>
                        <a href="/">
                            {newList[i%newListLen]}
                        </a>
                    </SearchItem>
                );
            }
        }

        return hotSearchList;
    }

    render() {
        const { 
            focused,
            mouseIn, 
            curIndex,
            loginState,
            list,
            switchIconRotateDeg,
            handleInoutFocus, 
            handleInoutBlur, 
            handleMouseEnter,
            handleMouseLeave,
            handleChangeSearchList,
            handleLogout
        } = this.props;

        return (
            <HeaderWrapper>
                <Logo />
                
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    {
                        loginState ?
                        <NavItem onClick={handleLogout} className="right">退出</NavItem>
                        : <Link to="/login"><NavItem className="right">登录</NavItem></Link>
                    }
                   
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
                                onFocus={() => {handleInoutFocus(list)}}
                                onBlur={handleInoutBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <CSSTransition
                            in={focused}
                            timeout={300}
                            classNames="slide"
                        >
                            <i className="iconfont searchIcon">&#xe601;</i>
                        </CSSTransition>

                        <SearchInfo 
                            className={(focused || mouseIn) ? "focused" : ""}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <SearchTitle rotatedeg={switchIconRotateDeg}>
                                <span>热门搜索</span>
                                <a href="/" 
                                    onClick={(e) => {handleChangeSearchList(curIndex, list.toJS().length, e)}}
                                >
                                    <i className="iconfont switchIcon" >&#xe608;</i>换一批
                                </a>
                            </SearchTitle>
                            <SearchList>{ this.getHotSearchList() }</SearchList>
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
        switchIconRotateDeg: state.getIn(["header", "switchIconRotateDeg"]),
        mouseIn: state.getIn(["header", "mouseIn"]),
        curIndex: state.getIn(["header", "curIndex"]),
        list: state.getIn(["header", "list"]),
        loginState: state.getIn(["login", "loginState"])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInoutFocus(list) {
            (list.toJS().length <= 0) && dispatch(actionCreators.getSearchList());
            dispatch(actionCreators.searchFocusAction());
        },
        handleInoutBlur() {
            dispatch(actionCreators.searchBlurAction());
        },
        handleMouseEnter() {
            dispatch(actionCreators.searchMouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.searchMouseLeave());
        },

        handleChangeSearchList(curIndex, totleLength, e) {
            e.preventDefault();  // 阻止a标签的默认事件

            dispatch(actionCreators.changeSwitchIconDeg())

            dispatch(actionCreators.ChangeSearchList((curIndex + 10) % totleLength));
        },
        handleLogout() {
            dispatch(loginActionCreator.logout());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);