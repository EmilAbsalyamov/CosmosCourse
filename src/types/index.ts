export interface ICourse {
  id: number;
  name: string;
  subtitle: string;
  mainInfo: string;
  videoUrls: string[];
}

export interface ICommunityChat {
  name: string;
  link: string;
}

export interface ICommunityYouTubeChannels {
  name: string;
  link: string;
}

export interface ICommunityData {
  chats: ICommunityChat[];
  youTube: ICommunityYouTubeChannels[];
}
