import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./Private";
export default function Pages() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<PrivateRoute />} />
          <Route path="admin" element={<h1>adminページです</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
