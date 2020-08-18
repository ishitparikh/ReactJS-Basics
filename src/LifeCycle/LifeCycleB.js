import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      developedBy: "X's"
    };
    console.log("LifeCycleB Constructor.");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleB getDerivedStateFromProps.");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleB componentDidMount.");
  }

  shouldComponentUpdate() {
    console.log("LifeCycleB shouldComponentUpdate.");
    return false;
  }

  getSnapshotBeforeUpdate() {
    console.log("LifeCycleB getSnapshotBeforeUpdate.");
    return true;
  }

  componentDidUpdate() {
    console.log("LifeCycleB componentDidUpdate.");
  }

  changeState = () => {
    this.setState({
      developedBy: "Y's"
    });
  };

  render() {
    console.log("LifeCycleB render.");
    return <div>LifeCycle B</div>;
  }
}

export default LifeCycleB;
