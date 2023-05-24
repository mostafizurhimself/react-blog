import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { ChangeEventHandler } from 'react';

type Props = {
  value: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const SearchBox = ({ value, onChange }: Props) => {
  return (
    <div className="group flex w-full max-w-md items-center overflow-hidden rounded-lg border border-slate-200 focus-within:border-teal-500 focus-within:ring-1 focus-within:ring-teal-500">
      <MagnifyingGlassIcon height={24} width={24} className="mx-2 group-focus-within:text-teal-500" />
      <input
        className="w-full bg-transparent py-2 text-sm focus:border-none focus:outline-none"
        role="searchbox"
        type="search"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBox;
