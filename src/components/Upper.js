import TaskAdd from "./TaskAdd";
import { useContext, useEffect, useReducer, useState } from 'react';
import TaskList from "./TaskList";
import data from "./data";
import context_list from "./context";
import contextLower from "./for_lowerContext";
export default function Upper({task, setTask ,edt, setedt, list, dispach}) {


     return (
          <context_list.Provider value={task}>
               <contextLower.Provider value = {[list,dispach,task]}>
               <div className="upper">
                    <TaskAdd data={list} edit={dispach} val={edt} setTask={setedt}></TaskAdd>
                    <TaskList data={list} edit={dispach} task={task} setTask={setTask}></TaskList>
                    {/* <button onClick={() => console.log(list)}>ggg</button> */}
               </div>
               </contextLower.Provider>
          </context_list.Provider>
     )
}