import cn from "classnames";
import { useState } from "react";

interface IProps {
  screenShotsUrls: string[];
}

const CourseScreenShots: React.FunctionComponent<IProps> = ({
  screenShotsUrls,
}) => {
  const [currentScreenShot, setCurrentScreenShot] = useState<number>(0);

  console.log(currentScreenShot);

  const previewList = screenShotsUrls.map((screenShot, index) => {
    return (
      <div
        className={cn(
          "screenShotPreview",
          index === currentScreenShot ? "activeScreenShotPreview" : ""
        )}
        onClick={() => setCurrentScreenShot(index)}
      >
        <img width={100} height={100} src={screenShot} alt="cosmos" />
      </div>
    );
  });

  return (
    <div className="screenShotsModule">
      <div
        className="switchScreenshotArrow left"
        onClick={() =>
          currentScreenShot === 0
            ? setCurrentScreenShot(screenShotsUrls.length - 1)
            : setCurrentScreenShot(currentScreenShot - 1)
        }
      >
        <img
          src={require("../assets/icons/arrowLeft.svg").default}
          alt="prev"
        />
      </div>
      <div className="screenShotsBlock">
        <div className="mainScreenShot">
          <img
            width={850}
            height={450}
            src={screenShotsUrls[currentScreenShot]}
            alt="cosmos"
          />
        </div>
        <div className="screenShotsList">{previewList}</div>
      </div>

      <div
        className="switchScreenshotArrow right"
        onClick={() =>
          currentScreenShot === screenShotsUrls.length - 1
            ? setCurrentScreenShot(0)
            : setCurrentScreenShot(currentScreenShot + 1)
        }
      >
        <img
          src={require("../assets/icons/arrowRight.svg").default}
          alt="next"
        />
      </div>
    </div>
  );
};

export default CourseScreenShots;
