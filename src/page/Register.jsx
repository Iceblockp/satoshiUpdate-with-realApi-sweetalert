import React, { useContext, useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { UseApi } from "../hook";
import { RegisterGo } from "../service/auth.service";
import { ErrorComponents, LoadingComponents } from "../components";
import { SuccessRegister } from "../service/notify.service";

const Register = () => {

  const {handleDealApi, loading,error, daTa } = UseApi(RegisterGo);
  const nav = useNavigate();
 const [registerData,setRegisterData] = useState({
  name:"",
  email:"",
  password:"",
  password_confirmation:""
  });

  const handleInput = (e) => {
    setRegisterData(pre => ({...pre,[e.target.name]:e.target.value}))
  }



 useEffect(() => {
  if(daTa){
    nav("/");
    SuccessRegister();
  }
  
 },[daTa])

  const registerHandle = (e) => {
    e.preventDefault();
    handleDealApi(registerData);

  }


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
        {error && <ErrorComponents footer={"MAKE SURE INPUT VALUES ARE CORRECT"} >{error} "Or" Already created account </ErrorComponents>}
        <h1 className=" text-black text-2xl font-semibold">
          Sign in to your account
        </h1>

        {/* free trail */}
        <div className=" text-slate-500 text-sm mt-4">
          <span>Already have an account?</span>
          <div className=" inline px-1 font-normal  text-purple-500">
            <Link to="/">Sign in </Link>
            <span className="text-slate-500 font-normal">
              for a free trail.
            </span>
          </div>
        </div>
      </div>

      {/* form */}
      <form onSubmit={registerHandle} className=" md:w-[469.5px] h-[282px] text-sm font-medium mb-32">
        {/* name */}
        <div className="flex justify-between gap-4 ">
          <div className="mb-5">
            <label className="" htmlFor="firstName">
              First name
            </label>
            <input
            value={registerData.name}
            onChange={handleInput}
            name="name"
              className=" mt-2 w-full rounded-lg border-1 border-slate-300 focus-visible:outline-none focus-visible:border-purple-500"
              type="text"
              id="firstName"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="lastName">Last name</label>
            <input
            name="last"
           
              className=" mt-2 w-full rounded-lg border-1 border-slate-300 focus-visible:outline-none focus-visible:border-purple-500"
              type="text"
              id="lastName"
            />
          </div>
        </div>
        {/* email */}
        <div className="mb-5">
          <label htmlFor="email">Email Address</label>
          <input
          value={registerData.email}
          onChange={handleInput}
          name="email"
            className=" mt-2 w-full rounded-lg border-1 border-slate-300 focus-visible:outline-none focus-visible:border-purple-500"
            type="email"
            id="email"
            required
          />
        </div>
        {/* password */}
        <div className=" mb-5">
          <div className=" flex justify-between">
            <label>Password</label>
          </div>
          <input
          name="password"
          value={registerData.password}
          onChange={handleInput}
          className="  mt-2 w-full rounded-lg border-1 border-slate-300 focus-visible:outline-none focus-visible:border-purple-500"
            type="password"
            id="password"
            required
          />
        </div>
        {/* about us */}
        <div className=" mb-5">
          <label className=" block">Confirm password</label>
          <input
          name="password_confirmation"
          value={registerData.password_confirmation}
          onChange={handleInput}
           className="  mt-2 w-full rounded-lg border-1 border-slate-300 focus-visible:outline-none focus-visible:border-purple-500"
            type="password"
            id="password_confirmation"
            required
          />
        </div>
        {/* button */}
        
            <button type="submit" className=" mb-5 w-full bg-black text-white text-center items-center py-3 rounded-md font-medium text-[16px] hover:bg-slate-700">
          Sign up
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

export default Register;
