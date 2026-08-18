import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Download from "./pages/Download";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Privacy from "./pages/Privacy";
import Refunds from "./pages/Refunds";
import Support from "./pages/Support";
import Terms from "./pages/Terms";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/download" element={<Download />} />
        <Route path="/support" element={<Support />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/refunds" element={<Refunds />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
