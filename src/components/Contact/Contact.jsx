import { ContactWrapper, IconWrapper, Name, Phone, RightWrapper } from './Contact.styled'
import PropTypes from 'prop-types'
import { ImBin } from 'react-icons/im'
import { useDispatch } from 'react-redux'
import { removeContactThunk } from '../../redux/contactsBook/operations'

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  })
}

export function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch()

  function handleRemoveContact(id) {
    dispatch(removeContactThunk(id))
  }

  return (
    <ContactWrapper>
      <Name>{name}</Name>
      <RightWrapper>
        <Phone>tel.: {number}</Phone>
        <IconWrapper>
          <ImBin size={20} onClick={() => handleRemoveContact(id)} />
        </IconWrapper>
      </RightWrapper>
    </ContactWrapper>
  )
}
