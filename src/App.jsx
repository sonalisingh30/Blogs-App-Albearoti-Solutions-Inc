import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import BlogList from "./components/BlogList";

const App = () => {
  return (
    <div className="flex">
      <Router>
        <Sidebar />

        <div className="flex-1 ml-60">
          <Navbar />

          <div className="p-6">
            <Routes>
              {/* Redirect root to /blogs */}
              <Route path="/" element={<Navigate to="/blogs" />} />
              <Route path="/blogs" element={<BlogList />} />
              <Route path="/dashboard" element={<div>Dashboard Content</div>} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
