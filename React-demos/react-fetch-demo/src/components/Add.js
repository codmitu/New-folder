import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Add() {
    const [item, setItem] = useState('');
    const [info, setInfo] = useState('');
    const [pending, setPending] = useState(false);
    const history = useHistory();
    const url = 'https://shopping-list-bc921-default-rtdb.europe-west1.firebasedatabase.app/';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setPending(true);
        let data = { item, info };
        await fetch(url + '.json', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        setPending(false);
        history.push('/');
    }


    return (
        <div className="add">
            <p>Add</p>
            <form onSubmit={handleSubmit}>
                <label>Item</label>
                <input required type="text" value={item} onChange={(e) => setItem(e.target.value)} />
                <label>Info</label>
                <textarea required type="text" value={info} onChange={(e) => setInfo(e.target.value)}></textarea>
                {!pending && <button>Add</button>}
                {pending && <button>Adding...</button>}
            </form>
        </div>
    )
}
