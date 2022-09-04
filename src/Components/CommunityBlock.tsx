import CommunityLink from "./CommunityLink";

type CommunityType = "chats" | "videoContent";

interface IProps {
  type: CommunityType;
}

const VIDEO_CONTENT_TITLE = "Полезные и интересные YouTube каналы";
const CHATS_TITLE = "Наши дружелюбные чатики";

const CommunityBlock: React.FunctionComponent<IProps> = ({ type }) => {
  return (
    <div>
      <div>{type === "chats" ? CHATS_TITLE : VIDEO_CONTENT_TITLE}</div>
      <div>
        <CommunityLink
          name="First"
          icon="https://pics.st/07b/c32/4a000ac3.png"
          link="https://www.google.com/"
        />
      </div>
    </div>
  );
};

export default CommunityBlock;
