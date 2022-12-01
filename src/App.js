import React, { useState } from "react";
import "./styles.css";

//using a function
export default function App() {
  const [toggle, setToggle] = useState(false);
  // let finalComponent;
  function getComponent() {
    if (toggle) {
      return <ClickMeClass msg="Click me !!" />;
    } else {
      return <ClickMe />;
    }
  }
  return (
    <div className="App">
      {getComponent()}
      {/*<ClickMeClass />*/}
      {/*<ClickMe />*/}
      <button onClick={() => setToggle(!toggle)}>
        switch between component{" "}
      </button>
    </div>
  );
}

const ClickMe = () => {
  const onClickHandler = (event) => {
    console.log(event);
  };

  return (
    <div>
      <button id="Sarika" onClick={onClickHandler}>
        ClickMe!
      </button>
      <input id="input" onChange={onClickHandler} />
    </div>
  );
};

class ClickMeClass extends React.Component {
  // constructor(){
  // super();
  //}
  onClickHandler = (event) => {
    console.log(this);
    console.log(this.props);
    console.log(this.props.msg);
  };
  render() {
    return (
      <div>
        <button id="Sarika" onClick={this.onClickHandler}>
          ClickMe!
        </button>
        <input id="input" onChange={this.onClickHandler} />
      </div>
    );
  }
}
