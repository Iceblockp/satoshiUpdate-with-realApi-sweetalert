import React from "react";

const Table = () => {
  return (
    <div>
      <main>
        <div className="px-6 lg:px-7 pt-8 border-b border-gray-700 ">
          <div className="flex items-center">
            <h1 className="text-[2.25rem] text-white font-bold">Trades</h1>
            <div className="space-x-2 ml-auto flex ">
              <button
                type="button"
                className="bg-[#1e293b] hover:bg-gray-700 p-2 text-white text-lg font-semibold rounded-lg md:flex gap-3 justify-center items-center hidden lg:inline-flex"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
                  />
                </svg>
                Export
              </button>
              <button
                type="button"
                className="bg-[#6741bf] hover:bg-[#895cf3] p-3 text-white font-semibold text-lg rounded-lg flex gap-3 justify-center items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                New trade
              </button>
            </div>
          </div>
          <div>
            <ul className="flex gap-8  mt-6  py-5">
              <li>
                <a href="#" className=" text-white font-semibold active">
                  All
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" text-white hover:text-[#6741bf] font-semibold"
                >
                  Succeeded
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" text-white hover:text-[#6741bf] font-semibold"
                >
                  Uncaptured
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" text-white hover:text-[#6741bf] font-semibold"
                >
                  Failed
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-2 py-3 px-7 border-b border-gray-700">
          <button
            type="button"
            className=" p-2 text-sm text-white bg-gray-700 hover:bg-gray-500 active:bg-white active:text-black rounded-lg flex gap-3 justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                clipRule="evenodd"
              />
            </svg>
            Category
          </button>
          <button
            type="button"
            className="p-2 text-sm text-white bg-gray-700 hover:bg-gray-500 active:bg-white active:text-black rounded-lg flex gap-3 justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                clipRule="evenodd"
              />
            </svg>
            Amount
          </button>
          <button
            type="button"
            className=" p-2 text-sm text-white bg-gray-700 hover:bg-gray-500 active:bg-white active:text-black rounded-lg flex gap-3 justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                clipRule="evenodd"
              />
            </svg>
            Status
          </button>
          <div
            className=" p-2 text-sm font-bold text-white rounded-lg gap-3 justify-center items-center ml-auto lg:inline-flex hidden  hover:text-[#6741bf]"
            role="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
            <span>Clear filters</span>
          </div>
        </div>
        <div className=" overflow-auto">
          <table className=" w-full ">
            <thead className=" border-b border-gray-700">
              <tr>
                <th className="px-8 text-sm text-white uppercase">
                  <div className="flex  items-center">
                    <input
                      className="appearance-none bg-gray-700 checked:bg-violet-700 hover:ring-0 rounded-sm"
                      type="checkbox"
                      name="name1"
                    />
                    <label className="px-6">Handler</label>
                  </div>
                </th>
                <th className="p-3 text-sm text-left text-white uppercase">
                  currency
                </th>
                <th className="p-3 text-sm text-left text-white uppercase">
                  rate
                </th>
                <th className="p-3 text-sm text-left  text-white uppercase">
                  amount
                </th>
                <th className="p-3 text-sm text-left  text-white uppercase">
                  date
                </th>
                <th className="p-3 text-sm text-left   text-white uppercase">
                  status
                </th>
                <th className="p-3 text-sm text-left whitespace-nowrap text-white uppercase">
                  required action
                </th>
              </tr>
            </thead>
            <tbody className=" overflow-auto w-full">
              <tr className="odd:bg-gray-800 odd:dark:bg-gray-900 even:bg-gray-800 even:dark:bg-gray-800 border-b border-y-gray-700 dark:border-gray-700">
                <td className="px-8">
                  <div className="flex align-middle items-center gap-6">
                    <input
                      className="w-4 h-4 appearance-none  bg-gray-700 checked:bg-violet-700 hover:ring-0  rounded-sm  "
                      type="checkbox"
                      name="name2"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8 text-yellow-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                      />
                    </svg>

                    <label className=" text-white font-bold text-lg whitespace-nowrap ">
                      Bought BTC
                    </label>
                  </div>
                </td>
                <td className="p-3  text-left whitespace-nowrap  flex gap-2  text-white">
                  BTC{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  USDT
                </td>
                <td className="p-3 text-left whitespace-nowrap  text-white">
                  1.23
                </td>
                <td className="p-3 text-left whitespace-nowrap  text-white">
                  $1,300,000.00
                </td>
                <td className="p-3 text-left whitespace-nowrap  text-white">
                  3 min ago
                </td>
                <td className="p-3 text-left whitespace-nowrap flex  items-center gap-2 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-3 h-3 bg-green-400 rounded-lg text-green-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Active
                </td>
                <td className="p-3 text-left whitespace-nowrap  text-white">
                  Needs your attention
                </td>
                <td>
                  <button className="border border-gray-700 active:bg-white bg-slate-700 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-7 h-7 text-white active:text-black"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-800 border-b border-gray-700 ">
                <td className="px-8">
                  <div className="flex align-middle items-center gap-6">
                    <input
                      className="w-4 h-4 appearance-none  bg-gray-700 checked:bg-violet-700 hover:ring-0  rounded-sm  "
                      type="checkbox"
                      name="name3"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8 text-yellow-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                      />
                    </svg>

                    <label className=" text-white font-bold text-lg whitespace-nowrap ">
                      Sold ADA
                    </label>
                  </div>
                </td>
                <td className="p-3  text-left whitespace-nowrap  flex gap-2  text-white">
                  XRP{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  USDT
                </td>
                <td className="p-3 text-left whitespace-nowrap  text-white">
                  1.23
                </td>
                <td className="p-3 text-left whitespace-nowrap  text-white">
                  $1,300,000.00
                </td>
                <td className="p-3 text-left whitespace-nowrap  text-white">
                  3 min ago
                </td>
                <td className="p-3 text-left whitespace-nowrap flex  items-center gap-2 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-3 h-3 bg-green-400 rounded-lg text-green-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Active
                </td>
                <td className="p-3 text-left whitespace-nowrap  text-white">
                  Needs your attention
                </td>
                <td>
                  <button className="border border-gray-700 active:bg-white bg-slate-700 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-7 h-7 text-white active:text-black"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr className="odd:bg-gray-800 odd:dark:bg-gray-900 even:bg-gray-800 even:dark:bg-gray-800 border-b border-y-gray-700 dark:border-gray-700">
                <td className="px-8">
                  <div className="flex align-middle items-center gap-6">
                    <input
                      className="w-4 h-4 appearance-none  bg-gray-700 checked:bg-violet-700 hover:ring-0  rounded-sm  "
                      type="checkbox"
                      name="name4"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8 text-yellow-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                      />
                    </svg>

                    <label className=" text-white font-bold text-lg whitespace-nowrap ">
                      Bought XRP
                    </label>
                  </div>
                </td>
                <td className="p-3  text-left whitespace-nowrap  flex gap-2  text-white">
                  XRP{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  USDT
                </td>
                <td className="p-3 text-left whitespace-nowrap  text-white">
                  1.23
                </td>
                <td className="p-3 text-left whitespace-nowrap  text-white">
                  $1,300,000.00
                </td>
                <td className="p-3 text-left whitespace-nowrap  text-white">
                  3 min ago
                </td>
                <td className="p-3 text-left whitespace-nowrap flex  items-center gap-2 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-3 h-3 bg-green-400 rounded-lg text-green-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Active
                </td>
                <td className="p-3 text-left whitespace-nowrap  text-white">
                  Needs your attention
                </td>
                <td>
                  <button className="border border-gray-700 active:bg-white bg-slate-700 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-7 h-7 text-white active:text-black"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-800 border-b border-gray-700 ">
                <td className="px-8">
                  <div className="flex align-middle items-center gap-6">
                    <input
                      className="w-4 h-4 appearance-none  bg-gray-700 checked:bg-violet-700 hover:ring-0  rounded-sm  "
                      type="checkbox"
                      name="name5"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8 text-yellow-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                      />
                    </svg>

                    <label className=" text-white font-bold text-lg whitespace-nowrap ">
                      Robert Fox
                    </label>
                  </div>
                </td>
                <td className="p-3  text-left whitespace-nowrap  flex gap-2  text-white">
                  BTC{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  USDT
                </td>
                <td className="p-3 text-left whitespace-nowrap  text-white">
                  1.23
                </td>
                <td className="p-3 text-left whitespace-nowrap  text-white">
                  $1,300,000.00
                </td>
                <td className="p-3 text-left whitespace-nowrap  text-white">
                  3 min ago
                </td>
                <td className="p-3 text-left whitespace-nowrap flex  items-center gap-2 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-3 h-3 bg-green-400 rounded-lg text-green-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Active
                </td>
                <td className="p-3 text-left whitespace-nowrap  text-white">
                  Needs your attention
                </td>
                <td>
                  <button className="border border-gray-700 active:bg-white bg-slate-700 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-7 h-7 text-white active:text-black"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr className="odd:bg-gray-800 odd:dark:bg-gray-900 even:bg-gray-800 even:dark:bg-gray-800 border-b border-y-gray-700 dark:border-gray-700">
                <td className="px-8">
                  <div className="flex align-middle items-center gap-6">
                    <input
                      className="w-4 h-4 appearance-none  bg-gray-700 checked:bg-violet-700 hover:ring-0  rounded-sm  "
                      type="checkbox"
                      name="name6"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8 text-yellow-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                      />
                    </svg>

                    <label className=" text-white font-bold text-lg whitespace-nowrap ">
                      Robert Fox
                    </label>
                  </div>
                </td>
                <td className="p-3  text-left whitespace-nowrap  flex gap-2  text-white">
                  BTC{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  USDT
                </td>
                <td className="p-3 text-left whitespace-nowrap  text-white">
                  1.23
                </td>
                <td className="p-3 text-left whitespace-nowrap  text-white">
                  $1,300,000.00
                </td>
                <td className="p-3 text-left whitespace-nowrap  text-white">
                  3 min ago
                </td>
                <td className="p-3 text-left whitespace-nowrap flex  items-center gap-2 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-3 h-3 bg-green-400 rounded-lg text-green-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Active
                </td>
                <td className="p-3 text-left whitespace-nowrap  text-white">
                  Needs your attention
                </td>
                <td>
                  <button className="border border-gray-700 active:bg-white bg-slate-700 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-7 h-7 text-white active:text-black"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-800 border-b border-gray-700">
                <td className="px-8">
                  <div className="flex align-middle items-center gap-6">
                    <input
                      className="w-4 h-4 appearance-none  bg-gray-700 checked:bg-violet-700 hover:ring-0  rounded-sm  "
                      type="checkbox"
                      name="name7"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8 text-yellow-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                      />
                    </svg>

                    <label className=" text-white font-bold text-lg whitespace-nowrap ">
                      Robert Fox
                    </label>
                  </div>
                </td>
                <td className="p-3  text-left whitespace-nowrap  flex gap-2  text-white">
                  BTC{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  USDT
                </td>
                <td className="p-3 text-left whitespace-nowrap  text-white">
                  1.23
                </td>
                <td className="p-3 text-left whitespace-nowrap  text-white">
                  $1,300,000.00
                </td>
                <td className="p-3 text-left whitespace-nowrap  text-white">
                  3 min ago
                </td>
                <td className="p-3 text-left whitespace-nowrap flex  items-center gap-2 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-3 h-3 bg-green-400 rounded-lg text-green-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Active
                </td>
                <td className="p-3 text-left whitespace-nowrap  text-white">
                  Needs your attention
                </td>
                <td>
                  <button className="border border-gray-700 active:bg-white bg-slate-700 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-7 h-7 text-white active:text-black"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr className="odd:bg-gray-800 odd:dark:bg-gray-900 even:bg-gray-800 even:dark:bg-gray-800 border-b border-y-gray-700 dark:border-gray-700">
                <td className="px-8">
                  <div className="flex align-middle items-center gap-6">
                    <input
                      className="w-4 h-4 appearance-none  bg-gray-700 checked:bg-violet-700 hover:ring-0  rounded-sm  "
                      type="checkbox"
                      name="name8"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8 text-yellow-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                      />
                    </svg>

                    <label className=" text-white font-bold text-lg whitespace-nowrap ">
                      Robert Fox
                    </label>
                  </div>
                </td>
                <td className="p-3  text-left whitespace-nowrap  flex gap-2  text-white">
                  BTC{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  USDT
                </td>
                <td className="p-3 text-left whitespace-nowrap  text-white">
                  1.23
                </td>
                <td className="p-3 text-left whitespace-nowrap  text-white">
                  $1,300,000.00
                </td>
                <td className="p-3 text-left whitespace-nowrap  text-white">
                  3 min ago
                </td>
                <td className="p-3 text-left whitespace-nowrap flex  items-center gap-2 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-3 h-3 bg-green-400 rounded-lg text-green-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Active
                </td>
                <td className="p-3 text-left whitespace-nowrap  text-white">
                  Needs your attention
                </td>
                <td>
                  <button className="border border-gray-700 active:bg-white bg-slate-700 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-7 h-7 text-white active:text-black"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-800 border-b border-gray-700">
                <td className="px-8">
                  <div className="flex align-middle items-center gap-6">
                    <input
                      className="w-4 h-4 appearance-none  bg-gray-700 checked:bg-violet-700 hover:ring-0  rounded-sm  "
                      type="checkbox"
                      name="name9"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8 text-yellow-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                      />
                    </svg>

                    <label className=" text-white font-bold text-lg whitespace-nowrap ">
                      Robert Fox
                    </label>
                  </div>
                </td>
                <td className="p-3  text-left whitespace-nowrap  flex gap-2  text-white">
                  BTC{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  USDT
                </td>
                <td className="p-3 text-left whitespace-nowrap  text-white">
                  1.23
                </td>
                <td className="p-3 text-left whitespace-nowrap  text-white">
                  $1,300,000.00
                </td>
                <td className="p-3 text-left whitespace-nowrap  text-white">
                  3 min ago
                </td>
                <td className="p-3 text-left whitespace-nowrap flex  items-center gap-2 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-3 h-3 bg-green-400 rounded-lg text-green-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Active
                </td>
                <td className="p-3 text-left whitespace-nowrap  text-white">
                  Needs your attention
                </td>
                <td>
                  <button className="border border-gray-700 active:bg-white bg-slate-700 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-7 h-7 text-white active:text-black"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr className="odd:bg-gray-800 odd:dark:bg-gray-900 even:bg-gray-800 even:dark:bg-gray-800 border-b border-y-gray-700 dark:border-gray-700">
                <td className="px-8">
                  <div className="flex align-middle items-center gap-6">
                    <input
                      className="w-4 h-4 appearance-none  bg-gray-700 checked:bg-violet-700 hover:ring-0  rounded-sm  "
                      type="checkbox"
                      name="name10"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8 text-yellow-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                      />
                    </svg>

                    <label className=" text-white font-bold text-lg whitespace-nowrap ">
                      Robert Fox
                    </label>
                  </div>
                </td>
                <td className="p-3  text-left whitespace-nowrap  flex gap-2  text-white">
                  BTC{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  USDT
                </td>
                <td className="p-3 text-left whitespace-nowrap  text-white">
                  1.23
                </td>
                <td className="p-3 text-left whitespace-nowrap  text-white">
                  $1,300,000.00
                </td>
                <td className="p-3 text-left whitespace-nowrap  text-white">
                  3 min ago
                </td>
                <td className="p-3 text-left whitespace-nowrap flex  items-center gap-2 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-3 h-3 bg-green-400 rounded-lg text-green-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Active
                </td>
                <td className="p-3 text-left whitespace-nowrap  text-white">
                  Needs your attention
                </td>
                <td>
                  <button className="border border-gray-700 active:bg-white bg-slate-700 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-7 h-7 text-white active:text-black"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-800 border-b border-gray-700">
                <td className="px-8">
                  <div className="flex align-middle items-center gap-6">
                    <input
                      className="w-4 h-4 appearance-none  bg-gray-700 checked:bg-violet-700 hover:ring-0  rounded-sm  "
                      type="checkbox"
                      name="name11"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8 text-yellow-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                      />
                    </svg>

                    <label className=" text-white font-bold text-lg whitespace-nowrap ">
                      Robert Fox
                    </label>
                  </div>
                </td>
                <td className="p-3  text-left whitespace-nowrap  flex gap-2  text-white">
                  BTC{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  USDT
                </td>
                <td className="p-3 text-left whitespace-nowrap  text-white">
                  1.23
                </td>
                <td className="p-3 text-left whitespace-nowrap  text-white">
                  $1,300,000.00
                </td>
                <td className="p-3 text-left whitespace-nowrap  text-white">
                  3 min ago
                </td>
                <td className="p-3 text-left whitespace-nowrap flex  items-center gap-2 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-3 h-3 bg-green-400 rounded-lg text-green-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Active
                </td>
                <td className="p-3 text-left whitespace-nowrap  text-white">
                  Needs your attention
                </td>
                <td>
                  <button className="border border-gray-700 active:bg-white bg-slate-700 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-7 h-7 text-white active:text-black"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr className="odd:bg-gray-800 odd:dark:bg-gray-900 even:bg-gray-800 even:dark:bg-gray-800 border-b border-y-gray-700 dark:border-gray-700">
                <td className="px-8">
                  <div className="flex align-middle items-center gap-6">
                    <input
                      className="w-4 h-4 appearance-none  bg-gray-700 checked:bg-violet-700 hover:ring-0  rounded-sm  "
                      type="checkbox"
                      name="name12"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8 text-yellow-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                      />
                    </svg>

                    <label className=" text-white font-bold text-lg whitespace-nowrap ">
                      Robert Fox
                    </label>
                  </div>
                </td>
                <td className="p-3  text-left whitespace-nowrap  flex gap-2  text-white">
                  BTC{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  USDT
                </td>
                <td className="p-3 text-left whitespace-nowrap  text-white">
                  1.23
                </td>
                <td className="p-3 text-left whitespace-nowrap  text-white">
                  $1,300,000.00
                </td>
                <td className="p-3 text-left whitespace-nowrap  text-white">
                  3 min ago
                </td>
                <td className="p-3 text-left whitespace-nowrap flex  items-center gap-2 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-3 h-3 bg-green-400 rounded-lg text-green-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Active
                </td>
                <td className="p-3 text-left whitespace-nowrap  text-white">
                  Needs your attention
                </td>
                <td>
                  <button className="border border-gray-700 active:bg-white bg-slate-700 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-7 h-7 text-white active:text-black"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="py-4 px-6 ">
          <div className="flex flex-row items-center justify-between">
            <div className="hidden md:block">
              <span className=" text-gray-500 text-lg">
                Showing 10 items out of 250 results found
              </span>
            </div>
            <div className="md:flex md:flex-row md:items-center md:justify-end">
              <nav>
                <ul className=" flex gap-1">
                  <li className="border border-white py-2 px-4 text-white rounded-lg">
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 19.5 8.25 12l7.5-7.5"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="border border-white py-2 px-4 text-white rounded-lg">
                    <a href="#">1</a>
                  </li>
                  <li className="border border-white py-2 px-4 text-white rounded-lg">
                    <a href="#">2</a>
                  </li>
                  <li className="border border-white py-2 px-4 text-white rounded-lg">
                    <a href="#">3</a>
                  </li>
                  <li className="border border-white py-2 px-4 text-white rounded-lg">
                    <a href="#">4</a>
                  </li>
                  <li className="border border-white py-2 px-4 text-white rounded-lg">
                    <a href="#">5</a>
                  </li>
                  <li className="border border-white py-2 px-4 text-white rounded-lg">
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Table;
