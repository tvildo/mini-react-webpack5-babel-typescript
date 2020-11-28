var React = require("react");
var ReactDOM = require("react-dom");

const MyComponent = () => {
  return <div>Hello World</div>;
};

ReactDOM.render(
  <MyComponent />,
  document.body.appendChild(document.createElement("DIV"))
);
