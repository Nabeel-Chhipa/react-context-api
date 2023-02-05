import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Context'
import { useNavigate } from 'react-router-dom'

const LoginContainer = () => {

  const {login, isAuthenticated} = useContext(AuthContext)
  const navigate = useNavigate()
  const [isLoggedin, setIsLoggedin] = useState()
  console.log('isAuthenticated : ', isAuthenticated)

  const checkLoginStatus = () => {
    const _isLogin = isAuthenticated
    setIsLoggedin(_isLogin)
  }

  useEffect(() => {
    checkLoginStatus()
  }, [])

  useEffect(() => {
    checkLoginStatus()
    if(isLoggedin) {
      navigate('/user')
    }
  }, [isLoggedin, navigate, isAuthenticated])

  const handleSubmit = (e) => {
    e.preventDefault();
    const {username, password} = e.target.elements;
    // CALL LOGIN FUNCTION
    login(username.value, password.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
        <label>User Name</label>
        <input type='text' name='username' />
        </div>

        <div>
        <label>Password</label>
        <input type='password' name='password' />
        </div>

        <div>
          <input type='submit' value='Login' />
        </div>
      </form>
    </>
  )
}

export default LoginContainer