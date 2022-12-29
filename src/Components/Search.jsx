import React, { useState } from "react";
import axios from "axios";
function Search() {
  const [searchText, setSearchText] = useState("");
  const options = {
    method: "GET",
    url: "https://web-search24.p.rapidapi.com/",
    params: { query: "Ronaldo images", max: "100", proxy: "US" },
    headers: {
      "X-RapidAPI-Key": "8c674c8142msh7863ff6735b6f00p180523jsndfa3f1736430",
      "X-RapidAPI-Host": "web-search24.p.rapidapi.com",
    },
  };

  const handleRequest = () => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  return (
    <div>
      {/* <input type="text" value={searchText} /> */}
      <button onClick={handleRequest}>Click me</button>
    </div>
  );
}

export default Search;
