import './Body.css';
import Upper from './Upper';
import context_list from './context';
import data from "./data";
import { useContext, useEffect, useReducer, useState } from 'react';
import TaskDescription from './TaskDescription';
export default function Body() {
    const [task, setTask] = useState(null);
    const [edt, setedt] = useState(null);
    const [list, dispach] = useReducer(listReducer, data);
    // let cl =useContext(contextLower)
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
               
                // console.log(" fsf ------------------", typeof(action.paylod)," +++++ ",typeof(list))
                // return list.map(item => {
                //     if (item.id === action.paylod) {
                //         return {task: "hhhhh"}
                //     }
                //     return item;
                // })
                
                setTask(null)
                return list.filter(item => item.id !== action.paylod);
            // return  list.filter(item=>{
            //           if(item.id != action.payload){
            //                return item;
            //           }
            //      })
           

            case 'edit':
                setedt(action.paylod)
                console.log(edt, " gfyn ")
                return list;

            case 'done':
                console.log(action.paylod[0], "llllllllllllllllllll")
                action.paylod[1]();
                return list.map(item => {
                    if (item.id === action.paylod[0].id) {
                        return action.paylod[0]
                    }
                    return item;
                })
            // console.log(action.paylod , "llllllllllllllllllll")
            // return list
           
            case 'complete':
                return list.map(item => {
                    if (item.id === action.paylod) {
                        return {
                            ...item,
                            complete: !item.complete
                        };
                    }
                    return item;
                });



            default:
                return list;


        }
    }
    console.log(typeof (task), "---");
    console.log(typeof (list));
    console.log(typeof (dispach));
    // console.log(tas),"---");
    // console.log(list);
    // console.log(dispach);

    // const [task, setTask] = useState(null);
    return (
        <context_list.Provider value={task}>
            <div className="b-out">
                <div className="b-in">
                    <Upper task={task} setTask={setTask} edt={edt} setedt={setedt} list={list} dispach={dispach}></Upper>
                    <div className="lower">
                        <TaskDescription list={list} onclick={dispach}></TaskDescription>
                    </div>
                </div>
            </div>
        </context_list.Provider>
    )
}
