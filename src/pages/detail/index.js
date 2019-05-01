import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
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
        console.log(this.props);
        this.props.getDetail(this.props.match.params.id);
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
        getDetail(id) {
            dispatch(actionCreator.changeDetail(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));