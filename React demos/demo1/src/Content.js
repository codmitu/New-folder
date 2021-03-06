import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ListItems } from './ListItems';
import { data } from './firebaseDatabase';

export const Content = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodos();
    }, []);


    const getTodos = () => {
        data.collection("todos").onSnapshot(querySnapshot => {
            setTodos(
                querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    item: doc.data().item,
                    info: doc.data().info,
                    inprogress: doc.data().inprogress
                }))
            )
        })
    }

    return (
        <>
            <section className="shadow p-3 mb-2 bg-body rounded">
                <h2>To buy . . .</h2>
                <ol className="list">
                    {todos.map((todo) => (
                        <ListItems
                            item={todo.item}
                            info={todo.info}
                            inprogress={todo.inprogress}
                            id={todo.id}
                            key={todo.id}
                        />
                    ))}
                </ol>
            </section >
            <Link to="/form"><button className="btn btn-success" >Add Item</button ></Link >
        </>
    )
}
