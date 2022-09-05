import React from "react";
import { ICourse } from "../types";

interface IProps {
  courseData: ICourse;
}

const Courses: React.FunctionComponent<IProps> = ({ courseData }) => {
  return <div className="container">{courseData.name}</div>;
};

export default Courses;
