
import { highlight ,add} from './Icons';
import Button from './Button';
import './TaskAdd.css';
export default function TaskAdd(){
    return(
        <div className="main-container">
            <div className="button-container">
            <div className="highlight"> 
<Button svg = {highlight} cTask ={"green"} id={"ii"}>highlight</Button>
           </div>
            <div className="add"><Button svg = {add} cTask ={"red"} id ={"add"}>add</Button></div>
            </div>
            <div className="input-container">
              <form className="form">
                <textarea type="text" id="task" placeholder='Enter task here ...'></textarea>
                <textarea type="text" id="description" placeholder='Add description ...'></textarea>
              </form>
            </div>
        </div>
    )
}