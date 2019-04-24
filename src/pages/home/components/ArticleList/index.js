/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from "react";
import {
    ArticleListWrapper,
    ArticleItem,
    ArticleInfo,
    ArticleMoreInfo
} from "./style.js";

class ArticleList extends Component {
    render() {
        return (
            <ArticleListWrapper>
                <ArticleItem>
                    <ArticleInfo>
                        <a className="article_list_title" href="/">专题 | 上手就会的傻白甜省钱/理财大法，女生必看！</a>
                        <p className="article_list_content">关于这个话题，月儿先碎碎念👇 大家不觉得， 没有存款的女孩子买奢侈品现象很严重吗？ 一定要攒钱买香奈儿，口红要买YSL档次之上…曾经看过一张图</p>
                        <ArticleMoreInfo>
                            <span className="diamond">
                                <i className="iconfont">&#xe607;</i> 3.1
                            </span>
                            <span className="nickName">
                                <a href="/">0061澳洲制造官网</a>
                            </span>
                            <span className="comments">
                                <a href="/"><i className="iconfont">&#xe60b;</i> 5</a>
                            </span>
                            <span className="like">
                                <i className="iconfont">&#xe61b;</i> 21
                            </span>
                        </ArticleMoreInfo>
                    </ArticleInfo>
                    <a href="/">
                        <img className="article_list_pic" src="//upload-images.jianshu.io/upload_images/2311547-2874f6a71d6a64b7.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt=""/>
                    </a>
                </ArticleItem>
            </ArticleListWrapper>
        );
    }
}

export default ArticleList;