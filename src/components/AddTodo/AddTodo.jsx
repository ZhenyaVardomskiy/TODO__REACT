import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import style from './AddTodo.module.css'
import { BsFillPlusSquareFill } from 'react-icons/bs';

function AddTodo ({todo, setTodo}) {

    const [value, setValue] = useState('')

    function saveTodo() {
        setTodo(
            [...todo,{
                id:uuidv4(),
                title:value,
                status:true
            }]
        )
        setValue('')
    }

    return (
        <div className={style.wrapper}>
            <input className={style.input} placeholder="Create a task" value={value} onChange={(e)=>setValue(e.target.value)}/>
            <BsFillPlusSquareFill className={style.btn} onClick={saveTodo}/>
        </div>
    )
}

export default AddTodo;