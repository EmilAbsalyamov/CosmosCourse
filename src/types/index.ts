export interface ICourse {
  id: number;
  name: string;
  videoIds: string[];
  screenshotsUrls: string[];
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
