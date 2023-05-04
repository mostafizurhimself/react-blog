import styles from '@/assets/styles/modules/CommentForm.module.scss';
import { useAppDispatch } from '@/hooks/use-app-dispatch';
import { addComment } from '@/store/blog-slice';
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
      <form className={styles['comment-form']} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name" className={styles['comment-form-label']}>
            Name
          </label>
          <input
            type="text"
            id="name"
            className={styles['comment-form-input']}
            {...register('name', { required: true })}
          />
          {errors.name && <p>This field is required</p>}
        </div>
        <div className="mt-3">
          <label htmlFor="email" className={styles['comment-form-label']}>
            Email
          </label>
          <input
            type="email"
            id="email"
            className={styles['comment-form-input']}
            {...(register('email'), { required: true })}
          />
          {errors.email && <p>This field is required</p>}
        </div>
        <div className="mt-3">
          <label htmlFor="content" className={styles['comment-form-label']}>
            Content
          </label>
          <textarea
            id="content"
            rows={5}
            className={styles['comment-form-input']}
            {...register('content', { required: true })}
          ></textarea>
          {errors.email && <p>This field is required</p>}
        </div>
        <button type="submit" className={styles['comment-form-button']}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
