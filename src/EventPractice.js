// import React from "react";

// const EventPractice = () => {

//   return (
//     <div>
//       <h1>이벤트 연습</h1>
//       <input
//         name="message"
//         placeholder="아무거나 입력해보세요"
//         onChange={(e) => {
//           console.log(e);
//           console.log(e.target.value);
//         }}
//       ></input>
//     </div>
//   );
// };

// export default EventPractice;
import React, { Component } from "react";

class EventPractice extends Component {
  state = { message: "" };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      message: e.target.value,
    });
  }

  handleClick() {
    alert(this.state.message);
    this.setState({ message: "" });
  }

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          name="message"
          placeholder="아무거나 입력해보세요"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
        <h2>{this.state.message}</h2>
      </div>
    );
  }
}

export default EventPractice;
