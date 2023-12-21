import { ErrorMessage, InputWrapper, StyledForm } from './RegisterForm.styled'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { registerThunk } from '../../redux/auth/operations'

function RegisterForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const dispatch = useDispatch()

  function onSubmit(data) {
    dispatch(registerThunk(data))
    reset()
  }

  function handleClick({ target }) {
    target.blur()
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        <span>Username</span>
        <input
          {...register('name', {
            required: 'Username is required!',
            minLength: { value: 6, message: 'Username must be at least 6 symbols long!' }
          })}
          placeholder='Enter username' />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
      </InputWrapper>
      <InputWrapper>
        <span>Email</span>
        <input
          type='email'
          {...register('email', {
            required: 'Email is required!',
            minLength: { value: 9, message: 'Email number is too short!' }
          })}
          placeholder='Enter email' />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </InputWrapper>
      <InputWrapper>
        <span>Password</span>
        <input
          type='password'
          {...register('password', {
            required: 'Password is required!',
            minLength: { value: 7, message: 'Password must be at least 7 symbols long!' }
          })}
          placeholder='Enter password' />
        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
      </InputWrapper>
      <button type='submit' onClick={handleClick}>Register</button>
    </StyledForm>
  )
}

export default RegisterForm
