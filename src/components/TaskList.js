import { edit, remove } from './Icons';
import List from './List';
import './TaskList.css';
import Button from './Button';
export default function TaskList(){

   return(
    <div className="main-container">
    <div className="button-container">
    <div className="highlight"> 
     <Button 
    svg={remove} cTask={"blue"} id={"remove"}>delete</Button>
    </div>
    <div className="add">
    <Button 
    svg={edit} cTask={"blue"} id={"edit"}>edit</Button>
    </div>
    </div>
    <div className="list-box">
        <List></List>
        <List></List>
        <List></List>
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