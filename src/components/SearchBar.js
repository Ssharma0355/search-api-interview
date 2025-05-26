import React, { useState } from 'react'

function SearchBar({ setResult }) {
  const [value, setValue] = useState("");

 const fetchData = (value) => {
   fetch("https://jsonplaceholder.typicode.com/users")
     .then((response) => response.json())
     .then((json) => {
       const result = json.filter((user) => {
         return (
           value &&
           user &&
           user.name &&
           user.name.toLowerCase().includes(value.toLowerCase())
         );
       });
       setResult(result);
     });
 };

  const handleSearch = (value) => {
    setValue(value);
    fetchData(value);
  };
  return (
    <div>
      <h3>Seach here</h3>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={value}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
    </div>
  );
}

export default SearchBar
