export enum USER_REACTIONS {
  LIKE = 'like',
  DISLIKE = 'dislike',
  NONE = 'none',
}

export type TPost = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
  userReaction: USER_REACTIONS,
}

export type TPosts = TPost[];

export type TPostResponse = Omit<TPost, 'userReaction'>;
export type TPostsResponse = TPostResponse[];


export type TComment = {
  id: number,
  body: string,
  postId: number,
  likes: number,
  user: {
    id: number,
    username: string,
    fullName: string,
  }
}

export type TComments = TComment[];
export type TCommentsResponse = TComments;
