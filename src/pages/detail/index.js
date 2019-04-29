import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreator } from "./store";

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

    componentDidMount() {
        this.props.getDetail();
    }
} 

const mapStateToProps = (state) => {
    return {
        title: state.getIn(["detail", "title"]),
        content: state.getIn(["detail", "content"])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDetail() {
            dispatch(actionCreator.changeDetail())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);