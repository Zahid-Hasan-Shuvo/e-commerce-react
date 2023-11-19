import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider/AuthProvider';


const SignUp = () => {
    const [error, setError]=useState('')
const {createUser}=useContext(AuthContext)

const handleSignUp=(event)=>{
  
 event.preventDefault()
 const form= event.target;
 const email=form.email.value;
 const password=form.password.value;
 const confirm=form.confirm.value;
 console.log(email, password, confirm);

 form.reset()
 setError('')
if(password!==confirm){
  setError('Your password in not match')
  return
}
if(password.length<6){
setError('Your password must be 6 or more that 6 Character')
return
}
createUser(email, password)
.then(result=>{
    const loggedUser=result.user
    console.log(loggedUser);
})
.error(error=>{
   setError(error.message)
})
}

    return (
        <div className='form-container'>
        <h2 className='form-title'>Sign Up</h2>
        <form onSubmit={handleSignUp} >
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" required />
            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" required />
            </div>
            <div className="form-control">
                <label htmlFor="confirm">Confirm Password</label>
                <input type="password" name="confirm" required />
            </div>
            <input  className='btn-submit' type="submit" value="SignUp " />
        </form>
        <p>Already have an account? <Link to='/login'>Login</Link></p>
        <p className='text-danger'>{error}</p>
    </div>
    );
};

export default SignUp;