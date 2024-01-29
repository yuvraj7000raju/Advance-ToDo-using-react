
import { highlight ,add} from './Icons';
import Button from './Button';
import './TaskAdd.css';
import { useContext, useRef, useState } from 'react';
import context_list from './context';


export default function TaskAdd({data , edit, val}){
  let h = 2;
const tsk = useContext(context_list);
let m = {highlight : false,
complete : false,
id : data.length+1};

// if(val){

// }

function handleTask(e){
   m.task = e.target.value;
   console.log(tsk)
}
function handleDescription(e){
  m.description = e.target.value;
  console.log(m)
}
function highlightChange(){
    if(h%2==0){
     m.highlight = !m.highlight;
     console.log(m.highlight)
    }
    h++;
}

function clearf (){
  document.querySelector("form").reset();
}

    return(

        <div className="main-container">
            <div className="button-container">
            <div className="highlight"> 
<Button svg = {highlight} cTask ={"green"} id={"ii"} onclick={edit} paylod={()=>highlightChange()}>highlight</Button>
           </div>
           {val ?  <div className="add"><Button svg = {add} cTask ={"red"} id ={"add"} onclick={edit} paylod={[m,clearf]}>add</Button></div> :
            <div className="add"><Button svg = {add} cTask ={"red"} id ={"add"} onclick={edit} paylod={[m,clearf]}>add</Button></div>}
            </div>
            <div className="input-container">
              <form className="form">
                <textarea type="text" id="task" placeholder='Enter task here ...' onChange={handleTask}></textarea>
                <textarea type="text" id="description" placeholder='Add description ...' onChange={handleDescription}></textarea>
              </form>
            </div>
        </div>

    )
}