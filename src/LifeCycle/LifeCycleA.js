import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      developedBy: "X's"
    };
    console.log("LifecycleA Constructor.");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps.");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleA componentDidMount.");
  }

  shouldComponentUpdate() {
    console.log("LifecycleA shouldComponentUpdate.");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("LifecycleA getSnapshotBeforeUpdate.");
    return false;
  }

  componentDidUpdate() {
    console.log("LifecycleA componentDidUpdate.");
  }

  changeState = () => {
    this.setState({
      developedBy: "Y's"
    });
  };

  render() {
    console.log("LifecycleA render.");
    return (
      <div>
        <button onClick={this.changeState}>Change State</button>
        {this.state.developedBy}
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
