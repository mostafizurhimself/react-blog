import { Post } from '@/types';

type Props = {
  post: Post;
};

const BlogPost = ({ post }: Props) => {
  return (
    <div>
      <img src={post.thumbnailUrl} alt={post.title} />
      <h4>{post.title}</h4>
    </div>
  );
};

export default BlogPost;
