import { Checkbox } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import './TodoItem.css';
import { setCheck } from '../features/todoSlice';

const TodoItem = ({ name, done, id }) => {
    const dispatch = useDispatch();
    const handleChange = () => {
        dispatch(setCheck(id))
    }
    return (
        <div className="todoItem">
            <Checkbox
                checked={done}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                color="primary"
            />
            <p className={done && 'todoItem--done'}>{name}</p>
        </div>
    )
}

export default TodoItem
