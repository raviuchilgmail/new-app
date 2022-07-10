import React, { Component } from "react";

class Select extends Component {
  state = {};
  render() {
    const { menuHead } = this.props;

    return <h3>Select {menuHead}.. from options</h3>;
  }
}

export default Select;
