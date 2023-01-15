import "./components/reset.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import Tutors from "./Tutors";
import CoursesBox from "./components/CoursesBox";
import { useState } from "react";

function App() {
  const [isclickedCoursesBox, setIsClickedCoursesBox] = useState(false);

  function handleClick() {
    setIsClickedCoursesBox(!isclickedCoursesBox);
  }
  function changeHidden() {
    setIsClickedCoursesBox(false);
  }
  return (
    <div className="container">
      <Routes>
        <Route
          path="/"
          element={
            <Header
              handleClick={handleClick}
              isclickedCoursesBox={isclickedCoursesBox}
              changeHidden={changeHidden}
            />
          }
        >
          <Route index element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/tutors" element={<Tutors />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
