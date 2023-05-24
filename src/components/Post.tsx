import { PostType } from '@/types';
import { useNavigate } from 'react-router-dom';

type Props = {
  post: PostType;
};

const Post = ({ post }: Props) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/blog/${post.id}`);
  };
  return (
    <div
      role="button"
      className="rounded-lg bg-slate-700 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
      onClick={handleOnClick}
    >
      <img className="transition-transform duration-300 hover:scale-105" src={post.thumbnailUrl} alt={post.title} />
      <div className="p-4">
        <h3 className="text-xl font-semibold transition-colors duration-150 hover:text-teal-500">{post.title}</h3>
        <div className="mt-2 flex items-end justify-between">
          <span className="text-sm">{post.category}</span>
          <span className="text-xs text-slate-300">{post.publishedAt}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
