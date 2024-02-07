import "./Navbar.css";

export default function Navbar(){
    let currentDate = new Date();
    console.log(currentDate)
        const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const date = currentDate.getDate()
    const m = currentDate.getMonth()
    const year = currentDate.getFullYear()

    // function newdate(e){
    //     console.log(e.target.value,"- this is new date")
    // }
    return (
        <nav>
            <div className="navigation-bar">
            <div className="heading">ToDo</div>
            <div className="calender">{date}-{month[m]}-{year}
             {/* <input className="calenders" type ="date" onClick={newdate}></input> */}
            </div>
            </div>
        </nav>
    )
}