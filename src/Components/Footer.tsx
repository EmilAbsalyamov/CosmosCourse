import { ICommunityData } from "../types";
import CommunityBlock from "./CommunityBlock";

interface IProps {
  community: ICommunityData;
}

const Footer: React.FunctionComponent<IProps> = ({ community }) => {
  return (
    <div className="communityBlocks">
      <CommunityBlock type="chats" data={community.chats} />
      <CommunityBlock type="videoContent" data={community.youTube} />
    </div>
  );
};

export default Footer;
