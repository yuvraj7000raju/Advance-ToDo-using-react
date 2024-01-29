import TaskAdd from "./TaskAdd";
import { useContext, useEffect, useReducer, useState } from 'react';
import TaskList from "./TaskList";
import data from "./data";
import context_list from "./context";
export default function Upper() {
     const [list, dispach] = useReducer(listReducer, data);
     const [val, valUpdate] = useState(null)

          function listReducer(list, action) {
               switch (action.type) {
                    case 'add':
                         action.paylod[1]();
                         return [...list, action.paylod[0]]
     
                    case 'highlight':
                         // return list.map(item => {
                         //      if (item.id === action.payload) {
                         //           return { ...item, backgroundColor: 'yellow' };
                         //      }
                         //      return item;
                         // })
                         action.paylod();
                         return list;
     
                    case 'delete':
                         console.log(action.payload," fsf ")
                         return list.filter(item => item.id !== action.paylod);
                         // return  list.filter(item=>{
                         //           if(item.id != action.payload){
                         //                return item;
                         //           }
                         //      })
                    case 'edit':
                        
                         action.payload()
                         return list;
     
     
     
     
                    default:
                              return list;
     
     
                    }
          }
     console.log(val)
   
     return (

          <div className="upper">
               <TaskAdd data={list} edit={dispach} val={val} valup={valUpdate}></TaskAdd>
               <TaskList data = {list} edit ={dispach} val ={val} valup ={valUpdate}></TaskList>
               <button onClick={() => console.log(list)}>ggg</button>
          </div>

     )
}