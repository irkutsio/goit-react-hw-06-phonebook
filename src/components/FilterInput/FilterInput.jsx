import { useState } from 'react';
import { Filter } from './FilterInput.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/actions';

export const FilterInput = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const value = e.target.value
    setValue(value);
    dispatch(setFilter(value.toLocaleLowerCase()));
  };

  return (
    <Filter>
      <label>Find Contact by name</label>
      <input type="text" value={value} onChange={handleChange} />
    </Filter>
  );
};
