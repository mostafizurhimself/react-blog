import { useAppDispatch } from '@/hooks/use-app-dispatch';
import { toggleLike } from '@/store/global-slice';
import { FC } from 'react';
import { HiHeart, HiOutlineHeart } from 'react-icons/hi';

type LikeButtonProps = {
  postId: number;
  isLiked: boolean;
};

const LikeButton: FC<LikeButtonProps> = ({ postId, isLiked }) => {
  const dispatch = useAppDispatch();

  const togglePostLike = () => {
    dispatch(toggleLike(postId));
  };

  return (
    <div role="button" className="flex items-center gap-1" onClick={togglePostLike}>
      {isLiked ? (
        <HiHeart className="text-teal-500" size={24} />
      ) : (
        <HiOutlineHeart className="text-teal-500" size={24} />
      )}
      {isLiked ? <span>Liked</span> : <span>Like</span>}
    </div>
  );
};

export default LikeButton;
