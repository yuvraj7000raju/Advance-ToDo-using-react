import "./TaskDescription.css";
import Button from "./Button";
import { complete } from "./Icons";
export default function TaskDescription(){

return(
     <div className="description-container">
        <div className="d-up">
            <div className="d-task">
               Task - swachta ki ab leher leher
            </div>
            <div className="d-complete">
               <Button svg={complete} cTask={"orange"} id={"complete"}>complete</Button>
            </div>
        </div>
        <div className="d-data">
            lorem 33  e  d e d  54tw54 gwtgtwtgt tgweg tgwgtgwtgtg tgtrgtgw5t gggggggtgw g twg  gw4tg5  gg5g5g gg6yh7h677 h7jkkl; eds345424 87iktkthr wt6y65yh
            lorem 33  e  d e d  54tw54 gwtgtwtgt tgweg tgwgtgwtgtg tgtrgtgw5t gggggggtgw g twg  gw4tg5  gg5g5g gg6yh7h677 h7jkkl; eds345424 87iktkthr wt6y65yh
        </div>
     </div>
)
}