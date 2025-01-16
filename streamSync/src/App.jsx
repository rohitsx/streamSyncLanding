import { BrowserRouter, Route, Routes } from "react-router";
import StreamSyncLanding from "./landing";
import PrivacyPolicy from "./policy";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StreamSyncLanding />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}
