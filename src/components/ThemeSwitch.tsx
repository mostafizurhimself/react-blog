import useTheme from '@/hooks/use-theme';
import { Theme } from '@/types';
import { FC } from 'react';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';

const ThemeSwitch: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition-colors duration-150 hover:border-primary-500 hover:bg-primary-500 hover:text-white dark:text-slate-300 dark:hover:text-white"
      onClick={toggleTheme}
      aria-label="Theme Switch"
      role="switch"
      aria-checked={theme === Theme.DARK}
    >
      {theme === Theme.DARK ? <HiOutlineSun size={22} /> : <HiOutlineMoon size={22} />}
    </button>
  );
};

export default ThemeSwitch;
