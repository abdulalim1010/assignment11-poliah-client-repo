import React, { useContext } from 'react';
import lottimage from '../../assets/Asignnimation - 1748840386802.json';
import Lottie from 'lottie-react';
import { Authcontext } from '../navbar/authcontext/Authcontext';
import SocialLogin from './socialLogin/SocialLogin';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
  

const Register = () => {
  const { createUser } = useContext(Authcontext);
  const navigate = useNavigate();// Firebase signup method

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Submit handler
  const onSubmit = (data) => {
    console.log('Form Data:', data);
    createUser(data.email, data.password)
      .then((result) => {
        console.log('User created:', result.user);
        navigate('/')
        reset(); // clear form
      })
      .catch((error) => {
        console.error('Error:', error.message);
      });
  };

  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Lottie
          style={{ width: '400px' }}
          animationData={lottimage}
          loop={true}
        />
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl px-3 py-6 font-bold">Register Now</h1>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Name */}
              <label className="label">Name</label>
              <input
                type="text"
                placeholder="Full Name"
                className="input"
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}

              {/* Email */}
              <label className="label">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="input"
                {...register('email', { required: 'Email is required' })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}

              {/* Password */}
              <label className="label">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="input"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}

              <button className="btn btn-neutral mt-4">Register</button>
            </form>
          </div>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Register;
