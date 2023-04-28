import React from 'react'
import './Register.css'

export default function Register() {
  const handleSubmit = (e) =>{
    e.preventDefault()   
  };
  return (
    <div className='register'>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input placeholder='Username' type='text'/>
                <label>Email</label>
                <input placeholder='Email' type="email"/>
                <label>Birthday</label>
                <input placeholder='Birthday' type="date"/>
                <label>Password</label>
                <input placeholder='Password' type="password" required />
                <label>Confirm Password</label>
                <input placeholder='Confirm Password' required type="password"/>
            <button>Submit</button>
        </form>
        <p>Already have an account? Login here</p>
    </div>
  )
}