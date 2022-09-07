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
        icon="https://pics.st/07b/c32/4a000ac3.png"
        link={link.link}
      />
    );
  });
  return (
    <div>
      <div>{type === "chats" ? CHATS_TITLE : VIDEO_CONTENT_TITLE}</div>
      <div>{links}</div>
    </div>
  );
};

export default CommunityBlock;
