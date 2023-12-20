import { ContactsBookContainer } from './App.styled'
import { NewContactForm } from './NewContactForm/NewContactForm'
import { ListOfContacts } from './ListOfContacts/ListOfContacts'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchContacts } from '../redux/operations'
import { selectError, selectIsLoading } from '../redux/selectors'
import { FadeLoader } from 'react-spinners'

export function App() {
  const isLoading = useSelector(selectIsLoading)
  const error = useSelector(selectError)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

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
        <ListOfContacts />
        <FadeLoader
          loading={isLoading}
          cssOverride={override}
          aria-label='Loading Spinner'
          data-testid='loader'
          color='#799a86' />
        {error && <p>{error}</p>}
      </ContactsBookContainer>
      <ToastContainer
        position='top-center'
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        theme='colored' />
    </>
  )
}
