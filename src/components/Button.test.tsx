import { fireEvent, render } from '@/utils/test-utils';
import Button from './Button';
import { vi } from 'vitest';

describe('Button Component', () => {
  it('renders children correctly', () => {
    const { getByText } = render(<Button>Button</Button>);
    expect(getByText('Button')).toBeInTheDocument();
  });

  it('applies the provided class name', () => {
    const { container } = render(<Button className="custom-class">Button</Button>);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('calls onClick handler when clicked', () => {
    const onClickMock = vi.fn();
    const { getByText } = render(<Button onClick={onClickMock}>Click Me</Button>);

    fireEvent.click(getByText('Click Me'));

    expect(onClickMock).toHaveBeenCalled();
  });
});
