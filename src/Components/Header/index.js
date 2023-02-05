import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import './style.css'
import { AuthContext } from '../../Context'

const HeaderComponent = () => {

  const {isAuthenticated, logout} = useContext(AuthContext)

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            {
              isAuthenticated ? <Link to='#' onClick={logout}>Logout</Link> : <Link to='/login'>Login</Link>
            }
            
          </li>
          <li>
            <Link to='/user'>User</Link>
          </li>
        </ul>
      </nav>
    </>
)
}

export default HeaderComponent