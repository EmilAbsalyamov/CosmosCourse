import { NavLink } from "react-router-dom";

type TileMode = "topics" | "earning" | "course";

interface IProps {
  mode: TileMode;
}

const tilesData = {
  topics: {
    name: "Выбрать высоту",
    description:
      "Если ты бывалый космонавт ты можешь пробежаться по темам и выбрать интересующий тебя вопрос",
    url: "/topics",
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

const Tile: React.FunctionComponent<IProps> = ({ mode }) => {
  let name: string = "";
  let url: string = "";
  let description: string = "";

  switch (mode) {
    case "topics":
      name = tilesData.topics.name;
      description = tilesData.topics.description;
      url = tilesData.topics.url;
      break;
    case "earning":
      name = tilesData.earning.name;
      description = tilesData.earning.description;
      url = tilesData.earning.url;
      break;

    case "course":
      name = tilesData.course.name;
      description = tilesData.course.description;
      url = tilesData.course.url;
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
