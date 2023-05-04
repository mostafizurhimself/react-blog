import styles from '@/assets/styles/modules/Header.module.scss';
import { Link } from 'react-router-dom';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { Menu } from '@headlessui/react';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <a href="/">
          React <span className="text-primary">Blog</span>
        </a>
      </h1>
      <div className={styles['header-dropdown']}>
        <Menu>
          <Menu.Button>
            <UserCircleIcon width={32} height={32} />
          </Menu.Button>
          <Menu.Items>
            <Menu.Item>{() => <Link to={'/profile'}>Profile</Link>}</Menu.Item>
            <Menu.Item>{() => <Link to={'/liked-posts'}>Liked Posts</Link>}</Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
