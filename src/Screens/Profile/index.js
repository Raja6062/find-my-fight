import React from 'react'
import './profile.css'
import {useHistory} from 'react-router-dom'

export default function Login() {
  const history = useHistory()

  return (
    <div className="profile-container">
      <h1>This is PROFILE page</h1>
      <a onClick={() => history.push('/')}>GO Back</a>
    </div>
  )
}
