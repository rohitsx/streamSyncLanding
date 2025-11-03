import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./style.css";
import DualProjectLanding from "./components/landing";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<DualProjectLanding />} />
    </Routes>
  </BrowserRouter>,
);
