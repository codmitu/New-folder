import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useAsync from '../useAsync';

export default function Edit() {
    const url = 'https://shopping-list-bc921-default-rtdb.europe-west1.firebasedatabase.app/';
    const { index } = useParams();
    const { data, loading } = useAsync(url + index);
    // const [info, setInfo] = useState({ value: data.info, id: 1 });
    // useEffect(() => {

    // }, [data.info])


    console.log({ data });
    return (
        <form>
            {data && <input type="text" value={data.info} />}
            <button>Edit</button>
        </form>
    )
}
