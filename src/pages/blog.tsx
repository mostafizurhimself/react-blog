import AddComment from '@/components/CommentForm';
import CommentList from '@/components/CommentList';
import LikeButton from '@/components/LikeButton';
import { useAppSelector } from '@/hooks/use-app-selector';
import { getPostById } from '@/store/global-slice';
import { useParams } from 'react-router-dom';

const BlogPage = () => {
  const { id } = useParams<{ id: string }>();
  const post = useAppSelector((state) => getPostById(state, Number(id)));

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center py-6">
        <img src="/images/no-post.png" alt="no-port" className="w-full max-w-xs" />
        <p className="mt-2">Sorry the post you are looking for was not found</p>
      </div>
    );
  }

  return (
    <div>
      <div className="py-8">
        <h1 className="text-center text-3xl font-bold">{post.title}</h1>
        <p className="text-gray mt-4 flex items-center justify-center gap-2">
          <span>{post.category}</span>
          <span className="h-2 w-2 rounded bg-teal-500" style={{ display: 'inline-block' }}></span>
          <span>{post.publishedAt}</span>
        </p>
      </div>
      <img src={post.imageUrl} alt={post.title} width={'100%'} />
      <div className="prose prose-sm max-w-full py-4 dark:prose-invert">
        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <strong>Tags: </strong>
          <div className="flex flex-wrap items-center gap-1">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded bg-primary-500 px-2 py-1 text-xs text-primary-100">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <LikeButton postId={post.id} isLiked={post.isLiked} />
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="mt-10">
          <h3 className="text-2xl font-semibold">Recent Comments</h3>
          <CommentList comments={post.comments} />
        </div>
        <div className="mt-10">
          <h3 className="text-2xl font-semibold">Leave a comment</h3>
          <AddComment postId={post.id} />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
