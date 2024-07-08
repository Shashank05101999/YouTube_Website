import React from "react";

const VideoCard = ({ info }) => {
  console.log("sa", info);

  // const { snippet, statistics } = info;
  // const { channelTitle, title, thumbnails } = snippet;
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics;

  return (
    <div
      className="   mr-4 p-2h-[90%]  cursor-pointer shadow-2xl hover:bg-slate-200  rounded-lg  w-[800px] md:w-[300px] py-5  mx-8 "
      // onClick={handleVideoContainerClick}
    >
      <div>
        <img
          alt="img"
          className="rounded-lg w-60 md:w-[300px]"
          src={thumbnails.medium.url}
        />
      </div>
      <div className=" flex  h-36 flex-row w-80 px-3">
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
