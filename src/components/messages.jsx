import React, { Component } from "react";
import { Link } from "react-router-dom";

class Messages extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar bg-light">
        <ul>
          <li>
            <Link to="/messages/msg1">Msg1</Link>
          </li>
          <li>
            <Link to="/messages/msg2">Msg2</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Messages;
