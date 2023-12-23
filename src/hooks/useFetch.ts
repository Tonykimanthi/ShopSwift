import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | Error>(null);

  useEffect(() => {
    setLoading(true)
    const handleFetch = async () => {
      try {
        const resp = await fetch(url);
        const respJson = await resp.json();
        setData(respJson);
        setLoading(false)
        console.log(data);
      } catch (error) {
        setError(error as Error)
        setLoading(false)
      }
    };

    handleFetch();
  }, [url]);

  return {data, loading, error};
};
export default useFetch;
