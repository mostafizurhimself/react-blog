import { PostType } from '@/types';
import Post from './Post';

type Props = {
  posts: PostType[];
};

const BlogList = ({ posts }: Props) => {
  if (posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center">
        <img src="/images/no-post.png" className="w-full max-w-sm" />
        <p className="text-gray mt-2">No posts found</p>
      </div>
    );
  }

  return (
    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
};

export default BlogList;
