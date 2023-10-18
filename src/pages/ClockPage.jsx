import { useState } from "react";
import Layout from "../components/Layout/Layout";
import { useEffect } from "react";
import { getHours, getMinutes, getSeconds } from "date-fns";

const getTime = (date) => {
  return {
    getHoure: getHours(date),
    getMinet: getMinutes(date),
    getSecond: getSeconds(date),
  };
};

const formetTimer = (time) => {
  return time < 10 ? `0${time}` : time;
};
const Clock = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    setTimeout(() => {
      setDate(new Date());
    }, 1000);
  }, [date]);

  const time = getTime(date);

  return (
    <Layout>
      <h1>Clock</h1>
      <h1>
        {formetTimer(time.getHoure)}:{formetTimer(time.getMinet)} :{" "}
        {formetTimer(time.getSecond)}
      </h1>
    </Layout>
  );
};

export default Clock;
