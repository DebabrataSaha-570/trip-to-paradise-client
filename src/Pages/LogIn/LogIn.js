import React, { useContext } from "react";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signIn, googleSignIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  let from = location.state?.from?.pathname || "/";

  // google login
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((res) => {
        const user = res.user;
        console.log("googleUser", user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log("error", err.message);
        setLoginError(err.message);
      });
  };

  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((res) => {
        const user = res.user;
        toast.success("User logged in successfully!", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        console.log("user", user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log("error", error.message);
        setLoginError(error.message);
      });
  };
  return (
    <>
      <Navigation></Navigation>
      <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow-md shadow-slate-300">
        <h1 className="text-4xl font-medium">Login</h1>
        <p className="text-slate-500">Hi, Welcome back 👋</p>

        <div className="my-5">
          <button
            onClick={handleGoogleLogin}
            className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              className="w-6 h-6"
              alt=""
            />{" "}
            <span>Login with Google</span>
          </button>
        </div>
        <form action="" className="my-10" onSubmit={handleSubmit(handleLogin)}>
          <div className="flex flex-col space-y-5">
            <label htmlFor="email">
              <p className="font-medium text-slate-700 pb-2">Email address</p>
              <input
                {...register("email", { required: "Email is required" })}
                id="email"
                name="email"
                type="email"
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email?.message}</span>
              )}
            </label>
            <label htmlFor="password">
              <p className="font-medium text-slate-700 pb-2">Password</p>
              <input
                {...register("password", {
                  required: "password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 characters or longer",
                  },
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                    message:
                      "Password must be strong(One Capital,One special,One number)",
                  },
                })}
                id="password"
                name="password"
                type="password"
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              />
              {errors.password && (
                <span className="text-red-500">{errors.password?.message}</span>
              )}
            </label>
            <div className="flex flex-row justify-between">
              <div>
                <label htmlFor="remember" className="">
                  <input
                    type="checkbox"
                    id="remember"
                    className="w-4 mx-2 h-4 border-slate-200 "
                  />
                  Remember me
                </label>
              </div>
              <div>
                <a href="/" className="font-medium text-[#887043]">
                  Forgot Password?
                </a>
              </div>
            </div>
            {/* error message */}
            <div>
              {loginError && <span className="text-red-500">{loginError}</span>}
            </div>

            <button
              type="submit"
              className="w-full py-3 font-medium text-white bg-[#C29D59] hover:bg-[#CBAB71] rounded-lg   inline-flex space-x-2 items-center justify-center"
            >
              <span>Login</span>
              <FontAwesomeIcon icon={faSignIn} />
            </button>
            <p className="text-center">
              Not registered yet?{" "}
              <Link
                to="/signUp"
                className="text-[#887043] font-medium inline-flex space-x-1 items-center"
              >
                <span>Please Register</span>
                <span>
                  <FontAwesomeIcon icon={faSignIn} />
                </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};

export default LogIn;
