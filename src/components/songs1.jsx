import React, { Component } from "react";
import _ from "lodash";

import SongsTable from "./songsTable";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import { paginate } from "../utils/paginate";
import { getSongs } from "../services/fakeSongService";
import { getCategories } from "../services/fakeCategoryService";

class Songs extends Component {
  state = {
    songs: [],
    categories: [],
    pageSize: 6,
    currentPage: 1,
    selectedCategory: "",
    sortColumn: {
      path: "title",
      order: "asc",
    },
  };

  componentDidMount() {
    const categories = [
      { _id: "", name: "All Categories" },
      ...getCategories(),
    ];
    this.setState({ songs: getSongs(), categories });
  }

  handleDelete = (song) => {
    const songs = this.state.songs.filter((m) => m._id !== song._id);
    this.setState({ songs });
  };

  handleLike = (song) => {
    const songs = [...this.state.songs];
    const index = songs.indexOf(song);
    songs[index].liked = song.liked ? false : true;
    // alternative: songs[index].liked = !songs[index].liked;
    this.setState({ songs });
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

  handleCategorySelect = (category) => {
    this.setState({ selectedCategory: category });
    this.setState({ currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      selectedCategory,
      songs: allSongs,
      sortColumn,
      currentPage,
      pageSize,
    } = this.state;

    // First Filter
    const filteredSongs =
      selectedCategory && selectedCategory._id
        ? allSongs.filter((song) => song.category._id === selectedCategory._id)
        : allSongs;

    // Next Sort
    const sortedSongs = _.orderBy(
      filteredSongs,
      [sortColumn.path],
      [sortColumn.order]
    );

    // Finally paginate
    const songs = paginate(sortedSongs, currentPage, pageSize);

    return { totalCount: filteredSongs.length, data: songs };
  };

  render() {
    const { length: count } = this.state.songs;
    const { pageSize, currentPage, sortColumn } = this.state;

    if (count === 0) return <p>There are no songs to display</p>;

    const { totalCount, data } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.categories}
            onItemSelect={this.handleCategorySelect}
            selectedItem={this.state.selectedCategory}
          />
        </div>
        <div className="col">
          <h2>Songs</h2>
          <p>Showing {totalCount} songs.</p>
          <SongsTable
            songs={data}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
            onPreviousPage={this.handlePreviousPage}
            onNextPage={this.handleNextPage}
            onFirstPage={this.handleFirstPage}
            onLastPage={this.handleLastPage}
          />
        </div>
      </div>
    );
  }
}

export default Songs;
