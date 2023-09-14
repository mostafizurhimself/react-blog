import { render, screen } from '@/utils/test-utils';
import CommentList from './CommentList';
import { CommentType } from '@/types';

describe('CommentList', () => {
  it('displays "Sorry, No comments found" message when the comments array is empty', () => {
    render(<CommentList comments={[]} />);
    const messageElement = screen.getByText('Sorry, No comments found');
    expect(messageElement).toBeInTheDocument();
  });

  it('renders the correct number of comments when the comments array is not empty', () => {
    const comments: CommentType[] = [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        content: 'This is a comment',
        commentedAt: '2022-01-01T00:00:00.000Z',
      },
      {
        id: 2,
        name: 'Jane Doe',
        email: 'jane@example.com',
        content: 'This is another comment',
        commentedAt: '2022-01-01T00:00:00.000Z',
      },
    ];
    const { getByText } = render(<CommentList comments={comments} />);
    expect(getByText(comments[0].name)).toBeInTheDocument();
    expect(getByText(comments[1].name)).toBeInTheDocument();
  });
});
