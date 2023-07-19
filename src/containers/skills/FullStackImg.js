import React, { Component } from "react";

export default class FullStackImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
     <img src={require("../../assests/images/fullStack.png")} height="632px" width="1098px" />
    );
  }
}
