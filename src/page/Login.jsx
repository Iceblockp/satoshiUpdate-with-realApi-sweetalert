import React, { useContext, useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { dataContext } from "../store/ContextProvider";
import { UseApi } from "../hook";
import { LoginGo } from "../service/auth.service";
import { ErrorComponents, LoadingComponents } from "../components";

const Login = () => {
  const [loginData,setLoginData] = useState({email:"",password:""})
  const nav = useNavigate();
  const {handleDealApi,loading,error,daTa} = UseApi(LoginGo);


  const handleInput = (e) => {
    setLoginData(pre => ({...pre,[e.target.name]:e.target.value}));
  }
 

  const loginBtnHandler = (e) => {
    e.preventDefault();
    handleDealApi(loginData);
    nav("/dashboard");


  }

  // useEffect(() => {
  //   const loginDone = localStorage.getItem("auth");
  //   if(daTa?.success || loginDone){
  //     nav("/dashboard")
  //   }
  // },[daTa])


  return (
    <div className=" bg-white flex h-full">
     {loading ? (
      <LoadingComponents/>
     ): (
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
        {!daTa?.success && daTa?.message && <ErrorComponents footer={"Try Again!"}>{daTa?.message}</ErrorComponents>}
        <h1 className=" text-black text-2xl font-semibold">
          Sign in to your account
        </h1>

        {/* free trail */}
        <div className=" text-slate-500 text-sm mt-4">
          <span>Do not have an account?</span>
          <div  className=" inline px-1 font-normal  text-purple-500">
            <Link to="/register">Sign up </Link>
            <span className="text-slate-500 font-normal">
              for a free trail.
            </span>
          </div>
        </div>
      </div>

      {/* form */}
      <form onSubmit={loginBtnHandler} className=" md:w-[469.5px] md:h-[282px] text-sm font-medium">
        {/* email */}
        <div className="mb-5">
          <label htmlFor="email">Email Address</label>
          <input
          value={loginData.email}
          onChange={handleInput}
           className=" mt-2 w-full rounded-lg border-1 border-slate-300 focus-visible:outline-none focus-visible:border-purple-500"
            type="email"
            id="email"
            name="email"
            autoComplete="name"
          />
        </div>
        {/* password */}
        <div className=" mb-5">
          <div className=" flex justify-between">
            <label htmlFor="password">Password</label>
            <a href="#" className="font-normal text-purple-500">
              Forgot password?
            </a>
          </div>
          <input
          value={loginData.password}
          onChange={handleInput}
          className="  mt-2 w-full rounded-lg border-1 border-slate-300 focus-visible:outline-none focus-visible:border-purple-500"
            type="password"
            id="password"
            name="password"
          />
        </div>
        {/* checkbox */}
        <div className=" mb-5">
          <div className="flex gap-2 text-center items-center">
           
            <label className=" font-medium" >
              Don't have account yet? <Link to="/register"><span className=" text-blue-600">Register First</span></Link>
            </label>
          </div>
        </div>
        {/* button */}
        
          <button type="submit" className=" mb-5 w-full bg-black text-white text-center items-center py-3 rounded-md font-medium text-[16px] hover:bg-slate-700">
            Sign in
        </button>
      </form>

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
     )}
    </div>
  );
};

export default Login;
