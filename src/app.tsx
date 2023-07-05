import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Courses = lazy(() => import("./components/Courses/Courses"));
const CourseDetails = lazy(() => import("./components/course-details/CourseDetails"));

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" index element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
      </Routes>
    </>
  );
}
