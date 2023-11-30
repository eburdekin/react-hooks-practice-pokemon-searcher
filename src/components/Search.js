import React from "react";

function Search({handleFilter}) {

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" placeholder="Search here..." onChange={(e) => handleFilter(e.target.value)}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
