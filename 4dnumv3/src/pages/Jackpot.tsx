import React, { useEffect } from "react";
import { Card } from "../components/Card";
import useFetchData from "../hooks/useFetchData";

const Jackpot = () => {
  const { date, setDate, allData } = useFetchData(new Date());

  useEffect(() => {
    // Optionally, you can use setDate to update the date state
    // setDate(new Date());
  }, []);

  return (
    <Card allData={allData}>
      <h1 className="h-[1000px]">This is 4DNum</h1>
    </Card>
  );
};

export default Jackpot;
