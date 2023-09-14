import ThemeSwitch from './ThemeSwitch';

const Header = () => {
  return (
    <header className="flex items-center justify-between py-4">
      <h1 className="text-3xl font-bold">
        <a href="/">
          React <span className="text-teal-500">Blog</span>
        </a>
      </h1>
      <ThemeSwitch />
    </header>
  );
};

export default Header;
