import { useState, useEffect } from "react";
import AuthInput from "./AuthInput";
import { supabase } from "../../lib/supabase"; 
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SignupForm = () => {
    const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("")

  useEffect(() => {
  if (!error) return;

  const timer = setTimeout(() => setError(""), 4000);
  return () => clearTimeout(timer);
}, [error]);

useEffect(() => {
  if (!message) return;

  const timer = setTimeout(() => setMessage(""), 4000);
  return () => clearTimeout(timer);
}, [message]);


  const handleSignup = async (e) => {
    e.preventDefault();
    setError("")
    setMessage("");
if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (password.length < 6) {
      console.log(password.length)
      setError("Password must be at least 6 characters");
      return;
    }
    


    setLoading(true);

const { data, error } = await supabase.auth.signUp({
  email,
  password,
});

if (!data.user) {
    setError("Email already registered. Please log in.");
    setEmail("")
    setPassword("")
    setConfirmPassword("")
    setLoading(false);
    return;
    }
    if (error) {
      setError(error.message);
      setLoading(false);

    } else {
      setMessage("Check your email to verify your account.");
    }
    setEmail("")
    setPassword("")
    setConfirmPassword("")
    setLoading(false);
  };

  return (
     <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1], // smooth “ease-out”
          }} className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8">
      {/* Title */}
      <h1 className="text-2xl font-semibold text-center text-purple-700">
        Create Your Account
      </h1>

      <p className="text-sm text-gray-500 text-center mt-1">
        Sign up to manage your tools
      </p>
          {/* Error Message */}

            {error &&
             <div className="w-full mt-4 flex justify-center"> 
            <p className="bg-red-100 w-full border border-red-400 rounded-[4px] text-center p-2">{error}</p>
          </div> }

         {message &&
             <div className="w-full mt-4 flex justify-center"> 
            <p className="bg-green-100 w-full border border-green-400 rounded-[4px] text-center p-2">{message}</p>
          </div> }

          
      {/* Form */}
      <form onSubmit={handleSignup} className="mt-4 space-y-4">
        <AuthInput
          label="Email"
          type="email"
          value={email}
          placeholder="your@example.com"
          onChange={(e) => setEmail(e.target.value)}
        />

        
         <AuthInput
            label="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            placeholder="••••••••"
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

                    <AuthInput
                        label="Confirm Password"
                        type={showPassword ? "text" : "password"}
                        value={confirmPassword}
                        placeholder="••••••••"
                        onChange={(e) => setConfirmPassword(e.target.value)}
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


        <button
     
          disabled={loading}
          type="submit"
          className="w-full py-3 disabled:opacity-50 rounded-full bg-purple-600 disable: cursor-pointer text-white font-medium hover:bg-purple-700 transition"
        >
          {loading ? "Creating account..." : "Sign up Account"}
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
        Already have an account {" "}

        <Link to={"/login"}className="text-purple-500 font-medium">
            Log In
        </Link>
        
      </p>
    </motion.div>
  );
};

export default SignupForm;
