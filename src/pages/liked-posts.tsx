import { useAppSelector } from '@/hooks/use-app-selector';
import { getLikedPosts } from '@/store/global-slice';
import Post from '@/components/Post';

const LikedPostsPage = () => {
  const likedPosts = useAppSelector(getLikedPosts);

  return (
    <div>
      <div className="py-6">
        <h1 className="text-center">Liked Posts</h1>
      </div>
      {likedPosts.length > 0 ? (
        <div className="">
          {likedPosts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-2 mt-4 text-gray">
          <img src="/images/no-post.png" alt="no-post" className="max-w-xs w-full" />
          <p className="mt-4">You have not liked any posts yet</p>
        </div>
      )}
    </div>
  );
};

export default LikedPostsPage;
