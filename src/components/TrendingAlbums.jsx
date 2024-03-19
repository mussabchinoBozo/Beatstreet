import React from "react";
import MusicCard from "./MusicCard";
import { useMusicContext } from "../Context/MusicContext";

const TrendingAlbums = ({ data }) => {
  console.log("trendingAlbums", data);
  return (
    <div className="flex gap-6 overflow-scroll h-full">
      {data &&
        data.length > 0 &&
        data.map((item, index) => {
          if (item.type === "album") {
            return <MusicCard key={index} {...item} />;
          }
          if (item.type === "playlist") {
            return <MusicCard key={index} {...item} />;
          }
          return null;
        })}
    </div>
  );
};

export default TrendingAlbums;
