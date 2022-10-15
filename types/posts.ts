export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostState {
  posts: Post[];
  post: Post | null;
  loading: boolean;
  error: string;
}

export interface PostsProps {
  posts: Post[];
}
