import React from "react";

const CreateForm = () => {
  return (
    // header
    <div className=" px-6 pb-10">
      {/* add new asset */}
      <div className=" flex justify-between py-4">
        <div className="">
          <div className=" flex gap-4 text-center items-center">
            {/* x button */}
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-slate-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>

            <div className="vr opacity-20 my-1"></div>
            <h1 className="text-xl text-slate-300 font-bold">
              Add a new asset
            </h1>
          </div>
        </div>
        <div className="flex gap-2 text-center items-center">
          <div className="">
            <a
              href="#!"
              className="flex items-center gap-2 text-slate-400 text-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-question-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
              </svg>
              <span className=" text-sm font-semibold">Need help?</span>
            </a>
          </div>
          <button className="text-white bg-slate-800 rounded-lg px-4 py-2">
            {" "}
            <span>Save and create another</span>
          </button>
          <button className=" text-white bg-blue-600 rounded-lg px-4 py-2">
            {" "}
            <span>Save</span>
          </button>
        </div>
      </div>

      <hr className=" my-6 opacity-30" />

      {/* asset name */}
      <div className=" flex flex-col md:flex-row text-center items-start md:items-center   md:gap-36">
        <div className="">
          <label htmlFor="" className=" text-slate-300 select-none">
            Asset name
          </label>
        </div>
        <div className=" w-full max-w-[570.5px] ">
          <input
            className=" md:h-[44px] w-full border border-slate-600 bg-transparent font-semibold rounded-lg"
            placeholder="Asset name"
            type="text"
          />
        </div>
      </div>

      <hr className=" my-6 opacity-30 " />
      {/* description */}
      <div className=" flex flex-col md:flex-row text-center items-start md:items-center md:gap-36">
        <div className="">
          <label htmlFor="" className=" text-slate-300 select-none">
            Description
          </label>
        </div>
        <div className=" w-full max-w-[570px]">
          <textarea
            name=""
            id=""
            cols="30"
            rows="2"
            className=" w-full  bg-transparent  border border-slate-600 font-semibold rounded-lg"
            placeholder="Asset description "
          ></textarea>
          <span className="block text-start text-slate-400">
            Make it unique.
          </span>
        </div>
      </div>

      <hr className=" my-6 opacity-30 " />

      {/* select type */}
      <div className=" flex md:gap-36 text-center items-center">
        <div className="">
          <label htmlFor="" className=" text-slate-300 select-none">
            Select type
          </label>
        </div>
        <div className="">
          <div className=" flex gap-4">
            <div className=" border border-slate-500 rounded-md px-6 py-6 hover:bg-black ">
              <label htmlFor="">
                <span className=" flex flex-col justify-center items-center text-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="currentColor"
                    className="bi bi-currency-bitcoin text-slate-300"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 13v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.5v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.084c1.992 0 3.416-1.033 3.416-2.82 0-1.502-1.007-2.323-2.186-2.44v-.088c.97-.242 1.683-.974 1.683-2.19C11.997 3.93 10.847 3 9.092 3H9V1.75a.25.25 0 0 0-.25-.25h-1a.25.25 0 0 0-.25.25V3h-.573V1.75a.25.25 0 0 0-.25-.25H5.75a.25.25 0 0 0-.25.25V3l-1.998.011a.25.25 0 0 0-.25.25v.989c0 .137.11.25.248.25l.755-.005a.75.75 0 0 1 .745.75v5.505a.75.75 0 0 1-.75.75l-.748.011a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25zm1.427-8.513h1.719c.906 0 1.438.498 1.438 1.312 0 .871-.575 1.362-1.877 1.362h-1.28zm0 4.051h1.84c1.137 0 1.756.58 1.756 1.524 0 .953-.626 1.45-2.158 1.45H6.927z" />
                  </svg>
                  <span className=" text-sm text-slate-400">Crypto</span>
                </span>
              </label>
            </div>
            <div className=" border border-slate-500 rounded-md px-6 py-6 hover:bg-black">
              <label htmlFor="">
                <span className=" flex flex-col justify-center items-center text-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="currentColor"
                    className="bi bi-diagram-3 text-slate-300"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5zM0 11.5A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm4.5.5A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"
                    />
                  </svg>

                  <span className=" text-sm text-slate-400">Stock</span>
                </span>
              </label>
            </div>
            <div className=" border border-slate-500 rounded-md px-6 py-6 hover:bg-black">
              <label htmlFor="">
                <span className=" flex flex-col justify-center items-center text-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="currentColor"
                    className="bi bi-coin text-slate-300"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z" />
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12" />
                  </svg>

                  <span className=" text-sm text-slate-400">Currency</span>
                </span>
              </label>
            </div>
            <div className=" border border-slate-500 rounded-md px-6 py-6 hover:bg-black ">
              <label htmlFor="">
                <span className=" flex flex-col justify-center items-center text-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={25}
                    height={25}
                    fill="currentColor"
                    className="bi bi-gem text-slate-300"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6zm11.386 3.785-1.806-2.41-.776 2.413zm-3.633.004.961-2.989H4.186l.963 2.995zM5.47 5.495 8 13.366l2.532-7.876zm-1.371-.999-.78-2.422-1.818 2.425zM1.499 5.5l5.113 6.817-2.192-6.82zm7.889 6.817 5.123-6.83-2.928.002z" />
                  </svg>

                  <span className=" text-sm text-slate-400">Commodity</span>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <hr className=" my-6 opacity-30 " />

      {/* icon */}
      <div className=" flex md:gap-48 text-center items-center">
        <div className="">
          <label htmlFor="" className=" text-slate-300 select-none">
            Icons
          </label>
        </div>

        <div className="">
          <div className="">
            <div className=" flex  items-center text-center gap-4">
              <a href="#">
                <img
                  className="border border-slate-900 rounded-full w-12 h-12"
                  src="https://satoshi.webpixels.io/img/crypto/color/ada.svg"
                  alt="img"
                />
              </a>
              <div className=" flex items-center text-center gap-3">
                <label
                  htmlFor=""
                  className="text-slate-300 select-none font-semibold bg-slate-800 px-3 py-1 rounded-md hover:bg-slate-700"
                >
                  Upload
                </label>
                <a
                  href=""
                  className=" flex text-center items-center gap-2 bg-slate-800 px-3 py-1 rounded-md hover:bg-slate-700"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-trash text-red-600"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                    </svg>
                  </span>
                  <span className=" text-red-600">Remove</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className=" my-6 opacity-30 " />

      {/* category */}
      <div className=" flex text-center items-center md:gap-36">
        <div className="">
          <label htmlFor="" className=" text-slate-300 select-none">
            Asset name
          </label>
        </div>
        <div className="">
          <select
            name=""
            id=""
            className="md:w-[570.5px] md:h-[44px] border border-slate-600 bg-transparent font-normal rounded-lg text-slate-300 "
          >
            <option value="Apple" selected>
              Apple
            </option>
            <option value="Samsung">Samsung</option>
            <option value="Xiaomi">Xiaomi</option>
          </select>
        </div>
      </div>

      <hr className=" my-6 opacity-30 " />
      {/* date */}
      <div className=" flex text-center items-center md:gap-24">
        <div className="">
          <label htmlFor="" className=" text-slate-300 select-none">
            Publishing options
          </label>
        </div>
        <div className=" flex flex-col gap-2">
          <span className="flex text-start text-slate-300">Start Date</span>

          <input
            type="date"
            name=""
            id=""
            className="md:w-[570.5px] md:h-[44px] border border-slate-600 bg-transparent font-normal rounded-lg text-slate-300"
          />
        </div>
      </div>

      <hr className=" my-6 opacity-30 " />

      {/* options */}
      <div className=" flex text-center items-center md:gap-24">
        <div className="">
          <label htmlFor="" className=" text-slate-300 select-none">
            Options
          </label>
        </div>
        <div className=" md:ms-20">
          <label className="relative inline-flex items-center  cursor-pointer">
            <input type="checkbox" defaultValue className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
            <span className="ms-3 select-none text-slate-300">
              Make the asset public
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default CreateForm;
