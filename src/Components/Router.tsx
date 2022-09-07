import { BrowserRouter, Routes, Route } from "react-router-dom";
import Course from "../pages/Course";
import Earning from "../pages/Earning";
import Home from "../pages/Home";
import { ICommunityData, ICourse } from "../types";
import Courses from "../pages/Courses";

interface IProps {
  courses: ICourse[];
  community: ICommunityData;
}

const Router: React.FunctionComponent<IProps> = ({ courses, community }) => {
  const coursesRoutes = courses.map((course) => {
    return (
      <Route
        path={`course/${course.id}`}
        element={
          <Course
            courseData={course}
            isLastCourse={courses[courses.length - 1].id === course.id}
            courses={courses}
            community={community}
          />
        }
      />
    );
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home community={community} />} />
        <Route
          path="courses"
          element={<Courses courses={courses} community={community} />}
        />
        <Route path="earning" element={<Earning />} />
        {coursesRoutes}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
