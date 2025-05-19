import React from "react";


const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen h-screen pt-[18%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="w-1/4 text-lg py-6">{overview}</p>
      <div>
        <button className=" bg-white px-8 py-2 text-black rounded-lg hover:bg-opacity-90" >▶️Play</button>
        <button className= " mx-3 bg-gray-500 px-8 py-2 rounded-lg bg-opacity-50">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
