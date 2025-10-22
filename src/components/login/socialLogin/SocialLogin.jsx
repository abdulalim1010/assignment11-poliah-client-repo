import React, { useContext } from "react";
import { Authcontext } from "../../navbar/authcontext/Authcontext";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { signInGoogle } = useContext(Authcontext);
  const navigate = useNavigate();

  const handleSignInGoogle = async () => {
    try {
      const result = await signInGoogle();
      console.log("✅ Google Sign-In successful:", result.user);
      navigate("/");
    } catch (error) {
      console.error("❌ Error during Google Sign-In:", error.message);
    }
  };

  return (
    <div className="flex w-full flex-col items-center">
      <div className="divider w-3/4 my-4 text-gray-500">OR</div>

      <button
        onClick={handleSignInGoogle}
        className="btn flex items-center gap-2 bg-white text-black border border-gray-300 hover:bg-gray-100 transition-all duration-200"
      >
        <svg
          aria-label="Google logo"
          width="18"
          height="18"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g>
            <path d="m0 0H512V512H0" fill="#fff"></path>
            <path
              fill="#34a853"
              d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
            ></path>
            <path
              fill="#4285f4"
              d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
            ></path>
            <path
              fill="#fbbc02"
              d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
            ></path>
            <path
              fill="#ea4335"
              d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
            ></path>
          </g>
        </svg>
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;
