import Scrollbox from "./Scrollbox.js";

import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <Scrollbox ref={(ref) => (this.scrollbox = ref)} />
        <button onClick={() => this.scrollbox.scrollToTop()}>맨 위로</button>
        <button onClick={() => this.scrollbox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}

export default App;
