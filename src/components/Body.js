import './Body.css';
import TaskAdd from "./TaskAdd";
import TaskDescription from './TaskDescription';
import TaskList from "./TaskList";
export default function Body(){
    return(
        <div className="b-out">
            <div className="b-in">
                <div className="upper">
                   <TaskAdd></TaskAdd>
                   <TaskList></TaskList>
                </div>
                <div className="lower">
<TaskDescription></TaskDescription>
                </div>
            </div>
        </div>         
    )
}
