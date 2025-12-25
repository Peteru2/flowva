import { useState,useEffect } from "react";
import AuthInput from "./AuthInput";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "../../lib/supabase"; 

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }
    navigate("/");
  };
  useEffect(() => {
    if (!error) return;
    const timer = setTimeout(() => setError(""), 2000);
    return () => clearTimeout(timer);
  }, [error]);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8">
      {/* Title */}
      <h1 className="text-2xl font-semibold text-center text-purple-700">
        Log in to flowva
      </h1>

      <p className="text-sm text-gray-500 text-center mt-1">
        Log in to receive personalized recommendations
      </p>
      {/* Error Message */}
 {error && (
        <div className="w-full mt-4">
          <p className="bg-red-100 border border-red-400 rounded p-2 text-center text-sm">
            {error}
          </p>
        </div>
      )}
      {/* Form */}
      <form onSubmit={handleLogin} className="mt-4 space-y-4">
        <AuthInput
          label="Email"
          type="email"
          placeholder="alexjohn@gmail.com"
         value={email}
          onChange={(e) => setEmail(e.target.value)}

        />

        
         <AuthInput
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={password}
          onChange={(e) => setPassword(e.target.value)}
            rightElement={
                <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-sm cursor-pointer text-purple-400 hover:text-purple-500 font-small"
                >
                {showPassword ? "Hide" : "Show"}
                    </button>
                }
/>


        <div className="text-right">
          <a
            href="#"
            className="text-sm text-purple-600 hover:underline"
          >
            Forgot Password?
          </a>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-full bg-purple-600 text-white font-medium
          hover:bg-purple-700 disabled:opacity-50 transition"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center gap-3 my-6">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-sm text-gray-400">or</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      {/* Google Sign in */}
      <button className="w-full border  border-gray-200 rounded-[4px]  py-3 flex items-center justify-center gap-3 hover:bg-gray-50 transition">
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          className="w-5 h-5"
        />
        <span className="text-sm font-medium">
          Sign in with Google
        </span>
      </button>

      {/* Footer */}
      <p className="text-sm text-center text-gray-500 mt-6">
        Don’t have an account?{" "}
        <Link to={"/signup"} className="text-purple-500 font-medium">
            Sign up
        </Link>
      </p>
    </motion.div>
  );
};

export default LoginForm;
