import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appslice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  });
  return (
    <div className=" p-3 m-8  border rounded-full">
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
    </div>
  );
};

export default WatchPage;
