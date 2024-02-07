import { edt, remove } from './Icons';
import List from './List';
import './TaskList.css';
import Button from './Button';
import context_list from './context';
import { useContext, useState } from 'react';
export default function TaskList({data,edit,task,setTask}){
  let bb = useContext(context_list)
   return(

    <div className="main-container">
    <div className="button-container">
    <div className="highlight"> 
     <Button 
    svg={remove} cTask={"blue"} id={"remove"} onclick={edit} paylod={task}>delete</Button>
    </div>
    <div className="add">
    <Button 
    svg={edt} cTask={"blue"} id={"edit"} onclick={edit} paylod ={task}>edit</Button>
    </div>
    </div>
    <div className="list-box">
        {data.map((task , index)=>{
            console.log(task.task)
            task.id = index +1;
           return <List key={task.id} onclick={setTask}>{task}</List>
        })}
        {/* <List></List>
        <List></List>
        <List></List> */}
        {/* <List></List>
        <List></List>
        <List></List>
        <List></List>
        <List></List>
        <List></List> */}
    </div>
</div>

   )

}