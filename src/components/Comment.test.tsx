import { render } from '@/utils/test-utils';
import Comment from './Comment';
import { CommentType } from '@/types';

describe('Comment', () => {
  const comment: CommentType = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    commentedAt: '2022-01-01T00:00:00.000Z',
    content: 'This is a comment',
  };

  it('should render the name and content of the comment', () => {
    const { getByRole } = render(<Comment comment={comment} />);
    const nameElement = getByRole('heading');
    expect(nameElement).toHaveTextContent(comment.name);
  });

  it('should format the comment date correctly', () => {
    const { getByText } = render(<Comment comment={comment} />);
    const dateDistance = getByText(/over 1 year ago/i);
    expect(dateDistance).toBeInTheDocument();
  });
});
