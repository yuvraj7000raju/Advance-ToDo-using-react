let d = localStorage.getItem("data")
let data = JSON.parse(d)
let ch = [
    {
        id : 1,
        task : "this is demo task 1.",
        description : "this is the task descxription 1.",
        highlight : true,
        complete : true
    },
    {
        id : 2,
        task : "this is demo task  2.",
        description : "this is the task descxription 2",
        highlight : true,
        complete : true
    }
]

if(data == null){
    data = ch
}

export default data;