import React, {useState} from "react";

import style from './TodoList.module.css'

import { HiOutlineTrash} from 'react-icons/hi';
import { BiEditAlt } from 'react-icons/bi';
import { BsClipboardCheck } from 'react-icons/bs';
import { FiSave } from 'react-icons/fi';


function TodoList({todo, setTodo}) {

    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')
    
    function deleteTodo(id) {
        let newTodo = [...todo].filter(item => item.id!=id)
        setTodo(newTodo)
    }

    function statusTodo(id) {
       let newTodo = [...todo].filter(item => {
            if(item.id == id) {
                item.status = !item.status
            }
            return item
       })
       setTodo(newTodo) 
    }

    function editTodo(id, title) {
        setEdit(id)
        setValue(title)
    }

    function saveTodo(id) {
        let newTodo = [...todo].map(item => {
            if(item.id == id){
                item.title = value
            }
            return item
        })
        setTodo(newTodo)
        setEdit(null)
    }

    

    return (
            <div className={style.wrapper}>
                {
                   todo.map( item => (
                    <div className={style.item} key={item.id}>
                        {
                            edit == item.id ? 
                            <div >
                                <input className={style.item_input} value={value} onChange={(e)=>setValue(e.target.value)}/>
                            </div> : <div className={item.status? style.title : style.closeTodo }>{ item.title }</div>
                        }
                        {
                            edit == item.id ?
                            <div>
                                <FiSave className={style.icon} onClick={ ()=> saveTodo(item.id)}/>
                            </div> : 
                            <div className={style.icon_wrapper}>
                                <HiOutlineTrash className={style.icon} onClick={()=>deleteTodo(item.id)}/>
                                <BiEditAlt className={style.icon} onClick={()=>editTodo(item.id, item.title)}/>
                                <BsClipboardCheck className={style.icon} onClick={()=>statusTodo(item.id)}/>
                            </div>
                        }
                        
                    </div>
                    ))
                }
            </div>
    )
}

export default TodoList;