import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import DashBoard from "./pages/dashboard";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Header from "./components/header";
import Sidebar from "./components/sideBar";
import Visualization from "./pages/visualization";
import Prediction from "./pages/prediction";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="row m-0">
          <div className="col-2 p-0">
            <Sidebar />
          </div>
          <div className="col-10">
            <Routes>
              <Route path="/" element={<DashBoard />} />
              <Route path="/visualization" element={<Visualization />} />
              <Route path="/prediction" element={<Prediction />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
