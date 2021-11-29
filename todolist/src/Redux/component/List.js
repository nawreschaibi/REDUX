import React from 'react'
import {useDispatch} from 'react-redux'
import {deleteTask,doneTask} from '../Redux/Actions/Action' 
import Edit from './Edit'




function list({item}) {
    const dispatch = useDispatch()
    return (
        <div classename='item'>
            <li className ={item.isdone?'done':null}>{item.text}</li>
            <button onClick={()=>dispatch(deleteTask(item.id))}>{item.Done?'done':'undone' Delete</button>
            <Edit item={item}/>
            <button onClick={()=>dispatch(doneTask(item.id))}>Done</button>

        </div>
    )
    
}


