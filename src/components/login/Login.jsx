import React, { useContext } from 'react';
import Lottie from 'lottie-react';
import { useForm } from 'react-hook-form';
import loginimage from '../../assets/Alonimation - 1749876095525.json';
import { Authcontext } from '../navbar/authcontext/Authcontext';
import SocialLogin from './socialLogin/SocialLogin';
import { NavLink, useLocation, useNavigate } from 'react-router';

const Login = () => {
  const { createUser } = useContext(Authcontext);
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm();

  const onSubmit = async data => {
    const { email, password } = data;

    try {
      const result = await createUser(email, password);
      console.log(result.user);

      // Navigate after login success, e.g. to previous page or home
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    } catch (error) {
      console.error(error.message);
      // You can show error toast here
    }
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  {...register('email', { required: "Email is required" })}
                />
                {errors.email && <p className="text-red-600 mt-1">{errors.email.message}</p>}

                <label className="label mt-4">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  {...register('password', {
                    required: "Password is required",
                    minLength: { value: 6, message: "Password must be at least 6 characters" }
                  })}
                />
                {errors.password && <p className="text-red-600 mt-1">{errors.password.message}</p>}

                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>

                <button type="submit" disabled={isSubmitting} className="btn btn-neutral mt-4">
                  {isSubmitting ? 'Logging in...' : 'Login'}
                </button>
              </fieldset>
            </form>

            <div className="flex mt-4">
              <h1 className="font-bold">You have no account? Please</h1>
              <NavLink to="/signIn">
                <span className="text-blue-500 ml-3 font-bold">Register</span>
              </NavLink>
            </div>
          </div>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
