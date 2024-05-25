import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import BrandRegister from "./pages/auth/BrandRegister";
import Dashboard from "./pages/Brand/Dashboard";
import Layout from "./components/layouts/Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/brand-dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/brand-register" element={<BrandRegister />} />
      </Routes>
    </Router>
  );
};

export default App;
