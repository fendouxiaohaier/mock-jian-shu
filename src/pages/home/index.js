import React , { Component } from "react";
import { connect } from "react-redux";
import { actionCreator } from "./store";

import {
    HomeWrapper,
    HomeLft,
    HomeRight,
    ScrollToTopBtn
} from "./style.js";

import Topic from "./components/Topic/";
import List from "./components/ArticleList/";
import ReCommend from "./components/Recommend/";
import Writer from "./components/Writer";


class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLft>
                    <img className="home_banner_img" src="//upload.jianshu.io/admin_banners/web_images/4645/2082eac837471d244b9d319da17bdf5580db9ff0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                    <Topic></Topic>
                    <List></List>
                </HomeLft>
                <HomeRight>
                    <ReCommend></ReCommend>
                    <Writer></Writer>
                </HomeRight>
                {
                    this.props.showScrollToTopBtn
                    ? ( <ScrollToTopBtn onClick={this.handleScrollToTop}>
                            <i className="iconfont">&#xe61b;</i>
                        </ScrollToTopBtn>)
                    : null
                }
                
            </HomeWrapper>
        );
    }

    componentDidMount() {
       this.props.changeHomeList();

       this.bindEventListener();
    }

    bindEventListener() {
        window.addEventListener("scroll", this.throttle(this.props.handleScroll, 100));
    }

    // 暂时把这个工具函数放在这里
    throttle(fn, priorid) {
        let prevDate = +new Date();
        return (...args) => {
            if(+new Date() - priorid > prevDate) {
                prevDate = +new Date();
                fn.apply(this, args);
            }
        }
    }

    handleScrollToTop() {
        window.scrollTo(0, 0);
    }
}
const mapDispatch = (dispatch) => ({
    changeHomeList() {
        dispatch( actionCreator.changeHomeList() );
    },
    handleScroll(e) {
        console.log(document.documentElement.scrollTop);
        // 滚动的高度大于200px时才显示‘返回顶部按钮’
        dispatch(actionCreator.toggleScrollBtn( (document.documentElement.scrollTop > 200) ));
    }
});

const mapState = (state) => ({
    showScrollToTopBtn: state.getIn(["home", "showScrollToTopBtn"])
});
export default connect(mapState, mapDispatch)(Home);