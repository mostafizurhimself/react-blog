import type { RootState } from '@/store';
import { CommentType, PostType, Theme } from '@/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { posts } from '@/data/posts';

export interface GlobalState {
  posts: PostType[];
  theme: Theme;
}

export const initialState: GlobalState = {
  posts,
  theme: Theme.LIGHT,
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    addComment(
      state: GlobalState,
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
    toggleLike(state: GlobalState, action: PayloadAction<number>) {
      const post = state.posts.find((post) => post.id === action.payload);
      if (post) {
        post.isLiked = !post.isLiked;
      }
    },
    toggleTheme(state: GlobalState) {
      state.theme = state.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    },
  },
});

export const { addComment, toggleLike, toggleTheme } = globalSlice.actions;

export const getBlogPosts = (state: RootState) => state.global.posts;
export const getPostById = (state: RootState, postId: number) => {
  return state.global.posts.find((post) => post.id === postId);
};
export const getTheme = (state: RootState) => state.global.theme;
