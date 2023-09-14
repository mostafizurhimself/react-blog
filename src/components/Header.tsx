import { useAppDispatch } from '@/hooks/use-app-dispatch';
import { useAppSelector } from '@/hooks/use-app-selector';
import { getTheme, toggleTheme } from '@/store/global-slice';
import { Theme } from '@/types';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';

const Header = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(getTheme);

  const handleToggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

    dispatch(toggleTheme());

    if (newTheme === Theme.DARK) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <header className="flex items-center justify-between py-4">
      <h1 className="text-3xl font-bold">
        <a href="/">
          React <span className="text-teal-500">Blog</span>
        </a>
      </h1>
      <div className="relative">
        <button
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition-colors duration-150 hover:border-primary-500 hover:bg-primary-500 hover:text-white dark:text-slate-300 dark:hover:text-white"
          onClick={handleToggleTheme}
        >
          {theme === Theme.DARK ? <HiOutlineSun size={22} /> : <HiOutlineMoon size={22} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
