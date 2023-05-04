import type { RootState } from '@/store';
import { CommentType, PostType, ProfileType } from '@/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { posts } from '@/data/posts';

export interface GlobalState {
  posts: PostType[];
  profile: ProfileType;
}

export const initialState: GlobalState = {
  posts,
  profile: {
    name: 'John Doe',
    email: 'john@example.com',
  },
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
    updateProfile(state: GlobalState, action: PayloadAction<ProfileType>) {
      state.profile = action.payload;
    },
  },
});

export const { addComment, toggleLike, updateProfile } = globalSlice.actions;

export const getBlogPosts = (state: RootState) => state.global.posts;
export const getLikedPosts = (state: RootState) => state.global.posts.filter((post) => post.isLiked);
export const getPostById = (state: RootState, postId: number) => {
  return state.global.posts.find((post) => post.id === postId);
};
export const getProfile = (state: RootState) => state.global.profile;
