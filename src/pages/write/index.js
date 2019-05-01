import React, {Component} from "react";
import { connect }from "react-redux";
import { Redirect } from "react-router-dom";

class Write extends Component {
   render() {
       if(this.props.loginState) {
            return (
                <div>写文章，还未完成</div>
            )
       } else {
           return <Redirect to="/login" />
       }
   }
}

const mapStaetToProps = (state) => ({
   loginState: state.getIn(["login", "loginState"])
});

export default connect(mapStaetToProps, null)(Write);