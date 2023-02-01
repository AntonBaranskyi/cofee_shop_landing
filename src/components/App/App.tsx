import MainPage from "../pages/MainPage/MainPage";
import PageAbout from "../pages/PageAbout/PageAbout";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Routes } from "react-router";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<PageAbout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
