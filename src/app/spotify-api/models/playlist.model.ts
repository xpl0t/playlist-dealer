export interface Playlist {
  collaborative: boolean;
  description: string;
  href: string;
  id: string;
  images: {
    height: number;
    width: number;
    url: string;
  }[];
  name: string;
  public: boolean;
  type: string;
  uri: string;
}
