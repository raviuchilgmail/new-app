import { head } from "lodash";
import React, { Component } from "react";

class NavPage extends Component {
  render() {
    const { menuHead, selectionPath, onItemSelect } = this.props;

    if (selectionPath.length === 0) return null;

    return (
      // <nav>
      <ul className="pagination">
        {selectionPath.map((sp) => (
          <li
            key={sp._id}
            className="page-item clickable"
            onClick={() => onItemSelect(sp)}
          >
            {sp.name !== "Home" ? ": " : ""}
            {sp.name}
          </li>
        ))}
      </ul>
      // </nav>
    );
  }
}

export default NavPage;
