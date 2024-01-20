import './Button.css';
export default function Button({svg,children,cTask,id}){

function handelclick(){
    console.log("hello")
    let bb=document.getElementById(id);
    console.log(bb)
    bb.setAttribute("fill",cTask);
}

return(
   <button onClick={handelclick}>

{svg}

<span className='b-name'> {children}</span>

   </button>
)
}