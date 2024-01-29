import './Body.css';
import Upper from './Upper';
import context_list from './context';
import TaskDescription from './TaskDescription';
import { useState } from 'react';
export default function Body(){
    // const [task, setTask] = useState(null);
    return(
        // <context_list.Provider value = {task}>
        <div className="b-out">
            <div className="b-in">
               <Upper></Upper>
                <div className="lower">
<TaskDescription></TaskDescription>
                </div>
            </div>
        </div>   
        // </context_list.Provider>      
    )
}
