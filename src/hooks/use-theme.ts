import { getTheme, toggleTheme as toggleGlobalTheme } from '@/store/global-slice';
import { useAppSelector } from './use-app-selector';
import { Theme } from '@/types';
import { useDispatch } from 'react-redux';

const useTheme = () => {
  const theme = useAppSelector(getTheme);

  const dispatch = useDispatch();

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

    dispatch(toggleGlobalTheme());

    if (newTheme === Theme.DARK) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return {
    theme,
    toggleTheme,
  };
};

export default useTheme;
