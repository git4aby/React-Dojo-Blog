import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const abortCtrl = new AbortController();
  useEffect(() => {
    setTimeout(() => {
      fetch(url, { signal: abortCtrl.signal })
        .then((res) => {
          console.log(res);
          if (!res.ok) {
            throw Error("Something went wrong");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Fetch Aborted");
          } else {
            setError(err.message);
            setIsPending(false);
          }
        });
    }, 1000);
    return () => abortCtrl.abort();
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
