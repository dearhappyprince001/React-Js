import { useState, useEffect } from "react";

//useFetch is the custom Hook.
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}

function DataComponent() {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  return (
    <div>
      {loading ? <p>Loading...</p> : <p>Data: {JSON.stringify(data)}</p>}
    </div>
  );
}

export default DataComponent;
