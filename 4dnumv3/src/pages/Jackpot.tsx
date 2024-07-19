import React, { useEffect } from "react";
import { NumberContent } from "../components/cards/NumberContent";
import useFetchData from "../hooks/useFetchData";

export const Jackpot = () => {
  const { date, setDate, allData } = useFetchData(new Date());

  useEffect(() => {
    // Optionally, you can use setDate to update the date state
    // setDate(new Date());
  }, []);

  return <div></div>;
};
