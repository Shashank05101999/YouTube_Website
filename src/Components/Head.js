import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appslice";
import { useDispatch } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../Constants/Constant";

const Head = () => {
  const [searchQuery, setsearchQuery] = useState("");
  const [suggestion, SetSuggestion] = useState([]);
  const [showsuggestion, setshowsuggestion] = useState([false]);

  useEffect(() => {
    const Timer = setTimeout(() => getSearchSuggestion(), 200); // Make the  api call after every key press but  if the difference between 2 API  calls  s <200ms  decline the API calls

    return () => {
      clearTimeout(Timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    SetSuggestion(json[1]);
  };

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
      <div className="col-span-9  ">
        <div>
          <input
            className="w-1/2 border border-gray-500 py-2 align-top rounded-l-full "
            type="text"
            value={searchQuery}
            onChange={(e) => setsearchQuery(e.target.value)}
            onFocus={(e) => setshowsuggestion(true)}
            onBlur={(e) => setshowsuggestion(false)}
          />
          <button className=" h-[41px]  border border-gray-500 rounded-r-full  align-top  bg-slate-200  hover:bg-slate-500">
            <img
              className=" h-4  px-4 border-l-slate-900"
              alt="logo"
              src="./Images/Search-button.png"
            ></img>
          </button>
          {showsuggestion && (
            <div className=" bg-white py-2  px-4 w-[34rem] rounded-3xl shadow-2xl absolute">
              <ul>
                {suggestion.map((s) => (
                  <li
                    key={s}
                    className="px-2 py-1  flex gap-2 hover:bg-slate-300 rounded-3xl "
                  >
                    <img
                      className="h-4 "
                      alt="search"
                      src="./Images/Search-button.png"
                    ></img>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className=" flex flex-wrap  col-span-2 gap-7">
        <img
          className="h-8  rounded-full drop-shadow-2xl hover:border border-gray-900"
          alt="User-Logo"
          src="./Images/mic-logo2.png"
        ></img>
        <img
          className="h-8 gap bg-white rounded-full"
          alt="User-Logo"
          src="./Images/user-image.jpg"
        ></img>
      </div>
      <div className="google-element" id="google-element"></div>
    </div>
  );
};

export default Head;
