import React from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "../pages/welcome";
import Quesionare from "../pages/Questionare";
import Results from "../pages/results";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/question" element={<Quesionare />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  );
}

export default AppRouter;
