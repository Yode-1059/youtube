import React, { useState, useEffect } from "react";
import Serch from "../components/serch";
import Start from "./start";
import Page from "./page";

const Home = () => {
  const [endedTime, setEndedTime] = useState<number>();
  const [time, setTime] = useState<any>();
  const [view, setView] = useState<boolean>(true);
  const endTime = (i: number) => {
    if (i != null) {
      setEndedTime(i);
    }
    console.log(endedTime, "endedTime");
  };
  useEffect(() => {
    setInterval(() => {
      let d = new Date();
      let hour = d.getHours().toString().padStart(2, "0");
      let minute = d.getMinutes().toString().padStart(2, "0");
      let seconds = d.getSeconds().toString().padStart(2, "0");
      setTime(hour + ":" + minute + ":" + seconds);
      if (d.getHours() - 1 == endedTime && d.getMinutes() == 50) {
        alert("10分前です");
      }
      if (
        d.getSeconds() === 0 &&
        d.getHours() === endedTime &&
        d.getMinutes() == 0
      ) {
        alert("終了します");
        setView(false);
        return;
      }
    }, 1000);
  }, [endedTime]);
  return (
    <div className=" container mx-auto py-5 w-96 px-3 border mt-5">
      {view && (
        <>
          <div className="Digit flex mb-5">
            {endedTime && <p className="digit">{endedTime}時に終了します</p>}
            <span className="flex-1"></span>
            <p>{time} </p>
          </div>
          {!endedTime && <Start endTime={endTime}></Start>}

          {endedTime && <Page></Page>}
        </>
      )}
    </div>
  );
};

export default Home;
