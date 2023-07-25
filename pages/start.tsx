import React, { useState } from "react";
import Button from "../components/button";
import { useForm } from "react-hook-form";

const Start = (props: any) => {
  const { register, handleSubmit } = useForm<any>();

  const times = [
    { time: 0 },
    { time: 1 },
    { time: 2 },
    { time: 3 },
    { time: 4 },
    { time: 5 },
    { time: 6 },
    { time: 7 },
    { time: 8 },
    { time: 9 },
    { time: 10 },
    { time: 11 },
    { time: 12 },
    { time: 13 },
    { time: 14 },
    { time: 15 },
    { time: 16 },
    { time: 17 },
    { time: 18 },
    { time: 19 },
    { time: 20 },
    { time: 21 },
    { time: 22 },
    { time: 23 },
  ];

  const endApp = async (data: any) => {
    console.log(data.startTime);
    props.endTime(data.startTime);
  };

  return (
    <div className=" container mx-auto my-4">
      <form onSubmit={handleSubmit(endApp)}>
        <select
          id="startTime"
          className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
          {...register("startTime")}
        >
          <option hidden>終わる時間を選んでください</option>
          {times.map((time, index) => {
            return (
              <option key={index} value={time.time}>
                {time.time}
              </option>
            );
          })}
        </select>
        <Button>決定</Button>
      </form>
    </div>
  );
};

export default Start;
