import React from "react";
import CoursesListModule from "../components/CoursesListModule";
import HomeButton from "../components/HomeButton";
import { ICommunityData, ICourse } from "../types";
import Footer from "../components/Footer";

interface IProps {
  courses: ICourse[];
  community: ICommunityData;
}

const Courses: React.FunctionComponent<IProps> = ({ courses, community }) => {
  return (
    <div className="container">
      <HomeButton />
      <div className="coursesTitle">Темы</div>
      <CoursesListModule courses={courses} />
      <Footer community={community} />
    </div>
  );
};

export default Courses;
