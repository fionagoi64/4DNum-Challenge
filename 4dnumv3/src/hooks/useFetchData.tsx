import { useState, useEffect } from "react";
import axios from "axios";

const useFetchResults = (date: Date, apiEndpoint: string) => {
  const [apiData, setApiData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);
        const formattedDate = date.toISOString().split("T")[0]; // YYYY-MM-DD
        const res = await axios.get(`/${apiEndpoint}/result/${formattedDate}`);
        setApiData(res.data);
      } catch (err) {
        setError("Error fetching data");
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [date, apiEndpoint]);

  return { apiData, loading, error };
};

export default useFetchResults;
