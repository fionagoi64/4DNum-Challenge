import { useState, useEffect } from "react";
import { axiosPublic } from "../data/apiData";
import { API_V1 } from "../data/apiData";
import { localData } from "../data/localData";

const useFetchData = (initialDate: Date) => {
  const [date, setDate] = useState<Date>(initialDate);
  const [apiData, setApiData] = useState<any[]>([]);
  const [allData, setAllData] = useState<any[]>([]);

  const getResult = async (selectedDate: Date) => {
    try {
      const formattedDate = selectedDate.toISOString().split("T")[0]; //YYYY-MM-DD
      const response = await axiosPublic.get(
        `/${API_V1}/result/${formattedDate}`
      );
      setApiData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getResult(date);
  }, [date]);

  useEffect(() => {
    const AllData = apiData
      .filter((selectedData) =>
        localData.some((extraItem) => extraItem.type === selectedData.type)
      )
      .map((apiItem) => {
        const all = localData.find(
          (extraItem) => extraItem.type === apiItem.type
        );
        return { ...apiItem, ...all };
      });
    setAllData(AllData);
  }, [apiData]);

  return { date, setDate, allData };
};

export default useFetchData;
