import React, { Component } from "react";
import {
    WriterWrapper,
    WriterTitle,
    WriterList,
    WriterItem,
    WriterMore
} from "./style.js";

class Writer extends Component {
    render() {
        return (
            <WriterWrapper>
                <WriterTitle>
                    <span>推荐作者</span>
                    <span><a href="/"><i className="iconfont">&#xe61b;</i>换一批</a></span>
                </WriterTitle>
                <WriterList>
                    <WriterItem>
                        <div className="writer_avatar">
                            <img src="//upload.jianshu.io/users/upload_avatars/12665193/828a449f-efbb-4540-b0af-f6c314810515.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt=""/>
                        </div>
                        <div className="writer_info">
                            <p className="writer_nickname">宇文歡</p>
                            <p className="writer_desc">写了283.2k字 · 2.4k喜欢</p>
                        </div>
                        <div className="writer-follow">
                            <a href="/"><i className="iconfont">&#xe61b;</i>关注</a>
                        </div>
                    </WriterItem>
                </WriterList>
                <WriterMore>
                    <a href="/">查看更多<i className="iconfont">&#xe61b;</i></a>
                </WriterMore>
            </WriterWrapper>
        );
    }
}

export default Writer;