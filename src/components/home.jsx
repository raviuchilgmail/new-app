import React, { Component } from "react";
import axios from "axios";

import NavPage from "./navPage";
import MainMenu from "./mainMenu";
import HomePage from "./homePage";
import Select from "./select";
import Songs from "./songs";
import { getMenu } from "../services/fakeMainMenuService";

class Home extends Component {
  state = {
    menuHead: "Home",
    menuItems: [],
    page: "home",
    selectedParam: "",
    selectionPath: [],
  };

  componentDidMount() {
    axios.get("");
  }

  handleItemSelect = (menuItem) => {
    const menuItems = getMenu(menuItem.name).children;

    if (menuItems) {
      const page = getMenu(menuItem.name).page;

      this.setState({
        menuHead: menuItem.name,
        menuItems,
        selectedParam: "",
        page,
      });
    } else this.setState({ selectedParam: menuItem.name });

    this.setNavPage(menuItem);
  };

  handleHeaderSelect = () => {
    const menuHead = getMenu(this.state.menuHead).parent;
    this.setState({ menuHead });
    let menuItems = this.state.menuItems;

    if (menuHead === "Home" && menuItems.length !== 0) {
      menuItems = [];
    } else {
      menuItems = getMenu(menuHead).children;
    }
    this.setState({ menuItems });

    const menuItem = getMenu(menuHead);
    this.setNavPage(menuItem);
  };

  setNavPage = (menuItem) => {
    let selectionPath = [...this.state.selectionPath];
    const level = menuItem.level;
    selectionPath[level] = menuItem;
    selectionPath.splice(level + 1);
    this.setState({ selectionPath });
  };

  renderPages() {
    const { menuHead, selectedParam, page } = this.state;

    if (page === "home") return <HomePage menuHead={menuHead} />;
    if (page === "selectBase") return <Select />;
    if (page === "select") return <Select menuHead={menuHead} />;
    if (page === "song" && !selectedParam)
      return <Select menuHead={menuHead} />;
    if (page === "song" && selectedParam)
      return <Songs selectedParam={selectedParam} />;
    return <HomePage />;
  }

  render() {
    const { menuHead, menuItems, selectionPath } = this.state;
    return (
      <React.Fragment>
        <NavPage
          menuHead={menuHead}
          selectionPath={selectionPath}
          onItemSelect={this.handleItemSelect}
        />
        <div className="row">
          <div className="col-2">
            <MainMenu
              menuHead={menuHead}
              menuItems={menuItems}
              onItemSelect={this.handleItemSelect}
              onHeaderSelect={this.handleHeaderSelect}
            />
          </div>
          <div className="col">{this.renderPages()}</div>
        </div>
      </React.Fragment>
    );
  }
}
export default Home;
