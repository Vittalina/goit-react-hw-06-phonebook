import { useSelector, useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/actions';
import { FormField, Input, Label } from 'components/Filter/Filter.styled';

const Filter = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filters.status);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(setStatusFilter(e.currentTarget.value));
  };

  const onFilterSubmit = () => {
    const normalizedFilter = filter.toLowerCase();

    const filteredNames = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    console.log(filteredNames);
  };

  return (
    <FormField onSubmit={onFilterSubmit}>
      <Label>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          value={filter}
          onChange={handleFilterChange}
          placeholder="Search"
        />
      </Label>
    </FormField>
  );
};

export default Filter;
