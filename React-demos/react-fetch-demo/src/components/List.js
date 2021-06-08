import React from 'react'
import { Link } from 'react-router-dom'

export default function List({ data }) { // if -> (props) instead of ({data}) then -> const data = props.data;

    return (
        Object.entries(data).map(([index, elem]) => (
            <div key={index} data={index}>
                <Link to={`/details/${index}`} style={{ all: "unset", cursor: "pointer" }}>
                    <p>{elem.info} {elem.item}</p>
                </Link>
            </div>
        ))
    );
}
