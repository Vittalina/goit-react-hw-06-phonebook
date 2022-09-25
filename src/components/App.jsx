import { Box } from 'components/Box';
import Phonebook from 'components/Phonebook/Phonebook';
import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';

const App = () => {
  // const onSubmitData = data => {
  //   const normalizedFilter = filter.toLowerCase();

  //   const filteredNames = contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  //   console.log(filteredNames);

  //   if (filteredNames.length === data.name) {
  //     alert(`${data.name} is already in contacts`);
  //     return;
  //   }
  //   setContacts(prevState => {
  //     return [
  //       ...prevState,
  //       { name: data.name, number: data.number, id: data.id },
  //     ];
  //   });
  // };

  // const filterByName = value => {
  //   setFilter({
  //     filter: value.filter,
  //   });
  // };

  return (
    <Box
      p={100}
      px
      mr="auto"
      ml="auto"
      width="500px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      as="main"
    >
      <h1>Phonebook</h1>
      <Phonebook />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </Box>
  );
};

export default App;
