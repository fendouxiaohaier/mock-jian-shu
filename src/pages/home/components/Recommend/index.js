import React, { Component } from "react";
import { connect } from "react-redux";
import {
    RecommendWrapper
} from "./style.js";

class Recommend extends Component {
    render() {
        return (
            <RecommendWrapper>
                {
                    this.props.list.toJS().map((item) => (
                        <a key={item.id} href="/">
                            <img className="recommend-pic" 
                                    src={`${item.imgUrl}`}
                                    alt={item.imgAlt}
                            />
                        </a>        
                    ))
                }
            </RecommendWrapper>
        );
    }
}

const mapState = (state) => ({
    list: state.getIn(["home", "recommendList"])
});
export default connect(mapState, null)(Recommend);