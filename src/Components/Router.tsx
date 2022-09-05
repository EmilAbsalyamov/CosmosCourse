import { BrowserRouter, Routes, Route } from "react-router-dom";
import Course from "../Pages/Course";
import Earning from "../Pages/Earning";
import Home from "../Pages/Home";
import { ICourse } from "../types";
import Courses from "../Pages/Courses";

interface IProps {
  courses: ICourse[];
}

const Router: React.FunctionComponent<IProps> = ({ courses }) => {
  const coursesRoutes = courses.map((course) => {
    return (
      <Route
        path={`course/${course.id}`}
        element={
          <Course
            courseData={course}
            isLastCourse={courses[courses.length - 1].id === course.id}
          />
        }
      />
    );
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="courses" element={<Courses courses={courses} />} />
        <Route path="earning" element={<Earning />} />
        {coursesRoutes}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
