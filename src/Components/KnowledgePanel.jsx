import React, { useContext } from "react";
import { StateContext } from "../Context/StateContextProvider";

function KnowledgePanel() {
  const { results, loading, getResults, searchTerm } = useContext(StateContext);
  return (
    <div>
      <div className="mt-6">
        <h1 className="text-slate-900 text-2xl dark:text-slate-50">
          {results?.data?.knowledge_panel?.name}
        </h1>
        <h3 className="dark:text-slate-400">
          {results?.data?.knowledge_panel?.label}
        </h3>
      </div>
      <img
        className="rounded-lg mb-4"
        src={results?.data?.knowledge_panel?.image?.url}
      />
    </div>
  );
}

export default KnowledgePanel;
