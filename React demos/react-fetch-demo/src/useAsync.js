import { useState, useEffect } from 'react';

export default function useAsync(url) {
    const [data, setData] = useState(null); // getRes (goes into) data
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch(url + ".json");
                const getRes = await res.json();
                setData(getRes);
                setLoading(false);
            } catch {
                throw new Error("Whoops! Something went wrong.");
            }
        }
        getData();
    }, [url]);

    return { data, loading };
}
