/* eslint-disable jsx-a11y/accessible-emoji */
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreator } from "../../store/";
import {
    ArticleListWrapper,
    ArticleItem,
    ArticleInfo,
    ArticleMoreInfo,
    ArticleMoreList
} from "./style.js";

class ArticleList extends PureComponent {
    render() {
        const { list, getMoreArticleList, articlePage } = this.props;

        return (
            <ArticleListWrapper>
                {
                   list.toJS().map((item, index) => (
                            <ArticleItem key={index}>
                                <ArticleInfo>
                                    <Link className="article_list_title" to="/detail">{item.title}</Link>
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
                
                <ArticleMoreList onClick={() => getMoreArticleList(articlePage)}>加载更多</ArticleMoreList>
               
            </ArticleListWrapper>
        );
    }
}

const mapState = (state) => ({
    list: state.getIn(["home", "articleList"]),
    articlePage: state.getIn(["home", "articlePage"])
});

const mapDispatch = (dispatch) => ({
    getMoreArticleList(articlePage) {
        dispatch(actionCreator.getMoreArticleList(articlePage));
    }
});
export default connect(mapState, mapDispatch)(ArticleList);