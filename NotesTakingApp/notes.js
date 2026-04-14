let editIndex = -1;
const add=()=>{
    let input=document.getElementById("text");
    let item=input.value;

    if (item=="") return;//base case

    let now = new Date().toISOString();
     
    let tasks=JSON.parse(localStorage.getItem("tasks"))||[];

    if(editIndex===-1){
        tasks.push({"note":"item","dt":"now"});
    }
    else{
        tasks[editIndex]={note:item,dt:now};
    }

    localStorage.setItem("tasks",JSON.stringify(tasks));
    display();
    input.value="";
}

function display(){
    let list=document.getElementById("list");
    list.innerHTML="";

    let tasks=JSON.parse(localStorage.getItem("tasks"))||[];
    tasks.foreach(tasks,index){
        let li=document.createElement("li");
    }
}