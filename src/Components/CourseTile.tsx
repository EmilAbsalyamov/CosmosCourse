import { NavLink } from "react-router-dom";
import { ICourse } from "../types";

interface IProps {
  course: ICourse;
}

const CourseTile: React.FunctionComponent<IProps> = ({ course }) => {
  return (
    <div className="courseTile" key={course.id}>
      <NavLink to={`/course/${course.id}`}>
        <button className="button">{course.name}</button>
      </NavLink>
    </div>
  );
};

export default CourseTile;
