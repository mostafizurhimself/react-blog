import { useAppSelector } from '@/hooks/use-app-selector';
import { getLikedPosts } from '@/store/blog-slice';
import styles from '@/assets/styles/modules/BlogList.module.scss';
import Post from '@/components/Post';

const Dashboard = () => {
  const likedPosts = useAppSelector(getLikedPosts);

  return (
    <div>
      <div className="py-6">
        <h1 className="text-center">Liked Posts</h1>
      </div>
      {likedPosts.length > 0 ? (
        <div className={styles['blog-list']}>
          {likedPosts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </div>
      ) : (
        <p className="flex items-center justify-center gap-2 mt-4 text-gray">
          <span>You have not liked any posts yet</span>
        </p>
      )}
    </div>
  );
};

export default Dashboard;
