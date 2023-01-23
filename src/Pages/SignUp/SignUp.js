import React, { useContext, useState } from "react";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
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
        setSignUpError(err.message);
      });
  };

  const handleSignUp = (data) => {
    console.log(data);
    setSignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // react toast
        toast.success("User created successfully!", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        const userInfo = {
          displayName: data?.name,
        };
        updateUser(userInfo)
          .then(() => {})
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
        setSignUpError(error.message);
      });
  };

  return (
    <>
      <Navigation></Navigation>
      <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow-md shadow-slate-300">
        <h1 className="text-4xl font-medium">Sign Up</h1>

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
        <form action="" className="my-10" onSubmit={handleSubmit(handleSignUp)}>
          <div className="flex flex-col space-y-5">
            <label for="name">
              <p className="font-medium text-slate-700 pb-2">Name</p>
              <input
                {...register("name", { required: "Name is required" })}
                id="name"
                name="name"
                type="text"
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              />
              {errors.name && (
                <span className="text-red-500">{errors.name?.message}</span>
              )}
            </label>
            <label for="email">
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
            <label for="password">
              <p className="font-medium text-slate-700 pb-2">Password</p>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 characters or longer ",
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
                <label for="remember" className="">
                  <input
                    type="checkbox"
                    id="remember"
                    className="w-4 mx-2 h-4 border-slate-200"
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
            {signUpError && <span className="text-red-500">{signUpError}</span>}
            <button
              type="submit"
              className="w-full py-3 font-medium text-white bg-[#C29D59] hover:bg-[#CBAB71]  rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
            >
              <span>Sign Up</span>
              <FontAwesomeIcon icon={faSignIn} />
            </button>
            <p className="text-center">
              Already registered ?{" "}
              <Link
                to="/login"
                className="text-[#887043] font-medium inline-flex space-x-1 items-center"
              >
                <span>Please Login </span>
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

export default SignUp;
