import type { RootState } from '@/store';
import { CommentType, PostType } from '@/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { posts } from '@/data/posts';

interface BlogState {
  posts: PostType[];
}

const initialState: BlogState = {
  posts,
};

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    addComment(
      state: BlogState,
      action: PayloadAction<{
        postId: number;
        comment: Omit<CommentType, 'id' | 'commentedAt'>;
      }>
    ) {
      const { postId, comment } = action.payload;
      const post = state.posts.find((post) => post.id === postId);
      if (post) {
        post.comments.unshift({
          ...comment,
          id: post.comments.length + 1,
          commentedAt: new Date().toISOString(),
        });
      }
    },
    toggleLike(state: BlogState, action: PayloadAction<number>) {
      const post = state.posts.find((post) => post.id === action.payload);
      if (post) {
        post.isLiked = !post.isLiked;
      }
    },
  },
});

export const { addComment, toggleLike } = blogSlice.actions;

export const getBlogPosts = (state: RootState) => state.blog.posts;
export const getLikedPosts = (state: RootState) => state.blog.posts.filter((post) => post.isLiked);
export const getPostById = (state: RootState, postId: number) => {
  return state.blog.posts.find((post) => post.id === postId);
};
