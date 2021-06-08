import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useAsync from '../useAsync';

export default function Details() {
    const url = 'https://shopping-list-bc921-default-rtdb.europe-west1.firebasedatabase.app/';
    const { index } = useParams();
    const { data, loading } = useAsync(url + index);
    const [state, setState] = useState(false);
    const history = useHistory();
    const [pending, setPending] = useState(false);

    const handleDelete = async () => {
        await fetch(url + index, {
            method: 'DELETE'
        });
        history.push('/');
    }

    const handleEdit = async (e) => {
        e.preventDefault();
        setPending(true);
        let info = document.querySelector(".info").value;
        let item = document.querySelector(".item").value;
        await fetch(url + index + '.json', {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                info,
                item
            })
        })
        setPending(false);
        history.push('/');
    }


    const showForm = () => {
        document.querySelector(".info").value = data.info;
        document.querySelector(".item").value = data.item;
        document.querySelector(".editForm").style.display = "inline-block";
    }


    return (
        <div className="details" >
            {loading && <div style={{ fontSize: "2rem", color: "red" }}>Loading...</div>}
            {data && <p key={index}>{data.info} {data.item}</p>}
            <button onClick={handleDelete}>Delete</button>
            <form onSubmit={handleEdit} className="editForm" style={{ display: "none" }}>
                <input type="text" className="info" />
                <input type="text" className="item" />
                {!pending && <button type="submit">Confirm</button>}
                {pending && <button type="submit">Updating...</button>}
            </form>
            <button onClick={() => setState({ showForm: true })}>Edit</button>
            {state.showForm ? showForm() : null}
        </div>
    )
}
