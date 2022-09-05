import React from "react";
import ChangeCourseButtons from "../components/ChangeCourseButtons";
import HomeButton from "../components/HomeButton";
import { ICourse } from "../types";

interface IProps {
  courseData: ICourse;
  isLastCourse: boolean;
}

const Course: React.FunctionComponent<IProps> = ({
  courseData,
  isLastCourse,
}) => {
  return (
    <div className="container">
      <HomeButton />
      <div className="courseTitle">{courseData.name}</div>
      <div className="switchCourseButtons">
        <ChangeCourseButtons id={courseData.id} isLast={isLastCourse} />
      </div>
    </div>
  );
};

export default Course;
