import React, { useState } from 'react';
import { Input, SearchForm } from './Search.styled';

const Search = ({ searchQuery }) => {
  const [search, setSearch] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    searchQuery(search);
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <Input
        type="text"
        name="search"
        value={search}
        required
        onChange={e => setSearch(e.target.value)}
      />
      <button type="submit">Search</button>
    </SearchForm>
  );
};

export default Search;
