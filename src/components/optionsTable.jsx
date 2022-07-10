import React, { Component } from "react";
import { Link } from "react-router-dom";
import Like from "./common/like";
import Table from "./common/table";

class OptionsTable extends Component {
  columns = [
    {
      key: "like",
      content: (option) => {
        return (
          <Like liked={option.liked} onLike={() => this.props.onLike(option)} />
        );
      },
    },
    {
      path: "name",
      label: "",
      content: (option) => {
        return (
          <Link
            to={`api/${this.props.selectedParam}/${option._id}?sortBy={asc}`}
          >
            {option.name}
          </Link>
        );
      },
    },
    { path: "noOfSongs", label: "Number of Songs" },
    { path: "noOfMovies", label: "Number of Movies" },
  ];

  render() {
    const { options, selectedParam, sortColumn, onSort } = this.props;

    this.columns[1].label = selectedParam;

    return (
      <Table
        data={options}
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default OptionsTable;
