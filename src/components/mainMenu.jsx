import React, { Component } from "react";

class MainMenu extends Component {
  render() {
    const { menuHead, menuItems, onItemSelect, onHeaderSelect } = this.props;

    return (
      <React.Fragment>
        <ul className="list-group">
          <li
            className="list-group-item clickable"
            onClick={() => onHeaderSelect()}
          >
            {menuHead}
          </li>
          {menuItems.map((menuItem) => (
            <li
              key={menuItem._id}
              className="list-group-item clickable m-1"
              onClick={() => onItemSelect(menuItem)}
            >
              {menuItem.name}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default MainMenu;
