import { ErrorMessage, Form, FormContainer, InputWrapper } from './NewContactForm.styled'
import { useDispatch, useSelector } from 'react-redux'
import { selectContacts } from '../../redux/contactsBook/selectors'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { addContactThunk } from '../../redux/contactsBook/operations'

export function NewContactForm() {
  const contacts = useSelector(selectContacts)
  const dispatch = useDispatch()

  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  function onSubmit(data) {
    if (contacts.some(({ name }) => {
      return name === data.name
    })
    ) {
      toast.warn(`${data.name} is already in contacts!`)
      return
    }
    dispatch(addContactThunk(data))
    reset()
  }

  function handleClick({ target }) {
    target.blur()
  }

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <span>Full Name</span>
          <input
            {...register('name', {
              required: 'Name is required!',
              minLength: { value: 2, message: 'Name must be at least 2 symbols long!' }
            })}
            placeholder='Enter name' />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </InputWrapper>
        <InputWrapper>
          <span>Phone number</span>
          <input
            type='tel'
            {...register('number', {
              required: 'Phone number is required!',
              minLength: { value: 9, message: 'Phone number is too short!' }
            })}
            placeholder='Enter phone number' />
          {errors.number && <ErrorMessage>{errors.number.message}</ErrorMessage>}
        </InputWrapper>
        <button type='submit' onClick={handleClick}>Add contact</button>
      </Form>
    </FormContainer>
  )
}
