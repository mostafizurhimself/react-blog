import { initialState } from '@/store/global-slice';
import { fireEvent, render, screen } from '@/utils/test-utils';
import ProfileForm from './ProfileForm';

describe('ProfileForm', () => {
  it('renders name and email inputs with default values', () => {
    render(<ProfileForm />);
    const nameInput = screen.getByLabelText('Name');
    expect(nameInput).toBeInTheDocument();
    expect(nameInput).toHaveValue(initialState.profile.name);

    const emailInput = screen.getByLabelText('Email');
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveValue(initialState.profile.email);
  });

  it('displays error messages when required fields are empty', async () => {
    render(<ProfileForm />);
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: '' } });
    fireEvent.submit(screen.getByRole('button', { name: 'Update' }));

    const nameError = await screen.findByText('Name is required');
    const emailError = await screen.findByText('Email is required');

    expect(nameError).toBeInTheDocument();
    expect(emailError).toBeInTheDocument();
  });
});
