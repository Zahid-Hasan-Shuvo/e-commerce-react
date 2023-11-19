import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider/AuthProvider';

const Login = () => {
    const[error, setError]=useState('')
    const location=useLocation()
    const navigate = useNavigate();
    const {signIn}=useContext(AuthContext)

const from=location.state?.from?.pathname ||'/';

    const handleSignIn=(event)=>{
  
        event.preventDefault()
        const form= event.target;
        const email=form.email.value;
        const password=form.password.value;
        signIn(email, password)
        .then(result=>{
            const loggedUser=result.user
            console.log(loggedUser);
            navigate(from, {replace:true});
            form.reset()
        })
        .catch(error=>{
           setError(error.message)
        })
    }
    return (
        <div className='form-container'>
        <h2 className='form-title'>Login</h2>
        <form onSubmit={handleSignIn}>
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" required />
            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" required />
            </div>
            <input className='btn-submit' type="submit" value="Login" />
        </form>
        <p>New to ema john? <Link to='/signup'>Create a New Account</Link></p>
    </div>
    );
};

export default Login;