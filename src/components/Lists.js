import React from 'react';
import { v4 as uuid } from 'uuid';
import {Link} from "react-router-dom";

function Lists(props) {
    const newListTitleRef = React.useRef();

    function removeListHandler(id) {
        props.onRemoveList(id);
    }

    function addListHandler(e){
        //Prevent browser submit refresh
        e.preventDefault();
        //create new list
        const list = {
            id: uuid(),
            title: newListTitleRef.current.value
        }
        //Add the list
        props.onAddList(list);
        //Empty the input
        newListTitleRef.current.value="";
    };
    return (
        <ul>
            {props.data.map(list => (
                <li key={list.id}>
                    <Link key ={list.id} to={"/" + list.id}>{list.title}</Link>
                    <button onClick={()=> removeListHandler(list.id)}>x</button>
                </li>
            ))}

            <li>
                <form onSubmit={{addListHandler}}>
                    <input
                        type="text"
                        placeholder="New List"
                        ref={{newListTitleRef}}
                        />
                    <button>Add</button>
                </form>
            </li>
        </ul>
    );
}

export default Lists;