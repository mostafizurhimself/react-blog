import type { RootState } from '@/store';
import { Comment, Post } from '@/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { posts } from '@/data/posts';

interface BlogState {
  posts: Post[];
  likedPosts: Post[];
}

const initialState: BlogState = {
  posts,
  likedPosts: [],
};

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    addComment(
      state: BlogState,
      action: PayloadAction<{
        postId: number;
        comment: Comment;
      }>
    ) {
      const { postId, comment } = action.payload;
      const post = state.posts.find((post) => post.id === postId);
      if (post) {
        post.comments.push(comment);
      }
    },
  },
});

export const { addComment } = blogSlice.actions;

export const getBlogPosts = (state: RootState) => state.blog.posts;
export const getLikedPosts = (state: RootState) => state.blog.likedPosts;
