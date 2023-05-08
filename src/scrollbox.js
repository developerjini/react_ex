import React, { Component } from "react";

class scrollbox extends Component {
  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative",
    };

    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-Gradient(white, black)",
    };
    return (
      <div style={style} ref={(ref) => this.box == ref}>
        <div style={innerStyle}></div>
      </div>
    );
  }
}

export default scrollbox;
