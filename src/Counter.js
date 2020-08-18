import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      demoNumber: 0
    };
  }

  render() {
    return (
      <React.Fragment>
        <h1>{this.props.name}</h1>
        <h1>Counter : {this.state.demoNumber}</h1>
        <button
          onClick={() =>
            this.setState({ demoNumber: this.state.demoNumber + 1 })
          }
        >
          +
        </button>
        <button
          onClick={() =>
            this.setState({
              demoNumber:
                this.state.demoNumber !== 0 ? this.state.demoNumber - 1 : 0
            })
          }
        >
          -
        </button>
      </React.Fragment>
    );
  }
}

export default Counter;
