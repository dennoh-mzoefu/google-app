import React, { useContext, useEffect, useState } from "react";
import Loading from "./Loading";
import { StateContext } from "../Context/StateContextProvider";
import KnowledgePanel from "./KnowledgePanel";
import ReactPaginate from "react-paginate";
import "./Results.css";

function Results() {
  const { results, loading, getResults, searchTerm } = useContext(StateContext);
  const [currentItems, setCurrentItems] = useState([]);
  // const [displayResults, setDisplayResult] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 16;

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(results?.data?.results?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(results?.data?.results?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, results]);
  // const navigate = useNavigate();
  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) % results?.data?.results?.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  useEffect(() => {
    // setTimeout(() => {
    // getResults();
    // alert("J'aime les chats");
    // }, 3000);
  }, [searchTerm]);
  if (loading) return <Loading />;
  console.log({ currentItems });
  return (
    <div className="mx-16">
      <div className="flex justify-around">
        <div>
          <h4 className="text-slate-400 underline ">
            About&nbsp;
            {results?.data?.results?.length}&nbsp;results on {searchTerm}
          </h4>
          <div>
            <KnowledgePanel />
          </div>
        </div>
        <div> </div>
      </div>
      <div>
        {/* border-2 border-rose-500 */}{" "}
        <div className="sm:px-56 flex flex-wrap justify-between space-y-6 ">
          {currentItems?.map(({ url, title }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={url} target="_blank" rel="noreferrer">
                <p className="text-sm dark:text-green-500">
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
      <div className=" flex justify-center text-center my-4">
        <ReactPaginate
          breakLabel="..."
          nextLabel=" >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< "
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="active "
          previousClassName="prevName"
          nextClassName="prevName"
          className="flex w-2/6 justify-around mx-auto"
        />
      </div>
    </div>
  );
}

export default Results;
