import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appslice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import { BellAlertIcon } from "@heroicons/react/20/solid";
import { HandThumbDownIcon } from "@heroicons/react/16/solid";
import { HandThumbUpIcon } from "@heroicons/react/16/solid";
import LiveChat from "./LiveChat";
import { YOUTUBE_VIDEO_API } from "../Constants/Constant";
import { HeartIcon } from "@heroicons/react/24/outline";

const WatchPage = () => {
  const [Subscribe, setSubscribe] = useState(false);
  const [liked, setLiked] = useState(false);
  const [unliked, setUnliked] = useState(false);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  },[]);

  // .....................

  const [videoData, setVideoData] = useState([]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    const allVideoData = json.items;
    const filteredDataById = allVideoData.filter(
      (video) => video.id === searchParams.get("v")
    );
    console.log("filteredDataById", filteredDataById);
    setVideoData(filteredDataById[0]);
  };

  useEffect(() => {
    getVideos();
  }, []);
  // ..................

  return (
    <>
      <div className="flex flex-col  px-6 w-full ">
        <div className=" p-3 m-5 flex w-full ">
          <div className="">
            <iframe
              width="1000"
              height="515"
              src={"https://www.youtube.com/embed/" + searchParams.get("v")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <h1 className=" font-bold md:text-2xl md:max-w-[850px] max-w-[380px]  truncate-2-lines text-lg ">
              {videoData?.snippet?.title}
            </h1>
          </div>
          <div className="w-full">
            <LiveChat />
          </div>
        </div>
        <div className=" border bg-slate-300 w-[70%] rounded-3xl py-3 pl-5 ml-5 ">
          <div className="flex">
            <img
              className="rounded-full bg-gray-400 md:w-10 md:h-10 w-20 h-20"
              alt="channel pic"
              src={videoData?.snippet?.thumbnails?.default?.url}
            />
            <div className="ml-2 flex  flex-col justify-center mt-[-5px] md:mt-[-10px]">
              <h2 className="md:text-lg text-sm font-bold ">
                {" "}
                {videoData?.snippet?.channelTitle}
              </h2>
              <p className="md:mt[-10px] md:text-lg text-sm">
                {videoData?.statistics?.viewCount} Views
              </p>
            </div>
            <div className="ml-[35%]">
              {Subscribe ? (
                <button
                  className="md:px-4  text-white bg-black  md:py-2 rounded-full md:ml-[-250px] md:text-lg text-sm   "
                  onClick={() => setSubscribe(!Subscribe)}
                >
                  Subscribe
                </button>
              ) : (
                <button
                  className="md:px-4 px-2 text-balck bg-neutral-200  md:py-2 py-1 rounded-full md:ml-[-250px]  md:text-lg text-sm   flex items-center"
                  onClick={() => setSubscribe(!Subscribe)}
                >
                  <BellAlertIcon className="md:w-[20px] md:h-[20px] w-[15px] h-[15px] mr-2" />
                  Subscribed
                </button>
              )}
            </div>
            <div className="flex">
              <button
                className=" px-2  md:px-4 bg-gray-100 md:py-2 py-1  rounded-l-full border-r-2"
                onClick={() => {
                  setLiked(!liked);
                  setUnliked(false);
                }}
              >
                <HandThumbUpIcon
                  className={
                    liked
                      ? "md:w-[30px] md:h-[30px] w-[20px] h-[20px] text-black"
                      : "md:w-[30px] md:h-[30px] w-[20px] h-[20px]] text-gray-400"
                  }
                />
              </button>

              <button
                className={
                  "px-2 md:px-4 bg-gray-100  py-1 md:py-2 rounded-r-full"
                }
                onClick={() => {
                  setUnliked(!unliked);
                  setLiked(false);
                }}
              >
                <HandThumbDownIcon
                  className={
                    unliked
                      ? "md:w-[30px] md:h-[30px]  w-[20px] h-210px] text-black"
                      : "md:w-[30px] md:h-[30px] w-[20px] h-[20px] text-gray-400"
                  }
                />
              </button>
              <div className="flex mx-[100%] ">
                <HeartIcon className="text-2xl size-10 flex flex-row  hover:text-red-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[70%] mt-5 border bg-slate-200 w-[70%] rounded-3xl  pl-5 ml-5">
          <p className="text-3xl mt-5 px-5 font-semibold ">
            {" "}
            Comments: ({videoData?.statistics?.commentCount})
          </p>
          <CommentContainer />
        </div>
      </div>
    </>
  );
};

export default WatchPage;
