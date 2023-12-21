import { Contact } from '../Contact/Contact'
import { BackgroundContainer, HeaderContainer, ListContainer, ListWrapper } from './ListOfContacts.styled'
import { Filter } from '../Filter/Filter'
import { useSelector } from 'react-redux'
import { selectVisibleContacts } from '../../redux/contactsBook/selectors'

export function ListOfContacts() {
  const contacts = useSelector(selectVisibleContacts)

  return (
    <ListContainer>
      <BackgroundContainer>
        <ListWrapper>
        <HeaderContainer><h3>Contacts</h3>
          <Filter />
        </HeaderContainer>
        {contacts.length > 0 && <ul>
          {contacts.map(contact => (
             <Contact key={contact.id} contact={contact} />
          ))}
        </ul>}
      </ListWrapper>
      </BackgroundContainer>
    </ListContainer>
  )
}
