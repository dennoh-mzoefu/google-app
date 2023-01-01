import React, { createContext, useContext, useState } from "react";
import axios from "axios";
export const StateContext = createContext();
// const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState();
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleRequest = async () => {
    let a;
    let options = {
      method: "GET",
      url: "https://web-search024.p.rapidapi.com/",
      params: { query: searchTerm, max: "100", proxy: "US" },
      headers: {
        "X-RapidAPI-Key": "8c674c8142msh7863ff6735b6f00p180523jsndfa3f1736430",
        "X-RapidAPI-Host": "web-search24.p.rapidapi.com",
      },
    };
    await axios
      .request(options)
      .then((response) => {
        console.log(response?.data);
        a = response;
      })
      .catch(function (error) {
        console.error(error);
      });
    console.log({ a });
    return a;
  };

  const getResults = async () => {
    setLoading(true);
    const data = await handleRequest();
    // const data = await res.json();
    setResults(data);

    console.log(data);
    setLoading(false);
  };

  return (
    <StateContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, loading }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
