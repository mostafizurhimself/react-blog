import { fireEvent, render } from '@testing-library/react';
import { vi } from 'vitest';
import Textarea from './Textarea';

describe('Textarea component', () => {
  it('renders a textarea element with the correct props', () => {
    const { getByTestId } = render(<Textarea data-testid="test-textarea" placeholder="Test Placeholder" />);

    const textareaElement = getByTestId('test-textarea');

    // Assertions
    expect(textareaElement).toBeInTheDocument();
    expect(textareaElement).toHaveAttribute('placeholder', 'Test Placeholder');
  });

  it('handles onChange event', () => {
    const onChangeMock = vi.fn();
    const { getByTestId } = render(<Textarea data-testid="test-textarea" onChange={onChangeMock} />);

    const textareaElement = getByTestId('test-textarea');

    // Simulate a user typing 'Hello' into the textarea
    fireEvent.change(textareaElement, { target: { value: 'Hello' } });

    // Assertions
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(textareaElement).toHaveValue('Hello');
  });
});
