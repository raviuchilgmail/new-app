import React, { Component } from "react";
import _ from "lodash";

import OptionsTable from "./optionsTable";
import SelectedOptions from "./selectedOptions";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import { getData } from "../services/fakeDataService";
import SearchBox from "./common/searchBox";
import ToggleSwitch from "./common/toggleSwitch";

class Songs extends Component {
  state = {
    selectedParam: "",
    options: [],
    pageSize: 8,
    currentPage: 1,
    params: {
      Era: [],
      Decade: [],
      Year: [],
    },
    sortColumn: {
      path: "title",
      order: "asc",
    },
    searchQuery: "",
    searchType: "includes",
  };

  componentDidMount() {
    const { selectedParam } = this.props;
    const { params } = this.state;
    const options = getData(params, selectedParam);
    this.setState({ selectedParam, options, currentPage: 1, searchQuery: "" });
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.selectedParam !== prevProps.selectedParam) {
      const { selectedParam } = this.props;
      const { params } = this.state;
      const options = getData(params, selectedParam);
      this.setState({
        selectedParam,
        options,
        currentPage: 1,
        searchQuery: "",
      });
    }
  }

  handleLike = (option) => {
    const { selectedParam } = this.props;
    const options = [...this.state.options];
    const index = options.indexOf(option);
    options[index].liked = option.liked ? false : true;
    // alternative: songs[index].liked = !songs[index].liked;
    this.setState({ options });

    let params = { ...this.state.params };
    let selParam = params[`${selectedParam}`];
    const index2 = selParam.indexOf(option.name);

    if (option.liked) {
      if (index2 === -1) {
        selParam = [option.name, ...selParam];
      }
    } else if (index2 !== -1) {
      selParam.splice(index2, 1);
    }
    params[`${selectedParam}`] = selParam;
    console.log(params);
    this.setState({ params });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handlePreviousPage = () => {
    this.setState({ currentPage: this.state.currentPage - 1 });
  };

  handleNextPage = () => {
    this.setState({ currentPage: this.state.currentPage + 1 });
  };

  handleFirstPage = () => {
    this.setState({ currentPage: 1 });
  };

  handleLastPage = (page) => {
    this.setState({ currentPage: page });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn, currentPage: 1 });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, currentPage: 1 });
  };

  // handleToggleSwitch = (e) => {
  //   if (e === "includes") {
  //     console.log(e);
  //     this.setState({ searchType: "includes" });
  //   } else this.setState({ searchType: "startsWith" });
  // };

  getPagedData = (options) => {
    const { sortColumn, currentPage, pageSize, searchQuery, searchType } =
      this.state;

    // filtering for search string

    let filtered = options;
    if (searchQuery) {
      console.log(searchType);
      if (searchType === "includes")
        filtered = options.filter((m) =>
          m.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      else {
        filtered = options.filter((m) =>
          m.name.toLowerCase().startsWith(searchQuery.toLowerCase())
        );
      }
    }

    // sorting
    const sortedOptions = _.orderBy(
      filtered,
      [sortColumn.path],
      [sortColumn.order]
    );

    // paginating
    return paginate(sortedOptions, currentPage, pageSize);
  };

  render() {
    const { params, selectedParam, searchQuery } = this.state;
    let { options } = this.state;
    const count = options.length;

    if (count === 0) return <p>There are no {selectedParam}s to display</p>;

    options = this.getPagedData(options);
    const { sortColumn, currentPage, pageSize } = this.state;

    const paramCount = params[`${selectedParam}`].length;

    return (
      <div>
        <h3>Select {selectedParam}</h3>
        <div>
          <SelectedOptions />
        </div>
        <p>
          Showing {count} {selectedParam}s.
        </p>
        <div>
          {paramCount === 0 ? "No" : paramCount} {selectedParam}
          {paramCount > 1 ? "s" : ""} selected.
        </div>
        <div>
          <button className={`btn btn-danger ${!paramCount ? "disabled" : ""}`}>
            Confirm Favs
          </button>
        </div>
        <div>
          {/* <ToggleSwitch label={this.selectedParam} /> */}
          <SearchBox
            value={searchQuery}
            searchParam={selectedParam}
            onChange={this.handleSearch}
          />
        </div>

        <OptionsTable
          options={options}
          selectedParam={selectedParam}
          sortColumn={sortColumn}
          onLike={this.handleLike}
          // onDelete={this.handleDelete}
          onSort={this.handleSort}
        />
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
          onPreviousPage={this.handlePreviousPage}
          onNextPage={this.handleNextPage}
          onFirstPage={this.handleFirstPage}
          onLastPage={this.handleLastPage}
        />
      </div>
    );
  }
}

export default Songs;
