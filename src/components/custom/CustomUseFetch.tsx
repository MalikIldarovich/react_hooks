import { useState, useEffect } from "react";

const CustomUseFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    try {
      const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        if (data) setData(data);
      };
      fetchData();
    } catch (error: any) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  return { data, isLoading, error };
};

export default CustomUseFetch;

/** Имплементация
 *  const {data, error, isLoading} = useFetch("http://api.company.com");
 *  return (
 *    <>
 *      {data &&
 *        <div>
 *          {data.map(d => <div key={d.id}>{d.name}</div>)}
 *        </div>
 *      }
 *      {isLoading && <div>Loading...</div>}
 *      {error && <div>{error.message}</div>}
 *    </>
 *  )
 */
