import React from "react";
import { Routes, Route, Navigate, useRoutes } from "react-router-dom";
import Results from "./Results";

function AppRoutes() {
  const element = useRoutes([
    {
      path: "/search",
      element: <Results />,
    },
    {
      path: "/news",
      element: <Results />,
    },
    {
      path: "/videos",
      element: <Results />,
    },
    {
      path: "/images",
      element: <Results />,
    },
  ]);
  return (
    <div>
      {element}
      <Routes>
        <Route exact path="/" element={<Navigate replace to="/search" />} />
        <Route />
        <Route />
        <Route />
        <Route />
      </Routes>
    </div>
  );
}

export default AppRoutes;
