import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

const HeaderComponent = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
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