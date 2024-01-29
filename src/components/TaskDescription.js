import "./TaskDescription.css";
import Button from "./Button";
import { complete } from "./Icons";
import { useContext, useEffect } from "react";
import contextLower from "./for_lowerContext";
import context_list from "./context";


export default function TaskDescription({list, onclick}){
console.log(typeof(task),"-----------||-----------",typeof(list))
console.log(list , "ppp")
let gg= useContext(context_list);
console.log(gg ,"---")
let ch = {
   task : " not selected!",
   description : "not !"

}
// useEffect(()=>{
//    if(gg){
//       ch = list.find(task =>{
//         return task.id == gg
//      })
     
//      console.log(ch," --- erf")
//   }
// },[list])
if(gg){
    ch = list.find(task =>{
      return task.id == gg
   })
   
   console.log(ch," --- erf")
}
// else{
//    //  ch = {
//    //    task : " not selected!",
//    //    description : "not !"

//    // }
// }

console.log(ch," --- erf")

return(
     <div className="description-container">
        <div className="d-up">
            <div className="d-task">
               {ch.task}
            </div>
            <div className="d-complete">
               <Button svg={complete} cTask={"orange"} id={"complete"} onclick={onclick} paylod={gg}>complete</Button>
            </div>
        </div>
        <div className="d-data">
{ch.description ? ch.description : "no description available"}
        </div>
     </div>
)
}