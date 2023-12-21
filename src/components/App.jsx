import { Navigate, Route, Routes } from 'react-router-dom'
import { SharedLayout } from './SharedLayout/SharedLayout'
import { lazy, useEffect } from 'react'
import { useAuth } from '../hooks'
import { useDispatch } from 'react-redux'
import { refreshUser } from '../redux/auth/operations'
import { RestrictedRoute } from './RestrictedRoute'
import { PrivateRoute } from './PrivateRoute'

export function App() {
  const dispatch = useDispatch()
  const { isRefreshing } = useAuth()

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  const Home = lazy(() => import('../pages/Home/Home'))
  const ContactsBook = lazy(() => import('../pages/ContactsBook/ContactsBook'))
  const LoginForm = lazy(() => import('../pages/LoginForm/LoginForm'))
  const RegisterForm = lazy(() => import('../pages/RegisterForm/RegisterForm'))

  return isRefreshing
    ? (<b>Refreshing user...</b>)
    :
    (<Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path='register'
            element={<RestrictedRoute redirectTo='/contacts' component={<RegisterForm />} />}
          />
          <Route
            path='login'
            element={
              <RestrictedRoute redirectTo="/contacts" component={<LoginForm />}
              />
            } />
          <Route
            path='contacts'
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsBook />}
              />
            } />
        </Route>
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    )
}
