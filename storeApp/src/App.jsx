import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Users from "./pages/Users";
import Carts from "./pages/Carts";
import Categories from "./pages/Categories";
import Dashboard from "./pages/Dashboard";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/users" element={<Users />} />
            <Route path="/carts" element={<Carts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
