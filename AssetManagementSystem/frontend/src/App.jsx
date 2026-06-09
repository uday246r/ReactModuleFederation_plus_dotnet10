import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Assets from "./pages/Assets.jsx";
import Employees from "./pages/Employees.jsx";
import Assignments from "./pages/Assignments.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/assets" element={<Assets />} />
      <Route path="/employees" element={<Employees />} />
      <Route path="/assignments" element={<Assignments />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}