import { useContext, useEffect, useState } from 'react';
import'./List.css';
import context_list from './context';

import { completeSmall } from './Icons';
export default function List({children,onclick}){

   let bb = useContext(context_list);
  const[task,setTask] = useState(null)
   useEffect(()=>{
      if(children.highlight === true){
       document.getElementById(`${children.id}`).style.backgroundColor = "#e3e322";
      }
      else{
         document.getElementById(`${children.id}`).style.backgroundColor = "#AE7E7E";
      }
   
      //  if(children.id==bb){
      //    document.getElementById(`${children.id}`).style.border = "1px solid grey";
      //  }
      //  else{
      //    document.getElementById(`${children.id}`).style.border = "none";
      //  }


   },[children.highlight, children.complete])
   
   //   function handelClick(e){
   //       console.log("clicked")

   //       setTask(children.id)
   //       console.log(task)
   //       console.log(bb)
   //       document.getElementById(`${children.id}`).style.border = "1px solid grey";
         
   //   }
   function handelClick() {
      console.log("clicked");
  
      setTask(children.id);
      console.log(task)
      onclick(children.id)
  
      console.log(bb);
      document.getElementById(`${children.id}`).style.border = "1px solid grey";
    }



return(
  
     <div className="list-container" id={children.id} onClick={handelClick}>
        <span className="list-task">
         {children.id}.   {children.task}</span>
        <span className="completed">{children.complete && completeSmall}</span>

     </div>
     
)
}

