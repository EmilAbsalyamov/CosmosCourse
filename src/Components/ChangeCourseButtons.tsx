import SwitchCourseButton from "./SwitchCourseButton";

interface IProps {
  id: number;
  isLast: boolean;
}

const ChangeCourseButtons: React.FunctionComponent<IProps> = ({
  id,
  isLast,
}) => {
  if (id === 1) {
    return <SwitchCourseButton id={id} type="next" />;
  } else if (isLast) {
    return <SwitchCourseButton id={id} type="prev" />;
  }

  return (
    <>
      <SwitchCourseButton id={id} type="prev" />
      <SwitchCourseButton id={id} type="next" />
    </>
  );
};

export default ChangeCourseButtons;
