import { render, fireEvent } from '@/utils/test-utils';
import SearchBox from './SearchBox';
import { vi } from 'vitest';

const handleChange = vi.fn();

describe('SearchBox', () => {
  it('renders search input', () => {
    const { getByRole } = render(<SearchBox value="" onChange={() => {}} />);
    const searchInput = getByRole('searchbox');
    expect(searchInput).toBeInTheDocument();
  });

  it('calls onChange handler when input value changes', () => {
    const { getByRole } = render(<SearchBox value="" onChange={handleChange} />);
    const searchInput = getByRole('searchbox');
    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
