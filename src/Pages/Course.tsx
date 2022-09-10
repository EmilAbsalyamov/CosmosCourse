import React, { useState } from "react";
import ChangeCourseButtons from "../components/ChangeCourseButtons";
import HomeButton from "../components/HomeButton";
import { ICommunityData, ICourse } from "../types";
import CoursesListModule from "../components/CoursesListModule";
import Footer from "../components/Footer";
import ReactMarkdown from "react-markdown";
import raw from "raw.macro";
import CourseScreenShots from "../components/CourseScreenShots";
import CourseVideoBlock from "../components/CourseVideoBlock";

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
  const courseName: string = courseData.name;
  const markdown = raw(`../data/courses/md/${courseName}.md`);
  const hasScreenShots: boolean = courseData.screenshotsUrls.length > 0;
  const hasVideo: boolean = courseData.videoIds.length > 0;

  const [showScreenShots, setShowScreenShots] =
    useState<boolean>(hasScreenShots);

  const [showVideo, setShowVideo] = useState<boolean>(hasVideo);

  return (
    <div className="container">
      <HomeButton />
      <div className="courseTitle">{courseName}</div>
      <div className="courseSubtitle">{courseName}</div>
      <div className="switchCourseButtons">
        <ChangeCourseButtons id={courseData.id} isLast={isLastCourse} />
      </div>
      <div className="courseContentContainer">
        <CoursesListModule courses={courses} mode="module" />
        <div className="courseContent">
          <div className="courseTextContent">
            <ReactMarkdown children={markdown} />
          </div>
          {hasScreenShots && (
            <button
              className="showAssetsButton"
              onClick={() => setShowScreenShots(!showScreenShots)}
            >
              <span>Скрины к уроку</span>
              {showScreenShots ? (
                <img
                  src={require(`../assets/icons/arrowTop.svg`).default}
                  alt="show"
                />
              ) : (
                <img
                  src={require(`../assets/icons/arrowBottom.svg`).default}
                  alt="hide"
                />
              )}
            </button>
          )}
          {showScreenShots && (
            <div className="screenShotsBlock">
              <CourseScreenShots screenShotsUrls={courseData.screenshotsUrls} />
            </div>
          )}
          {hasVideo && (
            <button
              className="showAssetsButton"
              onClick={() => setShowVideo(!showVideo)}
            >
              <span>Видео к уроку</span>
              {showVideo ? (
                <img
                  src={require(`../assets/icons/arrowTop.svg`).default}
                  alt="show"
                />
              ) : (
                <img
                  src={require(`../assets/icons/arrowBottom.svg`).default}
                  alt="hide"
                />
              )}
            </button>
          )}
          {showVideo && (
            <div className="videoBlock">
              <CourseVideoBlock videoIds={courseData.videoIds} />
            </div>
          )}
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
