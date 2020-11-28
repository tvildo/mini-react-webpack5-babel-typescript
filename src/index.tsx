import React from "react";
import ReactDOM from "react-dom";

const MyComponent = () => {
  return <div>Hello World</div>;
};

ReactDOM.render(
  <MyComponent />,
  document.body.appendChild(document.createElement("DIV"))
);
