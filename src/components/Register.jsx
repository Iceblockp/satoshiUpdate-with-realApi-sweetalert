import React from "react";

const Register = () => {
  return (
    <div className=" bg-white flex h-full">
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
        <div className=" md:w-[469.5px] h-[282px] text-sm font-medium mb-32">
          {/* name */}
          <div className=" flex justify-between gap-4 ">
            <div className="mb-5">
              <label className="" htmlFor="firstName">
                First name
              </label>
              <input
                className=" mt-2 w-full rounded-lg border-1 border-slate-300 focus-visible:outline-none focus-visible:border-purple-500"
                type="text"
                id="firstName"
              />
            </div>
            <div className="mb-5">
              <label className="" htmlFor="lastName">
                Last name
              </label>
              <input
                className=" mt-2 w-full rounded-lg border-1 border-slate-300 focus-visible:outline-none focus-visible:border-purple-500"
                type="text"
                id="lastName"
              />
            </div>
          </div>
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
            </div>
            <input
              className="  mt-2 w-full rounded-lg border-1 border-slate-300 focus-visible:outline-none focus-visible:border-purple-500"
              type="password"
              id="password"
            />
          </div>
          {/* about us */}
          <div className=" mb-5">
            <label htmlFor="" className=" block">
              How did you hear about us?
            </label>
            <select
              name=""
              id=""
              className="mt-2 w-full rounded-lg border-1 border-slate-300 focus-visible:outline-none focus-visible:border-purple-500 font-light"
            >
              <option value="friend" selected>
                From a friend
              </option>
              <option value="search">Online search</option>
              <option value="media">Social media</option>
              <option value="advertising">Advertising</option>
            </select>
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

export default Register;
