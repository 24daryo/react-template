import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Result from "./Result";
import Step1 from "./Step1";
import Step2 from "./Step2";

function FormPages() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/step1">Step1</Link>
        <Routes>
          <Route index element={<h1>Home</h1>} />
          <Route path="/step1" element={<Step1 />} />
          <Route path="/step2" element={<Step2 />} />
          <Route path="/result" element={<Result />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default FormPages;
