import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./style.css";
import StreamSyncLanding from "./components/landing";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<StreamSyncLanding />} />
    </Routes>
  </BrowserRouter>,
);
