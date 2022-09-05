import { NavLink } from "react-router-dom";

type SwitchButtonType = "next" | "prev";

interface IProps {
  id: number;
  type: SwitchButtonType;
}

const SwitchCourseButton: React.FunctionComponent<IProps> = ({ id, type }) => {
  return (
    <>
      <NavLink to={`/course/${type === "next" ? id + 1 : id - 1}`}>
        <button className="switchButton">
          {type === "next" ? "Следующая тема" : "Предыдущая тема"}
        </button>
      </NavLink>
    </>
  );
};

export default SwitchCourseButton;
