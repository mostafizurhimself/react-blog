import { CommentType } from '@/types';
import Comment from './Comment';

type Props = {
  comments: CommentType[];
};

const CommentList = ({ comments }: Props) => {
  return (
    <div>
      <h2>Recent Comments</h2>
      <div className="mt-3 flex flex-col gap-3">
        {comments.length > 0 ? (
          comments.map((comment) => <Comment key={comment.id} comment={comment} />)
        ) : (
          <div className="mt-2">
            <p className="text-gray">No comments found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentList;
