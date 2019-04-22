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
            list,
            handleInoutFocus, 
            handleInoutBlur, 
            handleMouseEnter,
            handleMouseLeave,
            handleChangeSearchList
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

                        <SearchInfo 
                            className={(focused || mouseIn) ? "focused" : ""}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <SearchTitle>
                                <span>热门搜索</span>
                                <a href="/" 
                                    onClick={(e) => {handleChangeSearchList(curIndex, list.toJS().length, e)}}
                                >换一批</a>
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
        mouseIn: state.getIn(["header", "mouseIn"]),
        curIndex: state.getIn(["header", "curIndex"]),
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
        },
        handleMouseEnter() {
            dispatch(actionCreators.searchMouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.searchMouseLeave());
        },

        handleChangeSearchList(curIndex, totleLength, e) {
            e.preventDefault();  // 阻止a标签的默认事件
            dispatch(actionCreators.ChangeSearchList((curIndex + 10) % totleLength));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);