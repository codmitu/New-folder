import React from 'react'
import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { data } from './firebaseDatabase';
import firebase from 'firebase';
import {
      Form,
      Input,
      FormGroup
} from 'reactstrap'; //npm i bootstrap reactstrap uuid


export const AddForm = () => {

      const [item, setItem] = useState('');
      const [info, setInfo] = useState('');
      const history = useHistory();

      const add = (e) => {
            e.preventDefault();
            data.collection("todos").add({
                  inprogress: false,
                  timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                  item: item,
                  info: info
            });
      }


      const goHome = () => {
            setTimeout(() => {
                  history.push("/");
            }, 10);
      }


      return (
            <Form onSubmit={add} style={{ width: "250px", margin: "auto" }} className="shadow p-3 mb-5 bg-body rounded">
                  < FormGroup >
                        <Input type="text"
                              className="item"
                              required
                              spellCheck="false"
                              placeholder="write something.."
                              maxLength="20"
                              value={item}
                              onChange={(e) => setItem(e.target.value)} />
                  </FormGroup>
                  <FormGroup>
                        <Input type="textarea"
                              placeholder="Info (optional)"
                              spellCheck="false"
                              maxLength="100"
                              className="textarea"
                              value={info}
                              onChange={(e) => setInfo(e.target.value)} />
                  </FormGroup>
                  <button type="submit" className='btn btn-primary' onClick={goHome}>Add Item</button>
                  <Link to="/" className='btn btn-outline-secondary ml-2'>Cancel</Link>
            </Form >
      )
}