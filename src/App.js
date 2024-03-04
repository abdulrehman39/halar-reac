import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history"; // Import createBrowserHistory
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ChairmanMessage from "./pages/chairman";
import DirectorMessage from "./pages/director";
import FacultyHiet from "./pages/faculty";
import Administration from "./pages/administration";
import DeptofCs from "./pages/deptofCS";
import DeptofElp from "./pages/deptofELP";
import DeptofVt from "./pages/deptofVT";
import LatestNews from "./pages/latestnews";
import Contact from "./pages/contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./bootstrap.css";
import "./App.css";

function App() {
  const history = createBrowserHistory(); // Use createBrowserHistory to create history object

  useEffect(() => {
    const unlisten = history.listen(() => {
      // Handle route changes if needed
    });

    return () => {
      unlisten();
    };
  }, [history]);

  return (
    <>
      <Router history={history}>
        <div>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/Chairman" element={<ChairmanMessage />} />
            <Route path="/Director" element={<DirectorMessage />} />
            <Route path="/Faculty" element={<FacultyHiet />} />
            <Route path="/Administration" element={<Administration />} />
            <Route path="/CS-Dept" element={<DeptofCs />} />
            <Route path="/ELP-Dept" element={<DeptofElp />} />
            <Route path="/VT-Dept" element={<DeptofVt />} />
            <Route path="/Latest-News" element={<LatestNews />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
