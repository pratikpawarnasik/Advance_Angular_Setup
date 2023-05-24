//  This is sample interface file for data post we are using model file


export interface PostObjectInterface {
  posts:PostInterface[];
  total: number;
  skip: number;
  limit: number;
}

export interface PostInterface {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string;
  reactions: number;
}