import { useAppDispatch } from '@/hooks/use-app-dispatch';
import { addComment } from '@/store/global-slice';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

type Props = {
  postId: number;
};

type FormData = {
  name: string;
  email: string;
  content: string;
};

const CommentForm = ({ postId }: Props) => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    dispatch(addComment({ postId, comment: data }));
    toast.success('Comment added successfully');
    reset();
  };

  return (
    <div>
      <h2 className="mb-4">Add Comment</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" {...register('name', { required: true })} />
          {errors.name && <p>Name is required</p>}
        </div>
        <div className="mt-3">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register('email', { required: true })} />
          {errors.email && <p>Email is required</p>}
        </div>
        <div className="mt-3">
          <label htmlFor="content">Content</label>
          <textarea id="content" rows={5} {...register('content', { required: true })}></textarea>
          {errors.email && <p>Content is required</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentForm;
