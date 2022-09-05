import { NavLink } from "react-router-dom";
import { ICourse } from "../types";

type TileMode = "courses" | "earning" | "course";

interface IProps {
  mode: TileMode;
  firstCourse?: ICourse;
}

const tilesData = {
  courses: {
    name: "Выбрать высоту",
    description:
      "Если ты бывалый космонавт ты можешь пробежаться по темам и выбрать интересующий тебя вопрос",
    url: "/courses",
  },
  earning: {
    name: "Заработок в Космосе",
    description:
      "Если ты хочешь узнать про профиты и заработок, а не читать гайды",
    url: "/earning",
  },
  course: {
    name: "Начать взлёт с земли",
    description:
      "Если ты готов ко взлету и погружению в экосистему шаг за шагом кликай на кнопку ниже для старта курса",
    url: "/course",
  },
};

const Tile: React.FunctionComponent<IProps> = ({ mode, firstCourse }) => {
  let name: string = "";
  let url: string = "";
  let description: string = "";

  switch (mode) {
    case "courses":
      name = tilesData.courses.name;
      description = tilesData.courses.description;
      url = tilesData.courses.url;
      break;
    case "earning":
      name = tilesData.earning.name;
      description = tilesData.earning.description;
      url = tilesData.earning.url;
      break;

    case "course":
      name = tilesData.course.name;
      description = tilesData.course.description;
      url = `${tilesData.course.url}/${firstCourse?.name}`;
  }

  return (
    <div className="buttonBlock">
      <div className="buttonDiscription">{description}</div>
      <NavLink to={url}>
        <button className="button">{name}</button>
      </NavLink>
    </div>
  );
};

export default Tile;
