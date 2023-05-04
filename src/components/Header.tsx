import styles from '@/assets/styles/modules/Header.module.scss';
import { Link } from 'react-router-dom';
import { UserCircleIcon } from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <a href="/">
          React <span className="text-primary">Blog</span>
        </a>
      </h1>
      <Link to={'/dashboard'}>
        <UserCircleIcon width={32} height={32} />
      </Link>
    </header>
  );
};

export default Header;
