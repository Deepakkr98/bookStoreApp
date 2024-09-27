import React from "react";
import Navbar from "../component/navbar";
import Footer from "../component/Footer";
import Course from "../component/Course";

const Courses = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Course />
      </div>

      <Footer />
    </>
  );
};

export default Courses;
