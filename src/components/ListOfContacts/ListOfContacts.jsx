import { Contact } from '../Contact/Contact'
import { HeaderContainer, ListWrapper } from './ListOfContacts.styled'
import { Filter } from '../Filter/Filter'
import { useSelector } from 'react-redux'
import { selectVisibleContacts } from '../../redux/selectors'

export function ListOfContacts() {
  const contacts = useSelector(selectVisibleContacts)

  return (
    <ListWrapper>
      <HeaderContainer><h3>Contacts</h3>
        <Filter />
      </HeaderContainer>
      {contacts.length > 0 && <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>}
    </ListWrapper>
  )
}
