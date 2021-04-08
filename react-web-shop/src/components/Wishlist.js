import React from 'react';
import { useParams } from 'react-router-dom';

export default function Wishlist() {
    const index = useParams();
    console.log(index.length);

    return (
        <div>
            <h1>Wishlist</h1>
        </div>
    )
}
