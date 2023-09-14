import { CommentType } from '@/types';
import { MouseEventHandler, useState } from 'react';
import Button from './Button';
import Comment from './Comment';
import { LuSearchX } from 'react-icons/lu';

type Props = {
  comments: CommentType[];
};

const CommentList = ({ comments }: Props) => {
  const [visibleComments, setVisibleComments] = useState(5); // Initial number of visible comments

  const handleSeeMoreClick: MouseEventHandler<HTMLButtonElement> = () => {
    setVisibleComments(visibleComments + 3);
  };

  if (comments.length === 0) {
    return (
      <div className="mt-4 flex flex-col items-center justify-center rounded border py-6 dark:border-slate-400">
        <LuSearchX className=" text-slate-400" size={60} />
        <p className="mt-2 text-sm text-slate-400">Sorry, there are no comments for this post yet</p>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="mt-3 space-y-4">
        {comments.slice(0, visibleComments).map((item, index) => {
          return <Comment key={index} comment={item} />;
        })}
      </div>
      {visibleComments < comments.length && (
        <Button className="mt-4" onClick={handleSeeMoreClick}>
          See More
        </Button>
      )}
    </div>
  );
};

export default CommentList;
