import React, { Component } from "react";
import { connect } from "react-redux";

import {
    TopicWrapper,
    TopicItem
} from "./style.js";

class Topic extends Component {
    render() {
        const { list } = this.props;

        return (
            <TopicWrapper>
                {
                    list.toJS().map((item) => (
                            <TopicItem key={item.id}>
                                <img className="home-topic-pic" 
                                    src={item.imgUrl} 
                                    alt=""
                                />
                                <span>{item.title}</span>
                            </TopicItem>
                    ))
                }
              
            </TopicWrapper>
        );
    }
}

const mapState = (state) => {
    return {
        list: state.getIn(["home", "topicList"])
    }
}

export default connect(mapState, null)(Topic);