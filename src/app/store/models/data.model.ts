
export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
  backgroundColor:string;
  fontColor:string;
  headerBackgroundColor:string;
}

export interface Data {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}
export interface DataById {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
  additionalProperty: string; // Example additional property specific to fetchDataById response
}