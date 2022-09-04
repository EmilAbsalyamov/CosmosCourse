interface IProps {
  name: string;
  icon: string;
  link: string;
}

const CommunityLink: React.FunctionComponent<IProps> = ({
  name,
  icon,
  link,
}) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="communityBlock">
        <div>
          <img src={icon} alt="" />
        </div>
        <div className="communityName">{name}</div>
      </div>
    </a>
  );
};

export default CommunityLink;
