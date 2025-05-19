import React from "react";
import useVideoTrailer from "../hooks/useVideoTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useVideoTrailer(movieId);
  return (
    <div className="">
      <iframe
        className="w-screen h-screen"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
