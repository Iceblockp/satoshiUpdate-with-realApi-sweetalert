import React, { useState } from "react";
import AccordionDash from "./AccordionDash";

const TopDrawerContainer = ({ draw }) => {
    const [dashOpen,setDashOpen] = useState(false);
    const [pageOpen, setPageOpen] = useState(false);
    const [accountOpen,setAccountOpen] = useState(false);
    const [otherOpen, setOtherOpen] = useState(false);

    const dashHandle = () => {
        setDashOpen(!dashOpen);
    }

    const pageOpenHandle = () => {
      setPageOpen(!pageOpen);
    }
    const accountOpenHandle = () => {
      setAccountOpen(!accountOpen);
    }
    const otherOpenHandle =() => {
      setOtherOpen(!otherOpen);
    }

    const allClose = () => {
        setDashOpen(false);
        setPageOpen(false);
        setAccountOpen(false);
        setOtherOpen(false);
    }

    document.addEventListener('click', (events) => {
        events.target.classList.contains('nav') && allClose();
    })


  return (
    <div
      className={` py-[8px] lg:block relative lg:fixed overflow-auto h-full w-full lg:w-[280px] top-0 left-0 z-20 bg-[rgb(23,32,51)] `}
    >
      <div
        //    style={{
        //     transform: `${draw ? "translateY(-550px)  " : "translateY(0)"}`
        //   }}
        className={`${
          draw ? "translate-y-[-550px]" : "translate-y-0"
        } lg:translate-y-0 px-[24px] duration-500`}
      >
        {/* inBar  */}
        <div className=" py-[4px] mb-[20px] hidden lg:block ">
          <img
            className=" w-[112px] h-[40px] "
            src="https://satoshi.webpixels.io/img/logos/logo-light.svg"
            alt=""
          />
        </div>
        {/* next  */}
        <div>
          <ul>
            {/* Dashborards  */}
            <li onClick={dashHandle} className=" my-[4px]">
              <div className=" w-full rounded-[50rem] bg-[rgba(255,255,255,.1)] items-center flex px-[16px] py-[8px] ">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-[14px] h-[14px] text-white mr-[16px] "
                  >
                    <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                    <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                  </svg>
                </div>
                <div className=" text-[.875rem] font-[500] text-white select-none ">
                  Dashboards
                </div>
                <div className=" ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-[14px] h-[14px] text-white duration-200 ${dashOpen && 'rotate-90'} `}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>

              <AccordionDash
                acArray={[
                  {
                    id: 1,
                    name: "Default",
                    link: "/",
                  },
                  {
                    id: 2,
                    name: "Analytics",
                    link: "/",
                  },
                  {
                    id: 3,
                    name: "Wallet",
                    link: "/",
                  },
                ]} open={dashOpen}
              />
            </li>
            {/* Pages  */}
            <li onClick={pageOpenHandle} className=" my-[4px]">
              <div className=" w-full rounded-[50rem] hover:bg-[rgba(255,255,255,.1)] items-center flex px-[16px] py-[8px] ">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-[14px] h-[14px] text-white mr-[16px] "
                  >
                    <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
                  </svg>
                </div>
                <div className=" text-[.875rem] font-[500] text-white select-none ">
                  Pages
                </div>
                <div className=" ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-[14px] h-[14px] text-white duration-200 ${pageOpen && 'rotate-90'} `}
                 
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
              <AccordionDash 
               acArray={[
                {
                  id: 1,
                  name: "Table Listing",
                  link: "/table",
                },
                {
                  id: 2,
                  name: "Create Form",
                  link: "/createForm",
                },
                {
                  id: 3,
                  name: "Collection",
                  link: "/createForm",
                },
              ]} open={pageOpen}
               />
            </li>
            {/* Account  */}
            <li onClick={accountOpenHandle} className=" my-[4px]">
              <div className=" w-full rounded-[50rem] hover:bg-[rgba(255,255,255,.1)] items-center flex px-[16px] py-[8px] ">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-[14px] h-[14px] text-white mr-[16px] "
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 0 1-.517.608 7.45 7.45 0 0 0-.478.198.798.798 0 0 1-.796-.064l-.453-.324a1.875 1.875 0 0 0-2.416.2l-.243.243a1.875 1.875 0 0 0-.2 2.416l.324.453a.798.798 0 0 1 .064.796 7.448 7.448 0 0 0-.198.478.798.798 0 0 1-.608.517l-.55.092a1.875 1.875 0 0 0-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 0 1-.064.796l-.324.453a1.875 1.875 0 0 0 .2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 0 1 .796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 0 1 .517-.608 7.52 7.52 0 0 0 .478-.198.798.798 0 0 1 .796.064l.453.324a1.875 1.875 0 0 0 2.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 0 1-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 0 0 1.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 0 1-.608-.517 7.507 7.507 0 0 0-.198-.478.798.798 0 0 1 .064-.796l.324-.453a1.875 1.875 0 0 0-.2-2.416l-.243-.243a1.875 1.875 0 0 0-2.416-.2l-.453.324a.798.798 0 0 1-.796.064 7.462 7.462 0 0 0-.478-.198.798.798 0 0 1-.517-.608l-.091-.55a1.875 1.875 0 0 0-1.85-1.566h-.344ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className=" text-[.875rem] font-[500] text-white select-none ">
                  Account
                </div>
                <div className=" ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-[14px] h-[14px] text-white duration-200 ${accountOpen && 'rotate-90'} `}
                 
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
              <AccordionDash  acArray={[
                  {
                    id: 1,
                    name: "Login",
                    link: "/login",
                  },
                  {
                    id: 2,
                    name: "Register",
                    link: "/register",
                  }
                ]} open={accountOpen} />
            </li>
            {/* Other  */}
            <li onClick={otherOpenHandle} className=" my-[4px]">
              <div className=" w-full rounded-[50rem] hover:bg-[rgba(255,255,255,.1)] items-center flex px-[16px] py-[8px] ">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-[14px] h-[14px] text-white mr-[16px] "
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z"
                      clipRule="evenodd"
                    />
                    <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
                  </svg>
                </div>
                <div className=" text-[.875rem] font-[500] text-white select-none ">
                  Other
                </div>
                <div className=" ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-[14px] h-[14px] text-white duration-200 ${otherOpen && 'rotate-90'} `}
                 
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
              <AccordionDash 
               acArray={[
                {
                  id: 1,
                  name: "Pricing Plans",
                  link: "/",
                },
                {
                  id: 2,
                  name: "Terms of Service",
                  link: "/",
                },
                {
                  id: 3,
                  name: "Error Page",
                  link: "/",
                },
                {
                  id:4,
                  name: "Landing Page",
                  link: "/"
                }
              ]} open={otherOpen}
              />
            </li>
          </ul>
        </div>
        {/* line  */}
        <hr className=" w-[215.333px] my-[20px] " />
        {/* next  */}
        <div>
          <ul>
            <li className=" px-[16px] py-[8px] font-[500] text-[.75rem] text-[rgba(255,255,255,.8)] ">
              RESOURCES
            </li>
            {/* Documentation / */}
            <li className=" my-[4px]">
              <div className=" w-full rounded-[50rem] hover:bg-[rgba(255,255,255,.1)] items-center flex px-[16px] py-[8px] ">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-[14px] h-[14px] text-white mr-[16px] "
                  >
                    <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
                  </svg>
                </div>
                <div className=" text-[.875rem] font-[500] text-white ">
                  Documentation
                </div>
              </div>
            </li>
            {/* Components  */}
            <li className=" my-[4px]">
              <div className=" w-full rounded-[50rem] hover:bg-[rgba(255,255,255,.1)] items-center flex px-[16px] py-[8px] ">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-[14px] h-[14px] text-white mr-[16px]"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 7.125c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 0 1 1.5 10.875v-3.75Zm12 1.5c0-1.036.84-1.875 1.875-1.875h5.25c1.035 0 1.875.84 1.875 1.875v8.25c0 1.035-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 0 1-1.875-1.875v-8.25ZM3 16.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v2.25c0 1.035-.84 1.875-1.875 1.875h-5.25A1.875 1.875 0 0 1 3 18.375v-2.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className=" text-[.875rem] font-[500] text-white ">
                  Components
                </div>
                <div className=" ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-[14px] h-[14px] text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </div>
            </li>
            {/* Widgers  */}
            <li className=" my-[4px]">
              <div className=" w-full rounded-[50rem] hover:bg-[rgba(255,255,255,.1)] items-center flex px-[16px] py-[8px] ">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-[14px] h-[14px] text-white mr-[16px]"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className=" text-[.875rem] font-[500] text-white ">
                  Widgets
                </div>
                <div className=" ml-auto">
                  <div className=" bg-[#331c00] text-[#d76316] px-[9.6px] py-[3.2px] rounded-[50rem] text-[.75em] font-[600] text-center ">
                    🔥 Hot
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* next  */}
        <div className=" mb-[12px] p-[24px] flex flex-col bg-[rgb(15,23,42)] rounded-[0.75rem] gap-[1rem] text-white ">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-[30.635px] h-[30.635px]"
            >
              <path
                fillRule="evenodd"
                d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"
                clipRule="evenodd"
              />
              <path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" />
            </svg>
          </div>
          <div>Upgrade your account to Pro for even more examples.</div>
          <button className="  rounded-[5px] flex justify-center items-center w-full bg-[#8957ff] px-[14px] py-[6px] ">
            Upgade now{" "}
            <span className="ml-[8px]">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-[14px] h-[14px]"
              >
                <path
                  fillRule="evenodd"
                  d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopDrawerContainer;
