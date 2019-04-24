/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from "react";
import { connect } from "react-redux";

import {
    ArticleListWrapper,
    ArticleItem,
    ArticleInfo,
    ArticleMoreInfo
} from "./style.js";

class ArticleList extends Component {
    render() {
        const { list } = this.props;

        return (
            <ArticleListWrapper>
                {
                   list.toJS().map((item) => (
                            <ArticleItem key={item.id}>
                                <ArticleInfo>
                                    <a className="article_list_title" href="/">{item.title}</a>
                                    <p className="article_list_content">{item.content}</p>
                                    <ArticleMoreInfo>
                                        <span className="diamond">
                                            <i className="iconfont">&#xe607;</i> {item.diamondCount}
                                        </span>
                                        <span className="nickName">
                                            <a href="/">{item.nickname}</a>
                                        </span>
                                        <span className="comments">
                                            <a href="/"><i className="iconfont">&#xe60b;</i> {item.comentsCounts}</a>
                                        </span>
                                        <span className="like">
                                            <i className="iconfont">&#xe61b;</i> {item.likeCount}
                                        </span>
                                    </ArticleMoreInfo>
                                </ArticleInfo>
                                <a href="/">
                                    <img className="article_list_pic" src={item.imgUrl} alt=""/>
                                </a>
                            </ArticleItem>
                   ))
                }
                
               
            </ArticleListWrapper>
        );
    }
}

const mapState = (state) => ({
    list: state.getIn(["home", "articleList"])
});
export default connect(mapState, null)(ArticleList);