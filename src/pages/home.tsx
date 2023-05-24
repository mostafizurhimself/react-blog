import BlogList from '@/components/BlogList';
import SearchBox from '@/components/SearchBox';
import { useAppSelector } from '@/hooks/use-app-selector';
import { useDebounce } from '@/hooks/use-debounce';
import { getBlogPosts } from '@/store/global-slice';
import { ChangeEvent, useCallback, useMemo, useState } from 'react';

const HomePage = () => {
  const posts = useAppSelector(getBlogPosts);
  const [searchValue, setSearchValue] = useState<string>('');

  const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }, []);

  const debouncedSearchValue = useDebounce(searchValue, 300);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const searchQuery = debouncedSearchValue.trim().toLowerCase();
      return (
        post.category.toLowerCase().startsWith(searchQuery) ||
        post.tags.some((tag) => tag.toLowerCase().startsWith(searchQuery))
      );
    });
  }, [debouncedSearchValue, posts]);

  return (
    <div>
      <div className="flex justify-center py-6">
        <SearchBox value={searchValue} onChange={handleSearch} />
      </div>
      <BlogList posts={filteredPosts} />
    </div>
  );
};

export default HomePage;
