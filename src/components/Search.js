import React from "react";

function Search({search, handleSearchInput}) {

  const handleChange = (e) => {
    handleSearchInput(e)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
        value={search} 
        onChange={handleChange} 
        className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
