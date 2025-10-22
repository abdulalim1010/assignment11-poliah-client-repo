import React, { useContext } from "react";
import Lottie from "lottie-react";
import { useForm } from "react-hook-form";
import loginimage from "../../assets/Alonimation - 1749876095525.json";
import { Authcontext } from "../navbar/authcontext/Authcontext";
import SocialLogin from "./socialLogin/SocialLogin";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { createUser } = useContext(Authcontext);
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      const result = await createUser(email, password);
      const from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center  transition-colors duration-300 px-6 py-10">
      {/* Lottie Animation */}
      <div className="flex justify-center items-center w-full lg:w-1/2 mb-8 lg:mb-0">
        <Lottie
          animationData={loginimage}
          loop={true}
          style={{ width: "80%", maxWidth: "420px" }}
        />
      </div>

      {/* Form Section */}
      <div className="w-full max-w-md lg:w-[420px] flex flex-col justify-center  p-8 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-center text-base-content mb-6">
          Login Now!
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          {/* Email */}
          <div>
            <label className="block font-semibold mb-2 text-base-content">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-error text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block font-semibold mb-2 text-base-content">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-error text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex justify-end">
            <a className="link link-hover text-sm">Forgot password?</a>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary w-full"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="text-center mt-6 text-base-content">
          You have no account? Please{" "}
          <NavLink
            to="/signIn"
            className="text-primary font-semibold hover:underline"
          >
            Register
          </NavLink>
        </div>

        <div className="mt-8">
          <SocialLogin />
        </div>

        <footer className="mt-10 text-center text-base-content/70 text-sm">
          © 2025 - All rights reserved by{" "}
          <span className="font-semibold text-primary">
            ACME Industries Ltd
          </span>
        </footer>
      </div>
    </div>
  );
};

export default Login;
