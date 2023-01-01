import React from "react";
import { Routes, Route } from "react-router-dom";
import Results from "./Results";

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Results />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
