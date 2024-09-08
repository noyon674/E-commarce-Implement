import React, {useState} from 'react'
import './login.scss'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login_success } from '../../redux/action/action'

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const users = useSelector(state=>state.users)

    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const {email, password} = user;

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        users.map(user=>{
            if(user.email == email){

                if(user.password == password){
                    dispatch(login_success(true))
                    navigate('/')
                }
            }
        })     
    }
  return (
    <div className='login'>
        <h4>welcome <span>Back</span>!</h4>
        <p>Enter your credentials to access your account</p>
        <form action="" onSubmit={handleSubmit}>
            <div className="input">
                <input 
                type="email"
                placeholder='Enter your email'
                name='email'
                value={email}
                onChange={handleChange}
                required />
            </div>
            <div className="input">
                <input 
                type="password"
                placeholder='Enter your password'
                name='password'
                value={password}
                onChange={handleChange}
                required />
            </div>
            <div className="input">
                <button type='submit' className='btn btn-dark'>Signin</button>
            </div>
            <p className='bottomText'>Don't have an account? <a href="/register">signup</a></p>
        </form>
    </div>
  )
}

export default Login;