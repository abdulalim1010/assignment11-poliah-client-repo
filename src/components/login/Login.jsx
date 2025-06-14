import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import loginimage from '../../assets/Alonimation - 1749876095525.json';
import { Authcontext } from '../navbar/authcontext/Authcontext';
import SocialLogin from './socialLogin/SocialLogin';
import { useLocation } from 'react-router';

const Login = () => {
  const { createUser } = useContext(Authcontext);
  const location = useLocation();
  console.log("location in sign page",location)

  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    createUser(email, password)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie style={{ width: '400px' }} animationData={loginimage} loop={true} />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl px-3 py-6 font-bold">Login Now!</h1>
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input" name="email" placeholder="Email" required />
                <label className="label">Password</label>
                <input type="password" name="password" className="input" placeholder="Password" required />
                <div><a className="link link-hover">Forgot password?</a></div>
                <button type="submit" className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </form>
          </div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
