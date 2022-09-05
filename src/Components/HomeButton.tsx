import { NavLink } from "react-router-dom";

const HomeButton: React.FunctionComponent = () => {
  return (
    <div className="homeButtonBlock">
      <NavLink to="/">
        <button className="homeButton">Home</button>
      </NavLink>
    </div>
  );
};

export default HomeButton;
