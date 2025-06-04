import React from 'react';
import lottimage from '../../assets/Animation - 1748840386802.json'
import Lottie from 'lottie-react';

const SignIn = () => {
  const handleSignIn = e => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password)

  }







  return (
    <div>
        <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Lottie style={{ width: '400px' }} animationData={lottimage} loop={true} />

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl px-3 py-6 font-bold">Sign In Now</h1>
          <div className="card-body">
            <form onSubmit={handleSignIn}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input" name="email" placeholder="Email" required />
                <label className="label">Password</label>
                <input type="password" name="password" className="input" placeholder="Password" required />
                <div><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-neutral mt-4">Sign In</button>
              </fieldset>
            </form>
        
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SignIn;