import React from "react";
class Service extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      data: null,
    };
  }
  componentWillMount() {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => this.setState({ data: json }));
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  componentWillUpdate() {
    console.log(this.state.count, "componentWillUpdate");
  }
  componentDidMount() {
    console.log(this.state.count, "componentDidMount");
  }
  componentDidUpdate() {
    console.log(this.state.count, "componentDidUpdate");
  }
  componentWillUnmount() {
    this.setState({ data: null });
    console.log(this.state.count, "componentWillUnmount");
  }

  render() {
    console.log(this.state.data && this.state.data, "dhfgsdhgfhj");
    return <h1 onClick={this.handleClick}>Hello, {this.state.count}</h1>;
  }
}

export default Service;
