import { useContext } from 'react'
import { AuthContext } from '../../Context'

const LoginContainer = () => {

  const {login, isAuthenticated} = useContext(AuthContext)
  console.log('isAuthenticated : ', isAuthenticated)

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