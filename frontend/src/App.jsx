import React from "react";
import { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import InitialCourseDetail from "./pages/CoursesDetails/InitialCourseDetail";
import RepairCourseDetail from "./pages/CoursesDetails/RepairCourseDetail";
import DrawingCourseDetail from "./pages/CoursesDetails/DrawingCourseDetail";
import Navbar from "./components/Navbar";
import StudentWorkDetail from "./pages/StudentWorkDetail";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="max-w-[2000px] mx-auto bg-[#f8f7f5]">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/cursos/taller-inicial"
            element={<InitialCourseDetail />}
          ></Route>
          <Route
            path="/cursos/taller-reparacion-de-joyas"
            element={<RepairCourseDetail />}
          ></Route>
          <Route
            path="/cursos/taller-dibujo-de-joyas"
            element={<DrawingCourseDetail />}
          ></Route>
          <Route
            path="/trabajos-de-alumnos"
            element={<StudentWorkDetail />}
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
