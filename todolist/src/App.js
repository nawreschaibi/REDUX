import logo from './logo.svg';
import './App.css';
import List from '../component/list'
import { useState } from 'react';
import Button from 'react-bootstrap'
import { addTask } from './Redux/const/Actions/Actions';
import Edit from './Redux/component/Edit';
function App() 
const dispatch = useDispatch()
const [newtext , setNewtext] = useState ('')
const todos = useSelector(state => state.todos)
const [all, setall] = useState(true)   
return 
<div className="todolist">
  <div className= "heading">
       <h1 className= "title"> To-do list </h1>
         <input 
            type="text"
            onChange={(e)=>setNewtext(e.target.value)}
            />
      
    <button onClick={()=>{if(newtext!=''){dispatch(addTask({id:Math.random(),isDone:false,Text:newtext}));setNewtext('')}}else{alert('text required ')}>Add</button>
      
      <Edit item={item}/>
  </div>

</div>




export default App;

