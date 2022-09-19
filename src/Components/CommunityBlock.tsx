import CommunityLink from "./CommunityLink";
import { ICommunityChat, ICommunityYouTubeChannels } from "../types/index";

type CommunityType = "chats" | "videoContent";

interface IProps {
  type: CommunityType;
  data: ICommunityChat[] | ICommunityYouTubeChannels[];
}

const VIDEO_CONTENT_TITLE = "Полезные и интересные YouTube каналы";
const CHATS_TITLE = "Наши дружелюбные чатики";

const CommunityBlock: React.FunctionComponent<IProps> = ({ type, data }) => {
  const links = data.map((link) => {
    return (
      <CommunityLink
        name={link.name}
        icon={
          type === "chats"
            ? "https://pics.st/4d0/074/440c91b3.png"
            : "https://pics.st/ec1/c1d/bec1d1bb.png"
        }
        link={link.link}
      />
    );
  });

  return (
    <div className="communityBlock">
      <div>{type === "chats" ? CHATS_TITLE : VIDEO_CONTENT_TITLE}</div>
      <div>{links}</div>
    </div>
  );
};

export default CommunityBlock;
