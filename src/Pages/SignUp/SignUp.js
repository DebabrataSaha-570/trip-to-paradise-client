import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import { useForm } from "react-hook-form";
const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);
  };
  console.log(watch("example"));

  return (
    <>
      <Navigation></Navigation>
      <div class="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
        <h1 class="text-4xl font-medium">Sign Up</h1>

        <div class="my-5">
          <button class="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              class="w-6 h-6"
              alt=""
            />{" "}
            <span>Login with Google</span>
          </button>
        </div>
        <form action="" class="my-10" onSubmit={handleSubmit(handleLogin)}>
          <div class="flex flex-col space-y-5">
            <label for="name">
              <p class="font-medium text-slate-700 pb-2">Name</p>
              <input
                {...register("name", { required: true })}
                id="name"
                name="name"
                type="text"
                class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              />
              {errors.name && (
                <span className="text-red-500">This field is required</span>
              )}
            </label>
            <label for="email">
              <p class="font-medium text-slate-700 pb-2">Email address</p>
              <input
                {...register("email", { required: true })}
                id="email"
                name="email"
                type="email"
                class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </label>
            <label for="password">
              <p class="font-medium text-slate-700 pb-2">Password</p>
              <input
                {...register("password", { required: true })}
                id="password"
                name="password"
                type="password"
                class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
              />
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}
            </label>
            <div class="flex flex-row justify-between">
              <div>
                <label for="remember" class="">
                  <input
                    type="checkbox"
                    id="remember"
                    class="w-4 mx-2 h-4 border-slate-200 focus:bg-indigo-600"
                  />
                  Remember me
                </label>
              </div>
              <div>
                <a href="/" class="font-medium text-indigo-600">
                  Forgot Password?
                </a>
              </div>
            </div>
            <button
              type="submit"
              class="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              <span>Sign Up</span>
            </button>
            <p class="text-center">
              Not registered yet?{" "}
              <a
                href="/"
                class="text-indigo-600 font-medium inline-flex space-x-1 items-center"
              >
                <span>Register now </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </span>
              </a>
            </p>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};

export default SignUp;
