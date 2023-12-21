import { NewContactForm } from '../../components/NewContactForm/NewContactForm'
import { ListOfContacts } from '../../components/ListOfContacts/ListOfContacts'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchContactsThunk } from '../../redux/contactsBook/operations'
import { selectError, selectIsLoading } from '../../redux/contactsBook/selectors'
import { FadeLoader } from 'react-spinners'
import { BinderRings, ContactsBookContainer } from './ContactsBook.styled'

function ContactsBook() {
  const isLoading = useSelector(selectIsLoading)
  const error = useSelector(selectError)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContactsThunk())
  }, [dispatch])

  useEffect(() => {
    error && toast.warn(error)
  }, [error])

  const override = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'red',
    position: 'fixed',
    inset: '50%'
  }

  return (
    <>
      <ContactsBookContainer>
        <NewContactForm />
        <BinderRings/>
        <ListOfContacts />
        <FadeLoader
          loading={isLoading}
          cssOverride={override}
          aria-label='Loading Spinner'
          data-testid='loader'
          color='#799a86' />
      </ContactsBookContainer>
    </>
  )
}

export default ContactsBook
