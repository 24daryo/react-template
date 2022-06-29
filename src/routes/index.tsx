import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeRoute from "./Home";
import LGRoute from "./LG";
export default function Pages() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<LGRoute />} />
          <Route path="admin" element={<h1>adminページです</h1>} />
          <Route path="lg" element={<HomeRoute />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
