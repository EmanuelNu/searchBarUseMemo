import { useState } from "react";
import Results from "./results";

import styled from "styled-components";

const SearchBarContainer = styled.div`
  position: relative;
  width: 400px;
  margin: 0 auto;
`;

const SyledInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  min-width: 400px;
  box-sizing: border-box;
  border: solid 1px #222;
  outline: none;
`;

export default function SearchBar({ items, onItemSelected }) {
  const [query, setQuery] = useState("ma");
  const [results, setResults] = useState("");

  function handleChange(e) {
    const value = e.target.value;
    setQuery(value);
  }

  function handleResults(items) {
    setResults(items);
  }

  return (
    <SearchBarContainer>
      {results && <div>{results.length} results</div>}
      <SyledInput type="text" onChange={handleChange} value={query} />
      <Results
        items={items}
        onItemSelected={onItemSelected}
        query={query}
        onResultsCalculated={handleResults}
      />
    </SearchBarContainer>
  );
}
