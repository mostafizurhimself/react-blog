import { useAppDispatch } from '@/hooks/use-app-dispatch';
import { addComment } from '@/store/global-slice';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Input from './Input';
import TextArea from './Textarea';
import Button from './Button';

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-4 grid max-w-2xl gap-8 md:grid-cols-2 md:gap-4">
        <div className="space-y-1">
          <Input placeholder="Your Name" {...register('name', { required: 'Name is required' })} />
          {errors.name && <p className="text-xs text-rose-500">{errors.name.message}</p>}
        </div>
        <div className="space-y-1">
          <Input type="email" placeholder="Email Address" {...register('email', { required: 'Email is required' })} />
          {errors.email && <p className="text-xs text-rose-500">{errors.email.message}</p>}
        </div>
      </div>
      <div className="mt-8 max-w-2xl space-y-1">
        <TextArea placeholder="Write your comment" {...register('content', { required: 'Comment is required' })} />
        {errors.content && <p className="text-xs text-rose-500">{errors.content.message}</p>}
      </div>
      <div className="mt-8">
        <Button type="submit" className="px-8">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default CommentForm;
