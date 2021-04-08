import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header">
            <h1>Title</h1>
            <nav>
                <Link to="/">Main page</Link>
                <Link to="/add">Add new section</Link>
            </nav>
        </header>
    )
}
