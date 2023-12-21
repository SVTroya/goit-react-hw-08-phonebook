import { FilterInputStyled } from './FilterInputStyled';
import { useDispatch, useSelector } from 'react-redux'
import { selectFilterValue } from '../../redux/contactsBook/selectors'
import { setFilterValue } from '../../redux/contactsBook/slice'

export function Filter() {
  const filterValue = useSelector(selectFilterValue)
  const dispatch = useDispatch()

  return (
    <FilterInputStyled
      type='text'
      name='filter'
      id={crypto.randomUUID()}
      value={filterValue}
      placeholder='Find conacts by name'
      onChange={({ target }) => dispatch(setFilterValue(target.value))} />
  );
}
