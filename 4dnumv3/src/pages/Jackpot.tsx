import React, { useEffect } from "react";
import { Card } from "../components/cards/NumberCard";
import useFetchData from "../hooks/useFetchData";

const Jackpot = () => {
  const { date, setDate, allData } = useFetchData(new Date());

  useEffect(() => {
    // Optionally, you can use setDate to update the date state
    // setDate(new Date());
  }, []);

  return <div></div>;
};

export default Jackpot;
