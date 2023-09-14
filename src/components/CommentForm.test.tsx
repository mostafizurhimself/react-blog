import { fireEvent, render, screen } from '@/utils/test-utils';
import CommentForm from './CommentForm';

describe('CommentForm', () => {
  it('should render the form correctly', () => {
    const { getByPlaceholderText } = render(<CommentForm postId={1} />);

    expect(getByPlaceholderText('Your Name')).toBeInTheDocument();
    expect(getByPlaceholderText('Email Address')).toBeInTheDocument();
    expect(getByPlaceholderText('Write your comment')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  it('should show required errors when form is submitted with empty fields', async () => {
    render(<CommentForm postId={1} />);

    const submitButton = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(submitButton);

    const nameError = await screen.findByText('Name is required');
    const emailError = await screen.findByText('Email is required');
    const commentError = await screen.findByText('Comment is required');

    expect(nameError).toBeInTheDocument();
    expect(emailError).toBeInTheDocument();
    expect(commentError).toBeInTheDocument();
  });
});
