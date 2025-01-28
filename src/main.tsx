import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./style.css";
import StreamSyncLanding from "@/landing";
import PrivacyPolicy from "@/policy";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<StreamSyncLanding />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  </BrowserRouter>,
);
