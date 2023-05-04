import { fireEvent, render, screen } from '@/utils/test-utils';
import CommentForm from './CommentForm';

describe('CommentForm', () => {
  it('should render the form correctly', () => {
    render(<CommentForm postId={1} />);

    expect(screen.getByText('Add Comment')).toBeInTheDocument();
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Content')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  it('should show required errors when form is submitted with empty fields', async () => {
    render(<CommentForm postId={1} />);

    const submitButton = screen.getByRole('button', { name: 'Submit' });
    fireEvent.click(submitButton);

    const nameError = await screen.findByText('Name is required');
    const emailError = await screen.findByText('Email is required');
    const contentError = await screen.findByText('Content is required');

    expect(nameError).toBeInTheDocument();
    expect(emailError).toBeInTheDocument();
    expect(contentError).toBeInTheDocument();
  });
});
