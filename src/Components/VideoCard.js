import React from "react";
import WatchPage from "./WatchPage";

const VideoCard = ({ info }) => {
  console.log("sa", info);

  // const { snippet, statistics } = info;
  // const { channelTitle, title, thumbnails } = snippet;
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics;

  return (
    <div
      className=" align-middle m-2 mr-4 p-2h-[90%] py-8 cursor-pointer shadow-2xl hover:bg-slate-200  rounded-lg  w-[400px] md:w-[300px] gap-20"
      // onClick={handleVideoContainerClick}
    >
      <div>
        <img
          alt="img"
          className="rounded-lg w-[350px] md:w-[300px]"
          src={thumbnails.medium.url}
        />
      </div>
      <div className=" flex  mt-5 flex-row w-[300px]">
        <div className=" mr-2 mt-2 ">
          <img
            alt="img"
            className="rounded-full w-[40px] h-[40px] "
            src={snippet.thumbnails.default.url}
          />
        </div>

        <div className="w-[230px] ">
          <p className="font-bold truncate-2-lines">{title}</p>
          <p className="text-gray-600">{channelTitle}</p>
          <p className="text-gray-600">{viewCount} views</p>
        </div>
      </div>
      
    </div>
  );
};

export default VideoCard;
