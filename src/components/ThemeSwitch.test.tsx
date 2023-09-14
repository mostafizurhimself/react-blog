import { Theme } from '@/types';
import { fireEvent, render } from '@/utils/test-utils';
import { vi } from 'vitest';
import ThemeSwitch from './ThemeSwitch';

const mockToggleTheme = vi.fn();

describe('ThemeSwitch Component', () => {
  it('renders the component with the correct initial theme', () => {
    // Mock the useAppSelector hook to return the dark theme
    vi.mock('@/hooks/use-app-selector', () => ({
      useAppSelector: vi.fn(() => Theme.DARK),
    }));

    const { getByRole } = render(<ThemeSwitch />);

    const themeSwitchButton = getByRole('switch');

    expect(themeSwitchButton).toBeInTheDocument();
    expect(themeSwitchButton).toHaveAttribute('aria-checked', 'true');
  });

  it('toggles the theme when clicked', () => {
    vi.mock('@/hooks/use-theme', () => ({
      default: () => ({
        theme: Theme.DARK,
        toggleTheme: mockToggleTheme,
      }),
    }));

    const { getByRole } = render(<ThemeSwitch />);

    const themeSwitchButton = getByRole('switch');

    fireEvent.click(themeSwitchButton);

    expect(mockToggleTheme).toHaveBeenCalledTimes(1);
  });
});
