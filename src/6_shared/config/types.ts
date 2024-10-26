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

