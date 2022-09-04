import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseTopic from "../Pages/CourseTopic";
import Earning from "../Pages/Earning";
import Home from "../Pages/Home";
import Topics from "../Pages/Topics";

const Router: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="topics" element={<Topics />} />
        <Route path="earning" element={<Earning />} />
        <Route path="course" element={<CourseTopic />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
