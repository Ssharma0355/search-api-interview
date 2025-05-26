import React from "react";

function SearchResult({ result }) {
  return (
    <div>
      {result.map((r, id) => (
        <div key={id}>{r.name}</div>
      ))}
    </div>
  );
}
export default SearchResult;
