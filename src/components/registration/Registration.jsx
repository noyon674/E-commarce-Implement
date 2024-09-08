import React, { useState } from 'react'
import './registration.scss'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registration_success } from '../../redux/action/action';

function Registration() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })
    const {firstName, lastName, email, password} = user;

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(registration_success(user))
        navigate('/login');
    }
  return (
    <div className='registration'>
        <h4>welcome to</h4>
        <h1>Furni<span>Flex</span></h1>
        <p>Signup for purchase your desire products</p>
        <form action="" onSubmit={handleSubmit}>
            <div className="input">
                <input 
                type="text"
                placeholder='Enter first-name'
                name='firstName'
                value={firstName}
                onChange={handleChange}
                required />
            </div>
            <div className="input">
                <input 
                type="text"
                placeholder='Enter last-name'
                name='lastName'
                value={lastName}
                onChange={handleChange}
                required />
            </div>
            <div className="input">
                <input 
                type="email"
                placeholder='Enter email'
                name='email'
                value={email}
                onChange={handleChange}
                required />
            </div>
            <div className="input">
                <input 
                type="password"
                placeholder='Enter password'
                name='password'
                value={password}
                onChange={handleChange}
                required />
            </div>
            <div className="input">
                <button type='submit' className='btn btn-dark'>Signup</button>
            </div>
        </form>
    </div>
  )
}

export default Registration;