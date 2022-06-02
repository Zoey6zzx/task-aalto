import React from "react";
import SearchBar from "../search-bar/SearchBar";
import Toggle from "../toggle/Toggle";
import Dropdown from "../dropdown/Dropdown";

const Filters = () => {
  return (
    <div className="col-md-4">
      <SearchBar />
      <Toggle />
      <Dropdown />
      <h6>Reset filters</h6>
    </div>
  );
};

export default Filters;
