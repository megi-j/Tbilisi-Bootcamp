import "./components/reset.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import Courses from "./components/Courses";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/courses" element={<Courses />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
