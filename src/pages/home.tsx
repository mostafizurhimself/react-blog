import BlogPost from '@/components/BlogPost';
import SearchBox from '@/components/SearchBox';
import { useAppSelector } from '@/hooks/use-app-selector';
import { getBlogPosts } from '@/store/blog-slice';
import { ChangeEvent, useCallback, useState } from 'react';

const HomePage = () => {
  const posts = useAppSelector(getBlogPosts);
  const [searchValue, setSearchValue] = useState<string>('');

  const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }, []);

  console.log(posts);

  // const filteredPosts = useMemo(() => {
  //   posts.filter((post) => {
  //     const searchQuery = searchValue.trim().toLowerCase();
  //     return (
  //       post.category.toLowerCase().includes(searchQuery) ||
  //       post.tags.some((tag) => tag.toLowerCase().includes(searchQuery))
  //     );
  //   });
  // }, [searchValue]);

  return (
    <div>
      <div className="py-6 flex justify-center">
        <SearchBox value={searchValue} onChange={handleSearch} />
      </div>
      <div className="mt-4 grid grid-cols-3 gap-4 h-full">
        {posts.map((post) => {
          return <BlogPost key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
