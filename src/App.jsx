import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LeadManagement from "./pages/LeadManagement";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lead-management" element={<LeadManagement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;