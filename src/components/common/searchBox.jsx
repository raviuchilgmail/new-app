import React, { Component } from "react";

const SearchBox = ({ value, onChange, searchParam }) => {
  return (
    <input
      type="text"
      name="query"
      className="form-control my-3"
      placeholder={`Search for ${searchParam} ...`}
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
};

export default SearchBox;
