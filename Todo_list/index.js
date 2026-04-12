//document.getElementById("button").addEventListener("click",add);
const add=()=>{
    let input=document.getElementById("text"); //got the text
    let item=input.value;

    if (item=="") return; //base case

    let time=document.getElementById("time").value; //got time value
    let timestamp=document.createElement("small");
    timestamp.textContent=time;
    

    let liB=document.createElement("button"); //created button
    liB.textContent="delete"; //named button
    liB.onclick=function(){
        li.remove();
    };

    let li=document.createElement("li");  //created a list item
    li.textContent=item;
    li.appendChild(timestamp);
    li.appendChild(liB);//added button to list item

    document.getElementById("list").appendChild(li);

    input.value="";
    
}
