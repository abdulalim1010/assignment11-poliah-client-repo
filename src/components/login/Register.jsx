import React, { useContext } from "react";
import Lottie from "lottie-react";
import { useForm } from "react-hook-form";
import { Authcontext } from "../navbar/authcontext/Authcontext";
import SocialLogin from "./socialLogin/SocialLogin";
import lottimage from "../../assets/Asignnimation - 1748840386802.json";
import { useNavigate, NavLink } from "react-router-dom";

const Register = () => {
  const { createUser } = useContext(Authcontext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const result = await createUser(data.email, data.password);
      console.log("User created:", result.user);
      reset();
      navigate("/");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center  transition-colors duration-300 px-6 py-10">
      {/* Animation */}
      <div className="flex justify-center rounded-3xl items-center w-full lg:w-1/2 mb-8 lg:mb-0">
        <Lottie
          animationData={lottimage}
          loop={true}
          style={{ width: "80%", maxWidth: "420px",rounded:"2px" }}
        />
      </div>

      {/* Register Form */}
      <div className="w-full max-w-md lg:w-[420px] flex flex-col justify-center  p-8 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-center text-base-content mb-6">
          Register Now
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          {/* Name */}
          <div>
            <label className="block font-semibold mb-2 text-base-content">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="input input-bordered w-full"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-error text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

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
              <p className="text-error text-sm mt-1">
                {errors.email.message}
              </p>
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

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary w-full"
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </form>

        {/* Already have account */}
        <div className="text-center mt-6 text-base-content">
          Already have an account?{" "}
          <NavLink
            to="/login"
            className="text-primary font-semibold hover:underline"
          >
            Login
          </NavLink>
        </div>

        {/* Social login */}
        <div className="mt-8">
          <SocialLogin />
        </div>

       
        
      </div>
    </div>
  );
};

export default Register;
