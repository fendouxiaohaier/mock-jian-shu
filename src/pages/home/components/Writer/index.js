import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {
    WriterWrapper,
    WriterTitle,
    WriterList,
    WriterItem,
    WriterMore
} from "./style.js";

class Writer extends PureComponent {
    render() {
        return (
            <WriterWrapper>
                <WriterTitle>
                    <span>推荐作者</span>
                    <span><a href="/"><i className="iconfont">&#xe61b;</i>换一批</a></span>
                </WriterTitle>
                <WriterList>
                    {
                        this.props.list.toJS().map((item, index) => (
                            <WriterItem key={index}>
                                <div className="writer_avatar">
                                    <img src={item.avatarUrl} alt=""/>
                                </div>
                                <div className="writer_info">
                                    <p className="writer_nickname">{item.nickname}</p>
                                    <p className="writer_desc">{item.writerDesc}</p>
                                </div>
                                <div className="writer-follow">
                                    <a href="/"><i className="iconfont">&#xe61b;</i>关注</a>
                                </div>
                            </WriterItem>
                        ))
                    }
                </WriterList>
                <WriterMore>
                    <a href="/">查看更多<i className="iconfont">&#xe61b;</i></a>
                </WriterMore>
            </WriterWrapper>
        );
    }
}

const mapState = (state) => ({
    list: state.getIn(["home", "writerList"])
});
export default connect(mapState)(Writer);