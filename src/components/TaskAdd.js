
import { highlight ,add} from './Icons';
import Button from './Button';
import './TaskAdd.css';
import { useContext, useEffect, useRef, useState } from 'react';
import context_list from './context';


export default function TaskAdd({data , edit, val, setTask}){
  // const [a , aa] =useState({})
  let a =useRef({})
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
   console.log(val)
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
 let t = data.filter(item => item.id==val)
useEffect(()=>{
  if(val){
    // let x=   document.querySelector("#task").value ;
    // let y = document.querySelector("#description").value;
    // let z = m.highlight;

  //  x = t[0].task;
  //  y = t[0].description;
  // z = t[0].highlight;
    document.querySelector("#task").value = t[0].task;
    document.querySelector("#description").value = t[0].description;
    m.highlight = t[0].highlight;
    m.complete = t[0].complete;
    m.id = t[0].id;

    // a.current = {
    //   task : document.querySelector("#task").value,
    //   description : document.querySelector("#description").value,
    //   highlight : m.highlight,
    //   complete : t[0].complete,
    //   id : val

    // }
    // console.log(a.current , "asdfghjkl")
  
  }
},[val])
if(val){
  a.current = m;
}
function clearf (){
  setTask(null)
  document.querySelector("form").reset();
  console.log(val, "  val value")
}

    return(

        <div className="main-container">
            <div className="button-container">
            <div className="highlight"> 
<Button svg = {highlight} cTask ={"green"} id={"ii"} onclick={edit} paylod={()=>highlightChange()}>highlight</Button>
           </div>
           {val ?  <div className="add"><Button svg = {add} cTask ={"red"} id ={"add"} onclick={edit} paylod={[a.current,clearf]}>done</Button></div> :
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