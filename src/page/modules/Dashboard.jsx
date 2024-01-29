import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const Dashboard = () => {
  let myChart = null;
  const chartRef = useRef(null);
  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      const earningsData = {
        labels: ["May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Earnings",
            data: [30, 10, 20, 10, 17, 12, 8, 20],
            barThickness: "20",
            backgroundColor: "#8957ff",
            hoverBackgroundColor: "#c6aeff",
            fill: false,
          },
        ],
      };

      myChart = new Chart(ctx, {
        type: "bar",
        data: earningsData,
        options: {
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                color: "rgb(203, 213, 225)",
              },
            },
            x: {
              ticks: {
                color: "rgb(203, 213, 225)",
              },
            },
          },
        },
      });
    }

    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, []);

  return (
    <div className=" bgColor px-3 py-5 lg:p-6 xl:p-8">
      <div className="">
        <div className="mb-[40px]">
          <div className="flex items-center">
            <div className="  textColor text-4xl font-bold mt-[12px] p-[6px] w-[50%]">
              Dashboard
            </div>
            <div className="w-[50%] justify-end gap-2  mt-[12px] p-[6px] flex">
              <button className="flex textColor px-[14px] py-[6px] btnBg rounded-md bg-[#334155]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 pe-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Liquidity
              </button>
              <button className="textColor px-[14px] py-[6px] btnColor rounded-md">
                Trade
              </button>
            </div>
          </div>
          <div className="flex ">
            <div className="w-8/12 max-2xl:w-full mt-[24px] pe-[12px]">
              <div className="flex flex-col gap-3 md:gap-6">
                <div className="flex items-center max-md:min-sm:grid grid-cols-2 max-sm:flex-col">
                  <div className="w-[30%] max-md:w-full mt-[12px] px-[6px]">
                    <div className="p-[16px]  borderColor">
                      <div className="flex gap-2 items-center">
                        <img
                          src="https://satoshi.webpixels.io/img/crypto/icon/btc.svg"
                          alt=""
                          className="w-[20px] h-[20px] "
                        />
                        <p className="textColor font-bold">BTC</p>
                      </div>
                      <div className="text-sm mt-3 font-semibold textColor">
                        3.2893 USDT
                      </div>
                      <div className="mt-2 flex items-center gap-2 text-xs textColor ">
                        <div className="rounded-md border border-transparent bg-[#0c8]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5 p-1 text-white "
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                            />
                          </svg>
                        </div>
                        <div>+13.7%</div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[30%] max-md:w-full mt-[12px] px-[6px]">
                    <div className="p-[16px]  borderColor">
                      <div className="flex gap-2 items-center">
                        <img
                          src="https://satoshi.webpixels.io/img/crypto/icon/ada.svg"
                          alt=""
                          className="w-[20px] h-[20px] "
                        />
                        <p className="textColor font-bold">ADA</p>
                      </div>
                      <div className="text-sm mt-3 font-semibold textColor">
                        10.745,49 ADA
                      </div>
                      <div className="mt-2 flex items-center gap-2 text-xs textColor ">
                        <div className="rounded-md border border-transparent bg-[#f36]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5 p-1 text-white "
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                            />
                          </svg>
                        </div>
                        <div>-3.2%</div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[30%] max-md:w-full mt-[12px] px-[6px]">
                    <div className="p-[16px]  borderColor">
                      <div className="flex gap-2 items-center">
                        <img
                          src="https://satoshi.webpixels.io/img/crypto/icon/eos.svg"
                          alt=""
                          className="w-[20px] h-[20px] "
                        />
                        <p className="textColor font-bold">EOS</p>
                      </div>
                      <div className="text-sm mt-3 font-semibold textColor">
                        7.890,00 EOS
                      </div>
                      <div className="mt-2 flex items-center gap-2 text-xs textColor ">
                        <div className="rounded-md border border-transparent bg-[#f36]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5 p-1 text-white "
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                            />
                          </svg>
                        </div>
                        <div>-2.2%</div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[10%] max-md:hidden mt-[12px] px-[6px]  ">
                    <div className=" h-[115.2px] flex textColor btnBg border borderColor">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 mx-auto my-auto "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className=" borderColor">
                  <div className="min-h-[280px] p-[24px] mx-auto text-Color">
                    <div className=" flex justify-between textColor">
                      <div>Earnings</div>
                      <div className=" cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                          />
                        </svg>
                      </div>
                    </div>
                    <canvas ref={chartRef} width="750" height="280"></canvas>
                  </div>
                </div>
                <div className="borderColor">
                  <div className="p-6">
                    {/* title */}
                    <div className="flex justify-between items-center">
                      <div className="textColor font-semibold">
                        Transaction History
                      </div>
                      <div className=" cursor-pointer textColor">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                          />
                        </svg>
                      </div>
                    </div>
                    {/* table */}
                    <div>
                      <div className="flex items-center justify-between gap-6 py-6 borderBcolor">
                        <div className="flex items-center gap-3  ">
                          <div className=" bg-[#1F3057] rounded-full ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#8957ff"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="#1F3057"
                              className="w-10 h-10 pt-2 pb-2 pl-2 pr-1 -rotate-45 "
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                              />
                            </svg>
                          </div>
                          <div className="">
                            <div className="font-bold text-sm textColor">
                              Bitcoin
                            </div>
                            <div className="text-xs text-gray-400">
                              2 days ago
                            </div>
                          </div>
                        </div>
                        <div className="text-sm textColor max-md:hidden">
                          {" "}
                          0xd029384sd343fd...eq23
                        </div>
                        <div className="orange btnBg p-1 text-xs rounded-md font-semibold max-md:hidden">
                          Pending
                        </div>
                        <div className="">
                          <div className="textColor font-semibold">
                            +0.2948 BTC
                          </div>
                          <div className="text-gray-400 font-semibold text-xs text-end">
                            +$10,930.90
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between gap-6 py-6 borderBcolor">
                        <div className="flex items-center gap-3  ">
                          <div className=" bg-[#1F3057] rounded-full ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#8957ff"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="#1F3057"
                              className="w-10 h-10 pt-2 pb-2 pl-2 pr-1 -rotate-45 "
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                              />
                            </svg>
                          </div>
                          <div className="">
                            <div className="font-bold text-sm textColor">
                              Cardano
                            </div>
                            <div className="text-xs text-gray-400">
                              2 days ago
                            </div>
                          </div>
                        </div>
                        <div className="text-sm textColor max-md:hidden">
                          {" "}
                          0xd029384sd343fd...eq23
                        </div>
                        <div className="red btnBg p-1 text-xs rounded-md font-semibold max-md:hidden">
                          Canceled
                        </div>
                        <div className="">
                          <div className="textColor font-semibold">
                            +0.2948 BTC
                          </div>
                          <div className="text-gray-400 font-semibold text-xs text-end">
                            +$10,930.90
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between gap-6 py-6 borderBcolor">
                        <div className="flex items-center gap-3  ">
                          <div className=" bg-[#1F3057] rounded-full ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#8957ff"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="#1F3057"
                              className="w-10 h-10 pt-2 pb-2 pl-2 pr-1 -rotate-45 "
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                              />
                            </svg>
                          </div>
                          <div className="">
                            <div className="font-bold text-sm textColor">
                              Binance
                            </div>
                            <div className="text-xs text-gray-400">
                              2 days ago
                            </div>
                          </div>
                        </div>
                        <div className="text-sm textColor max-md:hidden">
                          {" "}
                          0xd029384sd343fd...eq23
                        </div>
                        <div className="green btnBg p-1 text-xs rounded-md font-semibold max-md:hidden">
                          Successful
                        </div>
                        <div className="">
                          <div className="textColor font-semibold">
                            +0.2948 BTC
                          </div>
                          <div className="text-gray-400 font-semibold text-xs text-end">
                            +$10,930.90
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between gap-6 py-6 borderBcolor">
                        <div className="flex items-center gap-3  ">
                          <div className=" bg-[#1F3057] rounded-full ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#8957ff"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="#1F3057"
                              className="w-10 h-10 pt-2 pb-2 pl-2 pr-1 -rotate-45 "
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                              />
                            </svg>
                          </div>
                          <div className="">
                            <div className="font-bold text-sm textColor">
                              Bitcoin
                            </div>
                            <div className="text-xs text-gray-400">
                              2 days ago
                            </div>
                          </div>
                        </div>
                        <div className="text-sm textColor max-md:hidden">
                          {" "}
                          0xd029384sd343fd...eq23
                        </div>
                        <div className="orange btnBg p-1 text-xs rounded-md font-semibold max-md:hidden">
                          Pending
                        </div>
                        <div className="">
                          <div className="textColor font-semibold">
                            +0.2948 BTC
                          </div>
                          <div className="text-gray-400 font-semibold text-xs text-end">
                            +$10,930.90
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between gap-6 py-6 borderBcolor">
                        <div className="flex items-center gap-3  ">
                          <div className=" bg-[#1F3057] rounded-full ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#8957ff"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="#1F3057"
                              className="w-10 h-10 pt-2 pb-2 pl-2 pr-1 -rotate-45 "
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                              />
                            </svg>
                          </div>
                          <div className="">
                            <div className="font-bold text-sm textColor">
                              Bitcoin
                            </div>
                            <div className="text-xs text-gray-400">
                              2 days ago
                            </div>
                          </div>
                        </div>
                        <div className="text-sm textColor max-md:hidden">
                          {" "}
                          0xd029384sd343fd...eq23
                        </div>
                        <div className="red btnBg p-1 text-xs rounded-md font-semibold max-md:hidden">
                          Canceled
                        </div>
                        <div className="">
                          <div className="textColor font-semibold">
                            +0.2948 BTC
                          </div>
                          <div className="text-gray-400 font-semibold text-xs text-end">
                            +$10,930.90
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between gap-6 py-6 borderBcolor">
                        <div className="flex items-center gap-3  ">
                          <div className=" bg-[#1F3057] rounded-full ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#8957ff"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="#1F3057"
                              className="w-10 h-10 pt-2 pb-2 pl-2 pr-1 -rotate-45 "
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                              />
                            </svg>
                          </div>
                          <div className="">
                            <div className="font-bold text-sm textColor">
                              Bitcoin
                            </div>
                            <div className="text-xs text-gray-400">
                              2 days ago
                            </div>
                          </div>
                        </div>
                        <div className="text-sm textColor max-md:hidden">
                          {" "}
                          0xd029384sd343fd...eq23
                        </div>
                        <div className="green btnBg p-1 text-xs rounded-md font-semibold max-md:hidden">
                          Successful
                        </div>
                        <div className="">
                          <div className="textColor font-semibold">
                            +0.2948 BTC
                          </div>
                          <div className="text-gray-400 font-semibold text-xs text-end">
                            +$10,930.90
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between gap-6 pt-6 ">
                        <div className="flex items-center gap-3  ">
                          <div className=" bg-[#1F3057] rounded-full ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#8957ff"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="#1F3057"
                              className="w-10 h-10 pt-2 pb-2 pl-2 pr-1 -rotate-45 "
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                              />
                            </svg>
                          </div>
                          <div className="">
                            <div className="font-bold text-sm textColor">
                              Bitcoin
                            </div>
                            <div className="text-xs text-gray-400">
                              2 days ago
                            </div>
                          </div>
                        </div>
                        <div className="text-sm textColor max-md:hidden">
                          {" "}
                          0xd029384sd343fd...eq23
                        </div>
                        <div className="green btnBg p-1 text-xs rounded-md font-semibold max-md:hidden">
                          Successful
                        </div>
                        <div className="">
                          <div className="textColor font-semibold">
                            +0.2948 BTC
                          </div>
                          <div className="text-gray-400 font-semibold text-xs text-end">
                            +$10,930.90
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-4/12 max-2xl:hidden">
              <div className=" mt-[24px] px-[12px]  flex flex-col gap-6">
                {/* Balance */}
                <div className="p-[24px] flex flex-col textColor borderColor">
                  <div className="flex  justify-between font-semibold mb-3">
                    <div className="">Balance</div>
                    <div className="flex ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-5 me-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
                        />
                      </svg>
                      7.8%
                    </div>
                  </div>
                  <div className=" font-bold text-3xl">23.863,21 USDT</div>
                  <div className="mt-8 flex items-center justify-between">
                    <div>
                      <div className="flex gap-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 pb-2 text-[#0c8]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
                          />
                        </svg>

                        <div className=" text-xs">Income</div>
                      </div>
                      <div className="font-bold mt-3">$23.863,21 USD</div>
                    </div>
                    <div>
                      <div className="flex gap-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 pb-2 h-6 text-[#f36] items-center my-auto justify-center text-center"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
                          />
                        </svg>
                        <div className=" text-xs">Expenses</div>
                      </div>
                      <div className="font-bold mt-3">$23.863,21 USD</div>
                    </div>
                  </div>
                </div>
                {/* Staking Rewards */}
                <div>
                  <div>
                    <div className=" borderColor p-[24px]">
                      <div className=" flex justify-between textColor mb-5">
                        <div>Staking rewards</div>
                        <div className=" cursor-pointer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="gap-1 flex flex-col">
                        <div className="btnBg p-4 rounded-xl ">
                          <div className="flex gap-3 rounded-3 ">
                            <div>
                              <img
                                src="https://satoshi.webpixels.io/img/crypto/icon/ada.svg"
                                alt=""
                              />
                            </div>
                            <div className="gap-2">
                              <div className=" w-full textColor mb-1 flex justify-between">
                                <div className="">
                                  <div className="font-semibold mb-2">
                                    Staked ADA
                                  </div>
                                  <div className="text-xs"> 25% APR</div>
                                </div>
                                <div className="ms-[114px] text-sm font-semibold">
                                  1030 ADA
                                </div>
                              </div>
                              <div className=" pt-2">
                                <div className="relative bgColor">
                                  <div className="w-[70%] purple h-[5px]"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="btnBg p-4 rounded-xl">
                          <div className="flex  gap-3 rounded-3 ">
                            <div>
                              <img
                                src="https://satoshi.webpixels.io/img/crypto/icon/eth.svg"
                                alt=""
                              />
                            </div>
                            <div className="gap-2">
                              <div className=" w-full textColor mb-1 flex justify-between ">
                                <div className="">
                                  <div className="font-semibold mb-2">
                                    Staked ETH
                                  </div>
                                  <div className="text-xs"> 16% APR</div>
                                </div>
                                <div className="ms-[114px] text-sm font-semibold">
                                  9.5 ETH
                                </div>
                              </div>
                              <div className=" pt-2">
                                <div className="relative bgColor">
                                  <div className="w-[50%] purple h-[5px]"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="btnBg p-4 rounded-xl">
                          <div className="flex gap-3 rounded-3 ">
                            <div>
                              <img
                                src="https://satoshi.webpixels.io/img/crypto/icon/xrp.svg"
                                alt=""
                              />
                            </div>
                            <div className="gap-2">
                              <div className=" w-full textColor mb-1 flex justify-between">
                                <div className="">
                                  <div className="font-semibold mb-2">
                                    Staked XRP
                                  </div>
                                  <div className="text-xs"> 13% APR</div>
                                </div>
                                <div className="ms-[114px] text-sm font-semibold">
                                  760 XRP
                                </div>
                              </div>
                              <div className=" pt-2">
                                <div className="relative bgColor">
                                  <div className="w-[70%] purple h-[5px]"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subscription */}
                <div className="borderColor">
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <div className="textColor font-bold ">Subscriptions</div>
                      <div className="green flex">
                        <div className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 py-1 me-2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
                            />
                          </svg>
                        </div>
                        <div className="">7.8%</div>
                      </div>
                    </div>

                    <div className="flex flex-nowrap gap-2 overflow-auto">
                      <div className=" flex-none btnBg rounded-lg">
                        <div className="p-3">
                          <div className="flex gap-2">
                            <div className="h-[20px] w-[20px]">
                              <img
                                src="https://satoshi.webpixels.io/img/social/youtube.svg"
                                alt=""
                              />
                            </div>
                            <div className="textColor text-sm font-semibold">
                              Youtube
                            </div>
                          </div>
                          <div className="mt-4 textColor font-bold text-sm">
                            $10.99
                          </div>
                        </div>
                      </div>
                      <div className=" flex-none btnBg rounded-lg">
                        <div className="p-3">
                          <div className="flex gap-2">
                            <div className="h-[20px] w-[20px]">
                              <img
                                src="	https://satoshi.webpixels.io/img/social/spotify.svg"
                                alt=""
                              />
                            </div>
                            <div className="textColor text-sm font-semibold">
                              Spotify
                            </div>
                          </div>
                          <div className="mt-4 textColor font-bold text-sm">
                            $7.99
                          </div>
                        </div>
                      </div>
                      <div className=" flex-none btnBg rounded-lg">
                        <div className="p-3">
                          <div className="flex gap-2">
                            <div className="h-[20px] w-[20px]">
                              <img
                                src="https://satoshi.webpixels.io/img/social/github.svg"
                                alt=""
                              />
                            </div>
                            <div className="textColor text-sm font-semibold">
                              GitHub
                            </div>
                          </div>
                          <div className="mt-4 textColor font-bold text-sm">
                            $3.99
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" cursor-pointer text-sm font-bold text-center mt-4 text-[#8957ff] hover:text-[#6136c6]">
                      Manage Subscription
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
