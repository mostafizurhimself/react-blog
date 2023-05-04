export interface Post {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  thumbnailUrl: string;
  authorName: string;
  category: string;
  tags: string[];
  publishedAt: string;
  comments: Comment[];
}

export interface Comment {
  name: string;
  email: string;
  content: string;
}
