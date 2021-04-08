import { useState, useEffect } from 'react';


export default function useAsync(url) {
    const [data, setData] = useState([]); // getRes (goes into) data
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        console.log('fetching data');
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal }) // , { signal: abortCont.signal }   <--- this goes  after url
            .then(res => {
                if (!res.ok) {
                    throw Error("Couldn't get the data from the server.")
                }
                return res.json()
            })
            .then(receivedData => {
                // window.scrollTo(0, 0);
                setData(receivedData.filter(Boolean));
                setLoading(false);
                setError(null)
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log("fetch aborted");
                }
                setError(err.message)
                setLoading(false)
            })
        return () => abortCont.abort();
    }, [url]);

    // useEffect(() => {
    //     const getData = async () => {

    //         const res = await fetch(url + ".json");
    //         const getRes = await res.json();
    //         setData(getRes);
    //         setLoading(false);

    //     }
    //     getData();
    // }, [url]);

    return { data, loading, error };
}
