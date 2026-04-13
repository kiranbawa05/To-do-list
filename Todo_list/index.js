let editIndex=-1;
const add=()=>{
    let input=document.getElementById("text"); //got the text
    let item=input.value;
    if (item=="") return; //base case
    let time = document.getElementById("time").value;
    if (item == "" || time == "") {
        alert("Fill both fields");
        return;
    }
    let tasks=JSON.parse(localStorage.getItem("tasks"))||[];
    if (editIndex === -1) {
        // normal add
        tasks.push({ name: item, time: time });
    } else {
        // update existing
        tasks[editIndex] = { name: item, time: time };
        editIndex = -1;
    }
    localStorage.setItem("tasks",JSON.stringify(tasks));
    display();
    input.value="";
};

function display(){
    let list=document.getElementById("list");
    list.innerHTML="";
    let tasks=JSON.parse(localStorage.getItem("tasks"))||[];
    tasks.forEach((task,index) => {
        let li=document.createElement("li");
        li.textContent=task.name+" "; 

        let timestamp=document.createElement("small");
        timestamp.textContent = task.time;

        let liB=document.createElement("button"); //created button
        liB.textContent="delete"; //named button

        let liE=document.createElement("button");
        liE.textContent="edit";

        liE.onclick=function(){
            edit(index);
        };

        liB.onclick=function(){
            deleteTask(index);
        };

        li.appendChild(timestamp);
        li.appendChild(liB);//added button to list item
        li.appendChild(liE);

        list.appendChild(li);
    }); 
}

function deleteTask(index){
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.splice(index,1);
    localStorage.setItem("tasks",JSON.stringify(tasks));
    display();
}

window.onload=function(){
    display();
};

function edit(index){
    let tasks=JSON.parse(localStorage.getItem("tasks"));

    document.getElementById("text").value=tasks[index].name;
    document.getElementById("time").value=tasks[index].time;

    editIndex=index;
}