import { useContext, useEffect } from 'react'
import { AuthContext } from '../../Context'
import { useNavigate } from 'react-router-dom'

const UserContainer = () => {

  const {user} = useContext(AuthContext)
  console.log('usre : ', user)
  const navigate = useNavigate()

  useEffect(() => {
    if(!localStorage.getItem('token')) {
      navigate('/login')
    }
  }, [])

  return (
    <>
    {
      user ?
      <table>
        <tbody>
          <tr>
            <td>
              <img src={user.image} alt={user.username} />
            </td>
          </tr>
          <tr>
            <td>First Name: {user.firstName}</td>
          </tr>
          <tr>
            <td>Last Name: {user.lastName}</td>
          </tr>
          <tr>
            <td>User Name: {user.username}</td>
          </tr>
        </tbody>
      </table>
    :
    'Please login first.'
    }
    </>
  )
}

export default UserContainer