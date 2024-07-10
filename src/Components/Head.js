import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appslice";
import { useDispatch } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../Constants/Constant";
import { useNavigate } from "react-router-dom";

const Head = () => {
  const [searchQuery, setsearchQuery] = useState("");
  const [suggestion, SetSuggestion] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const Timer = setTimeout(() => getSearchSuggestion(), 200);

    return () => {
      clearTimeout(Timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    SetSuggestion(json[1]);
  };

  const Dispatch = useDispatch();
  const toggleMenuHandler = () => {
    Dispatch(toggleMenu());
  };

  const handleSuggestion = (event) => {
    setsearchQuery(event.target.innerText);
    setShowSuggestions(false);
    navigate("/results?search_query=" + encodeURI(event.target.innerText));
  };

  return (
    <div className="grid grid-flow-col p-5 bg-white shadow-lg">
      <div className="flex col-span-1 gap-8">
        <img
          onClick={toggleMenuHandler}
          className="h-8 cursor-pointer"
          alt="menu-icons"
          src="./Images/Menu-icon.png"
        />

        <img
          className="h-8"
          alt="YouTube Logo"
          src="https://tse4.mm.bing.net/th?id=OIP.gdd5Vgi_qnWF2jFwlmygPAHaBp&pid=Api&P=0&h=180"
        />
      </div>
      <div className="col-span-9">
        <div>
          <input
            className="w-1/2 border border-gray-500 py-2 align-top rounded-l-full px-6"
            type="text"
            value={searchQuery}
            onChange={(e) => setsearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="h-[41px] border border-gray-500 rounded-r-full align-top bg-slate-200 hover:bg-slate-500">
            <img
              className="h-4 px-4 border-l-slate-900"
              alt="logo"
              src="./Images/Search-button.png"
            />
          </button>
          {showSuggestions && (
            <div className="bg-white py-2 px-4 w-[34rem] rounded-3xl shadow-2xl absolute">
              <ul>
                {suggestion.map((s) => (
                  <li
                    key={s}
                    onMouseDown={(e) => handleSuggestion(e)}
                    className="px-2 py-1 flex gap-2 hover:bg-slate-300 rounded-3xl"
                  >
                    <img
                      className="h-4"
                      alt="search"
                      src="./Images/Search-button.png"
                    />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-wrap col-span-2 gap-7">
        <img
          className="h-8 rounded-full drop-shadow-2xl hover:border border-gray-900"
          alt="User-Logo"
          src="./Images/mic-logo2.png"
        />
        <img
          className="h-8 gap bg-white rounded-full"
          alt="User-Logo"
          src="./Images/user-image.jpg"
        />
      </div>
      <div
        className="border border-cyan-600 google-element"
        id="google-element"
      ></div>
    </div>
  );
};

export default Head;
