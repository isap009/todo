import React, { useState } from 'react'
import Show from "./Show"
import "./ShowList.css"
import {useSelector} from 'react-redux';
function ShowList() {

    const todos = useSelector(state => state.todos)
    console.log(todos)
    if(!todos || !todos.length){
        return <h2>NO TODOS </h2>
    } 
         
    return (
        <div className="showlist">
        {todos.map(todo=>
            <Show id={todo.id} data={todo.label}></Show>
        )  
} 
        </div>
    )
}

export default ShowList
