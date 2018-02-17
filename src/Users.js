import React from 'react'
import { logout } from './utils/xhr'

const Users = ({ history }) => (
  <div>
    Users Page
    <br /><br />
    <button onClick={() => {
      logout().then(() => {
        history.push('/')
      })
    }}>Logout</button>
  </div>
)

export default Users