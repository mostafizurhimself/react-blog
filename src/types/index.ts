export interface PostType {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  thumbnailUrl: string;
  authorName: string;
  category: string;
  tags: string[];
  isLiked: boolean;
  comments: CommentType[];
  publishedAt: string;
}

export interface CommentType {
  id: number;
  name: string;
  email: string;
  content: string;
  commentedAt: string;
}

export interface ProfileType {
  name: string;
  email: string;
}
