import React, { useState } from 'react';
import { IState as Props } from "../App";

interface IProps {
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

export const AddToList: React.FC<IProps> = ({ people, setPeople }) => {

    const [input, setInput] = useState({
        name: "",
        age: "",
        note: "",
        img: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    const handleClick = (): void => {
        if (!input.name || !input.age || !input.img) {
            return;
        };
        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                url: input.img,
                note: input.note
            }
        ]);
        setInput({
            name: "",
            age: "",
            note: "",
            img: ""
        });
    }
    return (
        <div className="AddToList">
            <input type="text" name="name" className="AddToList-input" placeholder="Name" value={input.name} onChange={handleChange} />
            <input type="text" name="age" className="AddToList-input" placeholder="Age" value={input.age} onChange={handleChange} />
            <input type="text" name="img" className="AddToList-input" placeholder="Image Url" value={input.img} onChange={handleChange} />
            <textarea name="note" className="AddToList-input" placeholder="Notes" value={input.note} onChange={handleChange}></textarea>
            <button className="AddToList-btn" onClick={handleClick}>Add to list</button>
        </div>
    )
}
