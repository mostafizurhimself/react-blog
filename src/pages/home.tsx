import Post from '@/components/Post';
import SearchBox from '@/components/SearchBox';
import { useAppSelector } from '@/hooks/use-app-selector';
import { getBlogPosts } from '@/store/blog-slice';
import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import styles from '@/assets/styles/modules/BlogList.module.scss';

const HomePage = () => {
  const posts = useAppSelector(getBlogPosts);
  const [searchValue, setSearchValue] = useState<string>('');

  const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }, []);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const searchQuery = searchValue.trim().toLowerCase();
      return (
        post.category.toLowerCase().startsWith(searchQuery) ||
        post.tags.some((tag) => tag.toLowerCase().startsWith(searchQuery))
      );
    });
  }, [searchValue]);

  return (
    <div>
      <div className="py-6 flex justify-center">
        <SearchBox value={searchValue} onChange={handleSearch} />
      </div>
      <div className={styles['blog-list']}>
        {filteredPosts.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
