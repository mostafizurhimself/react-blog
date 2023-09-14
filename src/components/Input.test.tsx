import { fireEvent, render } from '@testing-library/react';
import Input from './Input';
import { vi } from 'vitest';

describe('Input component', () => {
  it('renders an input element with the correct props', () => {
    const { getByTestId } = render(<Input data-testid="test-input" placeholder="Test Placeholder" />);

    const inputElement = getByTestId('test-input');

    // Assertions
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('placeholder', 'Test Placeholder');
  });

  it('handles onChange event', () => {
    const onChangeMock = vi.fn();
    const { getByTestId } = render(<Input data-testid="test-input" onChange={onChangeMock} />);

    const inputElement = getByTestId('test-input');

    // Simulate a user typing 'Hello' into the input field
    fireEvent.change(inputElement, { target: { value: 'Hello' } });

    // Assertions
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(inputElement).toHaveValue('Hello');
  });
});
