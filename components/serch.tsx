import React, { useState } from "react";
import Button from "./button";
import axios from "axios";
const YOUTUBE_API_KEY = "AIzaSyC0ymAalthz-J3CTueJLn5I20j_TsgKkD4";

const Serch = (props: any) => {
  const [word, setWord] = useState("");
  const submit = () => {
    const url = `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=${word}&maxResults=5&key=${YOUTUBE_API_KEY}`;
    axios
      .get(url)
      .then((response) => {
        console.log(response);
        // state.videos = response.data.items;
        props.setRes(response.data);
        setWord("");
      })
      .catch(() => {
        console.log("通信に失敗しました");
      });
  };

  return (
    <div className=" flex mb-4">
      <input
        type="email"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        className="form-input px-4 py-2 rounded-full border flex-1 mr-7"
        name="word"
      />
      <Button onClick={submit}>検索</Button>
    </div>
  );
};

export default Serch;
