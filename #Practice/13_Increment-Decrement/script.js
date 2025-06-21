const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const range = document.querySelectorAll("input");
const display = document.getElementById("display");
const clear = document.querySelector("#clear");

increment.addEventListener('click', ()=>{
    display.innerText = parseInt(display.innerText) + 1;
});
decrement.addEventListener('click', ()=>{
    display.innerText = parseInt(display.innerText) - 1;
});

function rangeIncrement(){
    if(range[0].value===""){
        alert("type what to increment");
    }else{
        display.innerText = parseInt(display.innerText) + parseInt(range[0].value);
    }
}
function rangeDecrement(){
    if(range[1].value===""){
        alert("type what to decrement");
    }else{
        display.innerText = parseInt(display.innerText) - parseInt(range[1].value);
    }
}


clear.addEventListener('click', ()=>{
    display.innerText = 0;
    range[0].value=0;
    range[1].value=0;
});