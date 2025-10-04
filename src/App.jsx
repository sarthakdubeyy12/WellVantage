import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LeadManagement from "./pages/LeadManagement";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lead-management" element={<LeadManagement />} />
        <Route path="/dashboard" element={<NotFound />} />
        <Route path="/wellvantage-leads" element={<NotFound />} />
        <Route path="/member-management" element={<NotFound />} />
        <Route path="/membership-management" element={<NotFound />} />
        <Route path="/attendance-tracking" element={<NotFound />} />
        <Route path="/employee-management" element={<NotFound />} />
        <Route path="/revenue-management" element={<NotFound />} />
        <Route path="/expense-management" element={<NotFound />} />
        <Route path="/workout-management" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;