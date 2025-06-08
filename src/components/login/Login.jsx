import Lottie from 'lottie-react';
import React, { use } from 'react';
import registerLotti from '../../assets/Animation - 1748803473651 (1).json'
import { Authcontext } from '../navbar/authcontext/Authcontext';

const Login = () => {

const {createUser}= use(Authcontext)


  const handleLogin = e => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    createUser(email, password)
      .then(result => {
      console.log(result.user)
      })
      .catch(error => {
      console.log(error.message)
    })
  }
  return (
    <div>
      

      <div className="hero bg-base-200 ">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
       
       <Lottie style={{width:'300px'}} animationData={registerLotti} loop={true}></Lottie>
      </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-5xl px-3 py-6 font-bold">Register Now!</h1>
        <div className="card-body">
            <form onSubmit={handleLogin} >
            <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" name='email' placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" name='password' className="input" placeholder="Password" />
            <div><a className="link link-hover">Forgot password?</a></div>
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
            </form>
            
        </div>
      </div>
    </div>
  </div>
    </div>
  );
};

export default Login;