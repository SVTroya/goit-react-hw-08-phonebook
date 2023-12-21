import { useForm } from 'react-hook-form'
import { ErrorMessage, InputWrapper, StyledForm } from './LoginForm.styled'
import { useDispatch } from 'react-redux'
import { logInThunk } from '../../redux/auth/operations'
import { toast } from 'react-toastify'

function LoginForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const dispatch = useDispatch()

  function onSubmit(data) {
    dispatch(logInThunk(data)).unwrap().catch(()=>toast.error('Incorrect email or password!'))
    reset()
  }

  function handleClick({ target }) {
    target.blur()
  }

  return (
      <StyledForm onSubmit={handleSubmit(onSubmit)} >
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
        <button type='submit' onClick={handleClick}>Log In</button>
      </StyledForm>
  )
}

export default LoginForm
