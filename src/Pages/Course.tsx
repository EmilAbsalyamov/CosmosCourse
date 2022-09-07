import React from "react";
import ChangeCourseButtons from "../components/ChangeCourseButtons";
import HomeButton from "../components/HomeButton";
import { ICommunityData, ICourse } from "../types";
import CoursesListModule from "../components/CoursesListModule";
import Footer from "../components/Footer";

interface IProps {
  courseData: ICourse;
  isLastCourse: boolean;
  courses: ICourse[];
  community: ICommunityData;
}

const Course: React.FunctionComponent<IProps> = ({
  courseData,
  isLastCourse,
  courses,
  community,
}) => {
  return (
    <div className="container">
      <HomeButton />
      <div className="courseTitle">{courseData.name}</div>
      <div className="courseSubtitle">{courseData.name}</div>
      <div className="switchCourseButtons">
        <ChangeCourseButtons id={courseData.id} isLast={isLastCourse} />
      </div>
      <div className="courseContentContainer">
        <CoursesListModule courses={courses} mode="module" />
        <div className="courseContent">
          <div className="courseTextContent">{courseData.mainInfo}</div>
          <div className="screenShotsBlock">screen</div>
          <div className="videoBlock">Video</div>
        </div>
      </div>
      <div className="switchCourseButtons">
        <ChangeCourseButtons id={courseData.id} isLast={isLastCourse} />
      </div>
      <Footer community={community} />
    </div>
  );
};

export default Course;
