import React, { Component } from "react";

export default class CloudInfraImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <img src={require("../../assests/images/cloud.png")} height="632px" width="1098px" />
    );
  }
}
