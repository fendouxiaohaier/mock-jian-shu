import React , { Component } from "react";
import {
    HomeWrapper,
    HomeLft,
    HomeRight
} from "./style.js";

import Topic from "./components/Topic/";
import List from "./components/ArticleList/";
import ReCommend from "./components/Recommend/";
import Writer from "./components/Writer";


export default class Home extends Component {
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
            </HomeWrapper>
        );
    }
}