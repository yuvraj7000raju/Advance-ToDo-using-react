import './Button.css';
export default function Button({svg,children,cTask,id,onclick,paylod}){

function handelclick(){

   console.log(paylod)

   onclick({type : children, paylod : paylod})
    let bb=document.getElementById(id);
    // if (status){

    bb.setAttribute("fill",cTask);
    // change();
    // }
    // else{
    //     bb.setAttribute("fill","white");
    // }
    // change();
}

return(
   <button onClick={handelclick}>

{svg}

<span className='b-name'> {children}</span>

   </button>
)
}