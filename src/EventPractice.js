import React from "react";

const EventPractice = () => {
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        name="message"
        placeholder="아무거나 입력해보세요"
        onChange={(e) => {
          console.log(e);
        }}
      ></input>
    </div>
  );
};

export default EventPractice;
