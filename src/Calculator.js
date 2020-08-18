import React, { Component } from "react";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expression: "0",
      Answer: "0"
    };
  }

  render() {
    return (
      <React.Fragment>
        <h1>{this.props.name}</h1>
        <h1>{this.state.expression}</h1>
        <button
          onClick={() =>
            this.setState({
              expression:
                this.state.expression !== "0"
                  ? this.state.expression + "7"
                  : "7"
            })
          }
        >
          7
        </button>
        <button
          onClick={() =>
            this.setState({
              expression:
                this.state.expression !== "0"
                  ? this.state.expression + "8"
                  : "8"
            })
          }
        >
          8
        </button>
        <button
          onClick={() =>
            this.setState({
              expression:
                this.state.expression !== "0"
                  ? this.state.expression + "9"
                  : "9"
            })
          }
        >
          9
        </button>
        <button
          onClick={() =>
            this.setState({
              expression:
                parseInt(this.state.expression) > 9
                  ? this.state.expression.slice(
                      0,
                      this.state.expression.length - 1
                    )
                  : "0"
            })
          }
        >
          &lt;
        </button>
        <br />
        <button
          onClick={() =>
            this.setState({
              expression:
                this.state.expression !== "0"
                  ? this.state.expression + "4"
                  : "4"
            })
          }
        >
          4
        </button>
        <button
          onClick={() =>
            this.setState({
              expression:
                this.state.expression !== "0"
                  ? this.state.expression + "5"
                  : "5"
            })
          }
        >
          5
        </button>
        <button
          onClick={() =>
            this.setState({
              expression:
                this.state.expression !== "0"
                  ? this.state.expression + "6"
                  : "6"
            })
          }
        >
          6
        </button>
        <button
          onClick={() =>
            this.setState({
              expression:
                this.state.expression !== "0" &&
                this.state.expression.substring(
                  this.state.expression.length - 1
                ) !== "-"
                  ? this.state.expression + "+"
                  : this.state.expression.slice(
                      0,
                      this.state.expression.length - 1
                    ) + "+"
            })
          }
        >
          +
        </button>
        <br />
        <button
          onClick={() =>
            this.setState({
              expression:
                this.state.expression !== "0"
                  ? this.state.expression + "1"
                  : "1"
            })
          }
        >
          1
        </button>
        <button
          onClick={() =>
            this.setState({
              expression:
                this.state.expression !== "0"
                  ? this.state.expression + "2"
                  : "2"
            })
          }
        >
          2
        </button>
        <button
          onClick={() =>
            this.setState({
              expression:
                this.state.expression !== "0"
                  ? this.state.expression + "3"
                  : "3"
            })
          }
        >
          3
        </button>
        <button
          onClick={() =>
            this.setState({
              expression:
                this.state.expression !== "0" &&
                this.state.expression.substring(
                  this.state.expression.length - 1
                ) !== "+"
                  ? this.state.expression + "-"
                  : this.state.expression.slice(
                      0,
                      this.state.expression.length - 1
                    ) + "-"
            })
          }
        >
          -
        </button>
        <br />
        <button onClick={() => this.setState({ expression: "0", Answer: "0" })}>
          Clear All
        </button>
        <button onClick={() => this.calculateValue()}>Calculate</button>
        <h1>Answer: {this.state.Answer}</h1>
      </React.Fragment>
    );
  }
  calculateValue() {
    this.setState({ Answer: eval(this.state.expression) });
  }
}

export default Calculator;
