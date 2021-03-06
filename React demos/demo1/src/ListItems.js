import React from 'react';
import { GiCheckMark } from 'react-icons/gi'; //npm install react-icons --save
import { RiDeleteBin6Line } from 'react-icons/ri';
import { data } from './firebaseDatabase';
import './styles/ListItems.css';


export const ListItems = ({ item, info, inprogress, id }) => {

      const deleteItem = () => {
            data.collection("todos").doc(id).delete();
      }
      const markItem = () => {
            data.collection("todos").doc(id).update({
                  inprogress: !inprogress  // change from true to false and viceversa
            })
      }



      return (
            <div className="listDiv animate__animated" data-sdsf={id} key={id}>
                  <RiDeleteBin6Line className="deleteMark" onClick={deleteItem} />
                  <div>
                        <li className={inprogress ? "completed" : ""} data-text="list-item" >{item}</li>
                        <div className="moreInfo" >
                              <span className="infoIcon">i</span>
                              <span className="infoText">{info}</span>
                        </div>
                  </div>
                  <GiCheckMark className={inprogress ? "editIcon" : "editIcon2"} onClick={markItem} />
            </div>
      )
}

