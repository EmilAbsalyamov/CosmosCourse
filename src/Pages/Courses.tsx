import React from "react";
import { NavLink } from "react-router-dom";
import HomeButton from "../components/HomeButton";
import { ICourse } from "../types";

interface IProps {
  courses: ICourse[];
}

const Courses: React.FunctionComponent<IProps> = ({ courses }) => {
  const coursesList = courses.map((course: ICourse) => {
    return (
      <div className="course" key={course.id}>
        <NavLink to={`/course/${course.id}`}>
          <button className="button">{course.name}</button>
        </NavLink>
      </div>
    );
  });

  return (
    <div className="container">
      <HomeButton />
      <div className="coursesTitle">Темы</div>
      <div className="coursesList">{coursesList}</div>
    </div>
  );
};

export default Courses;
