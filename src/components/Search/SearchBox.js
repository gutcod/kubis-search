import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className='pa2 mt4'>
      <input
        className='pa3 ba br4 b--blue bg-wached-green'
        type='search'
        placeholder='Search Product'
        onChange={searchChange}
      />
    </div>
  );
};
export default SearchBox;
