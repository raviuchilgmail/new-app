import React, { Component } from "react";
import NavPage from "./components/navPage";
import MainMenu from "./components/mainMenu";
import NavBar from "./components/navBar";
// import Home from "./components/home";
import Select from "./components/select";
import Songs from "./components/songs";
import { getMenu } from "./services/fakeMainMenuService";

class App extends Component {
  state = {
    menuHead: "Home",
    menuItems: [],
    page: "home",
    selectedParam: "",
    selectionPath: [],
  };

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

    if (page === "home") return <Home menuHead={menuHead} />;
    if (page === "selectBase") return <Select />;
    if (page === "select") return <Select menuHead={menuHead} />;
    if (page === "song" && !selectedParam)
      return <Select menuHead={menuHead} />;
    if (page === "song" && selectedParam)
      return <Songs selectedParam={selectedParam} />;
    return <Home />;
  }

  render() {
    const { menuHead, menuItems, selectionPath } = this.state;
    return (
      <React.Fragment>
        <NavBar />

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

export default App;
