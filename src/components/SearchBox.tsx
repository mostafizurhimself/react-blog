import style from '@/assets/styles/modules/SearchBox.module.scss';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { ChangeEventHandler } from 'react';

type Props = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const SearchBox = ({ value, onChange }: Props) => {
  return (
    <div className={style['search-box']}>
      <MagnifyingGlassIcon height={24} width={24} />
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default SearchBox;
