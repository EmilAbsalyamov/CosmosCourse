import { ICourse } from "../types";
import CourseTile from "./CourseTile";

type ViewMode = "page" | "module";

interface IProps {
  courses: ICourse[];
  mode?: ViewMode;
}

const CoursesListModule: React.FunctionComponent<IProps> = ({
  courses,
  mode = "page",
}) => {
  const coursesList = courses.map((course: ICourse) => (
    <CourseTile course={course} />
  ));

  return (
    <div className={mode === "page" ? "coursesList" : "coursesModule"}>
      {mode === "module" && <div className="coursesModuleTitle">Темы</div>}
      {coursesList}
    </div>
  );
};

export default CoursesListModule;
