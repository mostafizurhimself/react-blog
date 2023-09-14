import React from 'react';
import { Provider } from 'react-redux'; // Assuming you use Redux for state management
import LikeButton from './LikeButton';
import { fireEvent, render, store } from '@/utils/test-utils';
import { toggleLike } from '@/store/global-slice';

describe('LikeButton Component', () => {
  it('renders the component with "Like" text when not liked', () => {
    const { getByText } = render(<LikeButton postId={1} isLiked={false} />);

    const likeText = getByText('Like');
    expect(likeText).toBeInTheDocument();
  });

  it('renders the component with "Liked" text when liked', () => {
    const { getByText } = render(<LikeButton postId={1} isLiked={true} />);

    const likedText = getByText('Liked');
    expect(likedText).toBeInTheDocument();
  });

  it('dispatches toggleLike action when clicked', () => {
    const postId = 1;

    const { getByRole } = render(<LikeButton postId={postId} isLiked={false} />);

    const likeButton = getByRole('button');

    fireEvent.click(likeButton);

    // Assert that the useDispatch function was called with toggleLike action and postId
    const dispatchedActions = store.getActions();
    expect(dispatchedActions).toContainEqual(toggleLike(postId));
  });
});
