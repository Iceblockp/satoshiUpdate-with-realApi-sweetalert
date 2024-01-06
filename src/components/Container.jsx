import React, { useState } from "react";
import LeftDrawerContainer from "./LeftDrawerContainer";
import TopDrawerContainer from "./TopDrawerContainer";
import { Link } from "react-router-dom";

const Container = ({ children }) => {
  const [draw, setDraw] = useState(true);

  const press = () => {
    setDraw(!draw);
  };

  return (
    <div className="bg-[rgb(23,32,51)] min-h-screen">
      {/* navbar  */}
      <div className="w-full min-h-screen flex flex-col relative lg:fixed top-0 left-0 z-30 ps-0 lg:ps-[284px]">
        <div className="py-[12px] hidden lg:flex lg:justify-between ">
          <div className=" border rounded-[50rem] border-[#334155] ">
            <div className=" flex relative ">
              <div className=" w-[40px] flex absolute text-white h-full items-center justify-end ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[14px] h-[22.7px] me-[12px]  "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>
              <input
                className=" text-white rounded-[50rem] bg-transparent border-none focus:outline-none focus:border-none w-[256px] py-[6px] ps-[40px]  pe-[14px] "
                placeholder="Search"
                type="text"
              />
            </div>
          </div>

          <div className=" px-[24px] flex items-center flex-grow justify-end gap-[1.5rem] ">
            <div className=" rounded-[50rem] bg-[#8957ff] text-white py-[4px] px-[12px] ">
              Connect
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-[16px] h-[26px] text-white "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </div>
            <div>
              <img
                className=" w-[32px] h-[32px] rounded-full "
                src="https://satoshi.webpixels.io/img/memoji/memoji-1.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className=" py-[8px] block lg:hidden ">
          <div className=" px-[16px] flex justify-between items-center ">
            <div onClick={press} className=" nav px-[6px] py-[4px] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-[25px] h-[25px] text-[#e2e8f0] pointer-events-none "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>

            <div className=" py-[8px]  ">
              <img
                className=" h-[32px]  "
                src="https://satoshi.webpixels.io/img/logos/logo-light.svg"
                alt=""
              />
            </div>

            <div className="">
              <div className=" flex items-center">
                <div className=" flex justify-center items-center w-[32px] h-[32px] rounded-full bg-[rgb(255,140,0)] ">
                  <div className=" text-black ">AE</div>
                </div>
                <div className=" ms-[12px] h-[26px] flex items-center text-[rgb(184,154,225)] ">
                  <div>Alexis</div>
                </div>
                <div className=" ms-[8px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-[12px] h-[26px] text-white "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* midde  */}
        <TopDrawerContainer draw={draw} />

        {/* second Middle  */}
       {/* <LeftDrawerContainer/> */}

        <div  className={` ${draw ? "mt-[-550px]":"mt-0"} lg:mt-0 duration-500 relative z-40 lg:overflow-auto border h-full lg:max-h-screen border-white flex-grow lg:rounded-tl-[1rem] rounded-t-[1rem] `}>
          <div className=" h-auto mb-[70px] ">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
