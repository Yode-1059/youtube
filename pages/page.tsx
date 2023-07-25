import React, { useState, useEffect } from "react";
import Serch from "../components/serch";

const Page = () => {
  const [res, setRes] = useState<any>([]);
  const [vtag, setVtag] = useState<any>("");

  const useRes = (i: any) => {
    console.log(i.items[0]);
    setRes(i.items);
  };
  const selectVideo = (etag: string) => {
    setVtag("https://www.youtube.com/embed/" + etag);
  };
  const yohan = () => {
    console.log("yohan");
  };
  return (
    <div>
      <div>
        <Serch setRes={useRes}></Serch>
        {vtag && (
          <>
            <iframe
              className=" w-full h-60 mb-4"
              id="ytplayer"
              width="640"
              height="360"
              src={vtag}
            />
          </>
        )}
      </div>
      <p className=" text-center mb-4">検索結果</p>
      <div className=" overflow-x-auto h-96">
        {res.map((item: any, index: any) => {
          return (
            <div
              key={index}
              className=" mb-3"
              onClick={selectVideo.bind(this, item.id.videoId)}
            >
              <img
                src={item.snippet.thumbnails.high.url}
                alt=""
                className=" w-full"
              />
              <p>{item.snippet.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
