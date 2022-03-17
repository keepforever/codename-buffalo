import * as React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { GifSearchGrid } from "./components/GifSearchGrid";
import { Instructions } from "./components/Instructions";
import { Detail } from "./components/Detail";

const App = () => (
  <div style={{ maxWidth: 1200, margin: "0 auto" }}>
    <BrowserRouter>
      <nav
        style={{
          display: "flex",
          paddingBottom: "1rem",
        }}
      >
        <Link style={{ marginRight: 20 }} to="/">
          Instructions
        </Link>{" "}
        |{" "}
        <Link style={{ marginLeft: 20 }} to="/search">
          Search
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Instructions />} />
        <Route path="search" element={<GifSearchGrid />} />
        <Route path="detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
