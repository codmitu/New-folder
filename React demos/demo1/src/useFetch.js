// import { useState, useEffect } from 'react';

// export const useFetch = (url) => {
//     const [data, setData] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState(null);


//     useEffect(() => {
//         const abortCont = new AbortController();

//         fetch(url, { signal: abortCont.signal })
//             .then(res => {
//                 if (!res.ok) {
//                     throw Error("Couldn't get the data from the server.")
//                 }
//                 return res.json()
//             })
//             .then(receivedData => {
//                 setData(receivedData);
//                 setIsLoading(false);
//                 setError(null)
//             })
//             .catch(err => {
//                 if (err.name === 'AbortError') {
//                     console.log("fetch aborted");
//                 }
//                 setError(err.message)
//                 setIsLoading(false)
//             })
//         return () => abortCont.abort();

//     }, [url]);

//     return { data, isLoading, error };
// }