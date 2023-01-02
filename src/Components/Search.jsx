import React, { useContext, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { StateContext } from "../Context/StateContextProvider";

// import { useStateContext } from "../Context/StateContextProvider";

const Search = () => {
  const { setSearchTerm, getResults } = useContext(StateContext);
  const [text, setText] = useState("Elon Musk");
  const [debouncedValue] = useDebounce(text, 300);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);
  const handleResults = () => {
    setTimeout(() => {
      getResults();
      // alert("J'aime les chats");
    }, 3000);
  };
  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <input
        value={text}
        type="text"
        className="sm:w-96 w-80 h-10 dark:bg-gray-200  border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="🔎 Search Google or type URL"
        onChange={(e) => setText(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleResults()}
        onKeyDown={(e) => e.key === "Enter" && handleResults()}
      />
      {text !== "" && (
        <button
          type="button"
          className="absolute top-1.5 right-4 text-2xl text-gray-500 "
          onClick={() => setText("")}
        >
          x
        </button>
      )}
    </div>
  );
};

export default Search;
