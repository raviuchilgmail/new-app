import React, { Component } from "react";
import Checkbox from "./common/checkbox";
import Like from "./common/like";
import Table from "./common/table";

class SongsTable extends Component {
  columns = [
    {
      key: "tick",
      content: () => {
        <Checkbox />;
      },
    },
    {
      key: "like",
      content: (song) => {
        <Like liked={song.liked} onLike={() => this.props.onLike(song)} />;
      },
    },
    { path: "title", label: "Title" },
    { path: "movie.title", label: "Movie" },
    { path: "movie.year", label: "Year" },
    { path: "singers", label: "Singers" },
    { path: "category.name", label: "Category" },
    {
      key: "delete",
      content: (song) => {
        <button
          onClick={() => this.props.onDelete(song)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>;
      },
    },
  ];
  render() {
    const { songs, sortColumn, onSort } = this.props;
    return (
      <Table
        data={songs}
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default SongsTable;
