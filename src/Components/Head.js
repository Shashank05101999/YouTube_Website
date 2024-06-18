import React from "react";
import { toggleMenu } from "../utils/appslice";
import { useDispatch } from "react-redux";

const Head = () => {
  const Dispatch = useDispatch();
  const toggleMenuHandler = () => {
    Dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5  bg-white shadow-lg">
      <div className=" flex col-span-1 gap-8">
        <img
          onClick={() => {
            toggleMenuHandler();
          }}
          className="h-8 cursor-pointer"
          alt="menu-icons"
          src="./Images/Menu-icon.png"
        ></img>

        <img
          className=" h-8 "
          alt="YouTube Logo"
          src="https://tse4.mm.bing.net/th?id=OIP.gdd5Vgi_qnWF2jFwlmygPAHaBp&pid=Api&P=0&h=180"
        ></img>
      </div>
      <div className="col-span-10  ">
        <input
          className="w-1/2 border border-gray-500 p-1 rounded-l-full "
          type="text"
        />
        <button className=" border border-gray-500 rounded-r-full px-3 py-1 font-bold bg-slate-200 ">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="User-Logo"
          src="https://image.pngaaa.com/730/4806730-middle.png"
        ></img>
      </div>
    </div>
  );
};

export default Head;
