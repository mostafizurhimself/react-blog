import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import Post from './Post';

const navigateMock = vi.fn();
vi.mock('react-router-dom', () => ({
  useNavigate: () => navigateMock,
}));

const postMock = {
  id: 1,
  title: 'Post title',
  category: 'Category',
  tags: ['HTML', 'JavaScript'],
  publishedAt: '7 April 2022',
  thumbnailUrl: '/images/posts/post-thumbnail-1.png',
  imageUrl: '/images/posts/post-01.png',
  authorName: 'John Doe',
  comments: [],
  isLiked: false,
  content: 'Post content',
};

describe('Post component', () => {
  test('renders post data and navigates to post detail page when clicked', () => {
    render(<Post post={postMock} />);

    const postTitle = screen.getByText('Post title');
    expect(postTitle).toBeInTheDocument();

    const postCategory = screen.getByText('Category');
    expect(postCategory).toBeInTheDocument();

    const postImage = screen.getByRole('img', { name: 'Post title' });
    expect(postImage).toBeInTheDocument();
    expect(postImage.getAttribute('src')).toBe('/images/posts/post-thumbnail-1.png');

    const postLink = screen.getByRole('button');
    fireEvent.click(postLink);
    expect(navigateMock).toHaveBeenCalledWith('/blog/1');
  });
});
