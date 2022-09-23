export interface Artist {
  external_urls: {
    [name: string]: string;
  };
  followers: {
    total: number;
  };
  genres: string[];
  href: string;
  id: string;
  images: {
    height: number;
    width: number;
    url: string;
  }[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}
