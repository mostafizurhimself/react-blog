import { CommentType } from '@/types';
import { formatDistance } from 'date-fns';
type Props = {
  comment: CommentType;
};

const Comment = ({ comment }: Props) => {
  return (
    <div>
      <div className="flex items-end gap-2">
        <h4>{comment.name}</h4>
        <span className="text-xs text-gray">
          {formatDistance(new Date(comment.commentedAt), new Date(), {
            addSuffix: true,
          })}
        </span>
      </div>
      <p className="text-sm mt-1">{comment.content}</p>
    </div>
  );
};

export default Comment;
