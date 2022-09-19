import YouTube, { YouTubeProps } from "react-youtube";

interface IProps {
  videoIds: string[];
}

const CourseVideoBlock: React.FunctionComponent<IProps> = ({ videoIds }) => {
  const opts: YouTubeProps["opts"] = {
    height: "490",
    width: "890",
    playerVars: {
      autoplay: 0,
    },
  };

  const videoList = videoIds.map((videoId) => {
    return <YouTube videoId={videoId} opts={opts} />;
  });

  return <div>{videoList}</div>;
};

export default CourseVideoBlock;
