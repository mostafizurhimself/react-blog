import styles from '@/assets/styles/modules/BlogList.module.scss';
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
        <p className="mt-2 text-gray">No posts found</p>
      </div>
    );
  }

  return (
    <div className={styles['blog-list']}>
      {posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
};

export default BlogList;
