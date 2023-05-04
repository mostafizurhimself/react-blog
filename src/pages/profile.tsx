import { useAppDispatch } from '@/hooks/use-app-dispatch';
import { useAppSelector } from '@/hooks/use-app-selector';
import { getProfile, updateProfile } from '@/store/global-slice';
import { ProfileType } from '@/types';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const profile = useAppSelector(getProfile);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileType>();

  const onSubmit: SubmitHandler<ProfileType> = (data) => {
    dispatch(updateProfile(data));
    toast.success('Profile Updated Successfully');
  };
  return (
    <div>
      <h2 className="py-4 text-center">Your Profile</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" defaultValue={profile.name} {...register('name', { required: true })} />
          {errors.name && <p>This field is required</p>}
        </div>
        <div className="mt-3">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" defaultValue={profile.email} {...register('email', { required: true })} />
          {errors.email && <p>This field is required</p>}
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default ProfilePage;
