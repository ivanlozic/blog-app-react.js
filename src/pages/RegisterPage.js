import React, { useState } from 'react'

function RegisterPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUserRegister = async (e) => {
    e.preventDefault()

    const respone = await fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' }
    })

    if (respone.status === 200) {
      alert('registration successful')
    } else {
      alert('registration failed')
    }
  }

  return (
    <form action='' className='register' onSubmit={handleUserRegister}>
      <h1>Register</h1>
      <input
        type='text'
        placeholder='username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type='password'
        placeholder='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Register</button>
    </form>
  )
}

export default RegisterPage
