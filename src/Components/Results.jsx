import React, { useContext, useEffect } from "react";
import Loading from "./Loading";
import { StateContext } from "../Context/StateContextProvider";
import KnowledgePanel from "./KnowledgePanel";

function Results() {
  const { results, loading, getResults, searchTerm } = useContext(StateContext);

  useEffect(() => {
    // getResults();
  }, [searchTerm]);
  if (loading) return <Loading />;
  console.log({ results });
  return (
    <div>
      <div className="sm:ml-24 ml-60">
        <h4 className="">
          About
          {results?.data?.results?.length}
        </h4>
        <div>
          <KnowledgePanel />
        </div>
      </div>
      <div>
        {/* border-2 border-rose-500 */}{" "}
        <div className="sm:px-56 flex flex-wrap justify-between space-y-6 ">
          {results?.data?.results?.map(({ url, title }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={url} target="_blank" rel="noreferrer">
                <p className="text-sm text-green-500">
                  {url.length > 30 ? url.substring(0, 30) : url}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Results;
