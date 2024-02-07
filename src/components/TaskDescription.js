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
   description : " no description available !"

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

function savelocalstorage() {
   localStorage.setItem("data", JSON.stringify(list));
   console.log("local-storage saved")
}
// useEffect(()=>{
//    localStorage.setItem("data", JSON.stringify(list));
// })

return(
     <div className="description-container">
        <div className="d-up">
            <div className="d-task">
              Task -   {ch.task}
            </div>
            <div className="d-complete">
               <Button svg={complete} cTask={"orange"} id={"complete"} onclick={onclick} paylod={gg}>complete</Button>
            </div>
            <div className="save">
            <button type="button" onClick={savelocalstorage}>save</button>
            </div>
        </div>
        <div className="d-data">
{ch.description ? ch.description : "no description available"}
        </div>
     </div>
)
}