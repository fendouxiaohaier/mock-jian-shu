import React, { Component } from "react";
import { connect } from "react-redux";

import {
    DetailWrapper,
    DetailTitle,
    DetailContent
} from "./style.js";

class Detail extends Component {
    render() {
        return (
            <DetailWrapper>
                <DetailTitle>{this.props.title}</DetailTitle>
                <DetailContent dangerouslySetInnerHTML={{__html: this.props.content}}></DetailContent>
            </DetailWrapper>
        );
    }
} 

const mapStateToProps = (state) => {
    return {
        title: state.getIn(["detail", "title"]),
        content: state.getIn(["detail", "content"])
    }
}

export default connect(mapStateToProps)(Detail);