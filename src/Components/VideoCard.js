import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);

  // const { snippet, statistics } = info;
  // const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-80 shadow-2xl cursor-pointer hover:bg-slate-200 rounded-2xl">
      <img  className="rounded-2xl" alt="thumbnail" src={info?.snippet?.thumbnails?.medium?.url} />
      <ul >
        <li className="font-bold">{info?.snippet?.title}</li>
        <li>{info?.snippet?.channelTitle}</li>
        <li className="font-medium">{info?.statistics?.viewCount} Views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
