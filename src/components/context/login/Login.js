import React, { useState } from 'react';
import './Login.css';

export default function Login() {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault()
  }
  
  return (
    <div className='login'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <div className='first-row'>
                <input placeholder='Username' type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='second-row'>
                <input placeholder='Password' type="password" value={pass} onChange={(e) => setPass(e.target.value)}/>
            </div>
            <button>Login</button>
        </form>
        <p>You dont have an account? Register here.</p>
    </div>
  )};