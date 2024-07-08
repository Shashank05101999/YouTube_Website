import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appslice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import { BellAlertIcon } from "@heroicons/react/20/solid";
import { HandThumbDownIcon } from "@heroicons/react/16/solid";
import { HandThumbUpIcon } from "@heroicons/react/16/solid";
import LiveChat from "./LiveChat";
import {
  YOUTUBE_VIDEO_API,
  YOUTUBE_VIDEO_WATCH_API,
} from "../Constants/Constant";
import { HeartIcon } from "@heroicons/react/24/outline";

const WatchPage = () => {
  const [Subscribe, setSubscribe] = useState(false);
  const [liked, setLiked] = useState(false);
  const [unliked, setUnliked] = useState(false);
  const [searchParams] = useSearchParams();

  let videoId = searchParams.get("v");
  const dispatch = useDispatch();
  const [showLiveChats, setShowLiveChats] = useState(false);

  // .....................
  const [video, setVideo] = useState({});
  const [relatedVideos, setRelatedVideos] = useState([]);

  const getVideos = async () => {
    const data = await Promise.all([
      fetch(YOUTUBE_VIDEO_WATCH_API + videoId),
      fetch(YOUTUBE_VIDEO_API),
    ]);
    const watchVideoJson = await data[0].json();
    const recVideoJson = await data[1].json();
    setVideo(watchVideoJson?.items[0]);
    setRelatedVideos(recVideoJson?.items);
    console.log(relatedVideos);
  };

  useEffect(() => {
    dispatch(closeMenu());
    getVideos();
  }, [videoId]);
  // ..................

  return (
    <>
      <div className="flex flex-col  px-6 w-full ">
        <div className=" p-3 m-5 flex w-full ">
          <div className="">
            <iframe
              width="1000"
              height="515"
              src={"https://www.youtube.com/embed/" + videoId}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <h1 className=" font-bold md:text-2xl md:max-w-[850px] max-w-[380px]  truncate-2-lines text-lg ">
              {video?.snippet?.title}
            </h1>
            <div className=" border bg-slate-300 w-[95%] rounded-3xl py-3 pl-5 ml-6 ">
              <div className="flex">
                <img
                  className="rounded-full bg-gray-400 md:w-10 md:h-10 w-20 h-20"
                  alt="channel pic"
                  src={video?.snippet?.thumbnails?.default?.url}
                />
                <div className="ml-2 flex  flex-col justify-center mt-[-5px] md:mt-[-10px]">
                  <h2 className="md:text-lg text-sm font-bold ">
                    {" "}
                    {video?.snippet?.channelTitle}
                  </h2>
                  <p className="md:mt[-10px] md:text-lg text-sm">
                    {video?.statistics?.viewCount} Views
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
                  <div className="flex mx-[20%] ">
                    <HeartIcon className="text-2xl size-10 flex flex-row  hover:text-red-600" />
                    <button
                      className=" px-8 text-2xl  hover:border border-b-slate-800  hover:shadow-2xl rounded-full hover:bg-slate-400 ml-4"
                      onClick={() => setShowLiveChats(!showLiveChats)}
                    >
                      LIVE
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex  ">
              <div className=" flex gap-x-24">
                <div className="mt-5 border bg-slate-200  rounded-3xl  pl-5 ml-5 w-[60rem]">
                  <p className="text-3xl mt-5 px-5 font-semibold ">
                    {" "}
                    Comments: ({video?.statistics?.commentCount})
                  </p>
                  <CommentContainer />
                </div>
              </div>
            </div>
          </div>
          {showLiveChats ? (
            <div className="w-full ">
              <LiveChat />
            </div>
          ) : (
            <div className="">
              {relatedVideos?.map((video) => (
                <Link
                  key={video?.id}
                  to={"/watch?v=" + video?.id}
                  onClick={() => window.scroll(0, 0)}
                >
                  <div className="px-3 m-2 mt-[20px] flex">
                    <img
                      className="rounded-xl w-[168px] h-[94px] "
                      alt="thumbnail"
                      src={video?.snippet?.thumbnails?.medium?.url}
                    />
                    <ul className="flex flex-col justify-start ml-2 w-60">
                      <li className="font-medium py-2 text-[14px] line-clamp-2 max-h-[50px] leading-5">
                        {video?.snippet?.title}
                      </li>
                      <li className="text-gray-500 text-[12px]">
                        {video?.snippet?.channelTitle}
                      </li>
                      <li className="text-gray-500 text-[12px]">
                        100 views{" "}
                        {(
                          Math.abs(
                            new Date(video?.snippet?.publishedAt) - new Date()
                          ) /
                          (60 * 60 * 24 * 1000)
                        ).toFixed(1)}{" "}
                        days ago
                      </li>
                    </ul>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WatchPage;
