import React from "react";

const Login = () => {
  return (
    <div className=" bg-white flex h-screen">
      <div className="mx-auto px-10 md:px-0 py-10">
        {/* heading */}
        <div className=" mb-10">
          <a href="#">
            <img
              className=" w-[112px] h-[40px] mb-10"
              src="https://satoshi.webpixels.io/img/logos/logo-dark.svg"
              alt="img"
            />
          </a>
          <h1 className=" text-black text-2xl font-semibold">
            Sign in to your account
          </h1>

          {/* free trail */}
          <div className=" text-slate-500 text-sm mt-4">
            <span>Don't have an account?</span>
            <a href="#" className=" px-1 font-normal  text-purple-500">
              Sign up{" "}
              <span className="text-slate-500 font-normal">
                for a free trail.
              </span>
            </a>
          </div>
        </div>

        {/* form */}
        <div className=" md:w-[469.5px] md:h-[282px] text-sm font-medium">
          {/* email */}
          <div className="mb-5">
            <label className="" htmlFor="email">
              Email Address
            </label>
            <input
              className=" mt-2 w-full rounded-lg border-1 border-slate-300 focus-visible:outline-none focus-visible:border-purple-500"
              type="email"
              id="email"
            />
          </div>
          {/* password */}
          <div className=" mb-5">
            <div className=" flex justify-between">
              <label htmlFor="">Password</label>
              <a href="#" className="font-normal text-purple-500">
                Forgot password?
              </a>
            </div>
            <input
              className="  mt-2 w-full rounded-lg border-1 border-slate-300 focus-visible:outline-none focus-visible:border-purple-500"
              type="password"
              id="password"
            />
          </div>
          {/* checkbox */}
          <div className=" mb-5">
            <div className="flex gap-2 text-center items-center">
              <input
                className="rounded-sm border-1 border-slate-300 outline-slate-300 checked:outline-purple-500 checked:bg-purple-500"
                type="checkbox"
                id="checkbox"
              />
              <label className=" font-medium" htmlFor="checkbox">
                Keep me logged in
              </label>
            </div>
          </div>
          {/* button */}
          <div className=" mb-5 w-full bg-black text-white text-center items-center py-3 rounded-md font-medium text-[16px] hover:bg-slate-700">
            <a className="" href="#">
              Sign in
            </a>
          </div>
        </div>

        {/* or */}
        <div className=" py-5 text-center">
          <span className=" text-xs font-medium">OR</span>
        </div>

        {/* logo icon */}
        <div className=" flex justify-center gap-2 ">
          <div className=" border border-slate-300 px-3 py-2 rounded-md w-full hover:bg-slate-100">
            <a href="">
              <span className=" flex gap-4 justify-center items-center">
                <img
                  className=""
                  src="https://satoshi.webpixels.io/img/social/github.svg"
                  alt=""
                />
                Github
              </span>
            </a>
          </div>
          <div className=" border border-slate-300 px-3 py-2 rounded-md w-full hover:bg-slate-100">
            <a href="">
              <span className=" flex gap-4 justify-center items-center">
                <img
                  src="https://satoshi.webpixels.io/img/social/google.svg"
                  alt=""
                />
                Google
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
