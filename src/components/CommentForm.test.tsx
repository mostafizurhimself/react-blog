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

  //   it('should show required errors when form is submitted with empty fields', async () => {
  //     render(<CommentForm postId={1} />);

  //     const submitButton = screen.getByRole('button', { name: 'Submit' });
  //     fireEvent.click(submitButton);

  //     const nameError = await screen.findByText('This field is required');
  //     const emailError = await screen.findByText('This field is required');
  //     const contentError = await screen.findByText('This field is required');

  //     expect(nameError).toBeInTheDocument();
  //     expect(emailError).toBeInTheDocument();
  //     expect(contentError).toBeInTheDocument();
  //   });

  //   it('should submit the form and add comment successfully', async () => {
  //     render(<CommentForm postId={1} />);

  //     const nameInput = screen.getByLabelText('Name');
  //     const emailInput = screen.getByLabelText('Email');
  //     const contentInput = screen.getByLabelText('Content');
  //     const submitButton = screen.getByRole('button', { name: 'Submit' });

  //     fireEvent.change(nameInput, { target: { value: 'John' } });
  //     fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
  //     fireEvent.change(contentInput, { target: { value: 'Hello world!' } });
  //     fireEvent.click(submitButton);

  //     const successMessage = await screen.findByText('Comment added successfully');
  //     expect(successMessage).toBeInTheDocument();
  //     expect(nameInput).toHaveValue('');
  //     expect(emailInput).toHaveValue('');
  //     expect(contentInput).toHaveValue('');
  //   });
});
