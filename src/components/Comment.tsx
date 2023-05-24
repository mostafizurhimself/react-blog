import { CommentType } from '@/types';
import { formatDistance } from 'date-fns';
type Props = {
  comment: CommentType;
};

const Comment = ({ comment }: Props) => {
  return (
    <div>
      <div className="flex items-baseline gap-2">
        <h6 className="text-sm">{comment.name}</h6>
        <span className="text-xs text-slate-400">
          {formatDistance(new Date(comment.commentedAt), new Date(), {
            addSuffix: true,
          })}
        </span>
      </div>
      <p className="mt-1 text-sm">{comment.content}</p>
    </div>
  );
};

export default Comment;
